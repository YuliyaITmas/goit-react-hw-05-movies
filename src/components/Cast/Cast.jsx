

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import MovieAPI from 'components/services/getMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  CastItem,
  CastTitle,
  CastWrap,
  CastPicture,
  CastName,
  CastCharacter,
  CastList,
} from './Cast.styled';
import notFound from'components/ nofoundimage.jpeg'





const movieAPI = new MovieAPI();

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCast = async () => {
      setStatus(Status.PENDING);
      try {
        const response = await movieAPI.fetchMovieCredits(movieId);
        setCast(response.cast);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
          setError(error);
      }
    };

    fetchCast();
  }, [movieId]);

  if (status === Status.IDLE || status === Status.PENDING) {
    return <Loader/>;
  }
if (status === Status.REJECTED) {
  return <ErrorMessage message={error.message} />;
}

if (cast.length === 0) {
  return <div>No cast information available.</div>;
}
  if (status === Status.RESOLVED) {
    return (
      <CastWrap>
        <CastTitle>Cast:</CastTitle>
        <CastList>
          {cast.map(actor => (
            <CastItem key={actor.id}>
              <CastPicture
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : `${notFound}`
                }
                alt={actor.name}
              />
              <CastName>{actor.name}</CastName>
             { `${actor.character}` && <CastCharacter>Character: {actor.character}</CastCharacter>}
            </CastItem>
          ))}
        </CastList>
      </CastWrap>
    );
  }
};

export default Cast;
