import React from 'react'
import Leftsidebarmessages from '../leftsidebarmessages'
import MessaagePage from '../MessagesPage'
import Rightsidebar from '../Rightsidebar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ProductPulse | Messages"
}

const Home=()=>{
  return(
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <Leftsidebarmessages/>
        <MessaagePage />
        <Rightsidebar/>
        </div>
    </div>
  )
}

export default Home;