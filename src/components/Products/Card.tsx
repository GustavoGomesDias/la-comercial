import React from 'react';
import { chakra, Flex, useMediaQuery } from '@chakra-ui/react';

export interface HandleHoverCard {
  index: number
  cardIndex: number
  handleMouseEnter: (index: number) => void
  handleMouseOut: () => void
  header: string
  contentList: JSX.Element | JSX.Element[]
}

export const Card = ({ handleMouseEnter, handleMouseOut, index, header, cardIndex, contentList }: HandleHoverCard): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isLargeScreen] = useMediaQuery('(max-width: 1220px)');

  const handleControlH3fontSize = isSmallScreen ? "24px" : (isLargeScreen ? "36px": "48px");
  const handleTitleColorInSmallScreen = isSmallScreen ?
    "#fff"
    :
    (cardIndex === index ? "#fff": "#a41c1c");

  const handleRenderContentListInSmallScreen = isSmallScreen ? contentList : ((cardIndex === index) && contentList);
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
        fontSize={handleControlH3fontSize}
        p="0.3em"
        fontWeight="medium"
        borderBottom="1px solid #e0d5d6"
        color={handleTitleColorInSmallScreen}
      >
        {header}
      </chakra.h3>
      <Flex
        justifyContent="center"
        alignItems="center"
      >
      </Flex>
      {handleRenderContentListInSmallScreen}
    </Flex>
  );
}