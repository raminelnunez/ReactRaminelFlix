const Details = ({props}) => {
  const {id, title, overview, backdrop_path} = props;
  return (
    <div className="show-details">
      <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}.jpg`} alt="../images/image-not-available.jpg" />
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