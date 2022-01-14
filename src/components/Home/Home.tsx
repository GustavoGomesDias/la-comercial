import React from 'react';
import { chakra, Flex } from '@chakra-ui/react';

export const Home = (): JSX.Element => {
  return (
    <Flex
      justifyContent="flex-start"
      alignItems="center"
      flexDir="column"
      h="fit-content"
      w="80%"
      zIndex={2}
      position="absolute"
      mt="5%"
      left="5%"
    >
      <chakra.h1
        fontSize="100px"
        fontWeight="bold"
        // h="100%"
        w="100%"
        color="#fff"
      >
        ADESIVOS
      </chakra.h1>
      <chakra.h1
        w="100%"
        fontSize="30px"
        color="#fff"
      >
        DISTRIBUIÇÃO PARA TODO O BRASIL
      </chakra.h1>
    </Flex>
  );
}