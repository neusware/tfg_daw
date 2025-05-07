// resources/js/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 40.416775, // ejemplo: Madrid
  lng: -3.703790,
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="TU_API_KEY_AQUI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
