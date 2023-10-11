import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { Container, Header } from './SharedLayoutStyled';
import Navbar from 'components/NavBar/NavBar';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navbar />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
