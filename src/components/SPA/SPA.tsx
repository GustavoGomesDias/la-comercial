import React from 'react';
import { RefObject, useRef } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { Header, Banner, Home as HomeContent, Footer, Products } from '../index';
import { About } from '../About/About';
import { useState } from 'react';
import { Difference } from '../Difference/Diferremce';
import Carousel from '../Carousel/Carousel';

const SPA = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [previewOffsetTop, setPreviewOffsetTop] = useState<number>(0);
  const handleScroll = (ref: RefObject<HTMLDivElement>) => {

    if (isSmallScreen) {
      setPreviewOffsetTop(ref.current.offsetTop);
      console.log(ref.current.offsetTop);
      console.log(previewOffsetTop);
      console.log(window.innerHeight);

      let offsetTop: number;;
      if (ref.current.offsetTop < previewOffsetTop) {
        offsetTop = -(previewOffsetTop - ref.current.offsetTop);
      } else {
        offsetTop = ref.current.offsetTop - previewOffsetTop;
      }
      window.scrollBy(0, offsetTop);
    }
    else ref.current.scrollIntoView();
  }
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const homeCarouselList: JSX.Element[] = [
    <Banner
      key={0}
      content={<HomeContent />}
      height={isSmallScreen ? "200px" : "400px"}
      urlImg='/images/body/home.jpg'
    />,
  ];


  return (
    <>
      <Header
        handleScroll={handleScroll}
        homeRef={homeRef}
        aboutRef={aboutRef}
        productsRef={productsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef} style={{
        marginBottom: "40px"
      }} />
      <Carousel contentList={homeCarouselList} />
      
      <div ref={aboutRef} style={{
        marginBottom: "80px"
      }} />
      <Banner content={<About />} height={isSmallScreen ? "300px" : "600px"} urlImg="/images/body/about.jpg" />
      <Difference />
      <div ref={productsRef} style={{
        marginBottom: "20px"
      }} />
      <Products />
      <div ref={contactRef} />
      <Footer />
    </>
  )
};

export default SPA;