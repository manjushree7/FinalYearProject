import { useState } from 'react';
import React from 'react';
import './ProfilePage.css';
import esewaLogo from '../../assets/esewa.png';
import { Pencil } from 'lucide-react';

const stallDataInitial = {
  name: 'Fresh Farm Produce',
  location: 'Downtown Market, Block B',
  operatingHours: 'Mon-Sat: 8am - 6pm',
  rating: 4.5,
  specialty: 'Organic Vegetables & Fruits',
  menuItems: [
    { id: 1, name: 'Organic Avocado Salad', price: '$12.99' },
    { id: 2, name: 'Fresh Tomato Salsa', price: '$8.50' },
    { id: 3, name: 'Carrot & Ginger Juice', price: '$5.25' },
  ],
  reviews: [
    { id: 1, reviewer: 'Alice', comment: 'Freshest veggies I have ever had!' },
    { id: 2, reviewer: 'Bob', comment: 'Excellent customer service and quality.' },
    { id: 3, reviewer: 'Charlie', comment: 'Highly recommend the avocado salad.' },
  ],
};

const ProfilePage = () => {
  const [stallData, setStallData] = useState(stallDataInitial);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(stallData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setStallData(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData(stallData);
    setEditMode(false);
  };

  return (
    <main className="profile-page">
      <h1>My Stall Profile</h1>

      {/* Profile Section */}
      <section className="profile-container">
        <article className="profile-info">
          {editMode ? (
            <>
              {['name', 'location', 'operatingHours', 'specialty'].map(field => (
                <label key={field}>
                  {field === 'operatingHours' ? 'Operating Hours' : field.charAt(0).toUpperCase() + field.slice(1)}:
                  <input
                    type="text"
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                </label>
              ))}
              <div className="buttons">
                <button className="save-btn" onClick={handleSave}>Save</button>
                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <p className="profile-detail"><strong>Stall Name:</strong> {stallData.name}</p>
              <p className="profile-detail"><strong>Location:</strong> {stallData.location}</p>
              <p className="profile-detail"><strong>Operating Hours:</strong> {stallData.operatingHours}</p>
              <p className="profile-detail"><strong>Overall Rating:</strong> {stallData.rating} / 5 ⭐</p>
              <p className="profile-detail"><strong>Main Specialty:</strong> {stallData.specialty}</p>
              <button className="edit-btn" onClick={() => setEditMode(true)}>Edit Stall Info</button>
            </>
          )}
        </article>
      </section>

      <hr className="section-divider" />

      {/* Reviews Section */}
      <section className="profile-container" style={{ flexDirection: 'column' }}>
        <h2>Reviews</h2>
        <ul className="recent-activity-list" style={{ maxWidth: '600px' }}>
          {stallData.reviews.map(({ id, reviewer, comment }) => (
            <li key={id} className="recent-activity-item">
              <strong>{reviewer}</strong>: {comment}
            </li>
          ))}
        </ul>
      </section>

      <hr className="section-divider" />

      {/* Menu Items Section */}
      <section className="profile-container" style={{ flexDirection: 'column' }}>
        <h2>Menu Items</h2>
        <ul className="purchase-history-list" style={{ maxWidth: '600px' }}>
          {stallData.menuItems.map(({ id, name, price }) => (
            <li key={id} className="purchase-history-item">
              <strong>{name}</strong> — {price}
            </li>
          ))}
        </ul>
      </section>

      <hr className="section-divider" />

      {/* Payment Section */}
      <section className="payment-section" style={{ maxWidth: '600px' }}>
        <h2>Accepted Payment Method</h2>
        <div className="payment-options">
          <div className="payment-option selected" style={{ cursor: 'default' }}>
            <img src={esewaLogo} alt="eSewa logo" />
          </div>
        </div>
        <p style={{ marginTop: '10px', fontStyle: 'italic' }}>
          We currently accept <strong>eSewa</strong> payments only.
        </p>
      </section>
    </main>
  );
};

export default ProfilePage;
