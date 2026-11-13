import { Search, User, ArrowRight, Sparkles } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* CONSISTENT HEADER (Same as Home/Categories) */}
      <header className="header">
        <a className="logo" href="#home" aria-label="Kaisuki Kitchen home">
          <img src="logo.jpg" alt="" className="logo-img" />
          <span>Kaisuki kitchen</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">HOME</a>
          <a href="#categories">CATEGORIES</a>
          <a href="#contact">CONTACT</a>
          <a href="#about" className="active" aria-current="page">ABOUT</a>
        </nav>
        <div className="header-actions">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
          </div>
          <div className="user-icon" aria-hidden="true">
            <User size={18} />
          </div>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="about-hero">
        <div className="hero-text-content">
          <div className="about-badge">
            <Sparkles size={14} /> ABOUT US
          </div>
          <h1 className="hero-title">
            Bring Authentic<br/>
            Japan to Your<br/>
            Table
          </h1>
          <p className="hero-description">
            Welcome to Kaisuki Kitchen, your ultimate guide for authentic Japanese cuisine. 
            Inspired by the deep-rooted tradition of Kaisuki dining, we are dedicated to sharing 
            the beauty of Japanese cooking with food enthusiasts worldwide. Our platform offers 
            a carefully curated selection of recipes, from delicate sushi rolls to hearty ramen bowls.
          </p>
          <a href="#philosophy" className="hero-cta">
            Discover Our Story <ArrowRight size={16} />
          </a>
        </div>

        <div className="hero-image-container">
          <div className="hero-bg-circle"></div>
          <img 
            src="/ramen.png" 
            alt="Authentic Ramen" 
            className="hero-img"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x500/ffb6b9/fff?text=Ramen'; }}
          />
          <div className="hero-float-badge">
            <span className="hero-float-emoji">🍜</span>
            <div>
              <span className="hero-float-title">50+ Recipes</span>
              <span className="hero-float-sub">Authentic Japanese</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="philosophy-section" id="philosophy">
        <div className="philosophy-container">
          <div className="philosophy-image-container">
            <div className="philosophy-circle-bg"></div>
            <img 
              src="/sushie.png" 
              alt="Sushi Platter" 
              className="philosophy-img"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/fff/db3339?text=Sushi'; }}
            />
          </div>
          
          <div className="philosophy-text">
            <span className="section-badge light">OUR PHILOSOPHY</span>
            <h2>The Kaisuki Philosophy</h2>
            <p>
              We believe that Japanese cooking is more than just a list of ingredients. 
              It is about respecting the seasons, balancing flavors, and presenting food with care.
            </p>
            <p>
              Whether you are rolling your very first maki or simmering a complex dashi broth, 
              our goal is to simplify these traditional techniques so you can recreate the magic 
              of a Japanese kitchen right at home.
            </p>
            <div className="philosophy-stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Recipes</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">9</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION SECTION --- */}
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-image-wrapper">
            <div className="pink-circle-ring">
              <img 
                src="/chef1.png" 
                alt="Chef Illustration"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x200/ffb6b9/db3339?text=Chef'; }}
              />
            </div>
          </div>
          <div className="mission-text-box">
            <span className="section-badge">OUR MISSION</span>
            <h2>Cooking Made Accessible</h2>
            <p>
              At Kaisuki Kitchen, we believe that Japanese cooking should be accessible to everyone. 
              Our mission is to inspire creativity while honoring the rich cultural heritage of Japanese 
              cuisine, bringing families and friends together, one meal at a time.
            </p>
          </div>
        </div>
        <div className="floating-circle left-circle"></div>
        <div className="floating-circle right-circle"></div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-text-box">
            <span className="section-badge">START YOUR JOURNEY</span>
            <h2>Ready to Cook?</h2>
            <p>
              Join us in discovering the beauty, balance, and taste of Japan one recipe at a time. 
              Browse our collection and start your Japanese cooking journey today!
            </p>
            <a href="#categories" className="cta-btn">
              Explore Categories <ArrowRight size={16} />
            </a>
          </div>
          <div className="cta-image-wrapper">
            <div className="pink-circle-ring">
              <img 
                src="/chef2.png" 
                alt="Chef Illustration"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/200x200/ffb6b9/db3339?text=Chef'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Consistent with Home/Categories) --- */}
      <footer className="categories-footer">
        <p className="categories-quote">"Bringing the Art of Japanese Cuisine to Your Kitchen."</p>
        <div className="categories-footer-links">
          <a href="#about">About us</a>
          <div className="categories-social">
            <span>Follow us</span>
            <div className="categories-social-icons">
              <a href="#facebook" aria-label="Facebook"><img src="/fblogo.webp" alt="" /></a>
              <a href="#instagram" aria-label="Instagram"><img src="/instalogo.jpg" alt="" /></a>
              <a href="#twitter" aria-label="X"><img src="/twitterlogo.jpg" alt="" /></a>
            </div>
          </div>
          <a href="#contact">Contact us</a>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;