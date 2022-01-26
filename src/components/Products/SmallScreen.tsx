import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Adesivos, Card } from '.';
import { MobileBg } from './MobileBg';

export const SmallScreen = (): JSX.Element => {
  return (
    <Stack
      spacing="2px"
      w="full"
      direction="row"
      overflowX="hidden"
    >
      <Card
        header="ADESIVOS"
        cardIndex={0}
        handleMouseEnter={() => { }}
        handleMouseOut={() => { }}
        index={0}
      />
      <Card
        header="SELANTES"
        cardIndex={0}
        handleMouseEnter={() => { }}
        handleMouseOut={() => { }}
        index={0}
      />
      <Card
        header="FERRAMENTAS"
        cardIndex={0}
        handleMouseEnter={() => { }}
        handleMouseOut={() => { }}
        index={0}
      />
    </Stack>
  );
}