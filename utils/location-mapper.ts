import type { MapCard } from '../components/layout/map/children/types';
import type { CompanyPreviewFragment } from '../gql/graphql';
import { BACKGROUND_GRADIENT } from '../constants/images.constants';

/* eslint-disable @typescript-eslint/no-explicit-any */

export const mapLocations = (data: any, markerIcon?: string): MapCard[] =>
  data
    .filter((el: any) => !!el.attributes.position)
    .map((el: any) => mapLocation(el, markerIcon));

export const mapLocation = (data: any, markerIconUrl?: string) => ({
  slug: data.attributes.slug,
  title:
    data.attributes.name ||
    data.attributes.value ||
    data.attributes.title ||
    '-',
  subTitle: data.attributes.location || '-',
  imageSrc:
    data.attributes.images?.data[0]?.attributes?.url ||
    data.attributes.image?.data?.attributes?.url ||
    data.attributes.profileImg?.data?.attributes?.url ||
    BACKGROUND_GRADIENT,
  imageAlt:
    data.attributes.images?.data[0]?.attributes?.alternativeText ||
    data.attributes.image?.data?.attributes?.alternativeText ||
    data.attributes.profileImg?.data?.attributes?.alternativeText ||
    '',
  averageRating: data.attributes.averageRating,
  totalComments: data.attributes.totalComments,
  position: {
    lat: data.attributes.position?.lat || 0,
    lng: data.attributes.position?.lng || 0,
  },
  markerIconUrl,
  wc: data.attributes.wc,
});

export const getLocationWithMarker = (el: {
  attributes: CompanyPreviewFragment;
}) =>
  mapLocation(
    el,
    el.attributes.wc
      ? el?.attributes?.categories?.data[0]?.attributes?.markerIconWC?.data
          ?.attributes?.url
      : el?.attributes?.categories?.data[0]?.attributes?.markerIcon?.data
          ?.attributes?.url,
  );
/* eslint-enable @typescript-eslint/no-explicit-any */
