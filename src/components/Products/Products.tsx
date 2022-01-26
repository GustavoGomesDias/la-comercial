import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { SmallScreen } from './SmallScreen';
import Carousel from './Carousel/Carousel';
import { Card } from './Card';

export const Products = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const contentCarouselItem = [
    <Card
      header="ADESIVOS"
      cardIndex={0}
      handleMouseEnter={() => { }}
      handleMouseOut={() => { }}
      index={0}
      key={0}
    />,
    <Card
      header="SELANTES"
      cardIndex={0}
      handleMouseEnter={() => { }}
      handleMouseOut={() => { }}
      index={0}
      key={1}
    />,
    <Card
      header="FERRAMENTAS"
      cardIndex={0}
      handleMouseEnter={() => { }}
      handleMouseOut={() => { }}
      index={0}
      key={2}
    />
  ]

  return (
    <>
      {isSmallScreen ? <Carousel contentList={contentCarouselItem} /> : <SmallScreen />}
    </>
  );
};