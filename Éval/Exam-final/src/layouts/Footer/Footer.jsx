import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useAuth } from '../../auth/AuthProvider';
import './footer.scss';

export default function Footer() {
  const { user } = useAuth();
  
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <Link to="/">
            <img src="./batman-01-logo.png" alt="Logo" />
          </Link>
        </div>
        
        <nav className="footer__nav">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="footer__social">
          <a href="#" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="#" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

        <div className="footer__copyright">
          <p>&copy;  Super Héros DB - Tout droits réservés</p>
        </div>
      </div>
    </footer>
  );
}