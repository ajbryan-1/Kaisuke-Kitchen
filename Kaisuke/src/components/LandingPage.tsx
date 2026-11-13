import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Clock, ChefHat, BookOpen, Users, ChevronDown } from 'lucide-react';
import './LandingPage.css';

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* ============ HERO ============ */}
      <section className="landing-hero">
        <div className="landing-hero-bg"></div>
        <div className="landing-hero-overlay"></div>
        
        {/* Navbar */}
        <nav className={`landing-nav ${scrolled ? 'scrolled' : ''}`}>
          <div className="landing-logo">
            <img src="/logo.jpg" alt="Kaisuke Kitchen" />
            <span>KAISUKE</span>
          </div>
          <div className="landing-nav-links">
            <a href="#home">Home</a>
            <a href="#categories">Categories</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
        
        {/* Hero Content */}
        <div className="landing-hero-content">
          <div className="landing-eyebrow">
            <Sparkles size={14} /> EST. 2024 · TOKYO
          </div>
          <h1 className="landing-title">
            KAISUKE<br /><span className="outline">KITCHEN</span>
          </h1>
          <p className="landing-tagline">The Art of Authentic Japanese Cuisine</p>
          <p className="landing-subtitle">
            Master traditional recipes. Learn forgotten techniques.<br />
            Bring the soul of Japan to your table.
          </p>
          <div className="landing-hero-ctas">
            <a href="#home" className="landing-btn primary">
              Enter Kitchen <ArrowRight size={18} />
            </a>
            <a href="#about" className="landing-btn ghost">
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll</span>
          <ChevronDown size={20} />
        </div>

        {/* Floating Emojis */}
        <span className="float-emoji e1">🍣</span>
        <span className="float-emoji e2">🍜</span>
        <span className="float-emoji e3">🥢</span>
        <span className="float-emoji e4">👨‍🍳</span>
        <span className="float-emoji e5">🍱</span>
        <span className="float-emoji e6">🍥</span>
      </section>

      {/* ============ PHILOSOPHY ============ */}
      <section className="landing-philosophy">
        <div className="philosophy-content">
          <span className="landing-badge">OUR PHILOSOPHY</span>
          <h2>More Than Just Recipes</h2>
          <p>
            Kaisuke Kitchen is a celebration of Japanese culinary tradition. 
            We believe cooking is more than just following instructions—it's about 
            respecting the seasons, balancing flavors, and presenting each dish with care.
          </p>
        </div>
        <div className="philosophy-stats">
          <div className="stat">
            <span className="stat-num">50<span>+</span></span>
            <span className="stat-lbl">Recipes</span>
          </div>
          <div className="stat">
            <span className="stat-num">9</span>
            <span className="stat-lbl">Categories</span>
          </div>
          <div className="stat">
            <span className="stat-num">100<span>%</span></span>
            <span className="stat-lbl">Authentic</span>
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="landing-features">
        <div className="features-header">
          <span className="landing-badge dark">WHAT AWAITS YOU</span>
          <h2>Your Culinary Journey</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><BookOpen size={24} /></div>
            <h3>Curated Recipes</h3>
            <p>Step-by-step guides to authentic Japanese dishes, from beginner to advanced.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><ChefHat size={24} /></div>
            <h3>Master Techniques</h3>
            <p>Learn the secrets behind traditional Japanese cooking methods.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Clock size={24} /></div>
            <h3>Quick & Clear</h3>
            <p>Every recipe shows prep time and steps so you can plan your meals easily.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Users size={24} /></div>
            <h3>Growing Community</h3>
            <p>Join fellow food lovers sharing their Japanese cooking journeys.</p>
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="landing-categories">
        <span className="landing-badge">EXPLORE BY CATEGORY</span>
        <h2>From Noodles to Nigiri</h2>
        <div className="category-chips">
          <a href="#categories" className="chip">🍜 Noodles</a>
          <a href="#categories" className="chip">🍣 Sushi</a>
          <a href="#categories" className="chip">🍚 Rice Bowls</a>
          <a href="#categories" className="chip">🍤 Fried</a>
          <a href="#categories" className="chip">🍢 Grilled</a>
          <a href="#categories" className="chip">🍲 Soups</a>
          <a href="#categories" className="chip">🥟 Street Food</a>
          <a href="#categories" className="chip">🍡 Desserts</a>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="landing-cta-section">
        <div className="cta-content">
          <span className="landing-badge light">READY TO START?</span>
          <h2>Bring Japan to<br />Your Table</h2>
          <p>Discover authentic recipes and create unforgettable meals in your own kitchen.</p>
          <a href="#home" className="landing-btn white">
            Start Cooking <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
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

export default LandingPage;