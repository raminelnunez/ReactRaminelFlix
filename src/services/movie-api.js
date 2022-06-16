const apiKey = "070671b29879e102b5729476da29b75e";
const baseURL = "https://api.themoviedb.org/3/";
const searchURL = `${baseURL}search/tv?api_key=${apiKey}&query=`;
const movieURL = (id) => { return `${baseURL}tv/${id}?api_key=${apiKey}`;}; 

const MoviesByProviderURL = (providerId) => {
  return `${baseURL}discover/tv?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&with_watch_providers=${providerId}&watch_region=CA`;
}

export const searchMovies = async (query) => {
  const request = await fetch(searchURL+query);
  const response = await request.json();
  const data = await response;
  return data.results;
};

export const getMovieById = async (id) => {
  const request = await fetch(movieURL(id));
  const response = await request.json();
  const data = await response;
  return data;
}

export const getMoviesByProvider = async (providerName) => {
  const request = await fetch(MoviesByProviderURL(providerName));
  const response = await request.json();
  const data = await response;
  return data.results;
}