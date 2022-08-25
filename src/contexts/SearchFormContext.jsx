import { useState, createContext} from "react";
import { useNavigate } from "react-router-dom";

export const SearchFormContext = createContext();

function SearchFormContextProvider(props) {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (searchValue !== "") {
      navigate(`/search?query=${searchValue}`)
    }
  }

  const SearchFormProps = {
    handleSearch: handleSearch,
    setSearchValue: setSearchValue,
    searchValue: searchValue
  }

  return (
    <SearchFormContext.Provider value={SearchFormProps}>
      {props.children}
    </SearchFormContext.Provider>
  );

}

export default SearchFormContextProvider;