import type { Library } from "@googlemaps/js-api-loader";

export const libraries: Library[] = ["places"];

export const DEFAULT_CENTER = { lat: 25.25213, lng: 55.326 };

export const DEFAULT_ZOOM = 12;

export const mapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "16px",
};

export enum Categories {
  HOOKAHS = "Hookahs and smoking accessories",
  COSMETOLOGY = "Cosmetology",
  MEDICATIONS = "Medications",
  FRUITS = "Fruits and berries",
  SOUVENIRS = "Souvenirs",
}

export const categoriesOptions = [
  { display_value: Categories.HOOKAHS, key: "hookahs" },
  { display_value: Categories.COSMETOLOGY, key: "cosmetology" },
  { display_value: Categories.MEDICATIONS, key: "medications" },
  { display_value: Categories.FRUITS, key: "fruits" },
  { display_value: Categories.SOUVENIRS, key: "souvenirs" },
];
