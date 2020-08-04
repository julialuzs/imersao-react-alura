import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard/video-card';
import Slider, { SliderItem } from './components/Slider/slider';

function Carousel({ ignoreFirstVideo, category }) {
  const categoryExtraLink = category.link_extra;
  const { videos, title, color } = category;

  return (
    <VideoCardGroupContainer>
      {title && (
        <>
          <Title>
            {title}
          </Title>
          {
            categoryExtraLink
            && (
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}
            </ExtraLink>
            )
          }
        </>
      )}

      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={color}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
