const Movie = ({props}) => {
  const {id, name, overview, vote_average, poster_path} = props;

  return (
    <div className="movie">
      <a href={"/details/"+id}>
        {poster_path? <img src={`https://image.tmdb.org/t/p/w500${poster_path}`}/> :
                      <img src="https://www.brockport.edu/_resources/images/directory_default.png" alt="image not available"/>} 
        <div className="overlay">
          <div className="title">{name}</div>
          <div className="rating">{vote_average}/10</div>
          <div className="plot">
            {overview}
          </div>
        </div>
      </a>
      <div data-toggled="false" className="listToggle">
        <div><i className="fa fa-fw fa-plus"></i><i className="fa fa-fw fa-check"></i></div>
      </div>
    </div>
  );
}

export default Movie;
