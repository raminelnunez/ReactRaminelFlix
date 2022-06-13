import { useState, useEffect } from "react";
import { getMovieById } from "../services/movie-api";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Details from "../components/Details";

const DetailsPage = () => {
  const [movie, setMovie] = useState();

  const {MovieId} = useParams();

  const handleGetMovieById = async () => {
    const promise = new Promise((resolve, reject) => {
      resolve(getMovieById(MovieId));
    });
    
    promise.then((result) => {
      setMovie(result);
    });
  }

  useEffect(() => {
    handleGetMovieById();
  }, [MovieId])

  return (
    <>
      <Header 
        SearchFormProps={SearchFormProps}
      />
      {movie && <Details movie={movie}/> }
    </>
  );
}

export default DetailsPage;