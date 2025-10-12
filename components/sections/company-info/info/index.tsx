import SectionWrapper from '../../../layout/section-wrapper';
import type { CompanyInfoPageFragment } from '../../../../gql/graphql';
import styled from '@emotion/styled';
import BasicMap from '../basic-map';
import { useTranslation } from 'next-i18next';

export type Location = NonNullable<
  NonNullable<CompanyInfoPageFragment['locations']>[number]
>;

type Props = {
  title: string;
  phoneNumber: string;
  contactPerson: string;
  locations: Location[];
  registrationNum: string;
  dateOfIssuance: string;
  taxpayerIdNum: string;
};

const Info = ({
  title,
  phoneNumber,
  contactPerson,
  locations,
  registrationNum,
  dateOfIssuance,
  taxpayerIdNum,
}: Props) => {
  const { t } = useTranslation('company-info-page');

  return (
    <SectionWrapper title={title}>
      <Grid>
        <MapWrapper>
          <BasicMap locations={locations} zoom={8} />
        </MapWrapper>

        <Contacts>
          <InfoCard>
            <Icon src="/icons/phone-square.svg" />
            <div>
              <Label>{t('phoneNumber')}</Label>
              <Value>{phoneNumber}</Value>
            </div>
          </InfoCard>
          <InfoCard>
            <Icon src="/icons/contact-person-square.svg" />
            <div>
              <Label>{t('contactPerson')}</Label>
              <Value>{contactPerson}</Value>
            </div>
          </InfoCard>
          <InfoCard>
            <Icon src="/icons/location-squere.svg" />
            <div>
              <Label>{t('location')}</Label>
              {locations.map(el =>
                el ? (
                  <Value as="pre" key={el.locationName}>
                    {el.locationName}
                  </Value>
                ) : null,
              )}
            </div>
          </InfoCard>
        </Contacts>
      </Grid>

      <MapCaption>
        <Text>
          <span>{t('registrationNum')}</span> <span>{registrationNum}</span>
        </Text>
        <Text>
          <span>{t('dateOfIssuance')}</span> <span>{dateOfIssuance}</span>
        </Text>
        <Text>
          <span>{t('taxpayerIdNum')}</span> <span>{taxpayerIdNum}</span>
        </Text>
      </MapCaption>
    </SectionWrapper>
  );
};

export default Info;

const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1.6fr 1fr',
  gap: 16,

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: '1fr',
  },
}));

const MapWrapper = styled('div')(({ theme }) => ({
  height: 300,

  [theme.breakpoints.mobile]: {
    height: 400,
  },
}));

const MapCaption = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
});

const Text = styled('p')({
  fontSize: 14,
  fontWeight: 600,
});

const Contacts = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 24,
  borderRadius: 16,
  backgroundColor: theme.colors.white,
  padding: '30px 24px',
  boxShadow: theme.shadows[5],

  [theme.breakpoints.mobile]: {
    gap: 20,
  },
}));

const InfoCard = styled('div')({
  display: 'flex',
  gap: 16,
});

const Label = styled('div')(({ theme }) => ({
  fontSize: 18,
  marginBottom: 8,
  fontWeight: 700,

  [theme.breakpoints.mobile]: {
    fontSize: 16,
  },
}));

const Value = styled('div')({
  fontSize: 16,
  whiteSpace: 'pre-wrap',
});

const Icon = styled('img')(({ theme }) => ({
  width: 60,
  height: 60,

  [theme.breakpoints.mobile]: {
    width: 42,
    height: 42,
  },
}));
