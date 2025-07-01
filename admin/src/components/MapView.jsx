import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '12px'
};

const center = {
  lat: 27.7172, // Kathmandu latitude
  lng: 85.3240  // Kathmandu longitude
};

const MapView = () => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={AIzaSyBE8GLTNWYuYUMtVmetxI2UL26m3VIMgcw} language="en" loadingElement={<div>Loading map...</div>}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(MapView);
