import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/movie-api";
import { useEffect, useState, useContext } from "react";
import { SearchFormContext } from "../contexts/SearchFormContext";

const SearchPage = () => {
  const {searchValue} = useContext(SearchFormContext);

  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query")
  
  const handleQuery = () => {
    if (!query) {
      setSearchParams({query: searchValue})
    }
  }

  const handleSearchMovies = async () => {
    const promise = new Promise((resolve, reject) => {
      resolve(searchMovies(query));
    });
    
    promise.then((results) => {
      setSearchResults(results);
    });
  }

  useEffect(() => {
    handleQuery();
  }, [])

  useEffect(() => {
    handleSearchMovies();
  }, [query])

  return (
    <>
      <Header/>
      {searchResults && <MovieList title={"Results"} movies={searchResults}/>}
    </>
  );
}

export default SearchPage;