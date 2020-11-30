import {useState} from 'react';
import {APIconfig} from '@netflux/movies.config';

export type MovieDetailsProps = {
  title: string;
  year: string;
  type: string;
  poster: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  description: string;
};

export const useMovieDetails = (): [
  (imdbID: string) => Promise<void>,
  any,
  boolean,
  string,
] => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getMovie = async (imdbID: string) => {
    if (!imdbID) return;
    setIsLoading(true);
    try {
      const endpoint = `${APIconfig.url}?apikey=${APIconfig.key}&i=${imdbID}`;
      const res = await fetch(endpoint);
      const data = await res.json();
      const details: MovieDetailsProps = {
        title: data.Title,
        year: data.Year,
        type: data.Type,
        poster: data.Poster,
        rated: data.Rated,
        released: data.Released,
        runtime: data.Runtime,
        genre: data.Genre,
        description: data.Plot,
      };
      console.log('details', details);
      setMovie(details);
      if (error) setError('');
      setIsLoading(false);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };

  return [getMovie, movie, isLoading, error];
};
