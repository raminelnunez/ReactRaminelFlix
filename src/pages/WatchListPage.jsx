import { useEffect, useState } from "react";
import { getMovieById } from "../services/movie-api";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const WatchListPage = () => {
  const {likedMovieIds} = useContext(MovieContext);
  const [likedMovies, setLikedMovies] = useState(null);

  const getFavouriteMovies = async () => {
    if (likedMovieIds !== null) {
      let promises = [];
      likedMovieIds.map((id) => promises.push(
        new Promise((resolve, reject) => {
          resolve(getMovieById(id));
        })
      ))

      Promise.all(promises).then((results) => {
        setLikedMovies(results);
      })
    }
  }

  useEffect(() => {
    getFavouriteMovies();
  }, [likedMovieIds])

  return (
    <>
      <Header/>
      {<MovieList title={"My Watch List"} movies={likedMovies}/>}
    </>
  );
}

export default WatchListPage;