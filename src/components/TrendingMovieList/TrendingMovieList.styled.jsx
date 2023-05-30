import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.li`
  margin-bottom: 10px
  
`;
export const StyledLink = styled(Link)`
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