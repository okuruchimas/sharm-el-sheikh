import { MarkerF, GoogleMap, useLoadScript } from '@react-google-maps/api';
import { useMemo, useState } from 'react';
// components
import Loader from '../../../layout/loader';
// constants
import {
  libraries,
  DEFAULT_ZOOM,
  DEFAULT_CENTER,
  mapContainerStyle,
} from '../../../layout/map/children/constants';
import type { Location } from '../info';
// types

type MapProps = {
  locations: Location[];
  zoom?: number;
};

const Map = ({ locations, zoom = DEFAULT_ZOOM }: MapProps) => {
  const [selectedMarker, setSelectedMarker] = useState<Location>();
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '',
    libraries,
  });

  const calculateCenter = (
    locations: Location[],
  ): { lat: number; lng: number } => {
    const numLocations = locations.length;

    const total = locations.reduce(
      (acc, location) => {
        acc.lat += Number(location?.coordinates?.lat || DEFAULT_CENTER.lat);
        acc.lng += Number(location?.coordinates?.lng || DEFAULT_CENTER.lng);
        return acc;
      },
      { lat: 0, lng: 0 },
    );

    const avgLat = total.lat / numLocations;
    const avgLng = total.lng / numLocations;

    return {
      lat: Math.round(avgLat * 10) / 10,
      lng: Math.round(avgLng * 10) / 10,
    };
  };

  const center = useMemo(() => {
    if (selectedMarker)
      return {
        lat: Number(selectedMarker.coordinates?.lat || DEFAULT_CENTER.lat),
        lng: Number(selectedMarker.coordinates?.lng || DEFAULT_CENTER.lng),
      };

    if (locations?.length) return calculateCenter(locations);

    return DEFAULT_CENTER;
  }, [locations, selectedMarker]);

  if (!isLoaded) {
    return <Loader />;
  }

  if (loadError || typeof google === 'undefined') {
    return <h2>Error</h2>;
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
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          options={options}
          zoom={zoom}
        >
          {locations
            ? locations.map((el, index) => (
                <MarkerF
                  icon={'/icons/location-marker.svg'}
                  key={index}
                  opacity={
                    el.locationName === selectedMarker?.locationName ? 0.6 : 1
                  }
                  position={{
                    lng: Number(el?.coordinates?.lng),
                    lat: Number(el?.coordinates?.lat),
                  }}
                  onClick={() => setSelectedMarker(el)}
                />
              ))
            : null}
        </GoogleMap>
      ) : null}
    </>
  );
};

export default Map;
