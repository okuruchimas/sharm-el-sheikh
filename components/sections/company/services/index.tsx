// hooks
import { useTranslation } from 'next-i18next';
// components
import ServiceCard from '../../../layout/service-card';
import WcServiceCard from '../wc-service-card';
import SectionWrapper from '../../../layout/section-wrapper';
// utils
import styled from '@emotion/styled';
// constants
import type { ServiceFragment } from '../../../../gql/graphql';

type ServicesProps = {
  services: ServiceFragment[];
  isWC?: boolean;
};

const Services = ({ services, isWC }: ServicesProps) => {
  const { t } = useTranslation('company-page');

  return (
    <SectionWrapper title={t('servicesSection.title')}>
      <CardsWrapper>
        {services.map((el, index) => (
          <ServiceCard
            key={index}
            title={el.attributes?.text || ''}
            iconSrc={el.attributes?.icon.data?.attributes?.url ?? ''}
            iconAlt={
              el.attributes?.icon.data?.attributes?.alternativeText ?? ''
            }
          />
        ))}
        {isWC ? <WcServiceCard /> : null}
      </CardsWrapper>
    </SectionWrapper>
  );
};

const CardsWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '16px',

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
  },
}));

export default Services;
