import { PromCardI } from "../../../../pages/api/prom-cards";

export const calculateCenter = (
  locations: PromCardI[],
): { lat: number; lng: number } => {
  const numLocations = locations.length;

  const total = locations.reduce(
    (acc, location) => {
      acc.lat += location?.position?.lat || 0;
      acc.lng += location?.position?.lng || 0;
      return acc;
    },
    { lat: 0, lng: 0 },
  );

  return {
    lat: total.lat / numLocations,
    lng: total.lng / numLocations,
  };
};
