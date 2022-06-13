import Movie from "./Movie";

const MovieList = ({title, movies}) => {
  return (
    <div className="titleList">
      <div className="title">
        <h1>{title}</h1>
        <div className="titles-wrapper">
          {movies && movies.map((movie) =>
            <Movie props={movie}/>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;