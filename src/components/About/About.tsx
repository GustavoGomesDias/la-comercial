import { chakra, Flex } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react';
import { AboutList } from './AboutList';
import classes from './About.module.css';
import useIsVisible from '../../hooks/useIsVisible';

export const About = (): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isSetted, setIsSetted] = useState<boolean>(false)
  const textRef = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(textRef);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    }
  }, [isVisible]);
  

  return (
    <Flex
      w="100%"
      ml="16%"
      h="100%"
      justifyContent="center"
      flexDir="column"
      overflowX="hidden"
      transform="scaleX(-1)"
      alignItems="flex-end"
    >
      <Flex
        flexDir="column"
        overflowX="hidden"
        w={["60%", "50%", "50%", "50%", "50%", "30%"]}
        px={5}
        py={4}
        bgGradient={"linear(to-r, #8f1207, #c0140c, #8f1207)"}
        ref={textRef}
        
      >
        <chakra.h1
          fontSize={["1.2em", "1em", "1.8em", "4em"]}
          // color="#fff"
          lineHeight="1"
          color="#fff"
          className={visible && classes['text-animation']}
        >
          MAIS
          <br />
          <span
            
            style={{
              fontWeight: 'bolder'
            }}
          >
            QUALIDADE
          </span>
          <br />
          E MUITO MAIS
          <br />
          <span
            style={{
              fontWeight: 'bolder'
            }}
          >
            RENDIMENTO
          </span>
        </chakra.h1>
        <AboutList visible={visible} />
      </Flex>
    </Flex>
  );
}