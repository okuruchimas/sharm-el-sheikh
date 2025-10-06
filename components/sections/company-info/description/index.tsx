import Image from 'next/image';
import styled from '@emotion/styled';

const MainDescription = () => {
  return (
    <Section>
      <Top>
        <Thumb>
          <Image
            src="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/hero_image_6cece3ec9b.webp"
            alt="Sharm El Sheikh coastline"
            sizes="(max-width: 768px) 100vw, 560px"
            priority
            layout="fill"
          />
        </Thumb>
        <Title>Lovely Holiday — About our Company</Title>
      </Top>
      <Text>
        We are an officially registered tourism company in Egypt, dedicated to
        providing exceptional travel experiences and professional tourism
        services. Our commitment to quality and customer satisfaction makes us
        your trusted partner for exploring the beauty of Sharm El Sheikh.
      </Text>
    </Section>
  );
};

export default MainDescription;

const Section = styled('section')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '24px 16px 0',
  [theme.breakpoints.mobile]: {
    padding: '8px 16px 0',
  },
}));

const Top = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
});

const Title = styled('h1')(({ theme }) => ({
  margin: 0,
  fontSize: 36,
  lineHeight: 1.15,
  fontWeight: 800,
  color: 'red',
}));

const Text = styled('p')(({ theme }) => ({
  margin: '8px 0 0',
  fontSize: 16,
  lineHeight: 1.6,
  color: 'red',
}));

const Thumb = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 560,
  aspectRatio: '16 / 9',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
  color: 'red',
}));
