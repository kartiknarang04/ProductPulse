import React from 'react'
import LeftSidebar from '@/components/left-sidebar'
import RightSection from '@/components/right-section'
import MainComponent from '@/components/main-component'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ProductPulse | Home"
}

const Home=()=>{
  return(
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <LeftSidebar />
        <div className="flex-grow">
          <MainComponent />
        </div>
        <RightSection />
      </div>
    </div>
  )
}

export default Home
