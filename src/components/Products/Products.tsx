import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { SmallScreen } from './SmallScreen';
import Carousel from '../Carousel/Carousel';
import { Card } from './Card';

export const Products = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const contentCarouselItem = [
    <Card
      header="ADESIVOS"
      key={0}
      imgPath="/images/body/card1.jpg"
    />,
    <Card
      header="SELANTES"
      key={1}
      imgPath="/images/body/card2.jpg"
    />,
    <Card
      header="FERRAMENTAS"
      key={2}
      imgPath="/images/body/card3.jpg"
    />
  ]

  return (
    <>
      {isSmallScreen ? <Carousel contentList={contentCarouselItem} /> : <SmallScreen />}
    </>
  );
};