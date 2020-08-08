import React, { useEffect, useState } from 'react';
import Carousel from '../../components/carousel/carousel';
import Loader from '../../components/loader/loader';
import MainBanner from '../../components/main-banner/main-banner';
import { CategoryService } from '../../services/categories';
import PageDefault from '../page-default';

export function Home() {
  const [categories, setCategories] = useState([]);
  const categoryService = new CategoryService();

  useEffect(() => {
    categoryService.getCategoriesWithVideos()
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {categories.length === 0 ? (<Loader />) : (
        <>
          <MainBanner
            videoTitle={categories[0].videos[0].title}
            url={categories[0].videos[0].url}
            videoDescription="desc"
          />
          {
            categories.map((category) => (
              <Carousel key={category.id} category={category} />
            ))
          }
        </>
      )}
    </PageDefault>
  );
}
