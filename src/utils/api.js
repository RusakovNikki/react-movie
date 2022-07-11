const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2';
const API_KEY = '954630cb-a912-442d-93bd-453fafd8d36b';

export const getTopFilms = async () => {
  const result = await fetch(`${API_URL}/films/top`, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY, //6189fc94-f92f-49e4-add4-368fbca3c2e0  cc5bbf2a-79b9-4de6-a091-234be04f22a8 954630cb-a912-442d-93bd-453fafd8d36b
      'Content-Type': 'application/json',
    },
  });
  return result.json();
};

export const getFilmData = async (id) => {
  try {
    const result = await fetch(`${API_URL}/films/${id}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': API_KEY, //6189fc94-f92f-49e4-add4-368fbca3c2e0  cc5bbf2a-79b9-4de6-a091-234be04f22a8 954630cb-a912-442d-93bd-453fafd8d36b
        'Content-Type': 'application/json',
      },
    });
    return result.json();
  } catch (error) {
    return {};
  }
};
