import { useTranslation } from 'next-i18next';
import TaxiService from '../children/taxi-service';
import styled from '@emotion/styled';
import type { TaxiDriver } from '../../../../gql/graphql';

type TaxiServicesProps = {
  carName: string;
  carModel: string;
  passengersNum: number;
  car_class: TaxiDriver['car_class'];
  taxi_services: TaxiDriver['taxi_services'];
};
const TaxiServices = ({
  carName,
  carModel,
  car_class,
  passengersNum,
  taxi_services,
}: TaxiServicesProps) => {
  const { t } = useTranslation('driver');

  const passengers =
    passengersNum === 1
      ? `1 ${t('passenger')}`
      : `1 - ${passengersNum} ${t('passengers')}`;

  return (
    <Wrapper>
      <TaxiService
        iconSrc="/icons/road-circle.svg"
        title={car_class?.data?.attributes?.value || ''}
        subTitle={passengers}
      />
      <TaxiService
        iconSrc={
          car_class?.data?.attributes?.circleIcon?.data?.attributes?.url || ''
        }
        title={carName}
        subTitle={carModel}
      />
      {taxi_services?.data.map(el => (
        <TaxiService
          key={el.attributes?.title}
          iconSrc={el.attributes?.icon.data?.attributes?.url || ''}
          title={el.attributes?.title || ''}
          subTitle={el.attributes?.subTitle || ''}
        />
      ))}
    </Wrapper>
  );
};

export default TaxiServices;

const Wrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  width: '100%',

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px',
  },
}));
