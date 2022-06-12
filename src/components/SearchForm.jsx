import { useState } from "react";

const SearchForm = ({props}) => {
  const {handleSearchMovies, setSearchValue, searchValue} = props;
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearchMovies(searchValue);
  }
  
  return (
    <form onSubmit={handleSubmit} id="search" className="search">
      <input onChange={handleChange} type="search" placeholder="Search for a title..." value={searchValue} />
      <div className="searchResults"></div>
    </form>
  );
}

export default SearchForm;