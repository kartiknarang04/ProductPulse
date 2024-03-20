'use client';
import React, { useState } from 'react';
import Popup from './Popup';
import Popup2 from './Popup2';
import { FaRegCommentDots } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { BiUpvote } from "react-icons/bi";

const  MessaagePage = () => {

  return (
    <main className='ml-[275px] flex w-[660px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
      <h1 className='text-2xl font-bold p-6 text-center text-white'>Messages</h1>
      <div className='flex flex-col'>
        <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4 h-[180px]'>
          <div className=''>
            <div className='flex items-center space-x-1 p-2 text-gray-600'>
              <div className='w-20 h-20 bg-slate-500'/>
              <div className='text-white text-sm w-[470px] mt-1 '>
                <div><span className='text-lg font-extrabold ml-2'>Product Pulse has tagged you in a post</span></div>
                <div className='ml-2'>@twitter Why isn't there a built-in functionality to bold, underline, or italicize text in twitter?
Please include a feature so that users doesn’t have to rely on third party tools if they want to format the text. <br /> #Suggestion</div>
              </div>
              </div>
            <div className='flex items-center justify-around mb-4 w-full text-white'>
            <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 text-2xl cursor-pointer' ><BiUpvote /></div>
              <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 text-2xl cursor-pointer'><FaRegCommentDots /></div>
              <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 text-2xl cursor-pointer' ><CiShare2 /></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MessaagePage;
