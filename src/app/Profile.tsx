import React from 'react';
import { FaUser } from 'react-icons/fa';


const ProfileCard = () => {
  return (
    <main className='ml-[275px] flex w-[660px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600'>
    <h1 className='text-2xl font-bold p-6 t text-center border-b-[0.5px] border-gray-600 text-white'>Profile</h1> 
     <div className="bg-blackk shadow-md rounded-lg p-4">
      <div className="flex items-center">
        <FaUser className="w-20 h-20 rounded-full mr-4 m-3 text-gray-600 style={{ fontSize: '100px' }}" />
        <div>
          <h2 className="text-2xl font-semibold m-3 text-white">John Doe</h2>
          <p className="text-gray-600 text-2xl m-3 text-white">@johndoe</p>
        </div>
      </div>
      <p className="text-white-700 mt-2 m-3 text-white">
        Software engineer | Tech enthusiast | Lifelong learner
      </p>
      <div className="flex mt-4 border-b-[0.5px] border-gray-600 text-white ">
        <div className="mr-6 m-3">
          <p className="font-semibold ">1,234</p>
          <p className="text-gray-600 ">Followers</p>
        </div>
        <div className="mr-6 m-3">
          <p className="font-semibold">567</p>
          <p className="text-gray-600">Following</p>
        </div>
        <div className="mr-6 m-3">
          <p className="font-semibold">1234</p>
          <p className="text-gray-600">Upvotes</p>
        </div>
      </div>
    </div>
    </main>
  );
};

export default ProfileCard;
