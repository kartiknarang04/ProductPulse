'use client'; // Add this line to mark the component as a client component
import React, { useEffect, useState } from 'react';
import { RiCommunityFill } from "react-icons/ri";
import { HiClipboardList } from "react-icons/hi";
import { HiBell } from "react-icons/hi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import Link from 'next/link';
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { BsFillRocketTakeoffFill, BsThreeDots } from "react-icons/bs";

import { BiMessageSquareDetail } from "react-icons/bi";
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

const Leftsidebarprofile = () => {
  const [userData, setUserData] = useState(null);
  const [userError, setUserError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Assuming cookies are handled correctly
        const supabaseClient = createServerComponentSupabaseClient({
          cookies, // Define cookies variable if necessary
          headers, // Define headers variable if necessary
        });
    
        const { data, error } = await supabaseClient.auth.getUser();
        if (error) {
          throw new Error(error.message);
        } else {
          setUserData(data); // Update state with user data
        }
      } catch (error) {
        setUserError(error.message); // Update state with error message
      }
    };
    
    fetchUserData(); // Call fetchUserData function
  }, []);

  return (
    <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
      <div className='flex flex-col items-stretch h-full space-y-4 mt-4 text-white'>
        <Link href={"/"} className='text-4xl my-3'>
          <BsFillRocketTakeoffFill />
        </Link>
        {NavigationItems.map((item) => (
          <Link
            href={item.title === "Community" ? "/" : `/${item.title.toLowerCase()}`}
            key={item.title}
            className={
              item.title === "Profile"
                ? 'hover:bg-primary transition text-2xl duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6 text-blue-400'
                : 'hover:bg-primary transition text-2xl duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6'
            }
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
            <div className="font-semibold">
              {userData?.user_metadata?.full_name || 'Loading...'}
            </div>
            <div className="">
              @{userData?.user_metadata?.username || 'Loading...'}
            </div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default Leftsidebarprofile;
