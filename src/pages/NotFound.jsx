import styled from 'styled-components';

const NotFound = () => {
  return <NotFoundContainer>Page Is Not Found</NotFoundContainer>;
};


const NotFoundContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 24px;
  font-weight: bold;
  color: red;
`;
export default NotFound;
