import { chakra } from '@chakra-ui/react';
import React from 'react';

export interface IconProps {
  to: string
  icon: JSX.Element
}

export const Icons = ({to, icon}: IconProps): JSX.Element => {
  return (
    <chakra.a
      href={to}
      cursor="pointer"
    >
      {icon}
    </chakra.a>
  );
};