import React from 'react';
import { ListItem, UnorderedList } from '@chakra-ui/react';

export const AboutList = (): JSX.Element => {
  return (
    <UnorderedList w="100%"color="#fff" mt={2} spacing={1} fontSize={["0.8em", "0.8rem", "1.5rem"]}>
      <ListItem>
        VIDROS AUTOMOTIVOS
      </ListItem>
      <ListItem>
        CONTRUÇÃO CIVIL
      </ListItem>
      <ListItem>
        LINHA INDUSTRIAL
      </ListItem>
    </UnorderedList>
  );
}