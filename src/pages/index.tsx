import { useMediaQuery } from '@chakra-ui/react';
import type { NextPage } from 'next'
import { Header, Banner, Home as HomeContent } from '../components'

const Home: NextPage = () => {
  const [isSmallScreen] = useMediaQuery('(max-width: 768px)')

  return (
    <>
      <Header />
      <Banner content={<HomeContent />} height={isSmallScreen ? "200px" : "400px"} svgText='ADESIVOS' urlImg='/images/home.jpg' />
    </>
  )
};

export default Home;