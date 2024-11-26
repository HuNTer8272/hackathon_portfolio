import AboutUs from '@/components/AboutUs'
import Banner from '@/components/Banner'
import ContactUs from '@/components/ContactUs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Projects from '@/components/Projects'
import SmoothScroll from '@/helper/Lenis'
import React from 'react'

const page = () => {
  return (
    <div>
      <SmoothScroll>
        <Header/>
        <Banner/>
        <AboutUs/>
        <Projects/>
        <ContactUs/>
        <Footer/>
      </SmoothScroll>
    </div>
  )
}

export default page