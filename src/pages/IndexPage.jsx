import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTopMoviesByProvider } from "../services/movie-api"
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { useLocation } from "react-router-dom";

const IndexPage = ({SearchFormProps}) => {
  const [netflixMovies, setNetflixMovies] = useState(null);
  const [craveMovies, setCraveMovies] = useState(null);
  const [disneyMovies, setDisneyMovies] = useState(null);
  const [applePlusMovies, setApplePlusMovies] = useState(null);

  const setTopMoviesByProviders = async () => {
    Promise.all([
      getTopMoviesByProvider("Netflix"), 
      getTopMoviesByProvider("Crave"),
      getTopMoviesByProvider("Disney"),  
      getTopMoviesByProvider("Apple Plus")
    ]).then((results) => {
      setNetflixMovies(results[0]);
      setCraveMovies(results[1]);
      setDisneyMovies(results[2]);
      setApplePlusMovies(results[3]);
    })
  }

  useEffect(() => {
    setTopMoviesByProviders();
  }, [])

  return (
    <>
      <Header 
        SearchFormProps={SearchFormProps}
      />
      {netflixMovies && <MovieList title={"Netflix"} movies={netflixMovies}/>}
      {craveMovies && <MovieList title={"Crave"} movies={craveMovies}/>}
      {disneyMovies && <MovieList title={"Disney"} movies={disneyMovies}/>}
      {applePlusMovies && <MovieList title={"Apple Plus"} movies={applePlusMovies}/>}
    </>
  );

}

export default IndexPage;