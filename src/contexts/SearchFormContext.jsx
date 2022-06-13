import { useState, createContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export const SearchFormContext = createContext();

function SearchFormContextProvider(props) {
  const initialState = JSON.parse(localStorage.getItem("searchValue"));
  const [searchValue, setSearchValue] = useState(initialState || "");
  const navigate = useNavigate();

  const handleSearch = async () => {
    navigate(`/search?query=${searchValue}`)
  }

  const SearchFormProps = {
    handleSearch: handleSearch,
    setSearchValue: setSearchValue,
    searchValue: searchValue
  }

  useEffect(() => {
    localStorage.setItem("searchValue", JSON.stringify(searchValue))
  }, [searchValue])

  return (
    <SearchFormContext.Provider value={SearchFormProps}>
      {props.children}
    </SearchFormContext.Provider>
  );

}

export default SearchFormContextProvider;