import React from 'react'
import Animated from '../components/Animated'
import WhoWeHelp from '../components/WhoWeHelp'
import WhatWeDo from '../components/WhatWeDo'
import WhyTeamgrid from '../components/WhyTeamgrid'
import CapabilitiesSection from '../components/CapabilitiesSection'
import TestimonialsSection from '../components/TestimonialsSection'
import LetsTalk from '../components/Letstalk'
import bgImage from '../assets/rectangle-25.png'

function Homepage() {

  const data = {
    title: `Let’s Build Together`,
    paraone:'— Efficiently, Flexibly, and Reliably',
    paratwo:`Whether you're scaling a team or shipping a project, Teamgrid is your partner in dependable delivery.`,
    btnone:`Let’s Talk`,
    btntwo:'Request a Free Quote'
  }

  return (
    <>
    {/* <Navbar/> */}
    <Animated/>
    <WhoWeHelp/>
    <WhatWeDo/>
    <WhyTeamgrid/>
    <CapabilitiesSection/>
    <TestimonialsSection/>
    <LetsTalk bgImage={bgImage} title={data.title} paraone={data.paraone} paratwo={data.paratwo} btnone={data.btnone} btntwo={data.btntwo}/>
    {/* <FooterSection/> */}
    </>
  )
}

export default Homepage