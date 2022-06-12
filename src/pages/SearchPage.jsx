import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/movie-api";
import { useEffect, useState } from "react";

const SearchPage = ({SearchFormProps}) => {
  const {searchValue} = SearchFormProps;

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
      <Header 
        SearchFormProps={SearchFormProps}
      />
      {searchResults && <MovieList title={"Results"} movies={searchResults}/>}
    </>
  );
}

export default SearchPage