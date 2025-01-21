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
            <img src="./images.png" alt="Logo" />
          </Link>
        </div>
        
        <nav className="footer__nav">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            {user && (
              <li><Link to="/héros">Héros</Link></li>
            )}
            <li><Link to="https://store.ubisoft.com/fr/for-honor/659ea90829c01c38968dce19.html" target='_blank'>Acheter le jeu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="footer__social">
          <a href="https://www.facebook.com/ForHonorFR/?locale=fr_FR" target='_blank'><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://x.com/ForHonorGame" target='_blank'><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com/forhonorgame/?hl=fr" target='_blank'><FontAwesomeIcon icon={faInstagram} /></a>
        </div>

        <div className="footer__copyright">
          <p>&copy; For Honor HUB depuis 1304</p>
        </div>
      </div>
    </footer>
  );
}