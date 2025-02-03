import { useState } from 'react';
import { useAuth } from '../auth/AuthProvider';
import './SignupForm.scss';

export default function SignupForm({ onClose }) {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    username: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    confirmPassword: 'admin'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    const newUser = {
      username: formData.username,
      email: formData.email,
      password: formData.password
    };

    // Store the user in localStorage without checking for duplicates
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    // Login directly after signup
    login(formData.username, formData.password);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="signup-overlay">
    <div className="signup-modal">
      <button className="close-button" onClick={onClose}>&times;</button>
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </div>
  );
}