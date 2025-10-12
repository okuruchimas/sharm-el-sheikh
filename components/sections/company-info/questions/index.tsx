import styled from '@emotion/styled';
import { useState } from 'react';
import SectionWrapper from '../../../layout/section-wrapper';
import type { CompanyInfoPageFragment } from '../../../../gql/graphql';

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

type Props = {
  title: string;
  questions: CompanyInfoPageFragment['questions'];
};

const Questions = ({ title, questions }: Props) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper title={title}>
      <List role="list">
        {questions.map((item, idx) => {
          if (!item) return null;

          const isOpen = open === idx;

          return (
            <Item key={idx} $open={isOpen}>
              <Head
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : idx)}
              >
                <span>{item.title}</span>
                <Arrow $open={isOpen} src={'icons/arrow-collapse.svg'} />
              </Head>
              <Collapse $open={isOpen} aria-hidden={!isOpen}>
                <BodyOuter>
                  <Body>{item.text}</Body>
                </BodyOuter>
              </Collapse>
            </Item>
          );
        })}
      </List>
    </SectionWrapper>
  );
};

export default Questions;

const List = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,

  [theme.breakpoints.mobile]: {
    gap: 8,
  },
}));

const Item = styled('div')<{ $open: boolean }>(({ theme, $open }) => ({
  borderRadius: 12,
  border: $open ? '1px solid #FFDB7F' : `1px solid ${theme.colors.yellow2}`,
  overflow: 'hidden',
  background: '#FEFEFE66',

  [theme.breakpoints.mobile]: {
    minHeight: 56,
  },
}));

const Head = styled('button')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
  fontSize: 24,
  fontWeight: 600,
  minHeight: 96,
  padding: '32px',

  [theme.breakpoints.mobile]: {
    padding: '16px',
    fontSize: 16,
    minHeight: 46,
  },
}));

const Arrow = styled('img')<{ $open: boolean }>(({ theme, $open }) => ({
  transform: $open ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)',
  width: 32,
  height: 32,

  [theme.breakpoints.mobile]: {
    width: 24,
    height: 24,
  },
}));

const Collapse = styled('div')<{ $open: boolean }>(({ $open }) => ({
  display: 'grid',
  gridTemplateRows: $open ? '1fr' : '0fr',
  transition: 'grid-template-rows 0ms cubic-bezier(0.4, 0, 0.2, 1)',
}));

const BodyOuter = styled('div')({
  minHeight: 0,
  overflow: 'hidden',
});

const Body = styled('div')(({ theme }) => ({
  padding: '10px 0 32px',
  fontSize: theme.fontSize.fontS21,
  borderTop: '1px solid #FFDB7F',
  margin: '0 32px',
  color: theme.colors.black2,

  [theme.breakpoints.mobile]: {
    padding: '8px 0 16px',
    margin: '0 16px',
    fontSize: 14,
  },
}));
