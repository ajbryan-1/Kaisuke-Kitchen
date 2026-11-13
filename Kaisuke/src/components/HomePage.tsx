import { useState } from 'react';
import { Search, User, ArrowRight, X, Clock, ChefHat } from 'lucide-react';
import './ContactPage.css';
import './HomePage.css';

const recipes = [
  // ... (Keep your existing recipes array - huwag galawin)
  {
    id: 1,
    name: 'Sushi (寿司)',
    category: 'Sushi',
    image: '/food/sushi/california.png',
    time: '30 mins',
    description: 'A classic Japanese dish consisting of vinegared rice accompanied by various ingredients like seafood and vegetables.',
    ingredients: ['Sushi rice', 'Nori seaweed', 'Fresh salmon', 'Cucumber', 'Avocado'],
    steps: [
      'Wash and cook sushi rice. Once cooked, mix in sushi vinegar and let it cool.',
      'Slice the salmon, cucumber, and avocado into long, thin strips.',
      'Place a sheet of nori on a bamboo mat, spread the rice evenly, and add the fillings.',
      'Roll the sushi tightly, wet the edge of the nori to seal, and slice into bite-sized pieces.'
    ]
  },
  {
    id: 2,
    name: 'Shrimp Tempura',
    category: 'Fried',
    image: '/food/tempura/shrimp_tempura.webp',
    time: '20 mins',
    description: 'Crispy, battered and deep-fried seafood or vegetables. The batter is light and fluffy, perfect with a dipping sauce.',
    ingredients: ['Large shrimp', 'Flour', 'Egg', 'Ice water', 'Tempura dipping sauce'],
    steps: [
      'Peel and devein the shrimp, leaving the tails intact. Make small cuts on the belly to straighten them.',
      'In a bowl, lightly whisk the egg and ice water. Add flour and mix gently; do not overmix (lumps are okay).',
      'Dip the shrimp into the batter, coating evenly.',
      'Deep fry in hot oil (175°C) for 2-3 minutes until golden and crispy. Drain on paper towels.'
    ]
  },
  {
    id: 3,
    name: 'Gyudon (牛丼)',
    category: 'Rice Bowls',
    image: '/food/donburi/Gyudon.webp',
    time: '25 mins',
    description: 'A popular Japanese rice bowl dish, consisting of beef and onions simmered in a mildly sweet and savory sauce.',
    ingredients: ['Thinly sliced beef', 'Onion', 'Soy sauce', 'Mirin', 'Steamed rice'],
    steps: [
      'Slice the onion thinly. In a pan, combine soy sauce, mirin, sugar, and water (or dashi) and bring to a boil.',
      'Add the onions and simmer until soft and translucent.',
      'Add the thinly sliced beef and cook until just done (do not overcook).',
      'Serve the beef and onions over a hot bowl of steamed rice and pour the sauce on top.'
    ]
  },
  {
    id: 4,
    name: 'Shio Ramen',
    category: 'Noodles',
    image: '/food/ramen/shio_ramen.png',
    time: '40 mins',
    description: 'A light and clear ramen broth seasoned primarily with salt. It highlights the natural flavors of the ingredients.',
    ingredients: ['Ramen noodles', 'Chicken broth', 'Sea salt', 'Chashu pork', 'Soft-boiled egg', 'Scallions'],
    steps: [
      'Heat the chicken broth and season with sea salt to taste (shio tare).',
      'Cook the ramen noodles in boiling water according to the package instructions, then drain.',
      'Place the noodles in a bowl and pour the hot broth over them.',
      'Top with sliced chashu pork, a halved soft-boiled egg, and chopped scallions.'
    ]
  },
  {
    id: 5,
    name: 'Yakitori (焼き鳥)',
    category: 'Grilled',
    image: '/food/yakitori/momo.png',
    time: '15 mins',
    description: 'Japanese skewered chicken, typically grilled over charcoal and seasoned with either salt (shio) or a sweet soy sauce (tare).',
    ingredients: ['Chicken thigh', 'Bamboo skewers', 'Soy sauce', 'Mirin', 'Sugar', 'Leeks'],
    steps: [
      'Soak bamboo skewers in water for 30 minutes. Cut chicken and leeks into bite-sized pieces.',
      'Thread chicken and leeks alternately onto the skewers.',
      'Make the tare sauce by simmering soy sauce, mirin, and sugar in a small pan until slightly thickened.',
      'Grill the skewers over medium-high heat until cooked. Brush with tare sauce during the last few minutes of grilling.'
    ]
  },
  {
    id: 6,
    name: 'Katsudon (カツ丼)',
    category: 'Rice Bowls',
    image: '/food/donburi/katsudon.jpg',
    time: '35 mins',
    description: 'A comforting rice bowl topped with a deep-fried pork cutlet, egg, and onions simmered in a savory broth.',
    ingredients: ['Pork loin', 'Panko breadcrumbs', 'Egg', 'Onion', 'Dashi broth', 'Steamed rice'],
    steps: [
      'Coat the pork loin in flour, dip in beaten egg, and coat with panko breadcrumbs. Deep fry until golden and cooked through.',
      'In a small pan, simmer dashi broth, soy sauce, and mirin. Add sliced onions and cook until soft.',
      'Slice the cooked pork cutlet and add it to the pan. Pour beaten eggs over the top, cover, and cook until the egg is just set.',
      'Slide the pork and egg mixture over a bowl of hot steamed rice.'
    ]
  },
];

const categories = ['All', 'Noodles', 'Sushi', 'Rice Bowls', 'Fried', 'Grilled'];

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState<typeof recipes[0] | null>(null);

  const filteredRecipes = recipes.filter(recipe => {
    if (searchQuery.trim() !== '') {
      return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    }
    return activeFilter === 'All' || recipe.category === activeFilter;
  });

  const clearSearch = () => {
    setSearchQuery('');
    setActiveFilter('All');
  };

  return (
    <div className="home-page" id="home">
      
      {/* ==========================================
          FLOATING CHEF-THEMED BACKGROUND ELEMENTS
          ========================================== */}
      <div className="floating-bg-elements" aria-hidden="true">
        <span className="float-item" style={{ top: '8%', left: '5%', animationDelay: '0s' }}>🍣</span>
        <span className="float-item" style={{ top: '15%', right: '8%', animationDelay: '2s' }}>🍜</span>
        <span className="float-item" style={{ top: '30%', left: '3%', animationDelay: '4s' }}>🥢</span>
        <span className="float-item" style={{ top: '50%', right: '5%', animationDelay: '1s' }}>👨‍🍳</span>
        <span className="float-item" style={{ top: '65%', left: '8%', animationDelay: '3s' }}>🍱</span>
        <span className="float-item" style={{ top: '80%', right: '10%', animationDelay: '5s' }}>🍙</span>
        <span className="float-item" style={{ top: '40%', right: '45%', animationDelay: '6s' }}>🍤</span>
        <span className="float-item" style={{ top: '60%', left: '40%', animationDelay: '2.5s' }}>🥟</span>
        <span className="float-item" style={{ top: '72%', right: '35%', animationDelay: '1.5s' }}>🔪</span>
        <span className="float-item" style={{ top: '25%', left: '60%', animationDelay: '3.5s' }}>🍵</span>
        <span className="float-item" style={{ top: '88%', left: '55%', animationDelay: '4.5s' }}>🍥</span>
        <span className="float-item" style={{ top: '12%', left: '80%', animationDelay: '0.5s' }}>🥡</span>
      </div>

      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="/logo.jpg" alt="Kaiseki Kitchen Logo" className="logo-img" />
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
            <input 
              type="text" 
              placeholder="Search recipes..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={clearSearch}>
                <X size={14} />
              </button>
            )}
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
          <h1>Embrace the<br />Japanese<br />Cuisine</h1>
          <p>Authentic recipes. Expert tips. Endless flavors.</p>
          <a href="#categories" className="home-explore-btn">
            Explore Recipes <ArrowRight size={16} />
          </a>
        </div>
        <div className="home-hero-image">
          <img src="/food/ramen/Shoyu_ramen.jpg" alt="Japanese Shoyu Ramen" />
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="home-offer">
        <div className="home-offer-card">
          <h2 className="home-section-title">What we offer</h2>
          <p>
            Forget takeout. We bring the vibrant tastes of Japan straight to your stovetop. 
            Our collection spans the spectrum of Japanese cuisine—from light, citrusy bites 
            to deeply savory noodle soups. Each recipe is a masterclass in balance, giving 
            you the confidence to recreate izakaya favorites and comforting home-style dishes 
            with simple, accessible steps.
          </p>
        </div>
      </section>

      {/* POPULAR RECIPES / SEARCH RESULTS */}
      <section className="home-recipes" id="categories">
        <div className="home-recipes-header">
          <h2 className="home-section-title">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Popular Recipe'}
          </h2>
          <div className="home-view-all">
            <a href="#categories">View all recipes <ArrowRight size={14} /></a>
          </div>
        </div>

        {!searchQuery && (
          <div className="filter-buttons">
            {categories.map(category => (
              <button 
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="home-recipe-grid" id="all-recipes">
          {filteredRecipes.length > 0 ? (
            filteredRecipes.map((recipe) => (
              <article 
                className="home-recipe-card" 
                key={recipe.id}
                onClick={() => setSelectedRecipe(recipe)}
              >
                <div className="home-recipe-image">
                  <img src={recipe.image} alt={recipe.name} loading="lazy" />
                  <div className="recipe-overlay">
                    <span>View Recipe</span>
                  </div>
                </div>
                <div className="home-recipe-details">
                  <h3>{recipe.name}</h3>
                  <span className="recipe-time"><Clock size={12}/> {recipe.time}</span>
                </div>
              </article>
            ))
          ) : (
            <div className="no-results">
              <h3>No recipes found 😔</h3>
              <p>We couldn't find anything for "{searchQuery}".</p>
              <button className="clear-search-action" onClick={clearSearch}>
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* RECIPE MODAL */}
      {selectedRecipe && (
        <div className="modal-overlay" onClick={() => setSelectedRecipe(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedRecipe(null)}>
              <X size={24} />
            </button>
            <div className="modal-image">
              <img src={selectedRecipe.image} alt={selectedRecipe.name} />
            </div>
            <div className="modal-info">
              <span className="modal-category">{selectedRecipe.category}</span>
              <h2>{selectedRecipe.name}</h2>
              <div className="modal-meta">
                <span><Clock size={16} /> {selectedRecipe.time}</span>
                <span><ChefHat size={16} /> Easy to Cook</span>
              </div>
              <div className="modal-description">
                <p>{selectedRecipe.description}</p>
              </div>
              <div className="modal-ingredients">
                <h3>Ingredients:</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
              </div>
              <div className="modal-process">
                <h3>How to Cook:</h3>
                <ol>
                  {selectedRecipe.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="categories-footer">
        <p className="categories-quote">"Bringing the Art of Japanese Cuisine to Your Kitchen."</p>
        <div className="categories-footer-links">
          <a href="#about">About us</a>
          <div className="categories-social">
            <span>Follow us</span>
            <div className="categories-social-icons">
              <a href="#facebook" aria-label="Facebook"><img src="/fblogo.webp" alt="Facebook" /></a>
              <a href="#instagram" aria-label="Instagram"><img src="/instalogo.jpg" alt="Instagram" /></a>
              <a href="#twitter" aria-label="X"><img src="/twitterlogo.jpg" alt="X" /></a>
            </div>
          </div>
          <a href="#contact">Contact us</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;