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
    <Flex w="full" justifyContent="center">
      <Flex
        mr="15px"
        justifyContent="center"
      >
        <Image
          src={imgPath}
          alt={alt}
          boxSize={boxSize}
        />
      </Flex>

      <span style={{
        color: "#686464",
        display: "flex",
        alignItems: "center",
        fontSize: fontSize,
        width: "100%",
      }}>
        {content}
      </span>
    </Flex>
  );
}