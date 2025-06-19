import { type KeyboardEvent, useMemo, useState } from 'react';
import { useTranslation } from 'next-i18next';
import SectionWrapper from '../../../layout/section-wrapper';
import EmergencyServiceCard from '../children/emergency-sevice-card';
import styled from '@emotion/styled';

type EmergencyServicesContainerProps = {
  title: string;
  emergencyDescription: string;
  embassiesDescription: string;
  assistanceDescription: string;
};
enum categories {
  EmergencyServices = 'emergency_services',
  AssistanceServices = 'assistance_services',
  Embassies = 'embassies',
}

const EmergencyServicesContainer = ({
  title,
  emergencyDescription,
  embassiesDescription,
  assistanceDescription,
}: EmergencyServicesContainerProps) => {
  const [activeTab, setActiveTab] = useState<string>('emergency_services');
  const { t } = useTranslation('medications');

  const subTitle = useMemo(() => {
    switch (activeTab) {
      case 'assistance_services': {
        return assistanceDescription;
      }
      case 'embassies': {
        return embassiesDescription;
      }
      default: {
        return emergencyDescription;
      }
    }
  }, [
    activeTab,
    assistanceDescription,
    embassiesDescription,
    emergencyDescription,
  ]);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLSpanElement>,
    value: string,
  ) => {
    if (event.key === 'Enter') {
      setActiveTab(value);
    }
  };

  return (
    <SectionWrapper title={title}>
      <TabsWrap>
        {Object.keys(categories).map(el => {
          const value = categories[el as keyof typeof categories];

          return (
            <Category
              tabIndex={0}
              key={el}
              onClick={() => setActiveTab(value)}
              isActive={value === activeTab}
              onKeyDown={e => handleKeyDown(e, value)}
            >
              {t('categories.' + value)}
            </Category>
          );
        })}
      </TabsWrap>
      <SubTitle>{subTitle}</SubTitle>
      <CardsWrapper>
        <EmergencyServiceCard
          title="Sharm El Sheikh Emergency Services"
          location="El Fanar Street"
          phoneNum="+20 100 123 4567"
          imgSrc="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/emergency_8e5a4897b1.jpg"
        />
        <EmergencyServiceCard
          title="Sharm El Sheikh Emergency Services"
          location="El Fanar Street"
          phoneNum="+20 100 123 4567"
          imgSrc="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/emergency_8e5a4897b1.jpg"
        />
        <EmergencyServiceCard
          title="Sharm El Sheikh Emergency Services"
          location="El Fanar Street"
          phoneNum="+20 100 123 4567"
          imgSrc="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/emergency_8e5a4897b1.jpg"
        />
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
