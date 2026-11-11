import { useEffect, useState } from 'react';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Categories from './components/Categories';

type Page = 'home' | 'categories' | 'about' | 'contact';

function App() {
  const getCurrentPage = (): Page => {
    switch (window.location.hash) {
      case '#about':
        return 'about';
      case '#contact':
        return 'contact';
      case '#categories':
        return 'categories';
      default:
        return 'home';
    }
  };

  const [currentPage, setCurrentPage] = useState<Page>(getCurrentPage);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPage(getCurrentPage());
    };

    window.addEventListener('hashchange', handleNavigation);

    return () => {
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'categories' && <Categories />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}

export default App;