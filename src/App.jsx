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
    <Routes>
      <Route path="/"
        element={
          <SearchFormContextProvider>
            <MovieContextProvider>
              <IndexPage/>
            </MovieContextProvider>
          </SearchFormContextProvider>
        }
      />

      <Route path={`/search`}
        element={
          <SearchFormContextProvider>
            <MovieContextProvider>
              <SearchPage/>
            </MovieContextProvider>
          </SearchFormContextProvider>
        }
      />

      <Route path={`/details/:MovieId`}
        element={
          <SearchFormContextProvider>
            <MovieContextProvider>
              <DetailsPage/>
            </MovieContextProvider>
          </SearchFormContextProvider>
        }
      />

      <Route path="my-watch-list"
        element={
          <SearchFormContextProvider>
            <MovieContextProvider>
              <WatchListPage/>
            </MovieContextProvider>
          </SearchFormContextProvider>
        }
      />
      
    </Routes>
  );
}

export default App;