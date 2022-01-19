import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import { LargeScreen } from './LargeScreen';
import { SmallScreen } from './SmallScreen';

export const Products = (): JSX.Element => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  return (
    <>
      {isSmallScreen ? <SmallScreen /> : (
        <div style={{
          display: 'inline-block',
          position: 'relative',
          width: "100%"
        }}>
          <LargeScreen />
        </div>
      )}
    </>
  );
};