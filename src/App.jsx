import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import IndexPage from "./pages/IndexPage";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
import WatchListPage from "./pages/WatchListPage";
import SearchFormContextProvider from "./contexts/SearchFormContext";
import MovieContextProvider from "./contexts/MovieContext";

function App() {
  
  return (
    <SearchFormContextProvider>
    <MovieContextProvider>
    <Routes>
      <Route path="/"
        element={
          <IndexPage/>
        }
      />

      <Route path={`/search`}
        element={
          <SearchPage/>
        }
      />

      <Route path={`/details/:MovieId`}
        element={
          <DetailsPage/>
        }
      />

      <Route path="my-watch-list"
        element={
          <WatchListPage/>
        }
      />
    </Routes>
    </MovieContextProvider>
    </SearchFormContextProvider>
  );
}

export default App;