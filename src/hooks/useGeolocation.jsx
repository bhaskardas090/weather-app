import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [geoLocationData, setGeoLocationData] = useState();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      throw new Error('Geolocation is not supported by this browser.');
    }
  };

  const success = (position) => {
    const { latitude, longitude } = position.coords;
    setGeoLocationData({ lat: latitude, lon: longitude });

  };

  const error = () => {
    console.log('Allow location access');
    setIsFetched(true);
  };

  useEffect(() => {
    getLocation();
  }, []);
  return { geoLocationData };
};

export default useGeolocation;
