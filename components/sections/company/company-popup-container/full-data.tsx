import Loader from '../../../layout/loader';
import ServiceCard from '../../../layout/service-card';
import ClickableServices from '../services-clickable';
import {
  type CompanyFragment,
  type ClickableServiceFragment,
  type StrapiImageFragment,
} from '../../../../gql/graphql';
import { fallDownKF, Stack, Text } from './index';
import styled from '@emotion/styled';

interface Props {
  fullData: CompanyFragment;
}
const FullData = ({
  fullData: {
    slug,
    food,
    services,
    socialLinks,
    description,
    clickable_services,
  },
}: Props) => {
  const socialLinksMapped = socialLinks?.map(el => ({
    icon: el?.icon as StrapiImageFragment,
    socialLink: el?.socialLink || '',
  }));

  return slug ? (
    <>
      <Stack gap="24px" mGap="16px" fallDown>
        {description ? <Text>{description}</Text> : null}
        {food ? <Text>{food}</Text> : null}
      </Stack>
      <CardsWrapper fallDown>
        {services?.data
          ? services?.data?.map((el, index) => (
              <ServiceCard
                key={index}
                title={el.attributes?.text || ''}
                iconSrc={el.attributes?.icon.data?.attributes?.url ?? ''}
                iconAlt={
                  el.attributes?.icon.data?.attributes?.alternativeText ?? ''
                }
              />
            ))
          : null}
      </CardsWrapper>
      {clickable_services?.length ? (
        <Stack fallDown>
          <ClickableServices
            services={clickable_services as ClickableServiceFragment[]}
            socialLinks={socialLinksMapped}
          />
        </Stack>
      ) : null}
    </>
  ) : (
    <Loader />
  );
};

const CardsWrapper = styled('div', {
  shouldForwardProp: prop => prop !== 'fallDown',
})<{ fallDown?: boolean }>(({ theme, fallDown }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '16px',

  '.card-title': {
    fontSize: theme.fontSize.fontS18,
  },

  '.service-card': {
    padding: '16px 8px',
    flexDirection: 'column',
  },

  [theme.breakpoints.mobile]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '8px',
  },

  ...(fallDown ? { animation: `${fallDownKF} 0.3s linear` } : {}),
}));
export default FullData;
