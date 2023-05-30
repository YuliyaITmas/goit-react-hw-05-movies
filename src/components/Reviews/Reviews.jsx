

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieAPI from 'components/services/getMovies';
import Loader from 'components/Loader/Loader';
import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import {
  ReviewTitle,
  ReviewList,
  ReviewItem,
  ReviewAuthor,
  ReviewText,
} from './Reviews.styled';

const movieAPI = new MovieAPI();

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(Status.IDLE);
   const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setStatus(Status.PENDING);
      try {
        const response = await movieAPI.fetchMovieReviews(movieId);
        setReviews(response.results);
        setStatus(Status.RESOLVED);
      } catch (error) {
        setStatus(Status.REJECTED);
        setError(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (status === Status.IDLE || status === Status.PENDING) {
    return <Loader/>;
  }

  if (status === Status.REJECTED) {
    return <ErrorMessage message={error.message}  />;
  }
   
if (reviews.length === 0) {
  return <div>We don't have any reviews for this movie.</div>;
}
  if (status === Status.RESOLVED) {
    return (
      <>
        <ReviewTitle>Reviews:</ReviewTitle>
        {reviews.length > 0 ? (
          <ReviewList>
            {reviews.map(review => (
              <ReviewItem key={review.id}>
                <ReviewAuthor>Author: {review.author}</ReviewAuthor>
                <ReviewText>{review.content}</ReviewText>
              </ReviewItem>
            ))}
          </ReviewList>
        ) : (
          <ReviewTitle>No reviews available.</ReviewTitle>
        )}
      </>
    );
  }
};

export default Reviews;
