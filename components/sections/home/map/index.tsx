import { MarkerF, GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useTranslation } from "next-i18next";
import { useMemo, useState, useEffect } from "react";
// components
import Loader from "../../../layout/loader";
import InfoWindow from "./children/info-window";
import SectionWrapper from "../../../layout/section-wrapper";
import LocationsCategoryFilter from "./children/locations-category-filter";
// utils
import styled from "@emotion/styled";
import { calculateCenter } from "./children/utils";
import { fetchDataFromApi } from "../../../../utils/fetchApi";
// constants
import {
  libraries,
  DEFAULT_ZOOM,
  DEFAULT_CENTER,
  mapContainerStyle,
} from "./children/constants";
// types
import type { selectOption } from "../../../types/filter";
import {
  type CompanyCardPreviewFragment,
  GetCompanyPromotionCardsByFilterDocument,
} from "../../../../gql/graphql";

type Cards = (CompanyCardPreviewFragment | undefined | null)[] | undefined;

type MapProps = {
  title: string;
  categories: selectOption[];
};

const Map = ({ title, categories }: MapProps) => {
  // states
  const [selectedCategory, setSelectedCategory] = useState<selectOption>(
    categories[0],
  );
  const [selectedMarker, setSelectedMarker] = useState<
    CompanyCardPreviewFragment | null | undefined
  >(null);
  const [result, setResult] = useState<Cards>();
  // hooks
  const { i18n } = useTranslation("common");
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
    libraries,
  });
  // callbacks
  const handleGetCardByCategory = async (option: selectOption) => {
    const data = await fetchDataFromApi(
      GetCompanyPromotionCardsByFilterDocument,
      {
        locale: i18n.language,
        category: option.key,
      },
    );

    return data.companyPromotionCards?.data.map((el) => el.attributes);
  };

  useEffect(() => {
    handleGetCardByCategory(selectedCategory).then((data) => setResult(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelectCategory = async (category: selectOption) => {
    if (selectedCategory.key === category.key) return;

    await handleGetCardByCategory(category).then((data) => setResult(data));
    setSelectedCategory(category);
    setSelectedMarker(null);
  };
  // memos
  const center = useMemo(() => {
    if (selectedMarker)
      return {
        lat: Number(selectedMarker.position?.lat || DEFAULT_CENTER.lat),
        lng: Number(selectedMarker.position?.lng || DEFAULT_CENTER.lng),
      };

    if (result?.length) return calculateCenter(result);

    return DEFAULT_CENTER;
  }, [result, selectedMarker]);

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
    <SectionWrapper title={title}>
      <LocationsCategoryFilter
        selectedID={selectedCategory?.key}
        options={categories}
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
            {result
              ? result.map((el) => (
                  <MarkerF
                    icon={
                      selectedCategory?.markerIcon ||
                      "icons/location-marker.svg"
                    }
                    key={el?.slug}
                    opacity={el?.slug === selectedMarker?.slug ? 0.6 : 1}
                    position={{
                      lng: Number(el?.position?.lng || DEFAULT_CENTER.lng),
                      lat: Number(el?.position?.lat || DEFAULT_CENTER.lat),
                    }}
                    onClick={() => setSelectedMarker(el)}
                  />
                ))
              : null}
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
  bottom: "116px",
  right: "35px",

  [theme.breakpoints.mobile]: {
    bottom: "14px",
    right: "14px",
  },
}));

export default Map;
