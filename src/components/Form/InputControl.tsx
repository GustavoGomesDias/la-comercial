import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export interface InputControlProps {
  id: string
  label: string
  placeholder: string
  onChangehandle: React.SetStateAction<any>
}

export const InputControl = ({ id, label, placeholder, onChangehandle }: InputControlProps): JSX.Element => {
  return (
    <FormControl
      id={id}
      isRequired
      w="100%"
    >
      <FormLabel display="none">{label}</FormLabel>
      <Input
        variant="outline"
        placeholder={placeholder}
        bg="#fff"
        borderRadius="none"
        onChange={((e) => onChangehandle(e.target.value))}
      />
    </FormControl>
  );
}