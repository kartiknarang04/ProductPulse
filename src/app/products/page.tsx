import React from 'react'
import Leftsidebarproducts from '../Leftsidebarproducts'
import Prprop from '../Prpop'
import Rightsidebarproducts from '@/app/RightsidebarProducts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "ProductPulse | Products"
}

const Home=()=>{
  return(
    <div className='w-full h-full flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-xl w-full h-full flex relative'>
        <Leftsidebarproducts />
        <Prprop />
        <Rightsidebarproducts />
        </div>
    </div>
  )
}

export default Home;