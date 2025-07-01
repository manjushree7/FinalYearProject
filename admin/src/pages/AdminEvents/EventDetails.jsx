import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stall_list } from '../../assets/assets';
import { eventsData } from '../../assets/assets';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './EventDetails.css';
import MapView from '../../components/MapView';

// English location mappings
const locationTranslations = {
  "नेपाल पोल प्रधान कार्यालय": "Nepal Police Headquarters",
  "उत्तर ढोका सडक": "North Gate Road",
  "कालस कोयासुर मार्ग": "Kallas Koyasur Marg",
  "खोला गल मार्ग": "Khola Gal Marg",
  "गैनिठारा सडक": "Gainithara Road",
  "टिर मार्ग": "Tir Marg",
  "स्प्री सदन": "Spree Sadan",
  "सामा मार्ग": "Sama Marg",
  "हाइट": "Height",
  "दुतर गैली": "Dutar Alley",
  "नारायणहिटी बास्केटबल कोर्ट": "Narayanhiti Basketball Court",
  "गार्डन इडार्ल": "Garden Idarl"
};

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventsData.find((e) => e.id === parseInt(id));
  const [mapExpanded, setMapExpanded] = useState(false);
  const mapRef = useRef(null);

  if (!event) return <div className="eventdetails-not-found">Event not found</div>;

  const eventStalls = stall_list.filter((stall) => event.stallIds.includes(stall.id));
  const kathmanduPosition = [27.677278097066008, 85.31707659547533];

  const handleMapClick = () => {
    window.open(`https://www.google.com/maps?q=${kathmanduPosition[0]},${kathmanduPosition[1]}`);
  };

  const toggleMapSize = (e) => {
    e.stopPropagation();
    setMapExpanded(!mapExpanded);
    if (mapRef.current && !mapExpanded) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 300);
    }
  };

  const getEnglishLocation = (nepaliLocation) => {
    return locationTranslations[nepaliLocation] || nepaliLocation;
  };

  return (
    <div className="eventdetails-container">
      

      <section className="eventdetails-eventinfo">
        <div className="eventdetails-eventimage">
          <img src={event.image} alt={event.title} />
        </div>
        
        <div className="eventdetails-location-header">
          <h1 className="eventdetails-eventtitle">{event.title}</h1>
          
          <div className="eventdetails-metacontainer">
            <div className="eventdetails-meta">
              <span className="eventdetails-metalabel">Location:</span>
              <span className="eventdetails-metavalue english-location">
                {getEnglishLocation(event.location)}
              </span>
            </div>
            <div className="eventdetails-meta">
              <span className="eventdetails-metalabel">Hours:</span>
              <span className="eventdetails-metavalue">{event.time}</span>
            </div>
          </div>
        </div>
        
        <div 
          className={`eventdetails-map-container ${mapExpanded ? 'expanded' : ''}`}
          onClick={handleMapClick}
        >
          <MapContainer 
            ref={mapRef}
            center={kathmanduPosition} 
            zoom={15}
            style={{ height: "100%", width: "100%", borderRadius: "12px" }}
            zoomControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={kathmanduPosition}>
              <Popup className="english-popup">
                <strong>{event.title}</strong><br />
                {getEnglishLocation(event.location)}
              </Popup>
            </Marker>
          </MapContainer>
          <button 
            className="eventdetails-map-toggle" 
            onClick={toggleMapSize}
            aria-label={mapExpanded ? 'Minimize map' : 'Expand map'}
          >
            {mapExpanded ? '×' : '↗'}
          </button>
          <div className="eventdetails-map-overlay">Click to view in Google Maps</div>
        </div>
      </section>

      <section className="eventdetails-stallsection">
        <h2 className="eventdetails-stalltitle">Featured Vendors</h2>
        <div className="eventdetails-stallgrid">
          {eventStalls.map((stall) => (
            <article 
              key={stall.id}
              className="eventdetails-stallcard"
              onClick={() => navigate(`/stall/${stall.id}`)}
            >
              <div className="eventdetails-stallimagewrapper">
                <img 
                  src={stall.stall_image} 
                  alt={stall.stall_name}
                  className="eventdetails-stallimage"
                />
              </div>
              <div className="eventdetails-stallinfo">
                <h3 className="eventdetails-stallname">{stall.stall_name}</h3>
                <p className="eventdetails-stalllocation english-location">
                  {getEnglishLocation(stall.location)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EventDetails;