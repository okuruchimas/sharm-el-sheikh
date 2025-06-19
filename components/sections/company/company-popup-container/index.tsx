// hooks
import { useTranslation } from 'next-i18next';
import { useState, useEffect, useCallback } from 'react';
// utils
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { formatTime } from '../../../../utils/formateDate';
import { fetchDataFromApi } from '../../../../utils/fetchApi';
// components
import Image from 'next/image';
import Rating from '../../../layout/rating';
import TextPill from '../../../layout/text-pill';
import NextImage from '../../../layout/image';
import LocationLink from '../../../layout/location-link';
import StarReviewForm from '../../../layout/star-review-form';
// constants
import { DayAbv } from '../../../../constants/week-days.constants';
// types
import {
  type CompanyFragment,
  type CompanyPreviewFragment,
  GetCompanyDocument,
} from '../../../../gql/graphql';
import useRatePlace from '../../../../hooks/useRatePlace';
import FullData from './full-data';

type CompanyPopupContainerProps = {
  clubPreview: CompanyPreviewFragment;
  onClose: () => void;
};

const CompanyPopupContainer = ({
  clubPreview,
  onClose,
}: CompanyPopupContainerProps) => {
  const [fullData, setFullData] = useState<
    CompanyFragment | undefined | null
  >();

  const { t, i18n } = useTranslation('common');

  const { stars, isDisabled, isLoadingRating, handleSave, setStars } =
    useRatePlace({
      slug: clubPreview.slug,
      storageName: 'ratedCompanies',
      collectionType: 'companies',
    });

  const getFullClubData = useCallback(async () => {
    const { companies } = await fetchDataFromApi(GetCompanyDocument, {
      slug: clubPreview.slug,
      locale: i18n.language,
    });

    setFullData(companies?.data[0]?.attributes);
  }, [clubPreview.slug, i18n.language]);

  useEffect(() => {
    getFullClubData();
  }, [getFullClubData]);

  const renderSchedule = () => {
    return clubPreview.schedule?.map((el, index) => {
      const days = el?.days.map(el =>
        t(DayAbv[(el?.day || '') as keyof typeof DayAbv] || ''),
      );

      return (
        <DayAndTime key={index}>
          <Text>{days?.join(', ') || '-'}</Text>
          <TextPill>{`${formatTime(el?.workTime.startTime)} - ${formatTime(el?.workTime.endTime)}`}</TextPill>
        </DayAndTime>
      );
    });
  };

  return (
    <Wrapper>
      <TopSection>
        <ImgWrapper>
          <Image
            src={clubPreview.images.data[0].attributes?.url || ''}
            alt={clubPreview.images.data[0].attributes?.alternativeText || ''}
            layout="fill"
          />
        </ImgWrapper>
        <Stack>
          <RowStack marginBottom="24px">
            <Name>{clubPreview.title}</Name>
            <RatingWrapper>
              <Rating
                points={clubPreview.averageRating}
                users={clubPreview.totalComments}
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
                text={clubPreview.location || '-'}
                position={clubPreview.position}
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

const Schedule = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flexWrap: 'wrap',
});

const DayAndTime = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '8px',

  [theme.breakpoints.mobile]: {
    justifyContent: 'space-between',
  },
}));

const ImgWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '340px',
  borderRadius: '16px',
  overflow: 'hidden',
  img: {
    objectFit: 'cover',
  },

  [theme.breakpoints.mobile]: {
    height: '300px',
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
