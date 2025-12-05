import styled from '@emotion/styled';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Button from '../../../layout/button';

type Props = {
  title: string;
  formDescription: string;
  submitButton?: string;
};
type FormState = {
  fullName: string;
  email: string;
  phone: string;
  amount: string;
  description: string;
};

type EasyKashResponse = {
  redirectUrl?: string;
  url?: string;
  paymentUrl?: string;
  paymentLink?: string;
  redirect_url?: string;
  invoiceUrl?: string;
  invoice_url?: string;
  [k: string]: unknown;
};

const DEFAULT_FORM_STATE: FormState = {
  fullName: '',
  email: '',
  phone: '',
  amount: '',
  description: '',
};

const Pay = ({ title, formDescription, submitButton }: Props) => {
  const { t } = useTranslation('company-info-page');

  const [values, setValues] = useState<FormState>(DEFAULT_FORM_STATE);
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    console.log(errorMessage, 'error', status, 'status');
  }, [errorMessage, status]);
  const handleChange =
    (key: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (status !== 'idle') {
        setStatus('idle');
        setErrorMessage('');
      }
      setValues(prev => ({ ...prev, [key]: event.target.value }));
    };
  const extractPaymentUrl = (data: EasyKashResponse) => {
    const keys: (keyof EasyKashResponse)[] = [
      'redirectUrl',
      'url',
      'paymentUrl',
      'paymentLink',
      'redirect_url',
      'invoiceUrl',
      'invoice_url',
    ];
    for (const k of keys) {
      const v = data[k];
      if (typeof v === 'string' && v.trim()) return v;
    }
    return undefined;
  };
  const parseAmount = (raw: string) => {
    if (!raw) return NaN;
    return Number(raw.replace(/,/g, '.'));
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = values.fullName.trim();
    const amountNum = parseAmount(values.amount);

    if (!name) {
      setStatus('error');
      setErrorMessage(t('form.errors.required'));
      return;
    }
    if (!Number.isFinite(amountNum) || amountNum <= 0) {
      setStatus('error');
      setErrorMessage(t('form.errors.amount'));
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/payments/easykash', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // поля згідно з Direct Pay (Hosted)
        body: JSON.stringify({
          amount: amountNum,
          currency: 'EGP',
          name,
          email: values.email.trim() || undefined,
          mobile: values.phone.trim() || undefined,
          // за бажанням: customerReference (твій orderId)
          // customerReference: `ORD-${Date.now()}`
          // опис не обов'язковий для EasyKash, але можеш зберегти у своїй БД
          description: values.description.trim() || undefined,
        }),
      });

      const data: EasyKashResponse & { message?: string } = await res
        .json()
        .catch(() => ({}) as any);

      if (!res.ok) {
        throw new Error(data?.message || t('form.status.error'));
      }

      const paymentUrl = extractPaymentUrl(data);
      if (!paymentUrl) throw new Error(t('form.status.error'));

      setStatus('success');
      setValues(DEFAULT_FORM_STATE);
      if (typeof window !== 'undefined') window.location.href = paymentUrl;
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : t('form.status.error'),
      );
    }
  };

  return (
    <Section>
      <Inner>
        <BlockTitle>{title}</BlockTitle>

        <Card>
          <Small>
            <Icon src={'/icons/secure-payment-icon.svg'} />
            {formDescription}
          </Small>

          <Form onSubmit={handleSubmit}>
            <Field>
              <Label>{t('form.cardholderName')}</Label>
              <Input
                placeholder="John Smith"
                value={values.fullName}
                onChange={handleChange('fullName')}
                autoComplete="name"
              />
            </Field>

            <Field>
              <Label>Email</Label>
              <Input
                placeholder="example@gmail.com"
                type="email"
                value={values.email}
                onChange={handleChange('email')}
                autoComplete="email"
              />
            </Field>

            <Field>
              <Label>Phone</Label>
              <Input
                placeholder="+987654321"
                type="phone"
                value={values.phone}
                onChange={handleChange('phone')}
                autoComplete="tel"
              />
            </Field>

            <Field>
              <Label>Amount</Label>
              <Input
                placeholder="100"
                inputMode="decimal"
                value={values.amount}
                onChange={handleChange('amount')}
                required
              />
            </Field>

            <Field>
              <Label>Description</Label>
              <Input
                placeholder="Description"
                type="text"
                value={values.description}
                onChange={handleChange('description')}
              />
            </Field>

            <PayBtn
              type="submit"
              text={submitButton || 'Secure Payment'}
              disabled={status === 'loading'}
              isLoading={status === 'loading'}
            />
          </Form>
        </Card>
      </Inner>
    </Section>
  );
};

export default Pay;

const Section = styled('section')({
  width: '100%',
  display: 'flex',
});

const Inner = styled('div')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const BlockTitle = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: 40,
  fontWeight: 700,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: 24,
  },
}));

const Card = styled('div')(({ theme }) => ({
  borderRadius: 16,
  padding: 40,
  boxShadow: theme.shadows[5],
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  background: '#FEFEFE66',
  width: '100%',

  [theme.breakpoints.mobile]: { padding: 16 },
}));

const Small = styled('div')(({ theme }) => ({
  fontSize: 18,
  color: theme.colors.blue,
  marginBottom: 24,
  display: 'flex',
  gap: 16,
  fontWeight: 600,

  [theme.breakpoints.mobile]: {
    fontSize: 14,
    gap: 8,
    marginBottom: 16,
  },
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,

  [theme.breakpoints.mobile]: {
    width: '100%',
  },
}));

const Field = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  width: '100%',
});

const Label = styled('label')({
  fontSize: 12,
});

const Input = styled('input')(({ theme }) => ({
  height: 52,
  borderRadius: 10,
  border: `1px solid ${theme.colors.yellow2}`,
  padding: '0 12px',
  outline: 'none',
  minWidth: 302,
  ':focus': {
    boxShadow: '0 0 0 3px rgba(0,119,255,0.15)',
    borderColor: '#0077ff',
  },

  [theme.breakpoints.mobile]: {
    height: 46,
  },
}));

const PayBtn = styled(Button)({
  marginTop: 20,
  width: '100%',
});

const Icon = styled('img')({
  width: 24,
  height: 24,
});
