"use client"
import React, { useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginBox = () => {
  
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        background: "black",
      }}
    >
      <div className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
          
          />
        </div>
        <div className="flex items-center justify-center"> 
          <button
            className="bg-primary text-white items-center font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
            type="button">
            Sign In
          </button>
         </div> 
      </div>
    </div>
  );
};

export default LoginBox;
