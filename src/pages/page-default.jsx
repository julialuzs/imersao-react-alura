import React from 'react';
import styled from 'styled-components';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children }) {
  return (
    <>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
