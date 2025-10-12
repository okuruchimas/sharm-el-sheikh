import styled from '@emotion/styled';
import { useState } from 'react';
import SectionWrapper from '../../../layout/section-wrapper';
import type { CompanyInfoPageFragment } from '../../../../gql/graphql';

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
                <Arrow $open={isOpen} src={'/icons/arrow-collapse.svg'} />
              </Head>
              <Collapse $open={isOpen} aria-hidden={!isOpen}>
                <Body>{item.text}</Body>
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
  color: theme.colors.black,

  [theme.breakpoints.mobile]: {
    padding: '16px',
    fontSize: 16,
    minHeight: 46,
  },
}));

const Arrow = styled('img')<{ $open: boolean }>(({ theme, $open }) => ({
  transform: $open ? 'rotate(180deg)' : 'rotate(0deg)',
  transition: 'transform 300ms ease',
  width: 32,
  height: 32,

  [theme.breakpoints.mobile]: {
    width: 24,
    height: 24,
  },
}));

const Collapse = styled('div')<{ $open: boolean }>(({ $open }) => ({
  maxHeight: $open ? '300px' : '0',
  overflow: 'hidden',
  transition: 'max-height 300ms ease',
}));

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
