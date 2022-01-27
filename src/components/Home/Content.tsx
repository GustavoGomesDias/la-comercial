import React from 'react';
import { chakra, Flex, useMediaQuery } from '@chakra-ui/react';

export interface HomeContentProps {
  h1: string
  content: string
}

export const HomeContent = ({ h1, content }: HomeContentProps): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isLargeScreen] = useMediaQuery('(max-width: 1080px)');

  const handleControlH1fontSize = isSmallScreen ? "45px" : (isLargeScreen ? "75px": "100px");
  const handleControlH2fontSize = isSmallScreen ? "15px" : (isLargeScreen ? "22px": "29.5px");
  const handleCotrolMt = isSmallScreen ? "11%" : (isLargeScreen ? "10%": "5%");

  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      flexDir="column"
      h="fit-content"
      w="80%"
      zIndex={2}
      position="absolute"
      mt={handleCotrolMt}
      left="5%"
      overflowX="hidden"
    >
      <chakra.h1
        fontSize={handleControlH1fontSize}
        fontWeight="bold"
        // h="100%"
        w="100%"
        // color="#e4e4e4"
      >
        {h1}
      </chakra.h1>
      <chakra.h2
        w="100%"
        fontSize={handleControlH2fontSize}
        // color="#e4e4e4"
      >
        {content}
      </chakra.h2>
    </Flex>
  );
}