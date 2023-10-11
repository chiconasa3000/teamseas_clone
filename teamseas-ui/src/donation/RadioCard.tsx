import {useRadio, Box, UseRadioProps} from '@chakra-ui/react';
import React, {ReactNode} from 'react'

interface Props extends UseRadioProps{
    children: ReactNode;
}

// 1. Create a component that consumes the `useRadio` hook
const RadioCard = (props: Props) => {
    const { getInputProps, getRadioProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getRadioProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'teal.600',
            color: 'white',
            borderColor: 'teal.600',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
}
export default RadioCard;