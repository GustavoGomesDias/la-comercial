import React from 'react';
import { ListItem, UnorderedList } from '@chakra-ui/react';

export const AboutList = (): JSX.Element => {
  return (
    <UnorderedList mt={2} spacing={3} fontSize={["1em", "1rem", "1.5rem"]}>
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