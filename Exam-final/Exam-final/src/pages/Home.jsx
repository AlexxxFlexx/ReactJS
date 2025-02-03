import { useState } from 'react';
import { useNavigate } from 'react-router';

const Home = ({ isAuthenticated }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Découvrez l'Univers des Super-Héros
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto px-4">
          Explorez les pouvoirs, les histoires et les statistiques de vos super-héros préférés.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Bienvenue sur SuperHero App</h2>
        <p className="text-lg text-gray-600 mb-8">
          Notre application vous permet d'explorer une vaste base de données de super-héros,
          d'découvrir leurs capacités et leur histoire. Connectez-vous pour commencer votre voyage !
        </p>
      </section>

      {/* Search Section - visible only when authenticated */}
      {isAuthenticated && (
        <section className="max-w-2xl mx-auto px-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un super-héros..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Rechercher
            </button>
          </form>
        </section>
      )}

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 mt-12">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Base de Données Complète</h3>
          <p className="text-gray-600">Accédez à des informations détaillées sur des centaines de super-héros.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Recherche Avancée</h3>
          <p className="text-gray-600">Trouvez rapidement les héros qui vous intéressent.</p>
        </div>
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Statistiques Détaillées</h3>
          <p className="text-gray-600">Analysez les capacités et caractéristiques de chaque héros.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;