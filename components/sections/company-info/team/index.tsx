import Image from 'next/image';
import styled from '@emotion/styled';
import SectionWrapper from '../../../layout/section-wrapper';
import { CompanyInfoPageFragment } from '../../../../gql/graphql';
import { Pagination } from 'swiper/modules';
import { SwiperCardsWrapper } from '../../entertainers-tour-guides/children/cards-wrap';
import useResponsive from '../../../../hooks/useResponsive';
import { SwiperSlide } from 'swiper/react';

type TeamMember = NonNullable<
  NonNullable<CompanyInfoPageFragment['team']>[number]
>;

type Props = {
  team?: TeamMember[];
};
const Team = ({ team }: Props) => {
  const { isMobile } = useResponsive();
  const slidesPerView = isMobile ? 2 : 4;

  return (
    <SectionWrapper title={'Meet Our Team'}>
      <SwiperCardsWrapper
        modules={[Pagination]}
        slidesPerView={slidesPerView}
        spaceBetween={12}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        loop
      >
        {team?.map(({ name, position, profileImg, socialLink }) => (
          <SwiperSlide key={name}>
            <a
              href={socialLink || ''}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Card>
                <Avatar>
                  <Image
                    src={profileImg?.data?.attributes?.url || ''}
                    alt={profileImg?.data?.attributes?.alternativeText || ''}
                    sizes="96px"
                    layout="fill"
                    objectFit="cover"
                  />
                </Avatar>
                <Name>{name}</Name>
                <Role>{position}</Role>
              </Card>
            </a>
          </SwiperSlide>
        ))}
      </SwiperCardsWrapper>
    </SectionWrapper>
  );
};

export default Team;

const Card = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 8,
  padding: 12,
  borderRadius: 16,
});

const Avatar = styled('div')(({ theme }) => ({
  position: 'relative',
  width: 220,
  height: 220,
  borderRadius: '50%',
  border: `2px solid ${theme.colors.yellow}`,
  overflow: 'hidden',
}));

const Name = styled('div')(({ theme }) => ({
  fontSize: theme.fontSize.fontS24,
  textAlign: 'center',
  fontWeight: 700,
}));

const Role = styled('div')(({ theme }) => ({
  fontSize: theme.fontSize.fontS18,
}));
