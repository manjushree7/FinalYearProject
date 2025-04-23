import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import food_delivery from "../../assets/food_delivery.jpg";
import LoginPopup from "../../components/LoginPopup/LoginPopup";
import Footer from "../../components/Footer/Footer"; // Import the Footer
import "./LandingPage.css";

export default function LandingPage() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
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
          <Button className="explore-button" onClick={() => navigate('/home')}> 
            Explore Stalls <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {showLogin && (
        <div className="login-popup-overlay">
          <div className="login-popup-content">
            <LoginPopup setShowLogin={setShowLogin} />
          </div>
        </div>
      )}

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
          }]
            .map((feature, idx) => (
              <div className="feature-box" key={idx}>
                <div className="emoji">{feature.emoji}</div>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
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