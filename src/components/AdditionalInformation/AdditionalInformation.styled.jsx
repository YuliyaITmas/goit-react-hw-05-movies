
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  margin-left:20px
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 10px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  min-width: 120px;

  padding: 10px 20px;
  background-color: #f0f0f0;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e0e0e0;
  }
  &:last-child {
    margin-bottom: 10px;
  }
`;
