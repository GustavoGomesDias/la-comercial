import { useMediaQuery } from '@chakra-ui/react';
import type { NextPage } from 'next'
import { Header, Banner, Home as HomeContent } from '../components'
import { About } from '../components/About/About';
import { Products } from '../components/Products/Products';

const Home: NextPage = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <Header />
      <Banner content={<HomeContent />} height={isSmallScreen ? "200px" : "400px"} svgText='ADESIVOS' urlImg='/images/home.jpg' />
      <Banner content={<About />} height={isSmallScreen ? "300px" : "600px"} urlImg="/images/body/about.jpg" />
      <Products />
      {/* <div /> */}
      {/* <div style={{ position: 'relative' }}>asdadsd</div> */}
    </>
  )
};

export default Home;