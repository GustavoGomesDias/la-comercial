import { Stack } from '@chakra-ui/react';
import React from 'react';
import { Adesivos, Card } from '.';
import { MobileBg } from './MobileBg';

export const SmallScreen = (): JSX.Element => {
  return (
    <Stack
      mt="3rem"
      spacing="2px"
      w="full"
      direction="column"
      overflowX="hidden"
    >
      <MobileBg
        Content={<Card
            header="ADESIVOS"
            cardIndex={0}
            contentList={<Adesivos />}
            handleMouseEnter={() => {}}
            handleMouseOut={() => {}}
            index={0}
          />
        }
      />
      <MobileBg
        Content={<Card
            header="SELANTES"
            cardIndex={0}
            contentList={<Adesivos />}
            handleMouseEnter={() => {}}
            handleMouseOut={() => {}}
            index={0}
          />
        }
      />
      <MobileBg
        Content={<Card
            header="FERRAMENTAS"
            cardIndex={0}
            contentList={<Adesivos />}
            handleMouseEnter={() => {}}
            handleMouseOut={() => {}}
            index={0}
          />
        }
      />
    </Stack>
  );
}