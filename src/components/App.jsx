import { Routes, Route } from 'react-router-dom';


// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
import Layout from './Layout';
import { lazy } from 'react';
import NotFound from 'pages/NotFound';


const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));



export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
};
