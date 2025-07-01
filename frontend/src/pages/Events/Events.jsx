import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Events.css';
import { eventsData } from '../../assets/assets';
import { stall_list } from '../../assets/assets';

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
            placeholder="Search by name"
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
              <option value="Kathamndu">Kathamndu</option>
              <option value="Bhaktapur">Bhaktapur</option>
              <option value="Lalitpur">Lalitpur</option>
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
