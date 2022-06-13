import { useState, createContext} from "react";
import { useNavigate } from "react-router-dom";

export const MovieContext = createContext();

function MovieContextProvider(props) {
  

  return (
    <MovieContext.Provider value={}>
      {props.children}
    </MovieContext.Provider>
  );

}

export default MovieContextProvider;