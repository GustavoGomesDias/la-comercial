import React, { useState } from 'react';
import { Box, Flex, Stack } from '@chakra-ui/react';
import { Background } from './Background';
import { Card } from './Card';
import { Adesivos } from './Adesivos';

export const Products = (): JSX.Element => {
  const [isMouseEnter, setIsMouseEnter] = useState<boolean>(false);
  const [cardIndex, setCardIndex] = useState<number>(0);

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
      direction={['column', 'row']}
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
};