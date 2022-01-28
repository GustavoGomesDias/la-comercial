import React from 'react';
import { Flex, useMediaQuery } from '@chakra-ui/react';

export interface BannerProps {
  urlImg: string
  svgText?: string
  content: JSX.Element | JSX.Element[]
  height: string,
  isAbout?: boolean
}

export const Banner = ({ urlImg, content, svgText, height, isAbout }: BannerProps): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)');
  const [isLargeScreen] = useMediaQuery('(max-width: 1200px)');

  return (
    <Flex
      bgBlendMode="multiply"
      bg="#f4f4f4"
      backgroundImage={`url('${urlImg}')`}
      // bgImage={`linear-gradient(to right, #e4e4e4, #666666, #F76179), url(${urlImg})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="full"
      h={height}
      alignItems="center"
      flexDir="column"
      overflowX="hidden"
      transform={isAbout !== undefined && isAbout ? "scaleX(-1)" : ""}
    >
      {content}
    </Flex >
  );

}