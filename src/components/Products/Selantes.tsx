import React from 'react';
import { Flex, ListItem, UnorderedList } from '@chakra-ui/react';

export const Selantes = (): JSX.Element => {
  return (
    <Flex
      justifyContent="center"
    >
      <UnorderedList
        fontSize={["1em", "0.8rem", "1.5rem"]}
        color="#fff"
        w="80%"
        padding={7}
      >
        <ListItem>
          Produtos em estoque
        </ListItem>
        <ListItem>
          Distribuição para todo o Brasil
        </ListItem>
        <ListItem>
          Logística facilitada e entrega mais rápida
        </ListItem>
        <ListItem>
          Certificados de Qualidade
        </ListItem>
      </UnorderedList>
    </Flex>
  );
}