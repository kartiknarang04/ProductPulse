import React from 'react'
import Leftsidebarnotifications from '../leftsidebarnotifications'
import Notifications from '../Notifications'
import Rightsidebar from '../Rightsidebar'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "ProductPulse | Products"
}

const Home=()=>{
  return(
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <Leftsidebarnotifications />
        <Notifications />
        <Rightsidebar />
        </div>
    </div>
  )
}

export default Home;