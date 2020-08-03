import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import initialData from '../../data/initial-data.json';
import MainBanner from '../../components/main-banner/main-banner';
import Carousel from '../../components/carousel/carousel';

export function Home() {
  return (
    <div style={{ background: "#141414" }}>
      <Header/>
      <MainBanner
         videoTitle={initialData.categorias[0].videos[0].titulo}
         url={initialData.categorias[0].videos[0].url}
         videoDescription={"desc"}
      />
      { initialData.categorias.map((category, idx) => <Carousel key={idx} category={category}/>) }
      <Footer/>
    </div>
  );
}
