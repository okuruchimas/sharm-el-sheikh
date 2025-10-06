import styled from '@emotion/styled';
import { useState } from 'react';
import SectionWrapper from '../../../layout/section-wrapper';

type FAQ = { q: string; a: string };

const mockFaq: FAQ[] = [
  {
    q: 'Are your payment method secure?',
    a: 'Yes. We use industry-standard encryption and secure payment gateways to protect all financial transactions. Your personal information is never stored on our servers.',
  },
  {
    q: 'Do you provide services in multiple languages?',
    a: 'Absolutely. Our team speaks English, Arabic, Russian and Ukrainian to make your trip planning easy.',
  },
  {
    q: 'Is Lovely Holiday officially registered in Egypt?',
    a: 'Yes. We are an officially registered tourism company in Sharm El Sheikh (docs below).',
  },
  {
    q: 'Are your payment method secure?',
    a: 'All card data is transmitted via PCI-compliant providers over HTTPS.',
  },
  {
    q: 'Do you provide services in multiple languages?',
    a: 'Yes, we can assign a guide fluent in your preferred language.',
  },
  {
    q: 'Are your payment method secure?',
    a: 'We never store card numbers or CVC on our servers.',
  },
];

const Questions = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper title="Questions You Might Have">
      <List role="list">
        {mockFaq.map((item, idx) => {
          const isOpen = open === idx;
          return (
            <Item key={idx}>
              <Head
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : idx)}
              >
                <span>{item.q}</span>
                <Chevron $open={isOpen}>▾</Chevron>
              </Head>
              {isOpen && <Body>{item.a}</Body>}
            </Item>
          );
        })}
      </List>
    </SectionWrapper>
  );
};

export default Questions;

const List = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
});

const Item = styled('div')(({ theme }) => ({
  borderRadius: 12,
  border: `1px solid red`,
  overflow: 'hidden',
}));

const Head = styled('button')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 14px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  fontSize: 14,
}));

const Chevron = styled('span')<{ $open: boolean }>(({ $open }) => ({
  transition: 'transform .2s',
  transform: $open ? 'rotate(180deg)' : 'rotate(0deg)',
}));

const Body = styled('div')(({ theme }) => ({
  padding: '10px 14px 14px',
  fontSize: 14,
  borderTop: `1px solid red`,
}));
