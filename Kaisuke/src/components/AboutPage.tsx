import { Search, User } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* --- HEADER (Original) --- */}
      <header className="header">
        <div className="logo">
          <img src="logo.jpg" alt="Kaiseki Kitchen Logo" className="logo-img" />
          <span className="logo-text">Kaiseki kitchen</span>
        </div>
        
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">HOME</a>
          <a href="#categories">CATEGORIES</a>
          <a href="#contact">CONTACT</a>
          <a href="#about" className="active">ABOUT</a>
        </nav>
        
        <div className="header-actions">
          <div className="search-bar">
            <Search size={16} className="search-icon" />
          </div>
          <div className="user-icon">
            <User size={18} />
          </div>
        </div>
      </header>

      <section className="about-hero">
        <div className="hero-bg-circle"></div> 
        
        <div className="hero-text-content">
          <div className="about-badge">ABOUT US</div>
          <h1 className="hero-title">Bring Authentic<br/>Japan to Your<br/>Table</h1>
          <p className="hero-description">
            Welcome to Kaiseki Kitchen, your ultimate guide for authentic Japanese cuisine. Inspired by the deep-rooted 
            tradition of Kaiseki dining, we are dedicated to sharing the beauty of Japanese cooking with food 
            enthusiasts worldwide. Our platform offers a carefully curated selection of recipes, 
            from delicate sushi rolls to hearty ramen bowls, allowing you to experience authentic Japanese flavors 
            in your own kitchen.
          </p>
        </div>

        <div className="hero-image-container">
          <img 
            src="/ramen.png" 
            alt="Authentic Ramen" 
            className="hero-img"
          />
        </div>
      </section>

      <section className="philosophy-section">
        <div className="philosophy-container">
          <div className="philosophy-image-container">
            <div className="white-circle-bg"></div>
            <img 
              src="/sushie.png" 
              alt="Sushi Platter" 
              className="philosophy-img"
            />
          </div>
          
          <div className="philosophy-text">
            <h2>The Kaiseki Philosophy</h2>
            <p>
              We believe that Japanese cooking is more than just a list of ingredients. It is about respecting the 
              seasons, balancing flavors, and presenting food with care. Whether you are rolling your very first maki or 
              simmering a complex dashi broth, our goal is to simplify these traditional techniques 
              so you can recreate the magic of a Japanese kitchen right at home.
            </p>
            <p className="image-suggestion">
              Image Suggestion: A close-up of fresh ingredients (like sushi-grade fish, a daikon radish, or a bamboo rolling mat), or hands carefully chopping green onions on a wooden board.
            </p>
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-image-wrapper">
             <div className="pink-circle-ring">
               <img 
                src="/chef1.png" 
                alt="Chef Illustration" 
                className="mission-img"
               />
             </div>
          </div>
          <div className="mission-text-box">
            <p>
              At Kaiseki Kitchen, we believe that Japanese cooking should be accessible to everyone. Our mission 
              is to inspire creativity while honoring the rich cultural heritage of Japanese cuisine, bringing 
              families and friends together, one meal at a time.
            </p>
          </div>
        </div>
        <div className="floating-circle left-circle"></div>
        <div className="floating-circle right-circle"></div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-text-box">
            <p>
              Join us in discovering the beauty, balance, and taste of Japan one recipe at a time. Browse our 
              collection and start your Japanese cooking journey today!
            </p>
          </div>
          <div className="cta-image-wrapper">
            <div className="pink-circle-ring">
              <img 
                src="/chef2.png" 
                alt="Chef Illustration 2" 
                className="cta-img"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p className="quote">"Bringing the Art of Japanese Cuisine to Your Kitchen."</p>
          <div className="footer-links">
            <a href="/about" className="footer-link-text">About us</a>
            
            <div className="footer-social">
              <span>Follow us</span>
              <div className="footer-social-icons">
                <img src="/fblogo.webp" alt="Facebook" />
                <img src="/instalogo.jpg" alt="Instagram" />
                <img src="/twitterlogo.jpg" alt="X" />
              </div>
            </div>
            
            <a href="/contact" className="footer-link-text">Contact us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;