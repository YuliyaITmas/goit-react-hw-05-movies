import { Outlet, useLocation, useParams } from 'react-router-dom';
import { CgArrowLongLeft } from 'react-icons/cg';
import MovieAPI from 'components/services/getMovies';
import { Suspense, useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import { useRef } from 'react';
import Loader from 'components/Loader/Loader';

import { StyledLink } from './MovieDetails.styled';
import AdditionalInformatin from 'components/AdditionalInformation/AdditionalInformation';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
const movieAPI = new MovieAPI();
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
   const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();
  //  const backLink = location.state?.from ?? '/';

  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setStatus(Status.PENDING);
        const response = await movieAPI.fetchMovieDetails(movieId);

        setMovie(response);
          setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  
  if (status === Status.PENDING) {
    return <Loader/>;
  }
  if (status === Status.REJECTED) {
    return <ErrorMessage message={error.message} />;
  }

  
  if (status === Status.RESOLVED) {
    const { title, poster_path, genres, vote_average, release_date, overview } =
    movie;
    
    return (
      
      <>
        <StyledLink to={backLinkLocation.current}>
          <CgArrowLongLeft />
          Go back
        </StyledLink>
        <div>
          <MovieCard
            title={title}
            poster_path={poster_path}
            genres={genres}
            vote_average={vote_average}
            release_date={release_date}
            overview={overview}
          />

          <AdditionalInformatin />
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </>
    );
  }
};

export default MovieDetails;
