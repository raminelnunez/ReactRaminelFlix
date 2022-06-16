import Movie from "./Movie";
import styles from "../StyleComponents/MovieList.module.css";

const MovieList = ({title, movies}) => {
  return (
    <div className={styles.movieList}>
      <div className={styles.movie}>
        <h1>{title}</h1>
        <div className={styles.moviesWrapper}>
          {movies && movies.map((movie) =>
            <Movie props={movie}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;