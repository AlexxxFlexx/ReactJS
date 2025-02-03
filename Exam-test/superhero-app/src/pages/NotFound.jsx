// src/pages/NotFound.jsx
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600 animate-bounce">404</h1>
          <div className="text-6xl font-bold text-gray-700 mb-4">Oops!</div>
          <div className="text-xl text-gray-600 mb-8">
            Cette page semble avoir disparu dans une autre dimension...
          </div>
        </div>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Retour à l'accueil
        </Link>

        <div className="mt-8 text-gray-500">
          <p>Suggestions :</p>
          <ul className="mt-2">
            <li>Vérifiez l'URL</li>
            <li>Retournez à la page précédente</li>
            <li>Commencez une nouvelle recherche</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NotFound;