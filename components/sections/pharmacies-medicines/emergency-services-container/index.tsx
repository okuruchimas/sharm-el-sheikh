import { type KeyboardEvent, useMemo, useState } from 'react';
import SectionWrapper from '../../../layout/section-wrapper';
import EmergencyServiceCard from '../children/emergency-sevice-card';
import styled from '@emotion/styled';
import type {
  SupportServiceFragment,
  SupportServicesCategory,
} from '../../../../gql/graphql';
import { DEFAULT_IMAGE } from '../../../../constants/images.constants';

type EmergencyServicesContainerProps = {
  title: string;
  supportServices: SupportServiceFragment[];
  servicesCategories: SupportServicesCategory[];
};

const EmergencyServicesContainer = ({
  title,
  supportServices,
  servicesCategories,
}: EmergencyServicesContainerProps) => {
  const [activeTab, setActiveTab] = useState<SupportServicesCategory>(
    servicesCategories[0],
  );

  const itemsToShow = useMemo(
    () =>
      supportServices.filter(
        el =>
          el.support_services_category?.data?.attributes?.key === activeTab.key,
      ),
    [activeTab, supportServices],
  );

  const handleKeyDown = (
    event: KeyboardEvent<HTMLSpanElement>,
    value: SupportServicesCategory,
  ) => {
    if (event.key === 'Enter') {
      setActiveTab(value);
    }
  };

  return (
    <SectionWrapper title={title}>
      <TabsWrap>
        {servicesCategories.map(el => (
          <Category
            tabIndex={0}
            key={el.key}
            onClick={() => setActiveTab(el)}
            isActive={el.key === activeTab.key}
            onKeyDown={e => handleKeyDown(e, el)}
          >
            {el.value}
          </Category>
        ))}
      </TabsWrap>
      <SubTitle>{activeTab.description || ''}</SubTitle>
      <CardsWrapper>
        {itemsToShow.map(el => (
          <EmergencyServiceCard
            key={el.title}
            title={el.title}
            location={el.location}
            phoneNum={el.phone}
            imgSrc={el.image.data?.attributes?.url || DEFAULT_IMAGE}
          />
        ))}
      </CardsWrapper>
    </SectionWrapper>
  );
};

export default EmergencyServicesContainer;

const TabsWrap = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '8px',

  [theme.breakpoints.mobile]: {},
}));

const Category = styled('span', {
  shouldForwardProp: prop => prop !== 'isActive',
})<{ isActive: boolean }>(({ theme, isActive }) => ({
  padding: '8px 14px',
  backgroundColor: isActive ? theme.colors.yellow4 : theme.colors.yellow,
  borderRadius: '8px',
  fontSize: theme.fontSize.fontS16,
  fontWeight: 600,
  lineHeight: 1.5,
  cursor: 'pointer',

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS14,
  },
}));

const SubTitle = styled('p')(({ theme }) => ({
  fontSize: theme.fontSize.fontS21,
  fontWeight: 600,
}));

const CardsWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '16px',

  [theme.breakpoints.desktopS]: {
    gridTemplateColumns: '1fr 1fr',
  },

  [theme.breakpoints.mobileS]: {
    gridTemplateColumns: '1fr',
  },
}));
