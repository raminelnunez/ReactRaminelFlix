import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { searchMovies } from "./services/movie-api";
import { useState } from "react";
import IndexPage from "./pages/IndexPage";
import SearchPage from "./pages/SearchPage";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  const navigate = useNavigate();

  const handleSearchMovies = async () => {
    const data = await searchMovies(searchValue);
    setSearchResults(await data)
    .then(navigate(`/search?=${searchValue}`))
  }

  const SearchFormProps = {
    handleSearchMovies: handleSearchMovies,
    setSearchValue: setSearchValue,
    searchValue: searchValue
  }

  return (
      <Routes>
        <Route path="/" 
                element={
                  <IndexPage
                    SearchFormProps={SearchFormProps}
                  />
                } 
        />
        <Route path={`/search?=${searchValue}`} 
               element={
                  <SearchPage 
                  SearchFormProps={SearchFormProps}
                    searchResults={searchResults}
                  />
                }
        />
      </Routes>
  );
}

export default App;