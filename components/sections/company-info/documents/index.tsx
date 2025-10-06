import Image from 'next/image';
import styled from '@emotion/styled';
import SectionWrapper from '../../../layout/section-wrapper';

const docs = [
  {
    id: 'tourism-license',
    title: 'Tourism License (Official)',
    number: 'No. 2564469840',
    img: 'https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/hero_image_6cece3ec9b.webp', // заміниш реальним
  },
  {
    id: 'commercial-register',
    title: 'Commercial Register',
    number: 'CR 102998312 — Sharm El Sheikh',
    img: 'https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/hero_image_6cece3ec9b.webp',
  },
];

const Documents = () => {
  return (
    <SectionWrapper title={'Official Registration Documents'}>
      <Grid>
        {docs.map(d => (
          <Card key={d.id}>
            <Preview>
              <Image
                src={d.img}
                alt={d.title}
                sizes="(max-width:768px) 100vw, 520px"
                layout="fill"
              />
            </Preview>
            <Meta>
              <DocTitle>{d.title}</DocTitle>
              <DocNumber>{d.number}</DocNumber>
            </Meta>
          </Card>
        ))}
      </Grid>
    </SectionWrapper>
  );
};

export default Documents;

const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
  [theme.breakpoints.mobile]: {
    gridTemplateColumns: '1fr',
  },
}));

const Card = styled('div')(({ theme }) => ({
  borderRadius: 16,
  overflow: 'hidden',
  border: `1px solid red`,
}));

const Preview = styled('div')({
  position: 'relative',
  width: '100%',
  aspectRatio: '4 / 3',
});

const Meta = styled('div')({
  padding: 12,
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
});

const DocTitle = styled('div')(({ theme }) => ({
  fontWeight: 700,
}));

const DocNumber = styled('div')(({ theme }) => ({
  fontSize: 12,
}));
