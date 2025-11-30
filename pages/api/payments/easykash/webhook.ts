import type { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

// JSON достатньо (підпис рахуємо зі значень, а не з raw body)
export const config = { api: { bodyParser: true } };

function verifyCallback(payload: any, secretKey: string) {
  const {
    ProductCode,
    Amount,
    ProductType,
    PaymentMethod,
    status,
    easykashRef,
    customerReference,
    signatureHash,
  } = payload || {};

  const dataStr = [
    ProductCode ?? '',
    Amount ?? '',
    ProductType ?? '',
    PaymentMethod ?? '',
    status ?? '',
    easykashRef ?? '',
    customerReference ?? '',
  ].join('');

  const calculated = crypto
    .createHmac('sha512', secretKey)
    .update(dataStr)
    .digest('hex');
  return typeof signatureHash === 'string' && calculated === signatureHash;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const secret = process.env.EASYKASH_HMAC_SECRET;
  if (!secret) return res.status(500).end('HMAC secret missing');

  const ok = verifyCallback(req.body, secret);
  if (!ok) return res.status(401).end('Invalid signature');

  // TODO: онови замовлення в БД ідемпотентно (за customerReference), збережи easykashRef/Amount/PaymentMethod.
  // Статус успішної оплати у них "PAID".
  return res.status(200).json({ ok: true });
}
