import React, { useState } from 'react';
import { Box, Button, chakra, Flex, FormControl, FormLabel, Grid, HStack, Image, Link, Text, Textarea, useMediaQuery } from '@chakra-ui/react';
import { InputControl } from '../Form/InputControl';
import { Icons } from '..';
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Circle } from './Circle';

export const Footer = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <Flex
      borderTop="5px solid #b3b3b3"
      mt={isSmallScreen ? "100px" : "200px"}
      bgGradient="linear(to-br, #c8242c, #d31b1f)"
      flexDir="column"
      alignItems="center"
     
    >
      <Grid
        templateColumns={isSmallScreen ? "none" : 'repeat(3, 1fr)'}
        templateRows={isSmallScreen ? 'repeat(3, 0.5fr)' : 'none'}
        my="3em"
        gap={8}
        w={isSmallScreen ? "100%" : "90%"}
      >
        <Flex>
          <Flex w={isSmallScreen ? "100%" : "90%"} alignItems="center" justifyContent="center">
            <Image
              src="/images/svgs/logo-footer.svg"
              h="200px"
              w="200px"
              top="0"
              alt='L&A Comercial Logo'
            />
          </Flex>
          {!isSmallScreen && <Box
            width="3px"
            height="75%"
            my="auto"
            bg="#fff"
          />}
        </Flex>
        <Box padding={isSmallScreen ? "1em" : "none"}>
          <form>
            <chakra.h2 color="#fff" fontSize="24px" textAlign="center">Fale Conosco</chakra.h2>
            <Grid templateColumns='repeat(2, 1fr)' gap={1}>
              <InputControl id='name' label='Nome' onChangehandle={setName} placeholder='Nome' />
              <InputControl id='name' label='E-mail' onChangehandle={setName} placeholder='E-mail' />
              <InputControl id='name' label='Telefone' onChangehandle={setName} placeholder='Telefone' />
              <InputControl id='name' label='Empresa' onChangehandle={setName} placeholder='Empresa' />
              <InputControl id='name' label='Cidade' onChangehandle={setName} placeholder='Cidade' />
              <InputControl id='name' label='Estado' onChangehandle={setName} placeholder='Estado' />
            </Grid>

            <FormControl
              id='message'
              isRequired
              w="100%"
              mt={2}
            >
              <FormLabel display="none">Mensagem</FormLabel>
              <Textarea
                bg="#fff"
                borderRadius="none"
                placeholder="Mensagem"
              />
            </FormControl>



            <Flex w="100%" justifyContent="flex-end" mt="5px">
              <Button
                bgColor='#96151b'
                size='sm'
                borderRadius="0"
                color="#fff"
                w="30%"
                _hover={{
                  bg: "#6e0d12"
                }}
              >
                Enviar
              </Button>
            </Flex>
          </form>
          <Flex justifyContent="center">
            <Text
              style={{
                fontSize: "0.8em",
                fontWeight: "lighter"
              }}
              color="#fff"
            >
              comercial@comerciallea.com.br<br /><br />
              <span
                style={{
                  fontSize: "1.2em",
                  fontWeight: "bold"
                }}
              >
                55.27.3061-7474<br />
                55.27.99942-0858
              </span><br /><br />
              Rua Ivan Neiva Neves, 611, Edifíco Verano Mall,<br />
              Sala 201, Residencial Coqueiral, Vila Velha/ES
            </Text>

          </Flex>
        </Box>
        <HStack justifyContent="center" alignItems={isSmallScreen ? "flex-start" : "center"}>
          <Icons to="/" icon={<FaInstagram color="#fff" size="40px" />} />
          <Icons to="/" icon={<FaFacebookSquare color="#fff" size="40px" />} />
          <Icons to="/" icon={<FaWhatsapp color="#fff" size="40px" />} />
        </HStack>
      </Grid>

      <Flex
        justifyContent="center"
        h="50px"
        bgColor="#96151b"
        padding={isSmallScreen ? "0.5em" : "0"}
        w="full"
      >
        <Text color="#fff" textAlign="center" my="auto" fontSize={isSmallScreen ? "0.5em" : "0.7em"}>Comercial L&A 2022</Text> <Circle />
        <Text color="#fff" textAlign="center" my="auto" fontSize={isSmallScreen ? "0.5em" : "0.7em"}>Todos os direitos reservados</Text> <Circle />
        <Text color="#fff" textAlign="center" my="auto" fontSize={isSmallScreen ? "0.5em" : "0.7em"}>
          Feito por <Link href='https://www.artcom.com.br' isExternal textDecor="underline">Artcom</Link>
        </Text>
      </Flex>
    </Flex>
  );
}