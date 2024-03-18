import React from 'react'
import Leftsidebarprofile from '../Leftsidebarprofile'
import ProfileCard from '../Profile'
import Rightsidebar from '../Rightsidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ProductPulse | Profile"
}

const Home=()=>{
  return(
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <Leftsidebarprofile  />
        <ProfileCard  />
        <Rightsidebar />
        </div>
    </div>
  )
}

export default Home;