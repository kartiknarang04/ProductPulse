'use client';
import React, { useState } from 'react';
import Popup from './Popup';
import Popup2 from './Popup2';
import { FaRegCommentDots } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { MdOutlinePayments } from "react-icons/md";
import { BiUpvote } from "react-icons/bi";

const Prprop = () => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenPopup2, setIsOpenPopup2] = useState(false);
  const [popupContent1, setPopupContent1] = useState(""); 
  const [popupContent2, setPopupContent2] = useState(""); 

  return (
    <main className='ml-[275px] flex w-[660px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
      <h1 className='text-2xl font-bold p-6 text-center text-white'>Products</h1>
      <div className='flex flex-col'>
        <div className='border-t-[0.5px] px-4 border-b-[0.5px] flex space-x-4 h-[160px]'>
          <div className=''>
            <div className='flex items-center space-x-1 p-2 text-gray-600' onClick={() => setIsOpenPopup("Popup 1 Content")}>
              <div className='w-20 h-20 bg-slate-500'/>
              <div className='text-white text-sm p-2 w-[470px] ml-1 mt-1 '>
                <div><span className='text-xl font-extrabold'>Swapnarambh AI: </span>Your Career, Your Decision <br /><br /></div>
                <div className=''>Career Counselling, Service Provider</div>
              </div>
              <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 cursor-pointer mt-2.5 text-white text-3xl' ><BiUpvote /></div>
            </div>
            <div className='flex items-center justify-around mb-2 w-full text-white'>
              <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 text-2xl cursor-pointer'><FaRegCommentDots /></div>
              <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 text-2xl cursor-pointer' ><CiShare2 /></div>
              <div className='rounded-full hover:bg-white/10 transtition duration-200 p-3 text-2xl cursor-pointer' onClick={() => setIsOpenPopup2(true)}><MdOutlinePayments /></div> {/* Change here */}
            </div>
          </div>
        </div>
      </div>
      {isOpenPopup && <Popup content={popupContent1} setIsOpenPopup={setIsOpenPopup} />}
      {isOpenPopup2 && <Popup2 content={popupContent2} setIsOpenPopup2={setIsOpenPopup2} />} {/* Change here */}
    </main>
  );
}

export default Prprop;
