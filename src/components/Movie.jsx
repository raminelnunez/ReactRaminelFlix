import { useState, useContext, useEffect } from "react";
import { MovieContext } from "../contexts/MovieContext";
import styles from "../StyleComponents/Movie.module.css";

const Movie = ({props}) => {  
  const {id, name, overview, vote_average, poster_path} = props;
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
    <div className={styles.movie}>
      <a href={"/details/"+id}>
        {poster_path? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/> :
                      <img src="https://www.brockport.edu/_resources/images/directory_default.png" alt="image not available"/>} 
        <div className={styles.overlay}>
          <div className={styles.title}>{name}</div>
          <div className={styles.rating}>{vote_average}/10</div>
          <div className={styles.plot}>
            {overview}
          </div>
        </div>
      </a>
      <div data-toggled={isLiked} className={styles.listToggle}>
        <div onClick={handleToggleLikeMovie}>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    </div>
  );
}

export default Movie;
