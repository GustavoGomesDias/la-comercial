import React, { useState, MouseEvent, RefObject } from 'react';
import { Button, chakra, Flex, HStack, IconButton, Image, useMediaQuery } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { Icons } from './Icons';
import { SideMenu } from './SideMenu';

export interface HeaderProps {
  homeRef: RefObject<HTMLDivElement>
  aboutRef: RefObject<HTMLDivElement>
  productsRef: RefObject<HTMLDivElement>
  contactRef: RefObject<HTMLDivElement>
  handleScroll: (ref: RefObject<HTMLDivElement>) => void
}

export const Header = ({ homeRef, aboutRef, productsRef, contactRef, handleScroll }: HeaderProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { push } = useRouter();
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');


  const handleIsOpen = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    setIsOpen(true);
  }

  return (
    <chakra.header
      bgGradient="linear(to-b, #f4f4f4, #fff, #e4e4e4)"
      px={{ base: 2, sm: 2 }}
      pt={3}
      w="full"
      top={0}
      position="sticky"
      zIndex={10}
      opacity={isSmallScreen ? "0.4" : "1"}
      _hover={{
        opacity: '1'
      }}
    >
      {!isSmallScreen && <HStack justifyContent="flex-end">
        <Icons to="/" icon={<FaInstagram color="#bc140c" />} />
        <Icons to="/" icon={<FaFacebookSquare color="#bc140c" />} />
        <Icons to="/" icon={<FaWhatsapp color="#bc140c" />} />
      </HStack>}
      {!isSmallScreen && <Image
        src="/images/svgs/logo.svg" 
        h="120px"
        w="120px"
        top="0"
        ml={10}
        position="absolute"
        zIndex={11}
        alt='L&A Comercial Logo'
      />}
      <HStack
        spacing={3}
        paddingRight="300px"
        mr={1}
        display={{ base: "none", lg: "inline-flex" }}
        ml={40}
      >
        <Button
          variant="link"
          onClick={() => handleScroll(homeRef)}
        >
          Home
        </Button>
        <Button
          variant="link"
          onClick={() => handleScroll(aboutRef)}
        >
          Sobre
        </Button>
        <Button
          variant="link"
          onClick={() => handleScroll(productsRef)}
        >
          Produto
        </Button>
        <Button
          variant="link"
          onClick={() => handleScroll(contactRef)}
        >
          Contato
        </Button>
      </HStack>
      <Flex justifyContent="flex-end" mt="2">
        <IconButton
          display={{ base: "flex", lg: "none" }}
          aria-label="Abrir Manu"
          fontSize="20px"
          color={"blackAlpha.800"}
          _hover={{ bg: "#CCC" }}
          _focus={{ boxShadow: "outline" }}
          variant="ghost"
          icon={<AiOutlineMenu />}
          onClick={(e) => handleIsOpen(e)}
        />
        <SideMenu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleScroll={handleScroll}
          homeRef={homeRef}
          aboutRef={aboutRef}
          productsRef={productsRef}
          contactRef={contactRef}
        />
      </Flex>
    </chakra.header>
  );
}