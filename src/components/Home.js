import React from 'react'
import Header from './Header'
import LandingPageSection2 from './LandingPageSection-2'
import LandingPageSection3 from './LandingPageSection-3'
import LandingPageSection4 from './LandingPageSection-4'
import LandingPageSection5 from './LandingPageSection-5'
import LandingPageSection7 from './LandingPageSection-7'
import Footer from './Footer'
import LeftLogo from './LeftLogo'

function Home() {
  return (
        <container>
          <LeftLogo />
          <Header />,
          <LandingPageSection2 />,
          <LandingPageSection3 />,
          <LandingPageSection4 />,
          <LandingPageSection5 />
          <LandingPageSection7 />,
          <Footer />
        </container>
  )
}

export default Home