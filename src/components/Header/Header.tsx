import React from 'react';
import { Button, chakra, Flex, HStack, IconButton } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { Icons } from './Icons';


export const Header = (): JSX.Element => {
  const { push }  = useRouter();

  return (
    <chakra.header
      bgGradient="linear(to-b, #f4f4f4, #fff, #e4e4e4)"
      px={{ base: 2, sm: 2 }}
      py={4}
      w="full"
      position="sticky"
    >
      <HStack justifyContent="flex-end">
        <Icons to="/" icon={<FaInstagram color="#e7001c" />} />
        <Icons to="/" icon={<FaFacebookSquare color="#e7001c" />} />
        <Icons to="/" icon={<FaWhatsapp color="#e7001c" />} />
      </HStack>
      <HStack
        spacing={3}
        paddingRight="300px"
        mr={1}
        display={{xl: "inline-flex" }}
      >
        <Button
          variant="link"
          onClick={() => push("/")}
        >
          Home
        </Button>
        <Button
          variant="link"
          onClick={() => push("/about")}
        >
          Sobre
        </Button>
        <Button
          variant="link"
          onClick={() => push("/works")}
        >
          Produto
        </Button>
        <Button
          variant="link"
          onClick={() => push("/contact")}
        >
          Contato
        </Button>
        {/* <IconButton
          display={{ base: "flex", xl: "none" }}
          aria-label="Abrir Manu"
          fontSize="20px"
          color={"blackAlpha.800"}
          _hover={{ bg: "yellow.800" }}
          _focus={{ boxShadow: "outline" }}
          variant="ghost"
          icon={<AiOutlineMenu />}
        /> */}
      </HStack>
    </chakra.header>
  );
}