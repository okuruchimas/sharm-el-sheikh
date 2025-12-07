// hooks
import { useTranslation } from 'next-i18next';
import { useState, useEffect, useCallback } from 'react';
// utils
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { fetchDataFromApi } from '../../../../utils/fetchApi';
// components
import Image from 'next/image';
import Rating from '../../../layout/rating';
import NextImage from '../../../layout/image';
import LocationLink from '../../../layout/location-link';
import StarReviewForm from '../../../layout/star-review-form';
// constants
// types
import {
  type CompanyFragment,
  type CompanyPreviewFragment,
  GetCompanyDocument,
} from '../../../../gql/graphql';
import useRatePlace from '../../../../hooks/useRatePlace';
import FullData from './full-data';
import { Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import { SwiperCardsWrapper } from '../../entertainers-tour-guides/children/cards-wrap';
import useSchedule from '../../../../hooks/useSchedule';

type CompanyPopupContainerProps = {
  companyPreview: CompanyPreviewFragment;
  onClose: () => void;
};

const CompanyPopupContainer = ({
  companyPreview,
  onClose,
}: CompanyPopupContainerProps) => {
  const [fullData, setFullData] = useState<
    CompanyFragment | undefined | null
  >();

  const { t, i18n } = useTranslation('common');
  const { renderSchedule } = useSchedule(companyPreview.schedule);
  const { stars, isDisabled, isLoadingRating, handleSave, setStars } =
    useRatePlace({
      slug: companyPreview.slug,
      storageName: 'ratedCompanies',
      collectionType: 'companies',
    });

  const getFullClubData = useCallback(async () => {
    const { companies } = await fetchDataFromApi(GetCompanyDocument, {
      slug: companyPreview.slug,
      locale: i18n.language,
    });

    setFullData(companies?.data[0]?.attributes);
  }, [companyPreview.slug, i18n.language]);

  useEffect(() => {
    getFullClubData();
  }, [getFullClubData]);

  return (
    <Wrapper>
      <TopSection>
        <ImgWrapper>
          {companyPreview.images?.data.length <= 1 ? (
            <Image
              src={companyPreview.images.data[0].attributes?.url || ''}
              alt={
                companyPreview.images.data[0].attributes?.alternativeText || ''
              }
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
              {companyPreview.images?.data?.map((el, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={el.attributes?.url || ''}
                    alt={el.attributes?.alternativeText || ''}
                    layout="fill"
                    objectFit="cover"
                    style={{ borderRadius: '16px' }}
                    className="photo"
                  />
                </SwiperSlide>
              ))}
            </SwiperStyled>
          )}
        </ImgWrapper>
        <Stack>
          <RowStack marginBottom="24px">
            <Name>{companyPreview.title}</Name>
            <RatingWrapper>
              <Rating
                points={companyPreview.averageRating}
                users={companyPreview.totalComments}
              />
            </RatingWrapper>
          </RowStack>
          <Stack gap="8px">
            <Text fontWeight={'700'}>{t('text.workingDays')}</Text>
            <Schedule>{renderSchedule()}</Schedule>
          </Stack>
          <Stack gap="24px" mGap="16px">
            <Location>
              <LocationLink
                iconSize="36px"
                iconSizeMobile="30px"
                text={companyPreview.location || '-'}
                position={companyPreview.position}
              />
            </Location>
            {fullData?.phoneNumber ? (
              <RowStack>
                <NextImage
                  src={'/icons/phone.svg'}
                  alt="location-marker"
                  width="36px"
                  height="36px"
                />
                <Text>{fullData.phoneNumber}</Text>
              </RowStack>
            ) : null}
          </Stack>
        </Stack>
      </TopSection>
      {fullData ? <FullData fullData={fullData} /> : null}
      <StarReviewForm
        stars={stars}
        isDisabled={isDisabled}
        isLoading={isLoadingRating}
        onSave={handleSave}
        onClose={onClose}
        onChange={setStars}
      />
    </Wrapper>
  );
};

export default CompanyPopupContainer;

export const fallDownKF = keyframes`
    0% { transform: translateY(-20%); opacity: 0 }
    50% { transform: translateY(-10%); opacity: 0.2 }
    100% { transform: translateY(0); opacity: 1}
`;

const Location = styled('div')(({ theme }) => ({
  maxWidth: 'max-content',

  '.icon-text': {
    fontSize: theme.fontSize.fontS21,
    color: theme.colors.black,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS16,
    },
  },
}));

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.colors.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '24px',
  minHeight: '890px',
  position: 'relative',

  [theme.breakpoints.mobile]: {
    gap: '16px',
  },
}));

const TopSection = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '340px 1fr',
  gap: '24px',

  [theme.breakpoints.mobile]: {
    gap: '16px',
    gridTemplateColumns: '1fr',
  },
}));

export const Stack = styled('div', {
  shouldForwardProp: prop => !['gap', 'fallDown', 'mGap'].includes(prop),
})<{ gap?: string; fallDown?: boolean; mGap?: string }>(
  ({ theme, gap, fallDown, mGap }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: gap || '16px',

    ...(fallDown ? { animation: `${fallDownKF} 0.3s linear` } : {}),

    [theme.breakpoints.mobile]: {
      gap: mGap || '8px',
    },
  }),
);

const RowStack = styled('div', {
  shouldForwardProp: prop => !['gap', 'marginBottom'].includes(prop),
})<{ gap?: string; marginBottom?: string }>(({ gap, marginBottom }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: gap || '8px',
  marginBottom: marginBottom || '0',
}));

export const Schedule = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flexWrap: 'wrap',
});

const ImgWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '380px',
  borderRadius: '16px',
  overflow: 'hidden',
  img: {
    objectFit: 'cover',
  },

  [theme.breakpoints.mobile]: {
    height: '300px',
  },
}));

const SwiperStyled = styled(SwiperCardsWrapper)(({ theme }) => ({
  height: '384px',

  [theme.breakpoints.mobile]: {
    height: '306px',

    marginLeft: 0,
    minWidth: 'auto',
  },
}));

const Title = styled('h2', {
  shouldForwardProp: prop => prop !== 'marginBottom',
})<{ marginBottom?: string }>(({ theme, marginBottom }) => ({
  fontSize: theme.fontSize.fontS32,
  fontWeight: 700,
  color: theme.colors.blue,
  marginBottom: marginBottom || '0',

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS24,
  },
}));

export const Text = styled('p', {
  shouldForwardProp: prop => prop !== 'fontWeight',
})<{ fontWeight?: string }>(({ theme, fontWeight }) => ({
  fontSize: theme.fontSize.fontS21,
  fontWeight: fontWeight || 400,
  lineHeight: 1.5,

  [theme.breakpoints.mobile]: {
    fontSize: theme.fontSize.fontS16,
  },
}));

const Name = styled(Title)(({ theme }) => ({
  fontSize: theme.fontSize.fontS40,
  width: '100%',
  marginTop: '10px',

  [theme.breakpoints.mobile]: {
    marginTop: '0',
    fontSize: theme.fontSize.fontS28,
  },
}));

const RatingWrapper = styled('div')(({ theme }) => ({
  span: {
    fontSize: theme.fontSize.fontS24,

    [theme.breakpoints.mobile]: {
      fontSize: theme.fontSize.fontS18,
    },
  },
}));
