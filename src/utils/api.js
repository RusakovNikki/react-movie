const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.2';
const API_KEY = '8c8e1a50-6322-4135-8875-5d40a5420d86';

export const getTopFilms = async (page = 1) => {
  const url = typeof(page) === 'number' ? `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}` : page;
  const result = await fetch(url, {
    method: 'GET',
    headers: {
      'X-API-KEY': API_KEY, //6189fc94-f92f-49e4-add4-368fbca3c2e0  cc5bbf2a-79b9-4de6-a091-234be04f22a8 954630cb-a912-442d-93bd-453fafd8d36b 8c8e1a50-6322-4135-8875-5d40a5420d86
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

