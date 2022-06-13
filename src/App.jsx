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
  const navigate = useNavigate();

  const handleDetails = async (id) => {
    navigate(`/details?id=${id}`)
  }

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

      <Route path="/">
        <SearchFormContextProvider>
          <IndexPage/>
        </SearchFormContextProvider>
      </Route>

      <Route path={`/search`}>
        <SearchPage/>
      </Route>

      <Route path={`/details/:MovieId`}>
        <DetailsPage/>
      </Route>

      <Route path="my-watch-list">
        <WatchListPage FavouritesIds={likedMovieIds}/>
      </Route>
      
    </Routes>
  );
}

export default App;