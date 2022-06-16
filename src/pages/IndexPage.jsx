import { useState, useEffect, useSyncExternalStore } from "react";
import { getMoviesByProvider } from "../services/movie-api"
import Header from "../components/Header";
import MovieList from "../components/MovieList";

const IndexPage = () => {
  const [providers, setProviders] = useState(null);
  class Provider {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.movies = [];
    }
  }

  const InitializeProviders = () => {
    return [
      new Provider(8, "Netflix"),
      new Provider(230, "Crave"),
      new Provider(337, "Disney+"),
      new Provider(350, "Apple+")
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