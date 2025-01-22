import { useState, useEffect } from "react";
import "./Heros.css";
import "../../api/Loader.scss";
import HeroOverlay from "../Overlay/HeroOverlay";

export default function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHero, setSelectedHero] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/src/api/info.json");
        const data = await response.json();
        
        setTimeout(() => {
          setHeroes(data);
          setIsLoading(false);
        }, 2000);
      } catch (err) {
        setTimeout(() => {
          setError(err.message);
          setIsLoading(false);
        }, 2000);
      }
    };

    fetchData();
  }, []);

  const handleHeroClick = (hero) => {
    setSelectedHero(hero);
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  const handleCloseOverlay = () => {
    setSelectedHero(null);
  };

  if (isLoading) {
    return (
      <div className="container">
        <div className="container__content">
          <span className="loader"></span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="heroes-container">
      <h1>Héros</h1>
      <div className="heroes-grid">
        {heroes.map((hero) => (
          <div 
            key={hero.name} 
            className="hero-card" 
            onClick={() => handleHeroClick(hero)}
          >
            <img src={hero.image} alt={hero.name} />
            <div className="hero-info">
              <h2>{hero.name}</h2>
              <p>Faction: {hero.faction}</p>
              <p>Type: {hero.type}</p>
              <p>Difficulté: {hero.difficulty}</p>
              <div className="hero-traits">
                {hero.info.map((trait, index) => (
                  <span key={index} className="trait">{trait}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {selectedHero && (
        <HeroOverlay 
          hero={selectedHero} 
          onClose={handleCloseOverlay} 
        />
      )}
    </div>
  );
}