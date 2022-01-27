import { chakra, Flex } from '@chakra-ui/react';
import React from 'react';
import { AboutList } from './AboutList';

export const About = (): JSX.Element => {
  return (
    <Flex
      w="100%"
      ml="16%"
      h="100%"
      justifyContent="center"
      flexDir="column"
      overflowX="hidden"
      transform="scaleX(-1)"
      alignItems="flex-end"
    >
      <Flex
        flexDir="column"
        overflowX="hidden"
        
        w={["60%", "50%"]}
        px={5}
        py={1}
        bgGradient={"linear(to-r, #8f1207, #c0140c, #8f1207)"}
      >
        <chakra.h1
          fontSize={["1.2em", "1em", "1.8em", "4em"]}
          // color="#fff"
          lineHeight="1"
          px={5}
          py={1}
          color="#fff"
        >
          MAIS
          <br />
          <span
            style={{
              fontWeight: 'bolder'
            }}
          >
            QUALIDADE
          </span>
          <br />
          E MUITO MAIS
          <br />
          <span
            style={{
              fontWeight: 'bolder'
            }}
          >
            RENDIMENTO
          </span>
        </chakra.h1>
        <AboutList />
      </Flex>
    </Flex>
  );
}