// src/api/SuperHeroProxy.jsx
import { useState } from 'react';

const API_BASE_URL = '/api';

export const searchHero = async (name) => {
  try {
    console.log('Searching for:', name);
    const response = await fetch(`${API_BASE_URL}/search/${name}`);
    console.log('Response status:', response.status);
    if (!response.ok) {
      throw new Error('Erreur réseau');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erreur:', error);
    throw error;
  }
};