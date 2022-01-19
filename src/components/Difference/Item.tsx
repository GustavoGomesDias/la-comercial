import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { Circle } from "../Footer/Circle";

export interface ItemProps {
  imgPath: string
  fontSize: string
  boxSize: string
  content: string
  alt: string
}

export const Item = ({ imgPath, fontSize, boxSize, content, alt }: ItemProps): JSX.Element => {
  return (
    <Flex w="full">
      <Image
        src={imgPath}
        alt={alt}
        boxSize={boxSize}
      />

      <span style={{
        color: "#686464",
        display: "flex",
        alignItems: "center",
        fontSize: fontSize,
      }}>
        <Box>
          <Circle height="10px" width="10px" bg="#686464" />
        </Box>
        {content}
      </span>
    </Flex>
  );
}