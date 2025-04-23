import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';
import { stall_list } from '../../assets/assets';
import eventImage from '../../assets/Organic Food Festival.jpg';
import eventImage1 from '../../assets/Farmers Market.jpg';
import eventImage2 from '../../assets/Healthy Eating Workshop.jpg';
import eventImage3 from '../../assets/Local Chefs Showcase.jpg';
import eventImage4 from '../../assets/Zero Waste Challenge.jpg';
import eventImage5 from '../../assets/Central Region.jpg';

const eventsData = [
  {
    id: 1,
    title: "Organic Food Festival",
    description: "Join us for a day full of fresh produce, live cooking shows, and family fun.",
    image: eventImage,
    location: "Downtown",
    time: "morning",
    stallIds: [1, 2, 3, 5],
  },
  {
    id: 2,
    title: "Farmers Market",
    description: "Meet local farmers, taste free samples, and support sustainable farming.",
    image: eventImage1,
    location: "Westside",
    time: "afternoon",
    stallIds: [1, 3, 5, 6],
  },
  {
    id: 3,
    title: "Healthy Eating Workshop",
    description: "Discover how to cook easy, healthy meals using locally sourced ingredients.",
    image: eventImage2,
    location: "East End",
    time: "evening",
    stallIds: [1, 3, 5, 6],
  },
  {
    id: 4,
    title: "Local Chefs Showcase",
    description: "Watch local chefs create delicious dishes using farm-fresh ingredients.",
    image: eventImage3,
    location: "Downtown",
    time: "afternoon",
    stallIds: [1, 3, 5, 7],
  },
  {
    id: 5,
    title: "Zero Waste Challenge",
    description: "Learn how to reduce food waste and adopt sustainable habits at home.",
    image: eventImage4,
    location: "North Side",
    time: "morning",
    stallIds: [1, 2, 3, 4, 5],
  },
  {
    id: 6,
    title: "Central Region",
    description: "Interactive sessions teaching children the importance of healthy eating.",
    image: eventImage5,
    location: "Central",
    time: "evening",
    stallIds: [1, 2, 3, 4, 5],
  }
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const navigate = useNavigate();

  const filteredEvents = eventsData.filter(event => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLocation = selectedLocation ? event.location === selectedLocation : true;
    const matchesTime = selectedTime ? event.time === selectedTime : true;

    return matchesSearch && matchesLocation && matchesTime;
  });

  return (
    <div className="events-container">
      <h2>Upcoming Events</h2>

      {/* Search and filters row */}
      <div className="search-filter-row">
        <div className="event-search-wrapper">
          <input
            type="text"
            placeholder="Search by name or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="event-search-bar"
          />
          {searchTerm && (
            <button className="clear-search-btn" onClick={() => setSearchTerm('')}>
              ×
            </button>
          )}
        </div>

        <div className="inline-filters">
          <div className="filter-group">
            <select 
              value={selectedLocation} 
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="filter-select"
            >
              <option value="">All Locations</option>
              <option value="Downtown">Downtown</option>
              <option value="Westside">Westside</option>
              <option value="East End">East End</option>
              <option value="North Side">North Side</option>
              <option value="Central">Central</option>
            </select>
          </div>

          <div className="filter-group">
            <select 
              value={selectedTime} 
              onChange={(e) => setSelectedTime(e.target.value)}
              className="filter-select"
            >
              <option value="">All Times</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
        </div>
      </div>

      {/* Events grid */}
      <div className="events-grid">
        {filteredEvents.map(event => (
          <div 
            key={event.id} 
            className="event-card" 
            onClick={() => navigate(`/event/${event.id}`)} 
            style={{ cursor: 'pointer' }}
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Time:</strong> {event.time}</p>
            </div>
          </div>
        ))}

        {filteredEvents.length === 0 && (
          <p className="no-events-message">No events found for the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Events;
