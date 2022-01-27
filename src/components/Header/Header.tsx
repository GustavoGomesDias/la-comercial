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
      bg="#e4e4e4"
      // px={{ base: 2, sm: 2 }}
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
      <HStack px="5em" display={{ base: "none", lg: "flex" }}>
        <Image
          src="/images/svgs/logo.svg"
          h="100px"
          w="130px"
          alt='L&A Comercial Logo'
          onClick={() => handleScroll(homeRef)}
          cursor="pointer"
        />
        <HStack w="100%" justifyContent="center" spacing={8}>
          <Button
            variant="link"
            onClick={() => handleScroll(homeRef)}
            color="#646464"
          >
            Home
          </Button>
          <Button
            variant="link"
            onClick={() => handleScroll(aboutRef)}
            color="#646464"
          >
            Sobre
          </Button>
          <Button
            variant="link"
            onClick={() => handleScroll(productsRef)}
            color="#646464"
          >
            Produto
          </Button>
          <Button
            variant="link"
            onClick={() => handleScroll(contactRef)}
            color="#646464"
          >
            Contato
          </Button>
        </HStack>
        {!isSmallScreen && <HStack justifyContent="flex-end" w="30%">
          <Icons to="/" icon={<FaInstagram color="#bc140c" />} />
          <Icons to="/" icon={<FaFacebookSquare color="#bc140c" />} />
          <Icons to="/" icon={<FaWhatsapp color="#bc140c" />} />
        </HStack>}
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