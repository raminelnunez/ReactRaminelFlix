const apiKey = "070671b29879e102b5729476da29b75e"
const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;
const searchUrlById = `https://api.themoviedb.org/3/find/{external_id}?api_key=${apiKey}&language=en-US&external_source=imdb_id`;

const searchMovies = async (query) => {
  const request = await fetch(`${searchURL}&query=${query}`);
  const response = await request.json();
  const movies = await response.results;
  return movies;
};

export default searchMovies;