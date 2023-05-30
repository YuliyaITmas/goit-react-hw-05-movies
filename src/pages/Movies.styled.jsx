import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MoviesItem = styled.li`
  margin-bottom: 20px;
  margin-top: 20px;
`;
export const MoviesList = styled.ul`
  margin-bottom: 10px;
`;
export const MoviesStyledLink = styled(Link)`
  display: block;
  color: #000;
   padding: 2px 0;
  font-size: 18px;
  font-weight: 500;
  transition: color 0.2s ease;
}

  &:hover {
  color: #ff5500;
  }
`;

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 28px;
`;

export const MoviesButton = styled.button`
  display: inline-block;
  width: 220px;

  align-items: center;
  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  coursor:pointer;
  border: none;
  margin-top: 10px;
  margin-right: 20px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #e0e0e0;
   
  }
`;