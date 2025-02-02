import Bannar_About from '@/app/components/About_com/Bannar_About'
import Customers from '@/app/components/About_com/Customers'
import Different from '@/app/components/About_com/Different'
import Discover from '@/app/components/About_com/Discover'
import Hero_About from '@/app/components/About_com/Hero_About'
 import React from 'react'

function About() {
  return (
    <div className='bg-[#E5DCD3]'>
     <Discover/>
     <Different/>
    

     <Customers/>
     <Bannar_About/>
     <Hero_About/>
    </div> 
  )
}

export default About
