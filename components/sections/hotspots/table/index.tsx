import styled from '@emotion/styled';
import Image from 'next/image';
import useResponsive from '../../../../hooks/useResponsive';
import React from 'react';
import { Title } from '../../../layout/title';
import { useTranslation } from 'next-i18next';

const ClubOptionsTable = () => {
  const { isMobile } = useResponsive();
  const { t } = useTranslation('common');

  const imgDimension = isMobile ? 30 : 60;
  const imgArrDimension = isMobile ? 8 : 14;

  const TrueImg = () => (
    <Image
      height={imgDimension}
      width={imgDimension}
      src={'/icons/true.svg'}
      alt="true da"
    />
  );

  const FalseImg = () => (
    <Image
      height={imgDimension}
      width={imgDimension}
      src={'/icons/false.svg'}
      alt="true da"
    />
  );
  return (
    <Wrapper>
      <Title as="h2">{t('clubTable.title')}</Title>

      <Table>
        <Row>
          <TableHead>{t('clubTable.tableHead1')}</TableHead>
          <TableHead>{t('clubTable.tableHead2')}</TableHead>
        </Row>

        <TableDataTitle>{t('clubTable.tableTitle1')}</TableDataTitle>
        <Row>
          <TableData>
            <TrueImg />
          </TableData>
          <TableData isButton>
            <ButtonWrap>
              <FalseImg />
              <FindTaxiLink>
                <Image
                  height={imgArrDimension}
                  width={imgArrDimension}
                  src={'/icons/arrow1ur.svg'}
                  alt="arrow 1 ur"
                />
                Find a Taxi
              </FindTaxiLink>
            </ButtonWrap>
          </TableData>
        </Row>

        <TableDataTitle>{t('clubTable.tableTitle2')}</TableDataTitle>
        <Row>
          <TableData>
            <TrueImg />
          </TableData>
          <TableData>
            <TrueImg />
          </TableData>
        </Row>

        <TableDataTitle>{t('clubTable.tableTitle3')}</TableDataTitle>
        <Row>
          <TableData>
            <TrueImg />
          </TableData>
          <TableData>
            <FalseImg />
          </TableData>
        </Row>

        <TableDataTitle>{t('clubTable.tableTitle4')}</TableDataTitle>
        <Row>
          <TableData>
            <TrueImg />
          </TableData>
          <TableData>
            <FalseImg />
          </TableData>
        </Row>

        <TableDataTitle>{t('clubTable.tableTitle5')}</TableDataTitle>
        <Row>
          <TableData>
            <TrueImg />
          </TableData>
          <TableData>
            <FalseImg />
          </TableData>
        </Row>
      </Table>
    </Wrapper>
  );
};

export default ClubOptionsTable;

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  alignItems: 'flex-start',
  width: '100%',
});

const Table = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const Row = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
});

const TableHead = styled('div')(({ theme }) => ({
  fontSize: theme.fontSize.fontS28,
  color: theme.colors.blue,
  padding: '12px 24px',
  fontWeight: 600,
  textAlign: 'center',
  border: `1px solid ${theme.colors.yellow}`,
  width: '50%',
  backgroundColor: theme.colors.white,
  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
    padding: '8px 12px',
  },
}));

const TableData = styled(TableHead)<{ isButton?: boolean }>(
  ({ theme, isButton }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '50%',
    fontWeight: 400,
    backgroundColor: theme.colors.white,
    [theme.breakpoints.mobile]: {
      flexDirection: 'row',
      justifyContent: isButton ? 'flex-start' : 'center',
    },
  }),
);

const TableDataTitle = styled(TableData)(({ theme }) => ({
  width: '100%',
  color: theme.colors.black,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
    justifyContent: 'flex-start',
  },
}));

const ButtonWrap = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
  position: 'relative',
});

const FindTaxiLink = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 70,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  height: '40px',
  width: '160px',
  padding: '8px 16px',
  borderRadius: '16px',
  color: theme.colors.blue,
  fontWeight: 600,
  fontSize: theme.fontSize.fontS16,
  background: theme.colors.white2,
  cursor: 'pointer',

  [theme.breakpoints.mobile]: {
    padding: '6px 8px',
    left: 40,
    fontWeight: 500,
    fontSize: theme.fontSize.fontS10,
    height: '24px',
    width: '90px',
  },
}));
