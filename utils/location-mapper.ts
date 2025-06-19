import type { MapCard } from '../components/layout/map/children/types';

/* eslint-disable @typescript-eslint/no-explicit-any */

export const mapLocations = (data: any, markerIcon?: string): MapCard[] =>
  data
    .filter((el: any) => !!el.attributes.position)
    .map((el: any) => mapLocation(el, markerIcon));

export const mapLocation = (data: any, markerIconUrl?: string) => ({
  slug: data.attributes.slug,
  title: data.attributes.name || data.attributes.value || '-',
  subTitle: data.attributes.location || '-',
  imageSrc:
    data.attributes.images?.data[0]?.attributes?.url ||
    data.attributes.image?.data?.attributes?.url ||
    data.attributes.profileImg?.data?.attributes?.url ||
    '/images/background/background-prom.svg',
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
});
/* eslint-enable @typescript-eslint/no-explicit-any */
