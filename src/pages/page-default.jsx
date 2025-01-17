import React from 'react';
import styled, { css } from 'styled-components';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;

  ${({ paddingAll }) => css`
    padding: ${paddingAll}
  `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Header />
      <Main paddingAll={paddingAll}>
        {children}
      </Main>
      <Footer />
    </>
  );
}

export default PageDefault;
