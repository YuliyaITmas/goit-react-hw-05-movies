import { useState, useEffect } from 'react';
import MovieAPI from 'components/services/getMovies';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import {
  MoviesButton,
  MoviesList,
  MoviesStyledLink,
  MoviesItem,
} from './Movies.styled';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const movieAPI = new MovieAPI();

const options = {
  width: '320px',
  fontSize: '20px',
  clickToClose: true,
  position: 'right-top',
  distance: '15px',
  borderRadius: '15px',
  timeout: 3000,
  showOnlyTheLastOne: true,
  pauseOnHover: true,
};
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movie = searchParams.get('movie') ?? '';
  const page = Number(searchParams.get('page')) || 1;

  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  
  const location = useLocation();

  const handleSearch = value => {
    if (value === '') {
      return setSearchParams({});
    }
    setSearchParams({ movie: value, page: 1 });
  };

  const searchMoviesAPI = async () => {
    if (!searchParams) return
      try {
        const response = await movieAPI.searchMovies(movie, page);
    
        setStatus(Status.PENDING);

        if (response.results.length === 0 && movie) {
          setStatus(Status.RESOLVED);
          Notify.warning(`No movies found.`, options);
          setMovies([]); 
          setTotalPages(0);
          setSearchParams({});
          

        } else {
          setMovies(response.results);
          setTotalPages(response.total_pages);
          setStatus(Status.RESOLVED);
        }
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error);
      }
  };

  useEffect(() => {
    searchMoviesAPI();
    // eslint-disable-next-line
  }, [movie, page]);

  const showPagination = movies && movies.length > 0;

  const handleNextPage = () => {
    if (page < totalPages) {
      setSearchParams({ movie, page: page + 1 });
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setSearchParams({ movie, page: page - 1 });
    }
  };
 if (status === Status.PENDING) {
   return <Loader />;
 }
  if (status === Status.REJECTED) {
    return <ErrorMessage  message={error.message} />;
  }

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      <div>
        {/* {status === Status.PENDING  && <Loader />} */}
        {status === Status.RESOLVED && showPagination && (
          <>
            <MoviesList>
              {movies.map(movie => (
                <MoviesItem key={movie.id}>
                  <MoviesStyledLink
                    to={`${movie.id}`}
                    state={{ from: location }}
                  >
                    {movie.title || movie.name}
                  </MoviesStyledLink>
                </MoviesItem>
              ))}
            </MoviesList>

            {totalPages > 0 && (
              <div>
                <p>
                  Page {page} of {totalPages}
                </p>
                {page > 1 && (
                  <MoviesButton onClick={handlePreviousPage}>
                    Previous Page
                  </MoviesButton>
                )}
                {page < totalPages && (
                  <MoviesButton onClick={handleNextPage}>
                    Next Page
                  </MoviesButton>
                )}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};
export default Movies;
