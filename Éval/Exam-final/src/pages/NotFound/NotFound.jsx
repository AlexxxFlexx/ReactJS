import { Link } from 'react-router';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page introuvable.</h2>
      <p>Trouvez un héro plus compétant !</p>
      <Link to="/" className="home-link">Retour à l'accueil</Link>
    </div>
  );
}