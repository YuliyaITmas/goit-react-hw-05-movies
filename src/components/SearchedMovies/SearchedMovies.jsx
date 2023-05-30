

// import { useState, useEffect } from 'react';
// import MovieAPI from 'components/services/getMovies';


// import {Link } from 'react-router-dom';

// const movieAPI = new MovieAPI();

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

// const SearchedMovies = ({ value, location }) => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [status, setStatus] = useState(Status.IDLE);

 

//   const searchMoviesAPI = async () => {
   
//       try {
//         setStatus(Status.PENDING);
//         const response = await movieAPI.searchMovies(value, page);
//         console.log(response);
//         setMovies(response.results);
//         setPage(response.page);
//         setTotalPages(response.total_pages);
//         setStatus(Status.RESOLVED);
//       } catch (error) {
//         console.error(error);
//         setStatus(Status.REJECTED);
//       }
    
//   };

//   useEffect(() => {
//     searchMoviesAPI();
//   }, [value, page]);

//   const showPagination = movies && movies.length > 0;

//   const handleNextPage = () => {
//     if (page < totalPages) {
//       setPage(page => page + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (page > 1) {
//       setPage(page => page - 1);
//     }
//   };

//   return (
//     <div>
//       {status === Status.PENDING && <p>Loading...</p>}
//       {status === Status.RESOLVED && showPagination && (
//         <>
//           <ul>
//             {movies.map(movie => (
//               <li  key={movie.id}>
//         <Link to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}>
//           {movie.title || movie.name}
//         </Link>
//       </li>
             
//             ))}
//           </ul>

//           {totalPages > 0 && (
//             <div>
//               <p>
//                 Page {page} of {totalPages}
//               </p>
//               {page > 1 && (
//                 <button onClick={handlePreviousPage}>Previous Page</button>
//               )}
//               {page < totalPages && (
//                 <button onClick={handleNextPage}>Next Page</button>
//               )}
//             </div>
//           )}
//         </>
//       )}
//       {status === Status.REJECTED && <p>Error occurred while fetching data.</p>}
//     </div>
//   );
// };

// export default SearchedMovies;
