import React from 'react';
// Google API
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
  const mapStyle = {
    height: '100vh',
    width: '100%',
  };

  const center = {
    lat: 1.6138136,
    lng: -75.6150687,
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_FIREBASE_APP_KEY}
      region="colombia"
    >
      <GoogleMap mapContainerStyle={mapStyle} zoom={16} center={center}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
