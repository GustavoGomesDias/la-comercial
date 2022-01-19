import React from 'react';
import { RefObject, useRef } from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { Header, Banner, Home as HomeContent, Footer, Products } from '../index';
import { About } from '../About/About';
import SEO from '../SEO';

const SPA = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const handleScroll = (ref: RefObject<HTMLDivElement>) => ref.current!.scrollIntoView();
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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
      <Banner content={<HomeContent />} height={isSmallScreen ? "200px" : "400px"} svgText='ADESIVOS' urlImg='/images/home.jpg' />
      <div ref={aboutRef} style={{
        marginBottom: "80px"
      }} />
      <Banner content={<About />} height={isSmallScreen ? "300px" : "600px"} urlImg="/images/body/about.jpg" />
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