// src/pages/Search.jsx
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router';
import { searchHeroes } from '../services/superheroApi';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('query') || '');
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;

    setSearchParams({ query: searchQuery });
    setIsLoading(true);
    setError(null);

    try {
      const results = await searchHeroes(searchQuery);
      setHeroes(results);
    } catch (err) {
      setError('Erreur lors de la recherche. Veuillez réessayer.');
      setHeroes([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Effectuer la recherche si query est présent dans l'URL
  useEffect(() => {
    if (searchParams.get('query')) {
      handleSearch();
    }
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Rechercher un Super-Héros</h1>

      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Nom du super-héros..."
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            disabled={isLoading}
          >
            {isLoading ? 'Recherche...' : 'Rechercher'}
          </button>
        </div>
      </form>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {heroes.map((hero) => (
          <Link
            key={hero.id}
            to={`/hero/${hero.id}`}
            className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
              <img
                src={hero.image.url}
                alt={hero.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-center">{hero.name}</h3>
            </div>
          </Link>
        ))}
      </div>

      {heroes.length === 0 && !isLoading && searchParams.get('query') && (
        <div className="text-center py-8 text-gray-600">
          Aucun super-héros trouvé. Essayez une autre recherche.
        </div>
      )}
    </div>
  );
};

export default Search;