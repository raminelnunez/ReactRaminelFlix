import { useState, useContext } from "react";
import { SearchFormContext } from "../contexts/SearchFormContext";

const SearchForm = () => {
  const {handleSearch, setSearchValue, searchValue} = useContext(SearchFormContext);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchValue);
  }
  
  return (
    <form onSubmit={handleSubmit} id="search" className="search">
      <input onChange={handleChange} type="search" placeholder="Search for a title..." value={searchValue} />
      <div className="searchResults"></div>
    </form>
  );
}

export default SearchForm;