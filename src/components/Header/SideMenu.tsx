import React, { Dispatch } from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export interface SideMenuProps {
  isOpen: boolean
  setIsOpen: Dispatch<React.SetStateAction<boolean>>
}

export function SideMenu({ isOpen, setIsOpen }: SideMenuProps) {
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
          <DrawerCloseButton />

          <DrawerBody display="flex" bgGradient="linear(to-b, #f4f4f4, #fff, #e4e4e4)">
            <VStack
              spacing={3}
              mt={5}
              w="full"
            >
              <Button
                variant="link"
                onClick={() => push("/")}
                size="lg"
              >
                Home
              </Button>
              <Button
                variant="link"
                onClick={() => push("/about")}
                size="lg"
              >
                Sobre
              </Button>
              <Button
                variant="link"
                onClick={() => push("/works")}
                size="lg"
              >
                Produto
              </Button>
              <Button
                variant="link"
                onClick={() => push("/contact")}
                size="lg"
              >
                Contato
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}