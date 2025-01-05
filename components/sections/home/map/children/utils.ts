import { DEFAULT_CENTER } from "./constants";
import type { CompanyPreviewFragment } from "../../../../../gql/graphql";

export const calculateCenter = (
  locations: (CompanyPreviewFragment | undefined | null)[],
): { lat: number; lng: number } => {
  const numLocations = locations.length;

  const total = locations.reduce(
    (acc, location) => {
      acc.lat += Number(location?.position?.lat || DEFAULT_CENTER.lat);
      acc.lng += Number(location?.position?.lng || DEFAULT_CENTER.lng);
      return acc;
    },
    { lat: 0, lng: 0 },
  );

  return {
    lat: total.lat / numLocations,
    lng: total.lng / numLocations,
  };
};
