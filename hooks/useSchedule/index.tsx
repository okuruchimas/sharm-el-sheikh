import { DayAbv } from '../../constants/week-days.constants';
import TextPill from '../../components/layout/text-pill';
import { formatTime } from '../../utils/formateDate';
import { Text } from '../../components/sections/company/company-popup-container';
import { useTranslation } from 'next-i18next';
import { CompanyFragment } from '../../gql/graphql';
import styled from '@emotion/styled';

type ScheduleType = CompanyFragment['schedule'];
const useSchedule = (schedule?: ScheduleType | null) => {
  const { t } = useTranslation('common');

  const renderSchedule = () => {
    return schedule?.map((el, index) => {
      const days = el?.days.map(el =>
        t(DayAbv[(el?.day || '') as keyof typeof DayAbv] || ''),
      );

      return (
        <DayAndTime key={index}>
          <Text>{days?.join(', ') || '-'}</Text>
          <TextPill>{`${formatTime(el?.workTime.startTime)} - ${formatTime(el?.workTime.endTime)}`}</TextPill>
        </DayAndTime>
      );
    });
  };
  return { renderSchedule };
};

const DayAndTime = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',

  [theme.breakpoints.mobile]: {
    justifyContent: 'space-between',
    alignItems: 'unset',
    p: {
      fontSize: theme.fontSize.fontS14,
      width: '60%',
    },
    span: {
      alignContent: 'center',
    },
  },
}));

export default useSchedule;
