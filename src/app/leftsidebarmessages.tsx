'use client';
import React, { useEffect, useState } from 'react';
import { RiCommunityFill } from "react-icons/ri";
import { HiClipboardList } from "react-icons/hi";
import { HiBell } from "react-icons/hi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import Link from 'next/link';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { BsFillRocketTakeoffFill, BsThreeDots } from "react-icons/bs";
import { BiMessageSquareDetail } from 'react-icons/bi';
const NavigationItems = [
  {
    title: 'Community',
    icon: RiCommunityFill
  },
  {
    title: 'Products',
    icon: HiClipboardList
  },
  {
    title: 'Notifications',
    icon: HiBell
  },
  {
    title: 'Profile',
    icon: GiPlagueDoctorProfile
  },
  {
    title: 'Messages',
    icon: BiMessageSquareDetail
  }
];

const Leftsidebarmessages= () => {
   return (
    <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
      <div className='flex flex-col items-stretch h-full space-y-4 mt-4 text-white'>
        <Link href={"/"} className='text-4xl my-3'>
          <BsFillRocketTakeoffFill />
        </Link>
        {NavigationItems.map((item) => (
          <Link
            className={
              item.title === "Messages"
                ? 'hover:bg-primary transition text-2xl duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6 text-blue-400'
                : 'hover:bg-primary transition text-2xl duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6'
            }
            href={item.title === "Community" ? "/" : `/${item.title.toLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>
            <div>{item.title}</div>
          </Link>
        ))}
        <div className='flex justify-center'>
          <button className='w-[200px] rounded-full p-4 text-2xl text-center hover:bg-primary transition-duration-200 bg-primary'>
            Post
          </button>
        </div>
      </div>
      <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-10 h-10"></div>
          <div className="text-left text-sm">
  
</div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default Leftsidebarmessages;
