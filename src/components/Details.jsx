import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";

const Details = ({movie}) => {
  const {id, title, overview, backdrop_path} = movie;
  const {toggleLikeMovie, likedMovieIds, IsMovieLiked} = useContext(MovieContext);
  const [isLiked, setLike] = useState(false);
  
  const handleToggleLikeMovie = () => {
    toggleLikeMovie(id);
  }

  const handleIsMovieLiked = () => {
    setLike(IsMovieLiked(id));
  }

  useEffect(() => {
    handleIsMovieLiked();
  }, [likedMovieIds])

  return (
    <div className="show-details">
      <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
      <div className="show-details-inner">
        <h1>{title}</h1>
        <div className="description">
          {overview}
        </div>
        {isLiked? <button class="remove-to-watchlist" onClick={handleToggleLikeMovie}>- Remove from watch list</button> :
                  <button className="add-to-watchlist" onClick={handleToggleLikeMovie}>+ Add to watch list</button>
        }
        
      </div>
    </div>
    
  );
}

export default Details;