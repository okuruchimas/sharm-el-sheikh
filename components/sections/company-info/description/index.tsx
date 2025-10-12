import Image from 'next/image';
import styled from '@emotion/styled';

type Props = { title: string; description: string; src: string; alt?: string };

const MainDescription = ({ title, description, src, alt = '' }: Props) => {
  return (
    <Section>
      <Top>
        <Thumb>
          <Image
            src={src}
            alt={alt}
            width={400}
            height={180}
            sizes="(max-width: 768px) 100vw, 560px"
            priority
            layout="fill"
            objectFit="cover"
          />
        </Thumb>
        <Title>{title}</Title>
      </Top>
      <Text>{description}</Text>
    </Section>
  );
};

export default MainDescription;

const Section = styled('section')({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: 24,
});

const Top = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 40,

  [theme.breakpoints.mobile]: {
    flexDirection: 'column',
    gap: 24,
  },
}));

const Title = styled('h1')(({ theme }) => ({
  margin: 0,
  fontSize: 64,
  lineHeight: 1.15,
  fontWeight: 800,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: 34,
  },
}));

const Text = styled('p')(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  lineHeight: 1.6,

  [theme.breakpoints.mobile]: {
    margin: '8px 0 0',
    fontSize: theme.fontSize.fontS20,
  },
}));

const Thumb = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '400px',
  maxWidth: 400,
  height: 180,
  aspectRatio: '16 / 9',
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',

  [theme.breakpoints.mobile]: {
    width: '100%',
  },
}));
