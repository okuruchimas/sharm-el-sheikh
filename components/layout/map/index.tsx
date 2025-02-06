import { MarkerF, GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
// components
import Loader from "../../layout/loader";
import InfoWindow from "./children/info-window";
import SectionWrapper from "../../layout/section-wrapper";
import LocationsCategoryFilter from "./children/locations-category-filter";
// utils
import styled from "@emotion/styled";
import { calculateCenter } from "./children/utils";
// constants
import {
  libraries,
  DEFAULT_ZOOM,
  DEFAULT_CENTER,
  mapContainerStyle,
} from "./children/constants";
// types
import type { MapCard } from "./children/types";
import type { selectOption } from "../../types/filter";

type MapProps = {
  title?: string;
  locations?: MapCard[];
  categories?: selectOption[];
  onCategorySelect?: () => void;
  selectedCategoryID?: string;
  onInfoWindowClick: (card: MapCard) => void;
};

const Map = ({
  title,
  locations,
  categories,
  selectedCategoryID,
  onInfoWindowClick,
  onCategorySelect,
}: MapProps) => {
  const [selectedMarker, setSelectedMarker] = useState<MapCard>();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries,
  });

  const center = useMemo(() => {
    if (selectedMarker)
      return {
        lat: Number(selectedMarker.position?.lat || DEFAULT_CENTER.lat),
        lng: Number(selectedMarker.position?.lng || DEFAULT_CENTER.lng),
      };

    if (locations?.length) return calculateCenter(locations);

    return DEFAULT_CENTER;
  }, [locations, selectedMarker]);

  if (loadError || typeof google === "undefined") {
    return <h1>Error</h1>;
  }

  if (!isLoaded) {
    return <Loader />;
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
    <>
      <SectionWrapper title={title}>
        {categories && onCategorySelect ? (
          <LocationsCategoryFilter
            selectedID={selectedCategoryID}
            options={categories}
            onSelect={onCategorySelect}
          />
        ) : null}
        {isLoaded ? (
          <MapWrapper>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              options={options}
              zoom={DEFAULT_ZOOM}
            >
              {locations
                ? locations.map((el) => (
                    <MarkerF
                      icon={el.markerIconUrl || "/icons/location-marker.svg"}
                      key={el.slug}
                      opacity={el.slug === selectedMarker?.slug ? 0.6 : 1}
                      position={{
                        lng: Number(el.position.lng),
                        lat: Number(el.position.lat),
                      }}
                      onClick={() => setSelectedMarker(el)}
                    />
                  ))
                : null}
            </GoogleMap>
            {selectedMarker && (
              <InfoWindowWrapper>
                <InfoWindow
                  location={selectedMarker}
                  onClick={() => onInfoWindowClick(selectedMarker)}
                />
              </InfoWindowWrapper>
            )}
          </MapWrapper>
        ) : null}
      </SectionWrapper>
    </>
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
  bottom: "116px",
  right: "35px",

  [theme.breakpoints.mobile]: {
    bottom: "14px",
    right: "14px",
  },
}));

export default Map;
