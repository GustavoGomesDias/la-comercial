import React, { Dispatch, RefObject } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Icons } from './Icons';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export interface SideMenuProps {
  homeRef: RefObject<HTMLDivElement>
  aboutRef: RefObject<HTMLDivElement>
  productsRef: RefObject<HTMLDivElement>
  contactRef: RefObject<HTMLDivElement>
  handleScroll: (ref: RefObject<HTMLDivElement>) => void
  isOpen: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

export function SideMenu({ isOpen, setIsOpen, homeRef, aboutRef, productsRef, contactRef, handleScroll }: SideMenuProps) {
  const { onOpen, onClose } = useDisclosure();

  const { push } = useRouter();

  const handleOnClose = () => {
    setIsOpen(false);
    onClose();
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={handleOnClose}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton ringOffsetColor="e7001c" />

          <DrawerBody display="flex" bgGradient="linear(to-b, #f4f4f4, #fff, #e4e4e4)">
            <VStack
              spacing={3}
              mt={5}
              w="full"
            >
              <Button
                variant="link"
                onClick={() => {
                  handleOnClose();
                  handleScroll(homeRef)
                }}
                size="lg"
              >
                Home
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  handleOnClose();
                  handleScroll(aboutRef)
                }}
                size="lg"
              >
                Sobre
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  handleOnClose();
                  handleScroll(productsRef)
                }}
                size="lg"
              >
                Produto
              </Button>
              <Button
                variant="link"
                onClick={() => {
                  handleOnClose();
                  handleScroll(contactRef)
                }}
                size="lg"
              >
                Contato
              </Button>
            </VStack>
          </DrawerBody>
          <DrawerFooter justifyContent="center">
            <HStack justifyContent="center">
              <Icons to="/" icon={<FaInstagram size="40px" color="#e7001c" />} />
              <Icons to="/" icon={<FaFacebookSquare size="40px" color="#e7001c" />} />
              <Icons to="/" icon={<FaWhatsapp size="40px" color="#e7001c" />} />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}