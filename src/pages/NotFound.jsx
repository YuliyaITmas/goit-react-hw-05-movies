import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';

const NotFound = () => {
  const navigate = useNavigate();
   useEffect(() => {
     const timeout = setTimeout(() => {
       navigate('/');
     }, 3000);

     return () => clearTimeout(timeout);
   }, [navigate]);

  return (
    <NotFoundContainer>
      {' '}
      <h1>404 - Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Loader  />
    </NotFoundContainer>
  );
};


const NotFoundContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  font-weight: bold;
  color: red;
`;
export default NotFound;
