import type { NextPage } from 'next'
import { Header, Banner, Home as HomeContent } from '../components'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Banner content={<HomeContent />} height="400px" svgText='ADESIVOS' urlImg='/images/home.jpg' />
    </>
  )
};

export default Home;
