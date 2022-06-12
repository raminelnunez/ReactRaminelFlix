const apiKey = "070671b29879e102b5729476da29b75e";
const baseURL = "https://api.themoviedb.org/3/";
const searchURL = `${baseURL}search/movie?api_key=${apiKey}&query=`;
const movieURL = (id) => { return `${baseURL}movie/${id}?api_key=${apiKey}`;}; 

const TopMoviesByProviderURL = (providerName) => {
  let providerId;
  switch(providerName) {
    case "Netflix" || "netflix":
      providerId = 8;
      break;
    case "Crave" || "crave":
      providerId = 230;
      break;
    case "Disney" || "disney":
      providerId = 337;
      break;
    case "Apple Plus" || "apple plus":
      providerId = 350;
      break;
  }
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
  console.log(data);
  return data;
}

export const getTopMoviesByProvider = async (providerName) => {
  const request = await fetch(TopMoviesByProviderURL(providerName));
  const response = await request.json();
  const data = await response;
  return data.results;
}