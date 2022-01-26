import React from 'react';
import { Box, Flex, Grid, Image, useMediaQuery } from '@chakra-ui/react';
import { Circle } from '../Footer/Circle';
import { Item } from './Item';

export const Difference = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isLargeScreen] = useMediaQuery('(max-width: 1200px)');
  const handleControlTxtSize = isSmallScreen ? "20px" : (isLargeScreen ? "26px": "30px");
  const handleControlPadding = isSmallScreen ? "0.5em" : (isLargeScreen ? "1em": "7em");
  const handleControlBoxSize = isSmallScreen ? "1.7em" : (isLargeScreen ? "3em": "5em");

  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      alignItems="center"
      padding={handleControlPadding}
      gap={2}
    >
      <Item
          alt='Stock productis representation image'
          boxSize={handleControlBoxSize}
          content='Produtos em estoque'
          fontSize={handleControlTxtSize}
          imgPath='/images/svgs/stock.svg'
        />
        <Item
          alt='Delivery representation image'
          boxSize={handleControlBoxSize}
          content='Logística facilitada e entrega mais rápida'
          fontSize={handleControlTxtSize}
          imgPath='/images/svgs/delivery.svg'
        />
        <Item
          alt='Distribution representation image'
          boxSize={handleControlBoxSize}
          content='Distribuição para todo o Brasil'
          fontSize={handleControlTxtSize}
          imgPath='/images/svgs/distribution.svg'
        />
        <Item
          alt='Certificates representation image'
          boxSize={handleControlBoxSize}
          content='Certificados de Qualidade'
          fontSize={handleControlTxtSize}
          imgPath='/images/svgs/certificate.svg'
        />
    </Grid>
  );
};