import React, { useState } from 'react';
import { Flex, Stack } from '@chakra-ui/react';
import { Adesivos } from './Adesivos';
import { Background } from './Background';
import { Card } from './Card';

export const LargeScreen = (): JSX.Element => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const [cardIndex, setCardIndex] = useState<number>(1);

  const handleMouseEnter = (index: number): void => {
    setCardIndex(index);
    setIsMouseEnter(true);
  };

  const handleMouseOut = (): void => {
    setIsMouseEnter(false);
  };

  return (
    <Stack
      mt="3rem"
      spacing="2px"
      w="full"
      direction="row"
      overflowX="hidden"
    >
      <Flex
        w="full"
      >
        <Background
          isMouseEnter={isMouseEnter}
          index={1}
          cardIndex={cardIndex}
          handleMouseOut={handleMouseOut}
          handleMouseEnter={handleMouseEnter}
          imgPath="/images/body/card1.jpg"
        />
        <Card
          handleMouseOut={handleMouseOut}
          handleMouseEnter={handleMouseEnter}
          index={1}
          cardIndex={cardIndex}
          header='ADESIVOS'
          contentList={<Adesivos />}
        />
      </Flex>
      <Flex
        w="full"
      >
        <Background
          isMouseEnter={isMouseEnter}
          index={2}
          cardIndex={cardIndex}
          handleMouseOut={handleMouseOut}
          handleMouseEnter={handleMouseEnter}
          imgPath="/images/body/card2.jpg"
        />
        <Card
          handleMouseOut={handleMouseOut}
          handleMouseEnter={handleMouseEnter}
          index={2}
          cardIndex={cardIndex}
          header='SELANTES'
          contentList={<Adesivos />}
        />
      </Flex>
      <Flex
        w="full"
      >
        <Background
          isMouseEnter={isMouseEnter}
          index={3}
          cardIndex={cardIndex}
          handleMouseOut={handleMouseOut}
          handleMouseEnter={handleMouseEnter}
          imgPath="/images/body/card2.jpg"
        />
        <Card
          handleMouseOut={handleMouseOut}
          handleMouseEnter={handleMouseEnter}
          index={3}
          cardIndex={cardIndex}
          header='FERRAMENTA'
          contentList={<Adesivos />}
        />
      </Flex>
    </Stack>
  );
}