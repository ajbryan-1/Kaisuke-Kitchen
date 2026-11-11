import { useEffect, useState } from 'react';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

type Page = 'home' | 'about' | 'contact';

function App() {
  const getCurrentPage = (): Page => {
    switch (window.location.hash) {
      case '#about':
        return 'about';
      case '#contact':
        return 'contact';
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

  return (
    <div className="App">
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}

export default App;