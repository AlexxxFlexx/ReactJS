import { Link } from 'react-router';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page perdue au combat...</h2>
      <p>Retourez sur le champ de bataille à la recherche d'indices...</p>
      <Link to="/" className="home-link">Retour à l'accueil</Link>
    </div>
  );
}