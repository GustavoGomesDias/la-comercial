import React, { useState, MouseEvent } from 'react';
import { Button, chakra, Flex, HStack, IconButton } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai'
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { Icons } from './Icons';
import { SideMenu } from './SideMenu';


export const Header = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { push } = useRouter();

  const handleIsOpen = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    setIsOpen(true);
  }

  return (
    <chakra.header
      bgGradient="linear(to-b, #f4f4f4, #fff, #e4e4e4)"
      px={{ base: 2, sm: 2 }}
      py={2}
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
        display={{ base: "none", lg: "inline-flex" }}
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
        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </Flex>
    </chakra.header>
  );
}