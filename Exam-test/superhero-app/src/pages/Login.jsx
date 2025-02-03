import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router';

const Login = ({ onLogin, isAuthenticated }) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Si déjà authentifié, rediriger vers l'accueil
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const success = onLogin(credentials);
    if (success) {
      navigate('/');
    } else {
      setError('Identifiants incorrects');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Connexion</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}
        
        <div>
          <label htmlFor="username" className="block text-gray-700 mb-2">
            Nom d'utilisateur
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Se connecter
        </button>
      </form>

      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Utilisateur de test :</p>
        <p>Nom d'utilisateur : user</p>
        <p>Mot de passe : password</p>
      </div>
    </div>
  );
};

export default Login;