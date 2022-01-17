import React, { useState } from 'react';
import { Flex, Stack, useMediaQuery } from '@chakra-ui/react';
import { Background } from './Background';
import { Card } from './Card';
import { Adesivos } from './Adesivos';
import { LargeScreen } from './LargeScreen';
import { SmallScreen } from './SmallSreen';

export const Products = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isSmallScreen ? <SmallScreen /> : <LargeScreen />}
    </>
  );
};