import { useEffect, useLayoutEffect, useState } from 'react';

import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Categories from './components/Categories';

type Page = 'landing' | 'home' | 'categories' | 'about' | 'contact';

function App() {
  const getCurrentPage = (): Page => {
    switch (window.location.hash) {
      case '#home': return 'home';
      case '#categories': return 'categories';
      case '#contact': return 'contact';
      case '#about': return 'about';
      default: return 'landing'; // Default na ang landing
    }
  };

  const [currentPage, setCurrentPage] = useState<Page>(getCurrentPage);

  useEffect(() => {
    const handleNavigation = () => setCurrentPage(getCurrentPage());
    window.addEventListener('hashchange', handleNavigation);
    return () => window.removeEventListener('hashchange', handleNavigation);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="App">
      {currentPage === 'landing' && <LandingPage />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'categories' && <Categories />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}

export default App;