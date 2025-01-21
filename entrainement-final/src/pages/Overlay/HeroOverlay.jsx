import HeroComments from '../../components/HeroComments';
import "./HeroOverlay.css";

export default function HeroOverlay({ hero, onClose }) {
  return (
    <div className="hero-overlay" onClick={onClose}>
      <div className="hero-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <div className="hero-modal-content">
          <img src={hero.image} alt={hero.name} />
          <div className="hero-details">
            <h2>{hero.name}</h2>
            <div className="hero-info-grid">
              <p><strong>Faction:</strong> {hero.faction}</p>
              <p><strong>Type:</strong> {hero.type}</p>
              <p><strong>Difficulté:</strong> {hero.difficulty}</p>
            </div>
            <div className="hero-traits">
              {hero.info.map((trait, index) => (
                <span key={index} className="trait">{trait}</span>
              ))}
            </div>
            <HeroComments heroId={hero.name} />
          </div>
        </div>
      </div>
    </div>
  );
}