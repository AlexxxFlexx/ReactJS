import { Link, useNavigate } from 'react-router';

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">SuperHero App</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-300">Accueil</Link>
          {isAuthenticated && (
            <>
              <Link to="/search" className="hover:text-gray-300">Recherche</Link>
              <Link to="/contact" className="hover:text-gray-300">Contact</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
              >
                Déconnexion
              </button>
            </>
          )}
          {!isAuthenticated && (
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
            >
              Connexion
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};