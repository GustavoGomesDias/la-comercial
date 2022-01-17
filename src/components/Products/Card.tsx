import React, { MouseEventHandler } from 'react';
import { chakra, Flex } from '@chakra-ui/react';
import { Adesivos } from './Adesivos';

export interface HandleHoverCard {
  index: number
  cardIndex: number
  handleMouseEnter: (index: number) => void
  handleMouseOut: () => void
  header: string
  contentList: JSX.Element | JSX.Element[]
}

export const Card = ({ handleMouseEnter, handleMouseOut, index, header, cardIndex, contentList }: HandleHoverCard): JSX.Element => {
  return (
    <Flex
      position="relative"
      zIndex={2}
      // w="min-content"
      w="full"
      alignItems="center"
      flexDir="column"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseOut={handleMouseOut}
    >
      <chakra.h3
        textAlign="center"
        w="full"
        fontSize="64px"
        p="0.3em"
        fontWeight="medium"
        borderBottom="1px solid #e0d5d6"
        color={cardIndex === index ? "#fff": "#a41c1c"}
      >
        {header}
      </chakra.h3>
      <Flex
        justifyContent="center"
        alignItems="center"
      >
      </Flex>
      {(cardIndex === index) && contentList}
    </Flex>
  );
}