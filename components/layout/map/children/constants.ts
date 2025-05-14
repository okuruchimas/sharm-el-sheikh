import type { Library } from "@googlemaps/js-api-loader";

export const libraries: Library[] = ["places", "geometry"];

export const DEFAULT_CENTER = {
  lat: 40.963648072647775,
  lng: 20.399537638329676,
};

export const DEFAULT_ZOOM = 12;

export const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "16px",
};
