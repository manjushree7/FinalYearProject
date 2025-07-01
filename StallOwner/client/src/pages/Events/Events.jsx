import React, { useState } from 'react';
import { eventsData } from '../../assets/assets';
import './Events.css';

const Events = () => {
  // Initialize events with seatsLeft from data
  const [events, setEvents] = useState(eventsData);
  const [currentEventId, setCurrentEventId] = useState(null);

  const handleJoinEvent = (eventId) => {
    // If already joined a different event
    if (currentEventId && currentEventId !== eventId) {
      alert("You can only participate in one event at a time!");
      return;
    }

    // Find event index
    const eventIndex = events.findIndex(event => event.id === eventId);
    if (eventIndex === -1) return;

    const event = events[eventIndex];
    const seatsLeft = typeof event.seatsLeft === 'number' ? event.seatsLeft : 0;

    if (seatsLeft <= 0) {
      alert("No seats left for this event!");
      return;
    }

    // If clicking the same event again, toggle off participation and restore seat
    if (currentEventId === eventId) {
      const updatedEvents = [...events];
      updatedEvents[eventIndex].seatsLeft = seatsLeft + 1;
      setEvents(updatedEvents);
      setCurrentEventId(null);
      return;
    }

    // Join the event: reduce seats left by 1
    const updatedEvents = [...events];
    updatedEvents[eventIndex].seatsLeft = seatsLeft - 1;
    setEvents(updatedEvents);
    setCurrentEventId(eventId);
  };

  return (
    <div className="events-page">
      <h2>Available Events</h2>
      <div className="events-grid">
        {events.map(event => {
          const seatsLeft = typeof event.seatsLeft === 'number' ? event.seatsLeft : 0;
          const isFull = seatsLeft <= 0;

          return (
            <div key={event.id} className={`event-card ${isFull ? 'full' : ''}`}>
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div className="event-meta">
                <span>📍 {event.location}</span>
                <span>🕒 {event.time}</span>
              </div>

              {/* Seats left message */}
              <div className="event-spaces-left">
                <span className="icon">{isFull ? '🚫' : '🪑'}</span>
                <span
                  style={{ color: isFull ? 'red' : 'inherit', fontWeight: isFull ? 'bold' : 'normal' }}
                >
                  {isFull
                    ? '0 seats left — Fully booked'
                    : `${seatsLeft} seat${seatsLeft > 1 ? 's' : ''} left`}
                </span>
              </div>

              <button
                onClick={() => handleJoinEvent(event.id)}
                disabled={isFull && currentEventId !== event.id}
                className={currentEventId === event.id ? 'joined' : ''}
              >
                {currentEventId === event.id ? 'Participating' :
                  isFull ? 'Fully Booked' : 'Join Event'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
