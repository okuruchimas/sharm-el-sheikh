import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Button from '../button';
import SocialIcon from '../social-icon';
import styled from '@emotion/styled';
import type { SocialLink } from '../../types/images';
import type { ClickableServiceFragment } from '../../../gql/graphql';
import { SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { SwiperCardsWrapper } from '../../sections/entertainers-tour-guides/children/cards-wrap';

type Props = {
  service: ClickableServiceFragment;
  onClose: () => void;
  socialLinks?: (SocialLink | null)[];
};
const ServicePopup = ({ service, socialLinks, onClose }: Props) => {
  const { t } = useTranslation('common');

  const images = service.media?.data.filter(el =>
    el?.attributes?.mime.includes('image'),
  );

  const videos = service.media?.data.filter(el =>
    el?.attributes?.mime.includes('video'),
  );
  console.log(videos);
  return (
    <Wrapper>
      <Stack>
        <Title>{service.text}</Title>
        <Description>{service.description || ''}</Description>
        {videos?.[0]?.attributes?.url ? (
          <Video
            autoPlay
            controls
            playsInline
            preload="metadata"
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
          >
            <source src={videos?.[0]?.attributes?.url} type={'video/mp4'} />
          </Video>
        ) : null}
        {images?.length ? (
          <ImagesWrapper>
            {images?.length <= 1 ? (
              <StyledImage
                src={images?.[0]?.attributes?.url || ''}
                alt={images?.[0]?.attributes?.alternativeText || ''}
                layout="fill"
              />
            ) : (
              <SwiperStyled
                modules={[Pagination]}
                slidesPerView={1}
                spaceBetween={12}
                navigation={false}
                pagination={{
                  clickable: true,
                }}
                loop
              >
                {images?.map((el, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={el.attributes?.url || ''}
                      alt={el.attributes?.alternativeText || ''}
                      layout="fill"
                      objectFit="contain"
                      style={{ borderRadius: '16px', width: '100%' }}
                      className="photo"
                    />
                  </SwiperSlide>
                ))}
              </SwiperStyled>
            )}
          </ImagesWrapper>
        ) : null}
        <Contacts>
          <p>{t('animPopAp.contacts')}</p>
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
        </Contacts>
      </Stack>
      <BackButton text={t('buttons.back')} onClick={onClose} />
    </Wrapper>
  );
};

export default ServicePopup;

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '24px',
  position: 'relative',

  [theme.breakpoints.mobile]: {
    gap: '16px',
  },
}));

const SwiperStyled = styled(SwiperCardsWrapper)(({ theme }) => ({
  height: '384px',

  [theme.breakpoints.mobile]: {
    marginLeft: 0,
    minWidth: 'auto',
  },
}));

const Video = styled('video')(({ theme }) => ({
  [theme.breakpoints.mobile]: {},
}));

const Stack = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',

  [theme.breakpoints.mobile]: {
    gap: '16px',
  },
}));

const ImagesWrapper = styled('div')(({ theme }) => ({
  minHeight: '480px ',
  width: '100%',
  position: 'relative',

  [theme.breakpoints.mobile]: {
    minHeight: '344px',
    width: '100%',
  },
}));

const Title = styled('h2')(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  fontWeight: 700,
  color: theme.colors.blue,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS24,
  },
}));

const Description = styled('p')(({ theme }) => ({
  fontSize: theme.fontSize.fontS21,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const BackButton = styled(Button)(({ theme }) => ({
  width: '106px',
  zIndex: 2,
  alignSelf: 'end',

  [theme.breakpoints.mobile]: {
    position: 'sticky',
    bottom: 0,
    right: 0,
    opacity: 0.9,
    width: '100%',
  },
}));

const StyledImage = styled(Image)({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

const IconsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '24px',

  img: {
    width: '40px',
    height: '40px',
  },

  [theme.breakpoints.mobile]: {
    img: {
      width: '40px',
      height: '40px',
    },
  },
}));

const Contacts = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  p: {
    fontSize: theme.fontSize.fontS32,
    fontWeight: 700,
    color: theme.colors.blue,
  },

  [theme.breakpoints.mobile]: {
    p: {
      fontSize: theme.fontSize.fontS24,
    },
  },
}));
