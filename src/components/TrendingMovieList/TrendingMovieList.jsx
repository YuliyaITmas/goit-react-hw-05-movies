import Loader from 'components/Loader/Loader';
import MovieAPI from 'components/services/getMovies';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { List, StyledLink, Title } from './TrendingMovieList.styled';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const movieAPI = new MovieAPI();

export const TrendingMovieList = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setStatus(Status.PENDING);
        const response = await movieAPI.fetchTrendingMovies();

        setMovies(response.results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error);
      }
    };

    fetchTrendingMovies();
  }, []);
  if (status === Status.PENDING) {
    return <Loader />;
  }
    if (status === Status.REJECTED) {
      return <ErrorMessage message={error.message} />;
    }

  if (status === Status.RESOLVED) {
    return (
      <>
        <Title>Trending today</Title>
        <ul>
          {movies.map(movie => (
            <List key={movie.id}>
              <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title || movie.name}
              </StyledLink>
            </List>
          ))}
        </ul>
      </>
    );
  }
};
