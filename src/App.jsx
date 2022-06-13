import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import IndexPage from "./pages/IndexPage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import WatchListPage from "./pages/WatchListPage";
import SearchFormContextProvider from "./contexts/SearchFormContext";


function App() {
  const [likedMovieIds, setLikedMovieIds] = useState(null);


  const handleToggleLikeMovie = (id) => {
    setLikedMovieIds((prevState) => {
      if (prevState.findIndex((movieId) => movieId === id) === -1) {
        return [...prevState, id];
      }

      return prevState.filter((movieId) => movieId !== id);
    });
  };

  return (

    <Routes>

      <Route path="/"
        element={
          <SearchFormContextProvider>
            <IndexPage/>
          </SearchFormContextProvider>
        }
      />

      <Route path={`/search`}
        element={
          <SearchFormContextProvider>
            <SearchPage/>
          </SearchFormContextProvider>
        }
      />

      <Route path={`/details/:MovieId`}
        element={
          <SearchFormContextProvider>
            <DetailsPage/>
          </SearchFormContextProvider>
        }
      />

      <Route path="my-watch-list"
        element={
          <SearchFormContextProvider>
            <WatchListPage FavouritesIds={likedMovieIds}/>
          </SearchFormContextProvider>
        }
      />
      
    </Routes>
  );
}

export default App;