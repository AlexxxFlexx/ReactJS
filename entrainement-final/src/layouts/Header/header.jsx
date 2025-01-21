import { useState } from 'react';
import { Link } from 'react-router';
import SignupForm from '../../components/SignupForm.jsx';
import './header.scss';
import { useAuth } from "../../auth/AuthProvider";

export default function Header() {
  const [showSignup, setShowSignup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src="./images.png" alt="Logo" />
        </Link>
      </div>

      <button className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`header__nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
          {user && (
            <li><Link to="/héros" onClick={() => setIsMenuOpen(false)}>Héros</Link></li>
          )}
          <li><Link to="https://store.ubisoft.com/fr/for-honor/659ea90829c01c38968dce19.html" target='_blank' onClick={() => setIsMenuOpen(false)}>Acheter le jeu</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>

      <div className={`header__actions ${isMenuOpen ? 'open' : ''}`}>
        {user ? (
          <button className="btn-primary" onClick={() => {
            logout();
            setIsMenuOpen(false);
          }}>
            Se déconnecter
          </button>
        ) : (
          <button className="btn-primary" onClick={() => {
            setShowSignup(true);
            setIsMenuOpen(false);
          }}>
            Se connecter
          </button>
        )}
      </div>

      {showSignup && <SignupForm onClose={() => setShowSignup(false)} />}
    </header>
  );
}