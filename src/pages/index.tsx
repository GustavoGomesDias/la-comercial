import React, { RefObject, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useMediaQuery } from '@chakra-ui/react';

import { Header, Banner, Home as HomeContent, Footer, Products } from '../components'
import { About } from '../components/About/About';
import SEO from '../components/SEO';

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/SPA/SPA'),
  { ssr: false }
)

const Home = (): JSX.Element => {

  return (
    <>
      <SEO title='L&A Comercial' />
      <DynamicComponentWithNoSSR />
    </>
  )
};

export default Home;