import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { ArrowRight } from "lucide-react";
import food_delivery from "../../assets/food_delivery.jpg";
import LoginPopup from "../../components/LoginPopup/LoginPopup";
import "./LandingPage.css";

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="landing-wrapper">
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
          <Button className="explore-button" onClick={() => setShowLogin(true)}>
            Explore Stalls <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* REPLACE THIS SECTION - Old LoginPopup rendering */}
      {/* {showLogin && <LoginPopup setShowLogin={setShowLogin} />} */}

      {/* NEW LoginPopup rendering with overlay */}
      {showLogin && (
        <div className="login-popup-overlay">
          <div className="login-popup-content">
            <LoginPopup setShowLogin={setShowLogin} />
          </div>
        </div>
      )}

      {/* About Section */}
      <section className="about-section" style={{ marginTop: "30px" }}>
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
    </div>
  );
}