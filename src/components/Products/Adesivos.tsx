import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

export const Adesivos = (): JSX.Element => {
  return (
    <Flex
      justifyContent="center"
    >
      <Image
        src="/images/body/betaflex.png" 
        h="120px"
        w="120px"
        top="0"
        ml={10}
        position="absolute"
        zIndex={11}
        alt='L&A Comercial Logo'
      />
    </Flex>
  );
}