import { Link } from "react-router";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="overlay">
          <h1 className="title">FOR HONOR</h1>
          <p className="subtitle">Choisissez votre Faction.</p>
          <p className="subtitle-2">Combattez pour la gloire.</p>
        </div>
      </div>

      <div className="factions-container">
        <div className="faction-card knights">
          <h2>Chevaliers</h2>
          <p>Guerriers forts et disciplinés de la Légion de Fer</p>
          <Link to="/knights" className="faction-btn">Rejoignez les chevaliers</Link>
        </div>

        <div className="faction-card vikings">
          <h2>Vikings</h2>
          <p>Des pillards féroces venus du nord gelé</p>
          <Link to="/vikings" className="faction-btn">Rejoignez les Vikings</Link>
        </div>

        <div className="faction-card samurai">
          <h2>Samuraïs</h2>
          <p>Guerriers qualifiés de l'Empire de l'Aube</p>
          <Link to="/samurai" className="faction-btn">Rejoignez les Samuraïs</Link>
        </div>
      </div>

      <div className="news-section">
        <h2>Mises à jour</h2>
        <div className="news-grid">
          <div className="news-card">
            <h3>Arrivée de la nouvelle saison !</h3>
            <p>Préparez vous au combat dans la nouvelle saison !</p>
          </div>
          <div className="news-card">
            <h3>Challenges hebdomadaires !</h3>
            <p>Complétez les challenges pour obtenir des récompenses exclusives !</p>
          </div>
        </div>
      </div>
    </div>
  );
}