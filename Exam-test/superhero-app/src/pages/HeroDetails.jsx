// src/pages/HeroDetails.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { getHeroById } from '../services/superheroApi';

const StatBar = ({ value, label }) => (
  <div className="mb-2">
    <div className="flex justify-between mb-1">
      <span>{label}</span>
      <span>{value}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

const HeroDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hero, setHero] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroDetails = async () => {
      try {
        const data = await getHeroById(id);
        setHero(data);
      } catch (err) {
        setError('Erreur lors du chargement des détails du héros.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeroDetails();
  }, [id]);

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Retour
        </button>
      </div>
    );
  }

  if (!hero) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Retour
      </button>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={hero.image.url}
            alt={hero.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{hero.name}</h1>
          
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Biographie</h2>
            <p><strong>Nom complet :</strong> {hero.biography['full-name']}</p>
            <p><strong>Alter egos :</strong> {hero.biography['alter-egos']}</p>
            <p><strong>Alignement :</strong> {hero.biography.alignment}</p>
            <p><strong>Éditeur :</strong> {hero.biography.publisher}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Apparence</h2>
            <p><strong>Genre :</strong> {hero.appearance.gender}</p>
            <p><strong>Race :</strong> {hero.appearance.race}</p>
            <p><strong>Taille :</strong> {hero.appearance.height[1]}</p>
            <p><strong>Poids :</strong> {hero.appearance.weight[1]}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-3">Statistiques</h2>
            <StatBar value={hero.powerstats.intelligence} label="Intelligence" />
            <StatBar value={hero.powerstats.strength} label="Force" />
            <StatBar value={hero.powerstats.speed} label="Vitesse" />
            <StatBar value={hero.powerstats.durability} label="Endurance" />
            <StatBar value={hero.powerstats.power} label="Puissance" />
            <StatBar value={hero.powerstats.combat} label="Combat" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetails;