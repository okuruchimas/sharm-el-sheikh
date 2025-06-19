// hooks
import { useTranslation } from 'next-i18next';
// components
import Image from 'next/image';
import Flags from '../flags';
import Rating from '../rating';
import TextPill from '../text-pill';
import SocialIcon from '../social-icon';
// utils
import styled from '@emotion/styled';
// types
import { ImageI, SocialLink } from '../../types/images';

type WorkerInfoSectionProps = {
  name: string;
  imgSrs: string;
  pillsTitle?: string;
  pillsText?: ({ value: string } | null)[];
  languages: ImageI[];
  description: string;
  socialLinks?: (SocialLink | null)[];
  totalComments: number;
  averageRating: number;
};

const WorkerInfoSection = ({
  name,
  imgSrs,
  languages,
  pillsText,
  pillsTitle,
  socialLinks,
  description,
  totalComments,
  averageRating,
}: WorkerInfoSectionProps) => {
  const { t: tCommon } = useTranslation('common');

  return (
    <Wrapper>
      <TopWrapper>
        <ImgWrapper>
          <Image src={imgSrs} alt={name} layout="fill" />
        </ImgWrapper>
        <TopStack>
          <NameRating>
            <p>{name}</p>
            <Rating points={averageRating} users={totalComments} />
          </NameRating>
          <Description>{description}</Description>
          <InfoField>
            <p>{`${tCommon('text.languagesSpoken')}:`}</p>
            <Flags icons={languages} />
          </InfoField>
          <IconsWrapper>
            {socialLinks?.map((el, index) => (
              <SocialIcon
                key={index}
                iconSrc={el?.icon.data?.attributes?.url || ''}
                iconAlt={el?.icon.data?.attributes?.alternativeText || ''}
                socialLink={el?.socialLink || ''}
              />
            ))}
          </IconsWrapper>
        </TopStack>
      </TopWrapper>
      <InfoField>
        <p>{pillsTitle}</p>
        <SkillsWrapper>
          {pillsText?.map(el => (
            <TextPill key={el?.value}>{el?.value}</TextPill>
          ))}
        </SkillsWrapper>
      </InfoField>
    </Wrapper>
  );
};

export default WorkerInfoSection;

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  width: '100%',

  [theme.breakpoints.mobile]: {
    gap: '32px',
  },
}));

const InfoField = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '24px',
  width: '100%',
  alignItems: 'center',

  p: {
    textWrap: 'nowrap',
    color: theme.colors.blue,
    fontSize: theme.fontSize.fontS24,
  },

  [theme.breakpoints.mobile]: {
    gap: '16px',
    alignItems: 'start',
    flexDirection: 'column',
  },
}));

const SkillsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '8px',
  width: '100%',

  [theme.breakpoints.mobile]: {
    flexWrap: 'nowrap',
    overflowX: 'scroll',
    scrollbarWidth: 'none',

    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
}));

const IconsWrapper = styled('div')({
  display: 'flex',
  gap: '24px',

  img: {
    width: '40px',
    height: '40px',
  },
});

const TopStack = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
});

const TopWrapper = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '460px 1fr',
  gap: '24px',
  position: 'relative',

  [theme.breakpoints.mobile]: {
    gap: '16px',
    gridTemplateColumns: '1fr',
  },
}));

const ImgWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '460px',
  borderRadius: '16px',
  overflow: 'hidden',
  img: {
    objectFit: 'cover',
  },

  [theme.breakpoints.mobile]: {
    gap: '16px',
    height: '300px',
    gridTemplateColumns: '1fr',
  },
}));

const Description = styled('p')(({ theme }) => ({
  fontSize: theme.fontSize.fontS21,
  color: theme.colors.black,
  lineHeight: 1.52,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS18,
  },
}));

const NameRating = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 'max-content',
  justifyContent: 'space-between',

  p: {
    color: theme.colors.blue,
    fontWeight: '700',
    fontSize: theme.fontSize.fontS40,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS24,
    },
  },

  span: {
    fontSize: theme.fontSize.fontS24,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS18,
    },
  },
}));
