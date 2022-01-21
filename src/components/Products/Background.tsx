import React from 'react';
import { Box, useMediaQuery } from '@chakra-ui/react';

export interface HandleHoverBg {
  isMouseEnter: boolean
  index: number
  cardIndex: number
  imgPath: string
  handleMouseEnter: (index: number) => void
  handleMouseOut: () => void
}

export const Background = ({ index, cardIndex, imgPath, handleMouseOut, handleMouseEnter }: HandleHoverBg): JSX.Element => {
  return (
    <Box
      bgBlendMode="multiply"
      bgImage={cardIndex === index ? `linear-gradient(to right, #a41c1c, #a41c1c, #a41c1c), url('${imgPath}') !important` : `url('${imgPath}')`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos=""
      h="600px"
      w="33.2%"
      filter={cardIndex === index ? "blur(0px) !important" : "blur(19px)"}
      position="absolute"
      zIndex={2}
      opacity={cardIndex === index ? "1 !important" : 0.4}
      _hover={{
        opacity: "1 !important",
        filter: "blur(0px) !important",
        bgBlendMode: "multiply !important",
        bgImage: "linear-gradient(to right, #a41c1c, #a41c1c, #a41c1c), url('/images/body/about.jpg') !important"
      }}
      onMouseOut={handleMouseOut}
      onMouseEnter={() => handleMouseEnter(index)}
    />
  );
}