import PropTypes from 'prop-types';
import notFound from 'components/ nofoundimage.jpeg';
import {
  GenresList,
  Image,
  Rating,
  ReleaseDate,
  Title,
  Genre,
  Overview,
  Card,
  Subtitle,
  Info,
} from './MovieCard.styled';

const MovieCard = ({
  title,
  poster_path,
  genres,
  vote_average,
  release_date,
  overview,
}) => {
  const ratingPercentage = (vote_average * 10).toFixed();
  return (
    <Card>
      <div>
        <Title>{title}</Title>
        <Image
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${ notFound }`
          }
          alt={title}
        />
      </div>
      <Info>
        <Rating>Rating: {ratingPercentage}%</Rating>
        <ReleaseDate>Release date: {release_date}</ReleaseDate>
        <Subtitle>Genres:</Subtitle>
        <GenresList>
          {genres.map(genre => (
            <Genre key={genre.id}>{genre.name}</Genre>
          ))}
        </GenresList>

        <Subtitle>Overview:</Subtitle>
        <Overview>{overview}</Overview>
      </Info>
    </Card>
  );
};
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;
