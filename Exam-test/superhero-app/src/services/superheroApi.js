const API_BASE_URL = 'https://superheroapi.com/api/access-token/character-id';

export const searchHeroes = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/search/${query}`);
    const data = await response.json();
    
    if (data.response === 'error') {
      throw new Error(data.error);
    }
    
    return data.results || [];
  } catch (error) {
    console.error('Error searching heroes:', error);
    throw error;
  }
};

export const getHeroById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    const data = await response.json();
    
    if (data.response === 'error') {
      throw new Error(data.error);
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching hero details:', error);
    throw error;
  }
};