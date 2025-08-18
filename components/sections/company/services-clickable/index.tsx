// hooks
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
// components
import Modal from '../../../layout/modal';
import ServicePopup from '../../../layout/service-popup';
import SectionWrapper from '../../../layout/section-wrapper';
import ClickableServiceCard from '../../../layout/service-card-clickable';
// utils
import styled from '@emotion/styled';
// types
import type { ClickableServiceFragment } from '../../../../gql/graphql';
import { SocialLink } from '../../../types/images';

type Props = {
  services?: ClickableServiceFragment[];
  socialLinks?: SocialLink[];
};

const ClickableServices = ({ services, socialLinks }: Props) => {
  const { t } = useTranslation('common');
  const [selectedService, setSelectedService] =
    useState<ClickableServiceFragment>();

  const handleClosePopup = () => setSelectedService(undefined);

  if (!services?.length) return null;

  return (
    <SectionWrapper title={t('text.exploreMore')}>
      <CardsWrapper>
        {services.map((el, index) =>
          el ? (
            <ClickableServiceCard
              key={index}
              index={index}
              title={el?.text || ''}
              iconSrc={el?.icon?.data?.attributes?.url ?? ''}
              iconAlt={el?.icon?.data?.attributes?.alternativeText ?? ''}
              onClick={() => {
                setSelectedService(el);
              }}
            />
          ) : null,
        )}
      </CardsWrapper>
      {selectedService ? (
        <Modal isOpen={!!selectedService} onClose={handleClosePopup}>
          <ServicePopup
            service={selectedService}
            onClose={handleClosePopup}
            socialLinks={socialLinks}
          />
        </Modal>
      ) : null}
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

export default ClickableServices;
