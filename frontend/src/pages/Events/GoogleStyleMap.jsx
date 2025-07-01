import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './EventDetails.css'; 
import GoogleStyleMap from './GoogleStyleMap';

const GoogleStyleMap = ({ position, locationName, onMapClick }) => {
  return (
    <div 
      className="eventdetails-map-container"
      onClick={onMapClick}
    >
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: '100%', width: '100%', borderRadius: '12px' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
          maxZoom={20}
          subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
          attribution='Map data © Google'
        />
        <Marker position={position}>
          <Popup className="english-popup">
            <strong>{locationName}</strong>
          </Popup>
        </Marker>
      </MapContainer>
      <button 
        className="eventdetails-map-toggle" 
        onClick={(e) => e.stopPropagation()}
        aria-label="Expand map"
      >
        ↗
      </button>
      <div className="eventdetails-map-overlay">Click to open in Google Maps</div>
    </div>
  );
};

export default GoogleStyleMap;