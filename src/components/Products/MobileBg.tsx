import React from 'react';
import { Flex } from '@chakra-ui/react';

export interface MobileBgProps {
  Content: JSX.Element | JSX.Element[]
}

export const MobileBg = ({ Content }: MobileBgProps): JSX.Element => {
  return (
    <Flex
      bgBlendMode="multiply"
      bgImage="linear-gradient(to right, #a41c1c, #a41c1c, #a41c1c), url('/images/body/about.jpg') !important"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos=""
      w="full"
      height="300px"
    >
      {Content}
    </Flex>

  );
}