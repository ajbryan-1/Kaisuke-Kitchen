
import { Search, User, ArrowRight } from 'lucide-react';
import './ContactPage.css';
import './HomePage.css';

const recipes = [
  {
    name: 'Sushi (寿司)',
    image: '/food/sushi/california.png',
  },
  {
    name: 'Shrimp Tempura',
    image: '/food/tempura/shrimp_tempura.webp',
  },
  {
    name: 'Gyudon (牛丼)',
    image: '/food/donburi/Gyudon.webp',
  },
  {
    name: 'Shio Ramen',
    image: '/food/ramen/shio_ramen.png',
  },
  {
    name: 'Yakitori (焼き鳥)',
    image: '/food/yakitori/momo.png',
  },
  {
    name: 'Katsudon (カツ丼)',
    image: '/food/donburi/katsudon.jpg',
  },
];

function HomePage() {
  return (
    <div className="home-page" id="home">

      {/* HEADER - ORIGINAL CONTACT PAGE DESIGN */}
      <header className="header">

        <div className="logo">
          <img
            src="/logo.jpg"
            alt="Kaiseki Kitchen Logo"
            className="logo-img"
          />
          <span className="logo-text">Kaiseki kitchen</span>
        </div>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home" className="active">HOME</a>
          <a href="#categories">CATEGORIES</a>
          <a href="#contact">CONTACT</a>
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

      {/* HERO SECTION */}
      <section className="home-hero">

        <div className="home-hero-text">

          <span className="home-label">Food | Dessert</span>

          <h1>
            Embrace the
            <br />
            Japanese
            <br />
            Cuisine
          </h1>

          <p>
            Authentic recipes. Expert tips. Endless flavors.
          </p>

          <a href="#categories" className="home-explore-btn">
            Explore Recipes
            <ArrowRight size={14} />
          </a>

        </div>

        <div className="home-hero-image">
          <img
            src="/food/ramen/Shoyu_ramen.jpg"
            alt="Japanese Shoyu Ramen"
          />
        </div>

      </section>

      {/* WHAT WE OFFER */}
      <section className="home-offer">

        <h2 className="home-section-title">
          What we offer
        </h2>

        <p>
          Forget takeout. We bring the vibrant tastes of Japan straight
          to your stovetop. Our collection spans the spectrum of Japanese
          cuisine—from light, citrusy bites to deeply savory noodle soups.
          Each recipe is a masterclass in balance, giving you the
          confidence to recreate izakaya favorites and comforting
          home-style dishes with simple, accessible steps.
        </p>

      </section>

      {/* POPULAR RECIPES */}
      <section className="home-recipes" id="categories">

        <h2 className="home-section-title">
          Popular Recipe
        </h2>

        <div className="home-view-all">
          <a href="#all-recipes">
            View all recipes
            <ArrowRight size={14} />
          </a>
        </div>

        <div className="home-recipe-grid" id="all-recipes">

          {recipes.map((recipe) => (
            <article
              className="home-recipe-card"
              key={recipe.name}
            >

              <div className="home-recipe-image">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  loading="lazy"
                />
              </div>

              <div className="home-recipe-details">
                <h3>{recipe.name}</h3>
              </div>

            </article>
          ))}

        </div>

      </section>

      {/* FOOTER - RED JAPANESE WAVE DESIGN ONLY */}
      <footer className="footer" id="about">

        <div className="footer-content">

          <p className="quote">
            "Bringing the Art of Japanese Cuisine to Your Kitchen."
          </p>

          <div className="footer-links">

            <a href="#about" className="footer-link-text">
              About us
            </a>

            <div className="footer-social">

              <span>Follow us</span>

              <div className="footer-social-icons">

                <a href="#facebook" aria-label="Facebook">
                  <img src="/fblogo.webp" alt="Facebook" />
                </a>

                <a href="#instagram" aria-label="Instagram">
                  <img src="/instalogo.jpg" alt="Instagram" />
                </a>

                <a href="#twitter" aria-label="X">
                  <img src="/twitterlogo.jpg" alt="X" />
                </a>

              </div>

            </div>

            <a href="#contact" className="footer-link-text">
              Contact us
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default HomePage;
