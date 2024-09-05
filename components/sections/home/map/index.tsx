import { useMemo, useState, useCallback } from "react";
import { MarkerF, GoogleMap, useLoadScript } from "@react-google-maps/api";
// components
import InfoWindow from "./children/info-window";
import SectionWrapper from "../../../layout/section-wrapper";
import LocationsCategoryFilter from "./children/locations-category-filter";
// utils
import styled from "@emotion/styled";
import { calculateCenter } from "./children/utils";
// constants
import { categoriesOptions } from "./children/constants";
import {
  libraries,
  DEFAULT_ZOOM,
  DEFAULT_CENTER,
  mapContainerStyle,
} from "./children/constants";
// types
import type { selectOption } from "../../../types/filter";
import type { PromCardI } from "../../../../pages/api/prom-cards";

type MapProps = {
  promCards: PromCardI[];
};

const Map = ({ promCards }: MapProps) => {
  // states
  const [selectedCategory, setSelectedCategory] = useState<selectOption>(
    categoriesOptions[0],
  );
  const [selectedMarker, setSelectedMarker] = useState<PromCardI | null>(null);
  // hooks
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries,
  });
  // callbacks
  const handleSelectCategory = useCallback((category: selectOption) => {
    setSelectedCategory(category);
    setSelectedMarker(null);
  }, []);
  // memos
  const locationsToShow = useMemo(
    () =>
      promCards.filter((el) => el.category === selectedCategory.display_value),
    [promCards, selectedCategory],
  );

  const center = useMemo(() => {
    if (selectedMarker) return selectedMarker.position;

    if (locationsToShow.length) return calculateCenter(locationsToShow);

    return DEFAULT_CENTER;
  }, [locationsToShow, selectedMarker]);

  if (loadError || typeof google === "undefined") {
    return <h1>Error</h1>; // TODO: design required
  }

  if (!isLoaded) {
    return <h1>Loading maps...</h1>; // TODO: design required
  }

  const options = {
    mapTypeId: google.maps.MapTypeId.HYBRID,
    mapTypeControl: true,
    fullscreenControl: true,
    rotateControl: true,
    zoomControl: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
      position: google.maps.ControlPosition.LEFT_BOTTOM,
      mapTypeIds: [
        google.maps.MapTypeId.ROADMAP,
        google.maps.MapTypeId.SATELLITE,
        google.maps.MapTypeId.HYBRID,
        google.maps.MapTypeId.TERRAIN,
      ],
    },
    controlSize: 32,
  };

  return (
    <SectionWrapper title="What to bring with you">
      <LocationsCategoryFilter
        selectedID={selectedCategory.key}
        options={categoriesOptions}
        onSelect={handleSelectCategory}
      />
      {isLoaded ? (
        <MapWrapper>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            options={options}
            zoom={DEFAULT_ZOOM}
          >
            {locationsToShow.map((el) => (
              <MarkerF
                icon={{
                  url: "icons/location-marker.svg",
                  scale: 8,
                }}
                key={el.id}
                position={el.position || DEFAULT_CENTER}
                onClick={() => setSelectedMarker(el)}
              />
            ))}
          </GoogleMap>
          {selectedMarker && (
            <InfoWindowWrapper>
              <InfoWindow location={selectedMarker} />
            </InfoWindowWrapper>
          )}
        </MapWrapper>
      ) : null}
    </SectionWrapper>
  );
};

const MapWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  height: "480px",

  [theme.breakpoints.mobile]: {
    height: "80vh",
  },
}));

const InfoWindowWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: "102px",
  right: "150px",

  [theme.breakpoints.mobile]: {
    bottom: "14px",
    right: "14px",
  },
}));

export default Map;
