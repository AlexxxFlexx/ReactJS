import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './HeroDetails.scss';

export default function HeroDetails({ hero, onClose }) {
  if (!hero) return null;

  return (
    <div className="hero-details-overlay">
      <div className="hero-details-modal">
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        
        <div className="hero-details-content">
          <div className="hero-header">
            <img src={hero.image.url} alt={hero.name} />
            <h2>{hero.name}</h2>
          </div>

          <div className="hero-info-grid">
            <section className="info-section">
              <h3>Statistiques</h3>
              <div className="stats-grid">
                {Object.entries(hero.powerstats).map(([stat, value]) => (
                  <div key={stat} className="stat-item">
                    <span className="stat-label">{stat}</span>
                    <div className="stat-bar">
                      <div className="stat-fill" style={{ width: `${value}%` }}></div>
                    </div>
                    <span className="stat-value">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="info-section">
              <h3>Biographie</h3>
              <div className="info-grid">
                {Object.entries(hero.biography).map(([key, value]) => (
                  <div key={key} className="info-item">
                    <span className="info-label">{key}</span>
                    <span className="info-value">{Array.isArray(value) ? value.join(', ') : value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="info-section">
              <h3>Apparence</h3>
              <div className="info-grid">
                {Object.entries(hero.appearance).map(([key, value]) => (
                  <div key={key} className="info-item">
                    <span className="info-label">{key}</span>
                    <span className="info-value">{Array.isArray(value) ? value.join(', ') : value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="info-section">
              <h3>Travail</h3>
              <div className="info-grid">
                {Object.entries(hero.work).map(([key, value]) => (
                  <div key={key} className="info-item">
                    <span className="info-label">{key}</span>
                    <span className="info-value">{value}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="info-section">
              <h3>Connections</h3>
              <div className="info-grid">
                {Object.entries(hero.connections).map(([key, value]) => (
                  <div key={key} className="info-item">
                    <span className="info-label">{key}</span>
                    <span className="info-value">{Array.isArray(value) ? value.join(', ') : value}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}