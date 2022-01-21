import React from 'react';
import { chakra, Flex, useBreakpointValue, useMediaQuery } from '@chakra-ui/react';

export interface BannerProps {
  urlImg: string
  svgText?: string
  content: JSX.Element | JSX.Element[]
  height: string
}

export const Banner = ({ urlImg, content, svgText, height }: BannerProps): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 800px)');
  const [isLargeScreen] = useMediaQuery('(max-width: 1200px)');

  const handleControlSVGposition = isSmallScreen ? "130" : (isLargeScreen ? "250": "270");
  const handleControlSVGTxtSize = isSmallScreen ? "4.4em" : (isLargeScreen ? "9em": "13em");

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
      justifyContent="flex-start"
      flexDir="column"
      overflowX="hidden"
    >
      {svgText !== undefined && <svg height="600px" width="100%">
        <text
          x="0"
          y={handleControlSVGposition}
          fillOpacity={0}
          strokeOpacity={0.5}
          stroke="#fff"
          strokeWidth="1px"
          fontSize={handleControlSVGTxtSize}
        >
          {svgText}
        </text>
      </svg>}

      {content}
    </Flex >
  );

}