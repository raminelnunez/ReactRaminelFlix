import { useContext } from "react";
import { SearchFormContext } from "../contexts/SearchFormContext";
import styles from "../StyleComponents/SearchForm.module.css";

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
    <form onSubmit={handleSubmit} id="search" className={styles.searchForm} >
      <input onChange={handleChange} type="search" placeholder="Search for a title..." value={searchValue}  className={styles.searchInput}/>
    </form>
  );
}

export default SearchForm;

// style={SearchFormStyle.formStyle}
// style={SearchFormStyle.searchInputStyle}