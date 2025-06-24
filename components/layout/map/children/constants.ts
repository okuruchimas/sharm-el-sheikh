import type { Library } from '@googlemaps/js-api-loader';

export const libraries: Library[] = ['places', 'geometry'];

export const DEFAULT_CENTER = {
  lat: 27.9,
  lng: 34.3,
};

export const DEFAULT_ZOOM = 12;

export const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '16px',
};
