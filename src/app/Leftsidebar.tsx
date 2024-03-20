import React from 'react';
import { RiCommunityFill } from "react-icons/ri";
import { HiClipboardList } from "react-icons/hi";
import { HiBell } from "react-icons/hi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import Link from 'next/link';
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

export const LeftSidebar = () => {
  return (
    <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
      <div className='flex flex-col items-stretch h-full space-y-4 mt-4 text-white'>
        <Link href={"/"} className='text-4xl my-3'>
          <BsFillRocketTakeoffFill />
        </Link>
        {NavigationItems.map((item) =>
          <Link className={item.title === "Community" ? 'hover:bg-blue-100 transition text-2xl duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6  text-blue-400' : 'hover:bg-blue-100 transition text-2xl duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6'} href={item.title === "Community" ? "/" : `/${item.title.toLowerCase()}`} key={item.title}>
            <div>
              <item.icon />
            </div>
            <div>{item.title}</div>
          </Link>
        )}
        <div className='flex justify-center'>
          <button className='w-[200px] rounded-full p-4 text-2xl text-center hover:bg-primary transition-duration-200 bg-primary'>
            Post
          </button>
        </div>
      </div>
      <button className='rounded-full m-4 bg-transparent p-4 text-center hover:bg-blue-200 transition-duration-200 w-full'>
        <div className='flex items-center space-x-4'>
          <div className='rounded-full bg-primary w-8 h-8'></div>
          <div className='text-left text-sm text-white'>
            <div className='font-semibold'>ProductPulse</div>
            <div>@ProductPulse</div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </div>
      </button>
    </section>
  );
};
