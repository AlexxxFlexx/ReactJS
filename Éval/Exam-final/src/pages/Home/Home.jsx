import { useState } from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { searchHero } from "../../api/SuperHeroProxy";
import ApiFetch from "../../api/ApiFetch";
import { useAuth } from "../../auth/AuthProvider";
import HeroDetails from "../../components/HeroDetails";

export default function Home() {
    const { user } = useAuth(); // Récupération de l'état de l'utilisateur
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedHero, setSelectedHero] = useState(null);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchTerm.trim()) return;

        setIsLoading(true);
        try {
            const data = await searchHero(searchTerm);
            setSearchResults(data.results);
        } catch (error) {
            console.error("Erreur de recherche:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="overlay">
                    <h1 className="title">SUPER HÉROS</h1>
                    <p className="subtitle">Parcourez vos Héros !</p>
                    <p className="subtitle-2">Et trouvez votre préféré !</p>
                </div>
            </div>

            <div className="intro-section">
                <div className="intro-content">
                    <h2>Bienvenue sur Super Heroes DB</h2>
                    <p>
                        Découvrez notre vaste collection de super-héros ! Recherchez vos héros préférés,
                        explorez leurs pouvoirs et leurs histoires. Une base de données complète dédiée
                        aux plus grands héros de tous les univers.
                    </p>
                </div>
            </div>

            {user && ( // Condition pour afficher la recherche uniquement si l'utilisateur est connecté
                <>
                    <div className="search-container">
                        <form onSubmit={handleSearch} className="search-input-wrapper">
                            <FontAwesomeIcon icon={faSearch} className="search-icon" />
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Rechercher un super héros..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button type="submit" className="search-button">
                                Rechercher
                            </button>
                        </form>
                    </div>

                    {isLoading && (
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                    )}

                    {searchResults && searchResults.length === 0 && (
                        <div className="error-message">
                            <h3>Aucun super-héros trouvé</h3>
                            <p>Désolé, nous n'avons pas trouvé de super-héros correspondant à "{searchTerm}".</p>
                            <p>Suggestions :</p>
                            <ul>
                                <li>Vérifiez l'orthographe du nom</li>
                                <li>Essayez avec un nom plus court</li>
                                <li>Utilisez le nom en anglais (ex: "Batman", "Superman")</li>
                            </ul>
                        </div>
                    )}

                    {searchResults && searchResults.length > 0 && (
                        <div className="hero-results">
                            {searchResults.map((hero) => (
                                <div
                                    key={hero.id}
                                    className="hero-card"
                                    onClick={() => setSelectedHero(hero)}
                                >
                                    <img src={hero.image.url} alt={hero.name} />
                                    <h3>{hero.name}</h3>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            )}
            {selectedHero && (
                <HeroDetails
                    hero={selectedHero}
                    onClose={() => setSelectedHero(null)}
                />
            )}
        </div>
    );
}