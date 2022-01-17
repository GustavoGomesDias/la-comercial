import { chakra, Flex } from '@chakra-ui/react';
import React from 'react';
import { AboutList } from './AboutList';

export const About = (): JSX.Element => {
  return (
    <Flex
      w="full"
      ml="16%"
      mt="5%"
      flexDir="column"
      overflowX="hidden"
    >
      <chakra.h1
        fontSize={["1.5em", "1.6em", "4em"]}
        color="#fff"
        lineHeight="1"
      >
        MAIS
        <br />
        <span
          style={{
            fontWeight: 'bold'
          }}
        >
          QUALIDADE
        </span>
        <br />
        E MUITO MAIS
        <br />
        <span
          style={{
            fontWeight: 'bold'
          }}
        >
          RENDIMENTO
        </span>
      </chakra.h1>
      <AboutList />
    </Flex>
  );
}