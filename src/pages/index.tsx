import React from 'react';
import dynamic from 'next/dynamic';

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