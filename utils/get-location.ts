interface LocationCoordinates {
  lat: number;
  lng: number;
}
export const getCurrentLocation = (): Promise<LocationCoordinates> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
        alert(`Не знайдено аніматорів поблизу.${error.message}`);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 },
    );
  });
};
