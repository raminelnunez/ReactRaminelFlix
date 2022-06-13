import { useEffect, useState } from "react";
import { getMovieById } from "../services/movie-api";
import Header from "../components/Header";
import MovieList from "../components/MovieList";

const WatchListPage = ({SearchFormProps, FavouritesIds}) => {
  const [likedMovies, setLikedMovies] = useState(null);

  const getFavouriteMovies = async () => {
    if (FavouritesIds !== null) {
      let promises = [];
      FavouritesIds.map((id) => promises.push(
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
  }, [FavouritesIds])

  return (
    <>
      <Header 
        SearchFormProps={SearchFormProps}
      />
      {<MovieList title={"My Watch List"} movies={likedMovies}/>}
    </>
  );
}

export default WatchListPage;