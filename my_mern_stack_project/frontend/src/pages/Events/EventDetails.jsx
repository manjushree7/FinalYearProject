import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { stall_list } from '../../assets/assets';

// Import event images
import eventImage from '../../assets/Organic Food Festival.jpg';
import eventImage1 from '../../assets/Farmers Market.jpg';
import eventImage2 from '../../assets/Healthy Eating Workshop.jpg';
import eventImage3 from '../../assets/Local Chefs Showcase.jpg';
import eventImage4 from '../../assets/Zero Waste Challenge.jpg';
import eventImage5 from '../../assets/Central Region.jpg';

const eventsData = [
  // ... (keep your existing eventsData array)
];

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = eventsData.find((e) => e.id === parseInt(id));

  if (!event) return <div className="not-found">Event not found</div>;

  const eventStalls = stall_list.filter((stall) => event.stallIds.includes(stall.id));

  return (
    <div className="event-details">
      <div className="event-header">
        <img src={event.image} alt={event.title} className="event-hero" />
        <div className="event-meta">
          <h1>{event.title}</h1>
          <div className="meta-tags">
            <span className="location">{event.location}</span>
            <span className="time">{event.time}</span>
          </div>
        </div>
      </div>

      <div className="event-content">
        <p className="event-description">{event.description}</p>
        
        <h2>Participating Stalls</h2>
        <p className="stall-subtitle">Click on a stall to view details</p>

        <div className="stall-grid">
          {eventStalls.map((stall) => (
            <div 
              key={stall.id} 
              className="stall-card"
              onClick={() => navigate(`/stall/${stall.id}`)}
            >
              <div className="stall-image-container">
                <img src={stall.stall_image} alt={stall.stall_name} className="stall-image" />
              </div>
              <h3>{stall.stall_name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetails;