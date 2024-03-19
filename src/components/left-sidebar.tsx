import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { RiCommunityFill } from "react-icons/ri";
import { HiClipboardList } from "react-icons/hi";
import { HiBell } from "react-icons/hi";
import { GiPlagueDoctorProfile } from "react-icons/gi";
import Link from 'next/link';
import { BsFillRocketTakeoffFill, BsThreeDots } from "react-icons/bs";
import { BiHomeCircle, BiUser } from "react-icons/bi";

import {
    BsBell,
    BsBookmark,
    BsTwitter,
    BsEnvelope,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { HiEnvelope } from "react-icons/hi2";
import { cookies, headers } from "next/headers";

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
  const LeftSidebar = async () => {
    const supabaseClient = createServerComponentClient({
        cookies,  // This property is expected by createServerComponentClient
    });   

    const { data: userData, error: userError } =
        await supabaseClient.auth.getUser();

    return (
        <section className='fixed w-[275px] flex flex-col items-stretch h-screen'>
            <div className='flex flex-col items-stretch h-full space-y-4 mt-4 text-white'>
                <Link href={"/"} className='text-4xl my-3'>
                    <BsFillRocketTakeoffFill />
                </Link>
                {NavigationItems.map((item) => (
                    <Link
                        className={
                            item.title === "Community"
                            ? 'hover:bg-primary transition text-2xl duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6 text-blue-400'
                            : 'hover:bg-primary transition text-2xl duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6'
                        }
                        href={
                            item.title === "Community"
                                ? "/"
                                : `/${item.title.toLowerCase()}`
                        }
                        key={item.title}
                    >
                        <div>
                            <item.icon />
                        </div>
                        {item.title !== "Twitter" && (
                            <div>{item.title}</div>
                        )}
                    </Link>
                ))}
                <button className='w-[200px] rounded-full p-4 text-2xl text-center hover:bg-primary transition-duration-200 bg-primary'>
                    Post
                </button>
            </div>
            <button className="rounded-full flex items-center space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-between">
                <div className="flex items-center space-x-2">
                    <div className="rounded-full bg-slate-400 w-10 h-10"></div>
                    <div className="text-left text-sm">
                        <div className="font-semibold">
                            {userData.user?.user_metadata.full_name}
                        </div>
                        <div className="">
                            @{userData.user?.user_metadata.username}
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

export default LeftSidebar;
