import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Mail, ChefHat, Search, User } from 'lucide-react';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Message sent! (Check console for data)');
  };

  return (
    <div className="contact-page">
      {/* --- HEADER --- */}
      <header className="header">
        <div className="logo">
          <img 
            src="logo.jpg" 
            alt="Kaiseki Kitchen Logo" 
            className="logo-img" 
          />
          <span className="logo-text">Kaiseki kitchen</span>
        </div>
        
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">HOME</a>
          <a href="#categories">CATEGORIES</a>
          <a href="#contact" className="active">CONTACT</a>
          <a href="#about">ABOUT</a>
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

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>CONTACT US</h1>
        </div>
      </section>

      {/* --- MAIN CONTACT SECTION --- */}
      <section className="contact-main">
        <div className="contact-container">
          
          {/* Left Side: Info */}
          <div className="contact-info">
            <h2>GET IN TOUCH!</h2>
            <p>
              We'd love to hear from you! Whether you have a question about a specific recipe, 
              need help finding the right traditional ingredients, or just want to share a photo 
              of your latest Japanese culinary masterpiece, our kitchen is always open. Drop us a 
              message below, and we'll get back to you as soon as we finish our bowl of ramen.
            </p>

            <div className="info-items">
              <div className="info-item">
                <Mail className="icon" />
                <div className="info-text">
                  <span>support@kaisekikitchen.com</span>
                  <span>info@kaisekikitchen.com</span>
                </div>
              </div>
              <div className="info-item">
                <ChefHat className="icon" />
                <div className="info-text">
                  <span>recipes@kaisekikitchen.com</span>
                  <span>submit@kaisekikitchen.com</span>
                </div>
              </div>
            </div>

            <hr className="divider" />

            <div className="social-links">
              <span>FOLLOW US</span>
              <div className="social-icons">
                <a href="#fb" aria-label="Facebook"><img src="/fblogo.webp" alt="Facebook" /></a>
                <a href="#tw" aria-label="Instagram"><img src="/instalogo.jpg" alt="Instagram" /></a>
                <a href="#x" aria-label="X"><img src="/twitterlogo.jpg" alt="X" /></a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First name</label>
                  <input 
                    type="text" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last name</label>
                  <input 
                    type="text" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>What can I help you?</label>
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-img"></div>
        <div className="footer-content">
          <p className="quote">"Bringing the Art of Japanese Cuisine to Your Kitchen."</p>
          <div className="footer-links">
            <a href="#about" className="footer-link-text">About us</a>
            
            <div className="footer-social">
              <span>Follow us</span>
              <div className="footer-social-icons">
                <img src="/fblogo.webp" alt="Facebook" />
                <img src="/instalogo.jpg" alt="Instagram" />
                <img src="/twitterlogo.jpg" alt="X" />
              </div>
            </div>
            
            <a href="#contact" className="footer-link-text">Contact us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;