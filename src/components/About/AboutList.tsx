import React from 'react';
import { ListItem, UnorderedList } from '@chakra-ui/react';
import classes from './About.module.css';

export interface AboutListProps {
  visible: boolean
}

export const AboutList = ({ visible }: AboutListProps): JSX.Element => {
  return (
    <UnorderedList
      w="100%"
      color="#fff"
      mt={2}
      spacing={1}
      fontSize={["0.8em", "0.8rem", "1.5rem"]}
      className={visible && classes['list-animation']}
    >
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