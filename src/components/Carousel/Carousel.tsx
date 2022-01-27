import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

export interface CarouselProps {
  contentList: JSX.Element[]
}

const Carousel = ({ contentList }: CarouselProps): JSX.Element => {
  const sliders: JSX.Element[] = contentList.map((Component, index) => (
    <SwiperSlide key={index}>
      {Component}
    </SwiperSlide>
  ));
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop
      pagination={{
        "clickable": true
      }}
      observer
      observeParents
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
    >
      {sliders}
    </Swiper>
  );
}

export default Carousel;
