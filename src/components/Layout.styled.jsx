import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  transition: color 0.2s ease;
  &.active {
    color: orange;
  }
`;

export const Header = styled.header`
  width: 100%;
  background-color: #f0f0f0;
  padding: 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* добавляем тень */
  border-bottom: 1px solid #ccc;
`;

export const HeadNav = styled.ul`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f8f8;
  color: #010101;
  gap: 50px;
  padding: 0 20px 20px 20px;
  margin-top: 20px;
  margin: auto;
  max-width: 800px;
`;
