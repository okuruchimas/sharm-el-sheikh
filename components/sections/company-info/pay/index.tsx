import styled from '@emotion/styled';
import { useState } from 'react';
import Button from '../../../layout/button';

type Props = {
  title: string;
  formDescription: string;
  submitButton?: string;
};

const Pay = ({ title, formDescription, submitButton }: Props) => {
  const [values, setValues] = useState({
    name: '',
    number: '',
    mm: '',
    yy: '',
    cvc: '',
  });

  return (
    <Section>
      <Inner>
        <BlockTitle>{title}</BlockTitle>

        <Card>
          <Small>
            <Icon src={'icons/secure-payment-icon.svg'} />
            {formDescription}
          </Small>

          <Form onSubmit={e => e.preventDefault()}>
            <Field>
              <Label>Cardholder Name</Label>
              <Input
                placeholder="John Smith"
                value={values.name}
                onChange={e => setValues(s => ({ ...s, name: e.target.value }))}
              />
            </Field>

            <Field>
              <Label>Card Number</Label>
              <Input
                placeholder="4242 4242 4242 4242"
                inputMode="numeric"
                value={values.number}
                onChange={e =>
                  setValues(s => ({ ...s, number: e.target.value }))
                }
              />
            </Field>

            <Row>
              <Field>
                <Label>MM</Label>
                <Input
                  placeholder="12"
                  inputMode="numeric"
                  value={values.mm}
                  onChange={e => setValues(s => ({ ...s, mm: e.target.value }))}
                />
              </Field>
              <Field>
                <Label>YY</Label>
                <Input
                  placeholder="28"
                  inputMode="numeric"
                  value={values.yy}
                  onChange={e => setValues(s => ({ ...s, yy: e.target.value }))}
                />
              </Field>
              <Field>
                <Label>CVC</Label>
                <Input
                  placeholder="123"
                  inputMode="numeric"
                  value={values.cvc}
                  onChange={e =>
                    setValues(s => ({ ...s, cvc: e.target.value }))
                  }
                />
              </Field>
            </Row>

            <PayBtn type="submit" text={submitButton || 'Secure Payment'} />
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
  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
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

const Row = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 12,

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: '1fr',
  },
}));

const Label = styled('label')({
  fontSize: 12,
});

const Input = styled('input')(({ theme }) => ({
  height: 52,
  borderRadius: 10,
  border: `1px solid ${theme.colors.yellow2}`,
  padding: '0 12px',
  outline: 'none',
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
