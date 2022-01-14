import React from 'react';
import { chakra, Flex, useBreakpointValue } from '@chakra-ui/react';

export interface BannerProps {
  urlImg: string
  svgText?: string
  content: JSX.Element | JSX.Element[]
  height: string
}

export const Banner = ({ urlImg, content, svgText, height }: BannerProps): JSX.Element => {
  const screenWidth: string | undefined = useBreakpointValue({ base: "680px", md: "1110px" });

  return (
    <Flex
      bgBlendMode="multiply"
      bg="#f4f4f4"
      backgroundImage={`url('${urlImg}')`}
      bgImage={`linear-gradient(to right, #e4e4e4, #666666, #F76179), url(${urlImg})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="full"
      h={height}
      mt={3}
      alignItems="center"
      justifyContent="flex-start"
      flexDir="column"
    >
      {svgText !== undefined && <svg height="600px" width="100%">
        <text
          x="0"
          y="300"
          fillOpacity={0}
          strokeOpacity={0.5}
          stroke="#fff"
          strokeWidth="1px"
          fontSize={screenWidth !== undefined && screenWidth === "680px" ? "15em" : "15em"}
        >
          {svgText}
        </text>
      </svg>}

      {content}
    </Flex >
  );

}