import Image from 'next/image';
import styled from '@emotion/styled';
import SectionWrapper from '../../../layout/section-wrapper';

const mock = {
  phone: '+20 100 555 88 97',
  contact: 'Nastasiia Ozerna',
  address:
    'Sharm El Sheikh — Main Office\nHadaba district, opposite City Council',
  working: 'Mon–Sun · 09:00–21:00',
};

const Info = () => {
  return (
    <SectionWrapper title="Company Information">
      <Grid>
        <MapCard>
          {/* Мапу заміниш реальною google maps */}
          <Map>
            <Image
              src="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/hero_image_6cece3ec9b.webp"
              alt="Map of Sharm El Sheikh with office pin"
              sizes="(max-width:768px) 100vw, 720px"
              layout="fill"
            />
          </Map>

          <MapCaption>
            <small>Qesm Sharm Ash Sheikh, South Sinai</small>
          </MapCaption>
        </MapCard>

        <Contacts>
          <InfoCard>
            <Label>Phone Number</Label>
            <Value>{mock.phone}</Value>
          </InfoCard>

          <InfoCard>
            <Label>Contact Person</Label>
            <Value>{mock.contact}</Value>
          </InfoCard>

          <InfoCard>
            <Label>Location</Label>
            <Value as="pre">{mock.address}</Value>
          </InfoCard>

          <InfoCard>
            <Label>Office Hours</Label>
            <Value>{mock.working}</Value>
          </InfoCard>
        </Contacts>
      </Grid>
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

const MapCard = styled('div')(({ theme }) => ({
  borderRadius: 16,
  border: `1px solid red`,
  overflow: 'hidden',
}));

const Map = styled('div')({
  position: 'relative',
  width: '100%',
  aspectRatio: '16/9',
});

const MapCaption = styled('div')(({ theme }) => ({
  padding: '8px 12px',
  borderTop: `1px solid red`,
}));

const Contacts = styled('div')({
  display: 'grid',
  gridTemplateRows: 'repeat(4, auto)',
  gap: 12,
});

const InfoCard = styled('div')(({ theme }) => ({
  borderRadius: 12,
  border: `1px solid red`,
  padding: 12,
}));

const Label = styled('div')(({ theme }) => ({
  fontSize: 12,
}));

const Value = styled('div')(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  whiteSpace: 'pre-wrap',
}));
