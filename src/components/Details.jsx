import { useState, useEffect, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../StyleComponents/Details.module.css";

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
    <div className={styles.showDetails}>
      <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
      <div className={styles.showDetailsInner}>
        <h1>{title}</h1>
        <div className={styles.description}>
          {overview}
        </div>
        {isLiked? <button className={styles.removeToWatchlist} onClick={handleToggleLikeMovie}>- Remove from watch list</button> :
                  <button className={styles.addToWatchlist} onClick={handleToggleLikeMovie}>+ Add to watch list</button>
        }
        
      </div>
    </div>
    
  );
}

export default Details;