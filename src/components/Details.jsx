const Details = ({movie}) => {
  const {id, title, overview, backdrop_path} = movie;
  return (
    <div className="show-details">
      <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="" />
      <div className="show-details-inner">
        <h1>{title}</h1>
        <div className="description">
          {overview}
        </div>
        <button className="add-to-watchlist">+ Add to watch list</button>
      </div>
    </div>
    
  );
}

export default Details;