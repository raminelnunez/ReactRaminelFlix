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

  const getMoviesByProviders = async () => {
    Promise.all([
      providers.map((provider) => {
        const promise = new Promise((resolve, reject) => {
          resolve(getMoviesByProvider(provider.id));
        });
      })
    ]).then((results) => {
      let UpdatedProviders = providers;
      for (let i = 0; i < providers.length; i++) {
        UpdatedProviders[i].movies = results[i];
      }
      setProviders(UpdatedProviders);
    })
  }

  useEffect(()=> {
    providersToAdd = [
      new Provider(8, "Netflix"),
      new Provider(230, "Crave"),
      new Provider(337, "Disney+"),
      new Provider(350, "Apple+")
    ]
    setProviders(providersToAdd);
  }, [])

  useEffect(() => {
    getMoviesByProviders();
  }, [providers])

  return (
    <>
      <Header/>
      {
        providers && providers.map((provider) => {
          <MovieList title={provider.name} movies={provider.movies}/>
        })
      }
    </>
  );

}

export default IndexPage;