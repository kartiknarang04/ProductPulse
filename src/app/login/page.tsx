'use client'
import React from 'react'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const router=useRouter();

    const supabase=createClientComponentClient();
    const handleSignUp = async ()=>
    {
        await supabase.auth.signUp({
            email,
            password,
            options:{
                emailRedirectTo: `${location.origin}/auth/callback`
            }
        })
        router.refresh();
        setEmail('');
        setPassword('');
    }

    const handleSignIn= async () =>
    {
        await supabase.auth.signInWithPassword({
            email,
            password
        })
        router.refresh();
        setEmail('');
        setPassword('');
    }

  return (
    <main className="h-screen flex items-center justify-center bg-gray-800 p-6">
        <div className="bg-gray-900 p-8 rounded-lg shadow-md w-96">
        <input 
            type="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 placeholder-gray-500  text-center focus:outline-none focus:border-blue-500"
        />
        <input 
            type="password" 
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-gray-800 placeholder-gray-500 text-center focus:outline-none focus:border-blue-500"
        />
        <button 
            onClick={handleSignUp}
            className="w-full mb-2 p-3 rounded-md bg-primary hover:bg-blue-100 transition-duration-200"
        >
            Sign Up
        </button>
        <button 
            onClick={handleSignIn}
            className="w-full p-3 rounded-md bg-primary hover:bg-blue-100 transition-duration-200"
        >
            Sign In
        </button>
        </div>
    </main>
  )
}
