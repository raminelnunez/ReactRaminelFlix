import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import IndexPage from "./pages/IndexPage";
import SearchPage from "./pages/SearchPage";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    navigate(`/search?query=${searchValue}`)
  }

  const handleDetails = async () => {
    navigate("/details")
  }

  const SearchFormProps = {
    handleSearch: handleSearch,
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
        <Route path={`/search`} 
               element={
                  <SearchPage 
                  SearchFormProps={SearchFormProps}
                  />
                }
        />
      </Routes>
  );
}

export default App;