import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import food_delivery from "../../assets/food_delivery.jpg";
import Footer from "../../components/Footer/Footer"; 
import { eventsData } from '../../assets/assets';
import "./LandingPage.css";

export default function LandingPage({ showLogin, setShowLogin }) {
  return (
    <div className="landing-wrapper" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Hero Section */}
      <section
        className="hero-section"
        style={{ backgroundImage: `url(${food_delivery})` }}
      >
        <div className="overlay" />

        <div className="hero-content">
          <h1>Discover Freshness Near You</h1>
          <p>
            Connect with your neighborhood stalls for organic, homemade, and fresh
            products—right from your screen.
          </p>
          <Button
            className="explore-button"
            onClick={() => setShowLogin(true)}
          >
            Explore Stalls <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-wrapper">
          <h2>Why Choose ShopLocally?</h2>
          <p>
            ShopLocally empowers you to support local stall owners and their food product by shopping
            directly from their stalls. By using our platform, you not only get fresh,
            organic food products but also help the local economy thrive. It's easy, fast, and
            sustainable!
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="features-wrapper">
          {[{
            title: "Local & Organic",
            emoji: "🧺",
            desc: "Support your local farmers and vendors.",
          },
          {
            title: "Real-Time Location",
            emoji: "📍",
            desc: "Find nearby stalls with live updates.",
          },
          {
            title: "Direct Orders",
            emoji: "🛒",
            desc: "Order fresh items right from your phone.",
          }].map((feature, idx) => (
            <div className="feature-box" key={idx}>
              <div className="emoji">{feature.emoji}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Events Preview Section */}
      <section className="events-preview-section">
        <div className="events-preview-wrapper">
          <h2>We Hold Exciting Events</h2>
          <p>
            Throughout the year, we organize various events where multiple stalls come together to deliver fresh, local, and organic food directly to you.
          </p>
          <div className="events-preview-grid">
            {eventsData.slice(0, 3).map(event => (
              <div key={event.id} className="event-preview-card">
                <img src={event.image} alt={event.title} className="event-preview-image" />
                <div className="event-preview-details">
                  <h4>{event.title}</h4>
                  <p>{event.description.slice(0, 80)}...</p>
                  <p><strong>📍 {event.location}</strong></p>
                </div>
              </div>
            ))}
          </div>
          <Button className="view-all-events-button" onClick={() => window.location.href = '/events'}>
            View All Events <ArrowRight size={18} />
          </Button>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="reviews-section">
        <div className="reviews-wrapper">
          <h2>What Our Customers Say</h2>
          <div className="reviews-grid">
            {[
              {
                name: "Anjali Sharma",
                review: "Absolutely love the freshness of the products! It's my go-to app for local shopping.",
              },
              {
                name: "Ramesh Thapa",
                review: "Very convenient and supports our local businesses. Highly recommend it!",
              },
              {
                name: "Sneha Joshi",
                review: "The real-time location feature is amazing. I found a new organic stall just 2 minutes away!",
              }
            ].map((review, index) => (
              <div className="review-card" key={index}>
                <div className="review-stars">
                  <span>★★★★★</span>
                  <span className="empty-stars">☆☆☆☆☆</span>
                </div>
                <p className="review-text">{review.review}</p>
                <p className="review-author">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
