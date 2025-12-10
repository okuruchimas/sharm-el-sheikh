export type MapCard = {
  slug: string;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  subTitle: string;
  averageRating: number;
  totalComments: number;
  markerIconUrl?: string;
  position: { lat: number; lng: number };
  wc?: boolean;
};
