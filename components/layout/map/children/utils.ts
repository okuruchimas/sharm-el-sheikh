import { DEFAULT_CENTER } from "./constants";
import type { MapCard } from "./types";

export const calculateCenter = (
  locations: MapCard[],
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
