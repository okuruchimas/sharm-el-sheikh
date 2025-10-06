import styled from '@emotion/styled';
import { useState } from 'react';

const Pay = () => {
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
        <BlockTitle>Pay The Easy Way</BlockTitle>

        <Card>
          <Small>Fast and secure card payments — just a click away</Small>

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

            <PayBtn type="submit">Secure Payment</PayBtn>
          </Form>
        </Card>
      </Inner>
    </Section>
  );
};

export default Pay;

const Section = styled('section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 16px 0',
}));

const Inner = styled('div')({
  width: '100%',
  maxWidth: 1152,
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
});

const BlockTitle = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: 20,
  fontWeight: 700,
}));

const Card = styled('div')(({ theme }) => ({
  borderRadius: 16,
  padding: 16,
  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
}));

const Small = styled('div')(({ theme }) => ({
  fontSize: 12,
  marginBottom: 12,
}));

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

const Field = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  width: '100%',
});

const Row = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: 12,
});

const Label = styled('label')(({ theme }) => ({
  fontSize: 12,
}));

const Input = styled('input')(({ theme }) => ({
  height: 40,
  borderRadius: 10,
  border: `1px solid red`,
  padding: '0 12px',
  outline: 'none',
  ':focus': {
    boxShadow: '0 0 0 3px rgba(0,119,255,0.15)',
    borderColor: '#0077ff',
  },
}));

const PayBtn = styled('button')(({ theme }) => ({
  marginTop: 4,
  height: 40,
  borderRadius: 10,
  border: 'none',
  cursor: 'pointer',
  fontWeight: 600,
  background: '#FFC647',
  color: '#1F1F1F',
}));
