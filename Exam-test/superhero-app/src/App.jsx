import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import HeroDetails from './pages/HeroDetails';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Route protégée qui vérifie l'authentification
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  // Fonction de connexion (à implémenter avec les credentials en dur)
  const handleLogin = (credentials) => {
    // Identifiants en dur pour l'exemple
    if (credentials.username === "user" && credentials.password === "password") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
            <Route path="/login" element={
              <Login onLogin={handleLogin} isAuthenticated={isAuthenticated} />
            } />
            <Route path="/search" element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            } />
            <Route path="/hero/:id" element={
              <ProtectedRoute>
                <HeroDetails />
              </ProtectedRoute>
            } />
            <Route path="/contact" element={
              <ProtectedRoute>
                <Contact />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;