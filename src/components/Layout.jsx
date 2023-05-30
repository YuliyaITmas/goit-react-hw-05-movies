import { Outlet } from 'react-router-dom';



import { Suspense } from 'react';
import Loader from './Loader/Loader';
import { HeadNav, Header, StyledLink, Container } from './Layout.styled';


const Layout = () => {
  return (
    <Container>
      <Header>
        <HeadNav>
          <li>
            <StyledLink to="/"> Home </StyledLink>
          </li>

          <li>
            <StyledLink to="/movies"> Movies </StyledLink>
          </li>
        </HeadNav>
      </Header>

      <main>
        {' '}
        <Suspense fallback={<Loader/>}>
          {' '}
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};
export default Layout;
