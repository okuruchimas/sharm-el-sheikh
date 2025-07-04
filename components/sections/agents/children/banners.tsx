import {
  BannerBackground,
  BannerSubTitle,
  BannerTitle,
  BannerWrap,
} from '../../../layout/banner/banner';
import styled from '@emotion/styled';
import Button from '../../../layout/button';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';

const pillsImages = [
  { imgLink: '/icons/agents/pills/pill6.webp', size: 240, l: 8, t: 0 },
  {
    imgLink: '/icons/agents/pills/pill7.webp',
    size: 150,
    l: '30%',
    t: 0,
    isMob: true,
    lMob: 10,
  },
  {
    imgLink: '/icons/agents/pills/pill4.webp',
    size: 180,
    l: '56%',
    t: -20,
    isMob: true,
  },
  {
    imgLink: '/icons/agents/pills/pill1.webp',
    size: 250,
    l: 'calc(100% - 230px)',
    t: -10,
  },
  {
    imgLink: '/icons/agents/pills/pill5.webp',
    size: 230,
    l: -20,
    t: 'calc(100% - 160px)',
  },
  {
    imgLink: '/icons/agents/pills/pill8.webp',
    size: 160,
    l: '28%',
    t: 'calc(100% - 120px)',
    isMob: true,
    lMob: 12,
  },
  {
    imgLink: '/icons/agents/pills/pill3.webp',
    size: 140,
    l: '64%',
    t: 'calc(100% - 160px)',
    isMob: true,
  },
  {
    imgLink: '/icons/agents/pills/pill2.webp',
    size: 230,
    l: 'calc(100% - 260px)',
    t: 'calc(100% - 160px)',
  },
];

const Banners = () => {
  const { push } = useRouter();
  const { t } = useTranslation('agents');

  return (
    <Wrap>
      <BannerWrap>
        <BannerBackground imgLink="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/307a41bd8d8b9bbe74008481b8e75d513b032331_3aafa7a914.webp" />
        <ContentWithBgFirst>
          <BannerTitle>{t('banners.1.title')}</BannerTitle>
          <BannerSubTitle>
            <Trans
              t={t}
              i18nKey="banners.1.subTitle"
              components={[<br key={''} />]}
            />
          </BannerSubTitle>

          <BannerStyledButton
            text={t('banners.1.button')}
            onClick={() => push('/')}
          />
        </ContentWithBgFirst>
      </BannerWrap>

      <BannerWrap>
        <BannerBackground imgLink="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/bcb1e0c7995ac4e605f2c9f2eb1475462aa0d391_eb32285b58.webp" />
        <ContentWithBgSecond>
          <BannerTitle>{t('banners.2.title')}</BannerTitle>
          <BannerSubTitle>{t('banners.2.subTitle')}</BannerSubTitle>

          <BannerStyledButton
            text={t('banners.2.button')}
            onClick={() => push('/')}
          />
        </ContentWithBgSecond>
      </BannerWrap>

      <BannerWrap bg="blue7">
        <ShapeLeft imgLink="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/d40e9dd76f3eb61f8cf76693fa1931198e636def_a4c6b98b09.webp" />

        <ShapeRight imgLink="https://beautiful-boot-1db2e6c4ea.media.strapiapp.com/636d4054c813ee25c7aa1667549ab442fb5d8e44_7629b596a1.webp" />
        <Content>
          <BannerTitle>{t('banners.3.title')}</BannerTitle>
          <BannerStyledButton
            text={t('banners.3.button')}
            onClick={() => push('/entertainers-tour-guides/tour-and-guide')}
          />
        </Content>
      </BannerWrap>

      <BannerWrap bg="yellow6">
        {pillsImages.map(({ imgLink, size, l, lMob, t, isMob }) => (
          <ShapeCircle
            key={imgLink}
            imgLink={imgLink}
            size={size}
            l={l}
            t={t}
            lMob={lMob}
            isMob={isMob}
          />
        ))}
        <ContentThird>
          <BannerTitle>{t('banners.4.title')}</BannerTitle>
          <StyledButton
            text={t('banners.4.button')}
            onClick={() => push('/pharmacies-medicines')}
          />
        </ContentThird>
      </BannerWrap>
    </Wrap>
  );
};

const Wrap = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: 80,
  gap: 80,

  [theme.breakpoints.mobile]: {
    marginTop: 0,
    gap: 32,
  },
}));

const ShapeLeft = styled('div')<{ imgLink?: string }>(({ theme, imgLink }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '46%',
  minWidth: 610,
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  clipPath: `path("M283.148 -40.9727C361.288 -40.3625 438.351 -28.04 494.073 0.270378C550.236 28.8052 572.815 68.6694 578.819 109.248C585.446 154.028 592.545 205.628 528.997 236.27C466.249 266.526 367.192 260.808 283.148 251.814C215.987 244.628 172.061 216.718 121.664 192.682C67.6737 166.931 -5.03545 146.805 -15.763 109.248C-27.5091 68.1254 8.07805 25.9093 65.7499 -3.0743C122.742 -31.7161 203.651 -41.5935 283.148 -40.9727Z")`,
  backgroundImage: `url(${imgLink})`,
  [theme.breakpoints.mobile]: {
    backgroundSize: '128%',
    backgroundPosition: 'unset',
    minWidth: '48%',
    width: '48%',
    clipPath: `path("M51.2286 -10.9865C78.7923 -10.6855 105.976 -4.60638 125.631 9.36005C145.443 23.4373 153.407 43.1036 155.525 63.1225C157.863 85.2139 160.367 110.67 137.951 125.787C115.817 140.713 80.8747 137.892 51.2286 133.455C27.5378 129.91 12.0431 116.141 -5.73399 104.283C-24.779 91.5791 -50.4268 81.6507 -54.2109 63.1225C-58.3543 42.8352 -45.8011 22.0086 -25.4576 7.71001C-5.35402 -6.41995 23.1865 -11.2928 51.2286 -10.9865Z")`,
  },
}));

const ShapeRight = styled('div')<{ imgLink?: string }>(
  ({ theme, imgLink }) => ({
    position: 'absolute',
    top: 0,
    right: 0,
    width: '28%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',

    clipPath: `path("M277.004 -7.6014C344.641 -4.38984 418.547 -14.822 469.448 18.1598C522.408 52.4763 538.75 108.064 535.634 159.983C532.656 209.605 497.063 252.115 453.146 289.793C404.385 331.627 351.754 379.26 277.004 381.873C200.345 384.553 135.096 344.468 83.318 302.722C34.1884 263.111 6.2432 213.548 1.79309 159.983C-2.99412 102.361 -2.33424 35.3982 58.054 -1.37407C116.586 -37.0159 201.234 -11.1991 277.004 -7.6014Z")`,
    backgroundImage: `url(${imgLink})`,

    [theme.breakpoints.mobile]: {
      backgroundSize: '144%',
      backgroundPosition: 'unset',
      width: '52%',
      clipPath: `path("M104.393 -1.43534C129.883 -0.252975 157.736 -4.09366 176.919 8.0489C196.877 20.6828 203.036 41.1478 201.862 60.2624C200.74 78.5311 187.326 94.1816 170.775 108.053C152.399 123.455 132.564 140.991 104.393 141.953C75.5033 142.94 50.9129 128.182 31.3997 112.813C12.8844 98.2298 2.35285 79.9828 0.675753 60.2624C-1.12838 39.0482 -0.879693 14.3954 21.8786 0.857307C43.9372 -12.2646 75.838 -2.75988 104.393 -1.43534Z")`,
    },
  }),
);

const ShapeCircle = styled('div')<{
  imgLink?: string;
  isMob?: boolean;
  l: number | string;
  t: number | string;
  lMob?: number | string;
  tMob?: number | string;
  size: number;
}>(({ theme, imgLink, l = 0, t = 0, size = 180, isMob, lMob = 0 }) => ({
  filter: 'opacity(.5)',
  position: 'absolute',
  top: t,
  left: l,
  width: size,
  height: size,
  borderRadius: '50%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${imgLink})`,

  [theme.breakpoints.mobile]: {
    display: isMob ? 'initial' : 'none',
    left: lMob ? lMob : l,
  },
}));

const Content = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  zIndex: 2,
  textAlign: 'left',
  width: '60%',
  padding: 24,
  color: theme.colors.white,
  gap: 8,

  [theme.breakpoints.mobile]: {
    marginTop: 'auto',
    width: '100%',
  },
}));

export const ContentWithBgFirst = styled('div')(({ theme }) => ({
  zIndex: 1,
  maxHeight: '50%',
  minWidth: 869,
  color: theme.colors.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '8px',
  backgroundImage: 'url(/icons/agents/agentBg1.svg)',
  backgroundSize: 'cover',
  padding: '40px 80px 40px 40px',
  [theme.breakpoints.mobile]: {
    marginTop: 'auto',
    padding: '16px',
    minWidth: '100%',
    width: '100%',
    backgroundImage: 'url(/icons/agents/agentBg1Mob.svg)',
  },
}));

const ContentWithBgSecond = styled(ContentWithBgFirst)(({ theme }) => ({
  justifyContent: 'center',
  maxHeight: '100%',
  minWidth: 518.55,
  height: '370px',
  width: '28%',
  backgroundImage: 'url(/icons/agents/agentBg2.svg)',

  button: {
    marginTop: 16,
  },

  [theme.breakpoints.mobile]: {
    height: 'auto',
    button: {
      marginTop: 0,
    },
    backgroundImage: 'url(/icons/agents/agentBg2Mob.svg)',
  },
}));

const ContentThird = styled('div')(({ theme }) => ({
  width: '60%',
  margin: '0 auto',
  height: 464,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  textAlign: 'center',
  color: theme.colors.blue,
  gap: 24,
  paddingBottom: 100,

  button: {
    alignSelf: 'center',
  },

  [theme.breakpoints.mobile]: {
    width: '94%',
  },
}));

const StyledButton = styled(Button)({
  alignSelf: 'flex-end',
  backgroundColor: '#F4C542',
  color: '#000',
  width: 'max-content',
});

export const BannerStyledButton = styled(StyledButton)(({ theme }) => ({
  [theme.breakpoints.mobile]: {
    zIndex: 10,
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 40,
    maxWidth: 40,
    minWidth: 40,
    height: 40,
    fontSize: 0,
    padding: 0,
    borderRadius: '50%',
    backgroundImage: 'url(/icons/arrow1ur.svg)',
    backgroundPosition: 'center',
    backgroundSize: 'auto',
    backgroundRepeat: 'no-repeat',
  },
}));

export default Banners;
