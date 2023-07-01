import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [geolocationData, setGeolocationData] = useState(null);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
      } else {
        setGeolocationData('Geolocation is not supported by this browser.');
      }
    };

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setGeolocationData({ latitude, longitude });
    };

    const error = () => {
      console.log('Allow location access');
    };

    getLocation();

    // Cleanup function
    return () => {
      // Clear any ongoing geolocation processes or event listeners if needed
    };
  }, []);

  return {geolocationData};
};

export default useGeolocation;
