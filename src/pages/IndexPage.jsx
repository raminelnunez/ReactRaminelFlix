import { useState, useEffect, useSyncExternalStore } from "react";
import { getMoviesByProvider } from "../services/movie-api"
import Header from "../components/Header";
import MovieList from "../components/MovieList";

const IndexPage = () => {
  const [providers, setProviders] = useState(null);
  const Provider = (id, name) => {
    return {
      id: id,
      name: name,
      movies: []
    };
  }

  const InitializeProviders = () => {
    return [
      Provider(8, "Netflix"),
      Provider(230, "Crave"),
      Provider(337, "Disney+"),
      Provider(350, "Apple+")
    ]
  }

  const getMoviesByProviders = async () => {
    let providersToAdd = InitializeProviders();

    let Promises = [];
    providersToAdd.map((provider) => 
      Promises.push(new Promise((resolve, reject) => {
        resolve(getMoviesByProvider(provider.id));
      }))
    );

    Promise.all(Promises).then((results) => {
      let UpdatedProviders = providersToAdd;
      for (let i = 0; i < UpdatedProviders.length; i++) {
        UpdatedProviders[i].movies = results[i];
      }
      setProviders(UpdatedProviders);
    });
  }

  useEffect(()=> {
    getMoviesByProviders();
  }, [])

  return (
    <>
      <Header/>
      {
        providers && providers.map((provider) =>
          <MovieList title={provider.name} movies={provider.movies}/>
        )
      }
    </>
  );

}

export default IndexPage;