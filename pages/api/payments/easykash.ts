/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';

type EasyKashRequestBody = {
  amount?: number | string;
  currency?: 'EGP' | 'USD' | 'SAR' | 'EUR';
  name?: string; // обов'язкові в доку
  email?: string;
  mobile?: string;
  description?: string; // для себе (опційно)
  paymentOptions?: number[]; // опційно
  customerReference?: string | number; // опційно (твій orderId)
};

type EasyKashSuccessResponse = { paymentUrl: string; raw: unknown };
type EasyKashErrorResponse = { message: string; raw?: unknown };
type NextResponse = EasyKashSuccessResponse | EasyKashErrorResponse;

const DEFAULT_BASE_URL = 'https://back.easykash.net/api/directpayv1/pay';
const DEFAULT_CURRENCY = 'EGP';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<NextResponse>,
) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', ['POST']);
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const apiKey = process.env.EASYKASH_API_KEY;
  const returnUrl = process.env.EASYKASH_RETURN_URL;
  if (!apiKey)
    return response.status(500).json({ message: 'EASYKASH_API_KEY missing' });

  const body = (request.body ?? {}) as EasyKashRequestBody;

  const amountNum =
    typeof body.amount === 'number'
      ? body.amount
      : Number(String(body.amount ?? '').replace(/,/g, '.'));

  const name = (body.name ?? '').trim();
  const email = (body.email ?? '').trim();
  const mobile = (body.mobile ?? '').trim();
  const currency =
    body.currency ??
    (process.env.EASYKASH_DEFAULT_CURRENCY as any) ??
    DEFAULT_CURRENCY;
  const paymentOptions = Array.isArray(body.paymentOptions)
    ? body.paymentOptions
    : undefined;

  if (!Number.isFinite(amountNum) || Number(amountNum) <= 0) {
    return response
      .status(400)
      .json({ message: 'Amount must be a number greater than zero' });
  }
  if (!name || !email || !mobile) {
    return response
      .status(400)
      .json({ message: 'name, email, mobile are required' });
  }

  // redirectUrl обов'язковий у запиті
  const redirectUrl =
    returnUrl || `https://${request.headers.host}/checkout/return`;

  // твій reference (якщо не передали з фронта)
  const customerReference =
    body.customerReference ??
    `ORD-${Date.now()}-${Math.floor(Math.random() * 1e6)}`;

  const requestBody = {
    amount: Number(amountNum),
    currency,
    paymentOptions, // можна опустити, якщо не використовуєш
    name,
    email,
    mobile,
    redirectUrl,
    customerReference,
  };

  try {
    const r = await fetch(
      process.env.EASYKASH_API_BASE_URL ?? DEFAULT_BASE_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: apiKey, // важливо: саме authorization
        },
        body: JSON.stringify(requestBody),
      },
    );

    const text = await r.text();
    let data: any = {};
    if (text) {
      try {
        data = JSON.parse(text);
      } catch {
        return response
          .status(502)
          .json({ message: 'Invalid JSON response from EasyKash', raw: text });
      }
    }

    if (!r.ok) {
      return response.status(r.status).json({
        message:
          (data && typeof data.message === 'string' && data.message) ||
          'EasyKash request failed',
        raw: data,
      });
    }

    const paymentUrl =
      (typeof data?.redirectUrl === 'string' && data.redirectUrl) ||
      (typeof data?.url === 'string' && data.url);

    if (!paymentUrl) {
      return response.status(502).json({
        message: 'Payment link is missing in EasyKash response',
        raw: data,
      });
    }
    return response.status(200).json({ paymentUrl, raw: data });
  } catch (error) {
    return response.status(502).json({
      message:
        error instanceof Error
          ? error.message
          : 'Unable to reach EasyKash service',
    });
  }
}
