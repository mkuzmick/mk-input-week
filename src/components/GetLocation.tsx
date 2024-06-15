"use client";

import { useState, useEffect } from "react";

const GeolocationComponent = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      return;
    }

    const fetchLocation = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        },
      );
    };

    fetchLocation();

    const intervalId = setInterval(fetchLocation, 10000); // 10000ms = 10 seconds

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return (
    <div>
      <h1>Geolocation</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default GeolocationComponent;
