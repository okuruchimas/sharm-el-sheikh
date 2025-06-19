// hooks
import { useTranslation } from 'next-i18next';
// components
import TextPill from '../../../layout/text-pill';
// utils
import styled from '@emotion/styled';
import { formatTime } from '../../../../utils/formateDate';
// constants
import { WEEK_DAYS } from '../../../../constants/week-days.constants';
// types
import type { TaxiDriverPreviewFragment } from '../../../../gql/graphql';

type WorkScheduleProps = {
  schedule: TaxiDriverPreviewFragment['schedule'];
};

const WorkSchedule = ({ schedule }: WorkScheduleProps) => {
  const { t } = useTranslation('common');
  const { t: tDriver } = useTranslation('driver');

  const getTimeSlotsForDay = (day: string) => {
    const daySchedule = schedule?.find(item => item?.dayOfWeek === day);
    if (daySchedule && daySchedule.timeSlots.length > 0) {
      return daySchedule.timeSlots.map((slot, index) => (
        <TextPill key={index}>
          {`${formatTime(slot?.startTime)} - ${formatTime(slot?.endTime)}`}
        </TextPill>
      ));
    }
    return null;
  };

  return (
    <Wrapper>
      <Scroll>
        <Table>
          <Row>
            {WEEK_DAYS.map(day => (
              <TableHead key={day.value}>
                <Text>{t(day.key)}</Text>
              </TableHead>
            ))}
          </Row>
          <Row>
            {WEEK_DAYS.map(day => (
              <TableData key={day.value}>
                <Data>{getTimeSlotsForDay(day.value)}</Data>
              </TableData>
            ))}
          </Row>
        </Table>
      </Scroll>
      <Info>{tDriver('contactDriver')}</Info>
    </Wrapper>
  );
};

export default WorkSchedule;

const Wrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  [theme.breakpoints.mobile]: {
    gap: '32px',
  },
}));

const Scroll = styled('div')(({ theme }) => ({
  width: '100%',
  flexDirection: 'column',

  [theme.breakpoints.mobile]: {
    gap: '32px',
    overflowX: 'scroll',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const Table = styled('div')(({ theme }) => ({
  width: '100%',
  overflow: 'hidden',
  borderCollapse: 'collapse',
  border: `0.5px solid ${theme.colors.yellow}`,
  borderRadius: '12px',
  borderTop: 'none',

  [theme.breakpoints.mobile]: {
    minWidth: '900px',
  },
}));

const Row = styled('div')({
  width: '100%',
  display: 'flex',
});

const Text = styled('p')(({ theme }) => ({
  whiteSpace: 'nowrap',
  width: '100%',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  textAlign: 'center',
  fontWeight: 600,
  fontSize: theme.fontSize.fontS21,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const TableHead = styled('div')(({ theme }) => ({
  padding: '11px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  width: 'calc(100% / 7)',
  border: `0.5px solid ${theme.colors.yellow}`,
  borderBottom: 'none',

  '&:first-of-type': {
    borderLeft: 'none',
  },

  '&:last-of-type': {
    borderRight: 'none',
  },

  [theme.breakpoints.mobile]: {
    padding: '6px 10px',
  },
}));

const TableData = styled(TableHead)(({ theme }) => ({
  minHeight: '150px',
  padding: '4px 8px',

  [theme.breakpoints.mobile]: {
    minHeight: '124px',
  },
}));

const Info = styled('p')(({ theme }) => ({
  color: theme.colors.blue,
  lineHeight: 1.25,
  fontWeight: 700,
  fontSize: theme.fontSize.fontS24,

  [theme.breakpoints.mobile]: {
    fontWeight: 600,
    fontSize: theme.fontSize.fontS16,
  },
}));

const Data = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',

  [theme.breakpoints.mobile]: {
    gap: '8px',
  },
}));
