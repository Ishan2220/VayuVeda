import { useState, useEffect } from 'react';

const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
          setLoading(false);
        },
        (error) => {
          console.error('Location access denied:', error);
          setLoading(false);
        }
      );
    } else {
      setLoading(false);
    }
  }, []);

  return { location, locationLoading: loading };
};

export default useLocation;
