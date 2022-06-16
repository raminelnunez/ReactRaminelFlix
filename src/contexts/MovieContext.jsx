import { useState, createContext, useEffect} from "react";

export const MovieContext = createContext();

function MovieContextProvider(props) {
  const initialState = JSON.parse(localStorage.getItem("likedMovieIds"));
  const [likedMovieIds, setLikedMovieIds] = useState(initialState || []);

  const toggleLikeMovie = (id) => {
    if (likedMovieIds === null) {
      setLikedMovieIds([id])
    } else {
      setLikedMovieIds((prevState) => {
        if (prevState.findIndex((movieId) => movieId === id) === -1) {
          return [...prevState, id];
        }
        
        return prevState.filter((movieId) => movieId !== id);
      });
    }
  };
  
  const IsMovieLiked = (id) => {
    return likedMovieIds.includes(id);
  }

  const MovieProps = {
    toggleLikeMovie: toggleLikeMovie,
    likedMovieIds: likedMovieIds,
    IsMovieLiked: IsMovieLiked
  }

  useEffect(() => {
    localStorage.setItem("likedMovieIds", JSON.stringify(likedMovieIds))
  }, [likedMovieIds])

  return (
    <MovieContext.Provider value={MovieProps}>
      {props.children}
    </MovieContext.Provider>
  );

}

export default MovieContextProvider;