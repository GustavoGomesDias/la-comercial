import React from 'react';
import { chakra, Flex, useMediaQuery, Image, Button } from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

export interface HandleHoverCard {
  index: number
  cardIndex: number
  handleMouseEnter: (index: number) => void
  handleMouseOut: () => void
  header: string
}

export const Card = ({ handleMouseEnter, handleMouseOut, index, header, cardIndex }: HandleHoverCard): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');
  const [isLargeScreen] = useMediaQuery('(max-width: 1220px)');

  const handleControlH3fontSize = isSmallScreen ? "24px" : (isLargeScreen ? "36px" : "48px");
  const handleTitleColorInSmallScreen = isSmallScreen ?
    "#fff"
    :
    (cardIndex === index ? "#fff" : "#a41c1c");

  return (
    <Flex
      w="full"
      alignItems="center"
      flexDir="column"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseOut={handleMouseOut}
      bgBlendMode="multiply"
      bgImage="linear-gradient(to right, #a41c1c, #a41c1c, #a41c1c), url('/images/body/card2.jpg') !important"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos=""
      height={isSmallScreen ? "350px": "600px"}
    >
      <chakra.h3
        textAlign="center"
        w="full"
        fontSize={handleControlH3fontSize}
        p="0.3em"
        fontWeight="medium"
        borderBottom="1px solid #e0d5d6"
        color={handleTitleColorInSmallScreen}
      >
        {header}
      </chakra.h3>
      <Flex
        justifyContent="center"
        alignItems="center"
      >
      </Flex>
      <Flex alignItems="center" justifyContent="center" flexDir="column" h="100%">
        <Image
          src="/images/body/betaflex.png"
          w={isSmallScreen ? "45%": "50%"}
          h={isSmallScreen ? "45%": "50%"}
          alt='L&A Comercial Logo'
        />
        <Button bg='#25D366' textColor="#fff" size={isSmallScreen ? "sm": "lg"} mt={5} _hover={{
          bg: '#075E54'
        }}>
          <FaWhatsapp color="#fff" style={{ marginRight: "5px" }}/> Conheça
        </Button>
      </Flex>
    </Flex>
  );
}