import Header from "../components/Header";
import MovieList from "../components/MovieList";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/movie-api";
import { useEffect, useState, useContext } from "react";
import { SearchFormContext } from "../contexts/SearchFormContext";
import { Link } from "react-router-dom";
import styles from "../StyleComponents/pagination.module.css";

const SearchPage = () => {
  const {searchValue} = useContext(SearchFormContext);
  const [params, setParams] = useSearchParams();
  const query = params.get("query")

  const [searchResults, setSearchResults] = useState(null);
  
  const page = params.get("page");
  const [hasPrevPage, setHasPrevPage] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  
  const [title, setTitle] = useState("Results");
  
  const handleQuery = () => {
    if (!query) {
      setParams({query: searchValue})
    }
  }

  const handleSearchMovies = async () => {
    const promise = new Promise((resolve, reject) => {
      resolve(searchMovies(query, page));
    });
    
    promise.then((results) => {
      setSearchResults(results);
    });
  }

  const handlePagination = () => {
    let doesHavePrevPage = false;
    let doesHaveNextPage = false;

    if (page > 1) {
      doesHavePrevPage = true;
    }
    searchMovies(query, page? +page+1 : +2).then((movies) => {
      if (movies.length !== 0) {
        doesHaveNextPage = true;
      }
      setHasPrevPage(doesHavePrevPage);
      setHasNextPage(doesHaveNextPage);
    });
    
  }

  useEffect(() => {
    handleQuery();
  }, [])

  useEffect(() => {
    handleSearchMovies();
    handlePagination();
  }, [query, page])

  useEffect(() => {
    if (searchResults) {
      if (searchResults.length === 0) {
        setTitle("No results for " + query)
      } else {
        setTitle("Showing results for " + query)
      }
    }
  }, [searchResults])

  return (
    <>
      <Header/>
      {searchResults && 
        <MovieList title={title} movies={searchResults}/>
      }
      <div className={styles.paginationWrapper}>
        <div>
          {hasPrevPage && <Link className={styles.buttons} to={`/search?query=${query}&page=${+page-1}`}>Previous Page</Link>}
        </div>
        <div>
          {hasNextPage && <Link className={styles.buttons} to={`/search?query=${query}&page=${page? +page+1 : +2}`}>Next Page</Link>}
        </div>
      </div>
    </>
  );
}

export default SearchPage;