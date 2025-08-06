// hooks
import { useRouter } from 'next/router';
import useResponsive from '../../../../hooks/useResponsive';
import useCompanyCard from '../../../../hooks/useCompanyCard';
import { useTranslation } from 'next-i18next';
import { useEffect, useMemo, useState } from 'react';
// components
import Button from '../../../layout/button';
import Dropdown from '../../../layout/filters';
import Pagination from '../../../layout/pagination';
import Placeholder from '../../promotions/children/placeholder';
import SectionWrapper from '../../../layout/section-wrapper';
import ClubOptionsTable from '../table';
// constants
import { CLUBS } from '../../../../constants/page-company-categories';
import { WEEK_DAYS } from '../../../../constants/week-days.constants';
// utils
import styled from '@emotion/styled';
import { fetchDataFromApi } from '../../../../utils/fetchApi';
import { getCurrentDayAndTime } from '../../../../utils/formateDate';
// types
import {
  type CompanyPreviewFragment,
  GetCompaniesByFilterDocument,
} from '../../../../gql/graphql';
import type { selectOption } from '../../../types/filter';

type Clubs = CompanyPreviewFragment[] | undefined;
type ClubsContainerProps = {
  title: string;
  totalItems: number;
  clubsInfo: string;
  initialClubs: Clubs;
};

const ClubsContainer = ({
  title,
  clubsInfo,
  totalItems,
  initialClubs,
}: ClubsContainerProps) => {
  // result
  const [result, setResult] = useState<Clubs>(initialClubs);
  // pagination
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState(totalItems);
  // filters
  // booleans
  const [isLoading, setIsLoading] = useState(false);
  const { dayOfWeek } = getCurrentDayAndTime();

  const [selectedDay, setSelectedDay] = useState(dayOfWeek);
  const { t, i18n } = useTranslation('common');

  const { isMobile } = useResponsive();
  const { renderCard, renderDiscountPopup } = useCompanyCard(selectedDay);
  const router = useRouter();

  const pageSize = useMemo(() => (isMobile ? 3 : 6), [isMobile]);

  const handleGetClubs = async ({
    pageNum,
    day,
  }: {
    pageNum: number;
    day: string;
  }) => {
    setIsLoading(true);

    const { companies } = await fetchDataFromApi(GetCompaniesByFilterDocument, {
      day: day || undefined,
      page: pageNum,
      pageSize,
      locale: i18n.language,
      category: CLUBS,
    });

    setResult(companies?.data?.map(el => el.attributes) as Clubs);
    setTotal(companies?.meta?.pagination?.total || 0);
    setIsLoading(false);
  };

  useEffect(
    () => {
      setPage(1);

      if (!isMobile) {
        handleGetClubs({
          pageNum: page,
          day: selectedDay,
        });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [pageSize],
  );

  const weekDaysOptions = WEEK_DAYS.map(({ key, value }) => ({
    key: value,
    value: t(key),
  }));

  const handleDaySelect = async (option: selectOption) => {
    if (option.key === selectedDay) return;

    setPage(1);
    setSelectedDay(option.key);

    await handleGetClubs({
      pageNum: page,
      day: option.key,
    });
  };

  const handleChangePage = async (pageNumber: number) => {
    setPage(pageNumber);

    await handleGetClubs({
      pageNum: pageNumber,
      day: selectedDay,
    });
  };

  const handleFindAnimator = () =>
    router.push('/entertainers-tour-guides/animators');

  return (
    <>
      <SectionWrapper
        title={title}
        titleChildren={
          isMobile ? null : (
            <Dropdown
              options={[
                { key: '', value: t('text.selectDay') },
                ...weekDaysOptions,
              ]}
              initialValue={weekDaysOptions.find(el => el.key === selectedDay)}
              onChange={handleDaySelect}
              isLoading={isLoading}
              height="56px"
              color="blue"
            />
          )
        }
      >
        {isMobile ? (
          <Dropdown
            options={[
              { key: '', value: t('text.selectDay') },
              ...weekDaysOptions,
            ]}
            initialValue={weekDaysOptions.find(el => el.key === selectedDay)}
            onChange={handleDaySelect}
            isLoading={isLoading}
            height="56px"
            color="blue"
          />
        ) : null}
        {result?.length ? (
          <CardsWrapper>
            {result?.map(el => (el ? renderCard(el) : null))}
          </CardsWrapper>
        ) : (
          <Placeholder />
        )}
        <Pagination
          isDisabled={isLoading}
          currentPage={page}
          onChangePage={handleChangePage}
          totalItems={total}
          pageSize={pageSize}
        />
      </SectionWrapper>
      <Stack>
        <ClubOptionsTable />
        <FindAnimatorSection>
          <Text>{clubsInfo}</Text>
          <StyledButton
            text={t('buttons.findAnimator')}
            onClick={handleFindAnimator}
          />
        </FindAnimatorSection>
      </Stack>
      {renderDiscountPopup()}
    </>
  );
};

export default ClubsContainer;

const CardsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '16px',

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: '1fr',
  },
}));

const Text = styled('p')(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const Stack = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  [theme.breakpoints.mobile]: {
    gap: '16px',
  },
}));

const FindAnimatorSection = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '24px',

  [theme.breakpoints.mobile]: {
    textAlign: 'center',
    gap: '8px',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const StyledButton = styled(Button)({
  textWrap: 'nowrap',
});
