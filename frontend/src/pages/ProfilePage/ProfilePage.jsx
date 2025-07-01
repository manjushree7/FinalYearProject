import React, { useState } from 'react';
import './ProfilePage.css';
import userIcon from '../../assets/user_icon1.jpg';
import esewaLogo from '../../assets/esewa.png';
import fonepayLogo from '../../assets/fonepay.png';
import { Pencil } from 'lucide-react';
import useStore from '../../zustand/store';
import { useNavigate } from 'react-router-dom';


const purchaseHistoryData = [
  { id: 1, date: '2025-05-15', item: 'Organic Avocado Salad', amount: '$12.99', location: 'Downtown Market' },
  { id: 2, date: '2025-05-12', item: 'Quinoa & Veggie Bowl', amount: '$9.50', location: 'Healthy Bites Cafe' },
  { id: 3, date: '2025-05-10', item: 'Fresh Fruit Smoothie', amount: '$5.25', location: 'Juice Junction' },
];

const paymentOptions = [
  { id: 'esewa', name: 'eSewa', logo: esewaLogo },
  { id: 'fonepay', name: 'Fonepay', logo: fonepayLogo },
];

const recentActivityData = [
  { id: 1, stall: 'Downtown Market', review: 'Great fresh produce and friendly staff!', date: '2025-05-14' },
  { id: 2, stall: 'Healthy Bites Cafe', review: 'Loved the quinoa bowl, very tasty and healthy.', date: '2025-05-12' },
  { id: 3, stall: 'Juice Junction', review: 'Smoothies are fresh but a bit pricey.', date: '2025-05-11' },
];

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    phone: '+1 234 567 890',
    bio: 'I love coding and design!',
  });
  const navigate = useNavigate();
  const logout = useStore((state) => state.logout);

  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(user);

  const [linkedPayments, setLinkedPayments] = useState(['esewa']);
  const [selectedPayment, setSelectedPayment] = useState('esewa');
  const [editPayments, setEditPayments] = useState(false);

  const [historyOpen, setHistoryOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);
  const [activityOpen, setActivityOpen] = useState(false);

  const [profileImage, setProfileImage] = useState(userIcon);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setEditMode(false);
  };

  const handleSelectPayment = (id) => {
    if (editPayments) {
      setSelectedPayment(id);
      if (!linkedPayments.includes(id)) {
        setLinkedPayments(prev => [...prev, id]);
      }
    }
  };

  const handleRemovePayment = (id) => {
    setLinkedPayments(prev => prev.filter(method => method !== id));
    if (selectedPayment === id) {
      const remaining = linkedPayments.filter(m => m !== id);
      setSelectedPayment(remaining.length > 0 ? remaining[0] : null);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="profile-page">
      <h1>My Profile</h1>

      {/* Profile Section */}
      <section className="profile-container">
        <div className="profile-image-wrapper">
          <label htmlFor="profile-upload" className="profile-image-overlay">
            <span>Change Profile Picture</span>
          </label>
          <input
            type="file"
            id="profile-upload"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <img src={profileImage} alt="User profile" className="profile-image" />
        </div>

        <article className="profile-info">
          {editMode ? (
            <>
              {['name', 'email', 'phone'].map((field) => (
                <label key={field}>
                  {field.charAt(0).toUpperCase() + field.slice(1)}:
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                </label>
              ))}
              <label>
                Bio:
                <textarea name="bio" value={formData.bio} onChange={handleChange} />
              </label>

              <div className="buttons">
                <button className="save-btn" onClick={handleSave}>Save</button>
                <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
              </div>
            </>
          ) : (
            <>
              <p className="profile-detail"><strong>Name:</strong> {user.name}</p>
              <p className="profile-detail"><strong>Email:</strong> {user.email}</p>
              <p className="profile-detail"><strong>Phone:</strong> {user.phone}</p>
              <p className="profile-detail"><strong>Bio:</strong> {user.bio}</p>
              <button className="edit-btn" onClick={() => setEditMode(true)}>Edit Profile</button>
            </>
          )}
        </article>
      </section>

      {/* Divider Line */}
      <hr className="section-divider" />

      {/* Combined Purchase History, Payment Methods, and Recent Activity Section */}
      <section className="history-payment-section">
        {/* Purchase History */}
        <div className="purchase-history">
          <h2>
            Purchase History
            <button
              className="dropdown-toggle"
              onClick={() => setHistoryOpen(!historyOpen)}
              aria-expanded={historyOpen}
              aria-controls="purchase-history-list"
            >
              {historyOpen ? '▲' : '▼'}
            </button>
          </h2>
          {historyOpen && (
            <ul id="purchase-history-list" className="purchase-history-list">
              {purchaseHistoryData.map(({ id, date, item, amount, location }) => (
                <li key={id} className="purchase-history-item">
                  <strong>{date}</strong>: {item} — {amount} (Location: {location})
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Linked Payment Methods */}
        <div className="payment-section">
          <h2>
            Linked Payment Methods
            <button
              className="dropdown-toggle"
              onClick={() => setPaymentOpen(!paymentOpen)}
              aria-expanded={paymentOpen}
              aria-controls="payment-options-list"
            >
              {paymentOpen ? '▲' : '▼'}
            </button>
          </h2>

          {paymentOpen && (
            <>
              <div className="payment-options" id="payment-options-list">
                {paymentOptions.map(({ id, name, logo }) => (
                  <div
                    key={id}
                    className={`payment-option ${selectedPayment === id ? 'selected' : ''}`}
                    onClick={() => handleSelectPayment(id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && handleSelectPayment(id)}
                    title={editPayments ? `Click to select ${name}` : ''}
                  >
                    <img src={logo} alt={`${name} logo`} />
                  </div>
                ))}
              </div>
              <button className="edit-payments-btn" onClick={() => setEditPayments(!editPayments)}>
                <Pencil size={14} style={{ marginRight: '5px' }} /> {editPayments ? 'Save' : 'Edit payment methods'}
              </button>
            </>
          )}
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h2>
            Recent Activity
            <button
              className="dropdown-toggle"
              onClick={() => setActivityOpen(!activityOpen)}
              aria-expanded={activityOpen}
              aria-controls="recent-activity-list"
            >
              {activityOpen ? '▲' : '▼'}
            </button>
          </h2>
          {activityOpen && (
            <ul id="recent-activity-list" className="recent-activity-list">
              {recentActivityData.map(({ id, stall, review, date }) => (
                <li key={id} className="recent-activity-item">
                  <strong>{date}</strong> - <em>{stall}</em>: {review}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* Logout Button */}
      <section className="logout-section">
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem('token'); // clear token from localStorage
            logout(); // clear user state from zustand store
            navigate('/'); // redirect user to home or login
          }}
        >
          Log Out
        </button>
      </section>
    </main>
  );
};

export default ProfilePage;
