"use client";
import React from 'react';
import Rightsidebarproducts from './RightsidebarProducts';
import { BsDot } from 'react-icons/bs';
import { FaRegCommentDots } from "react-icons/fa6";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiLike } from "react-icons/bi";
import { CiShare2 } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { BiUpvote } from "react-icons/bi";
import Popup from './Popup';
import { useState } from 'react';

const Prprop= () => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
  return (
    <main className='ml-[275px] flex w-[660px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
    <h1 className='text-2xl font-bold p-6 text-center text-white'>Products</h1> 
      <div className='flex flex-col'>
        <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4 h-[160px] border-gray-600'>
          <div className=''>
            <div className='flex items-center space-x-1 p-2 text-gray-600' onClick={()=>{setIsOpenPopup(true)}}>
            <div className='w-20 h-20 bg-slate-500'/>
            <div className='text-white text-sm p-2 w-[470px] ml-1 mt-1 '>
              <div><span className='text-xl font-extrabold'>Swapnarambh AI: </span>Your Career, Your Decision <br /><br /></div>
              <div className=''>Career Counselling , Service Provider</div>
            </div>
            <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer mt-2.5 text-white text-3xl' ><BiUpvote /></div>
            </div>
            <div className='flex items-center justify-around mb-2 w-full text-white'>
              <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 text-2xl cursor-pointer'><FaRegCommentDots /></div>
              <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 text-2xl cursor-pointer' ><CiShare2 /></div>
              <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 text-2xl cursor-pointer' ><MdOutlinePayments /></div>
            </div>
          </div>
        </div>
      </div>
      {isOpenPopup && <Popup setIsOpenPopup={setIsOpenPopup} />}
    </main>
  );
}

export default Prprop;
