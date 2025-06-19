// hooks
import { useTranslation } from 'next-i18next';
// components
import Card from '../../children/card';
// utils
import styled from '@emotion/styled';
import { calculateStatus } from '../../../../../utils/calculate-taxi-status';
// constants
import { DayAbv } from '../../../../../constants/week-days.constants';
import { StatusColors } from '../../../../../constants/taxi-statuses.constants';
// types
import type { TaxiDriverPreviewFragment } from '../../../../../gql/graphql';

interface TaxiCardProps {
  driver: TaxiDriverPreviewFragment;
}

const TaxiCard = ({
  driver: {
    name,
    slug,
    schedule,
    languages,
    car_class,
    profileImg,
    isNotWorking,
    averageRating,
    totalComments,
  },
}: TaxiCardProps) => {
  const { t } = useTranslation('common');

  const flags = languages?.data.map(el => ({
    src: el.attributes?.flagIcon.data?.attributes?.url || '',
    alt: el.attributes?.value || '',
  }));

  const status = calculateStatus({ isNotWorking, schedule });
  const indicator = <StatusDot color={StatusColors[status]} />;
  const days = schedule?.map(el =>
    t(DayAbv[(el?.dayOfWeek || '') as keyof typeof DayAbv] || ''),
  );

  return (
    <Card
      slug={`/entertainers-tour-guides/taxi-drivers/${slug}`}
      title={name}
      averageRating={averageRating}
      totalComments={totalComments}
      imgSrc={profileImg?.data?.attributes?.url || ''}
      iconText={car_class?.data?.attributes?.value || ''}
      iconSrc={car_class?.data?.attributes?.icon.data?.attributes?.url || ''}
      greyText={days?.join(', ') || '-'}
      indicator={indicator}
      flagIcons={flags || []}
    />
  );
};

export const StatusDot = styled('div')<{ color: string }>(
  ({ theme, color }) => ({
    left: 16,
    top: 16,
    position: 'absolute',
    height: 16,
    width: 16,
    background: theme.colors[color],
    borderRadius: '50%',
  }),
);

export default TaxiCard;
