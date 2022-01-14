import React from 'react';
import { chakra, Flex, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';

export const Home = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isLargeScreen] = useMediaQuery('(max-width: 1080px)');

  const handleControlH1fontSize = isSmallScreen ? "50px" : (isLargeScreen ? "75px": "100px");
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
    >
      <chakra.h1
        fontSize={handleControlH1fontSize}
        fontWeight="bold"
        // h="100%"
        w="100%"
        color="#fff"
      >
        ADESIVOS
      </chakra.h1>
      <chakra.h1
        w="100%"
        fontSize={handleControlH2fontSize}
        color="#fff"
      >
        DISTRIBUIÇÃO PARA TODO O BRASIL
      </chakra.h1>
    </Flex>
  );
}