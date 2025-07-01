import React, { useState } from 'react';
import './AddEventPopup.css';

const AddEventPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    time: '',
    duration: '',
    maxStalls: '',
    image: null,
    description: '',  // Added description here
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New event submitted:', formData);
    alert('✅ Event created successfully!');
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 style={{ marginBottom: '1rem' }}>Host a New Event</h2>
        <form onSubmit={handleSubmit} className="popup-form">
          <input
            type="text"
            name="name"
            placeholder="Event Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
          />
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className={formData.time === '' ? 'select-placeholder' : ''}
          >
            <option value="" disabled hidden>
              Time
            </option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
          <input
            type="text"
            name="duration"
            placeholder="Duration (e.g. 2 hours)"
            value={formData.duration}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="maxStalls"
            placeholder="Max Stall Count"
            value={formData.maxStalls}
            onChange={handleChange}
            required
          />
          {/* New Description textarea */}
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            required
          ></textarea>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="file-input"
          />
          <div className="popup-buttons">
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <button type="button" className="cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEventPopup;
