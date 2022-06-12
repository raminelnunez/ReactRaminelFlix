import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/movie-api";
import { useEffect, useState } from "react";


const SearchPage = ({SearchFormProps}) => {
  const {searchValue} = SearchFormProps;

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState(null);
  const query = searchParams.get("query")
  
  const handleSearchMovies = async () => {
    if (!query) {
      setSearchParams({query: searchValue})
    }
    const promise = new Promise((resolve, reject) => {
      resolve(searchMovies(query));
    });
    
    promise.then((results) => {
      console.log(results)
      setSearchResults(results);
    });
  }

  useEffect(() => {
    handleSearchMovies();
  }, [])

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