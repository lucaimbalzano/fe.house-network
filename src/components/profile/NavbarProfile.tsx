"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FilteredUser } from '@/lib/types/userTypes';
import { RiDashboardFill } from "react-icons/ri"
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoSettingsSharp } from 'react-icons/io5'
import { CgMenuGridR } from 'react-icons/cg'

interface NavbarProfileProps {
  user: FilteredUser;
}

export default function NavbarProfile({ user }: NavbarProfileProps) {
    const [isOpen, setIsOpen] = useState(false);


    const handleToggle = () => {
      console.log(isOpen);
      setIsOpen(!isOpen);
    };
  
  return (
   <>
      <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
      <div onClick={() => setIsOpen(false)} className="flex flex-col w-full md:w-64 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0">
        <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between sm:flex-col">
          <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            House NET
          </a>
          <button
            className="rounded-lg md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={handleToggle}
          >
           
            {isOpen && <CgMenuGridR/>}
          </button>
        </div>

        <nav className={`flex-grow md:hidden px-4 pb-4 md:pb-0 md:overflow-y-auto ${isOpen ? 'hidden' : 'block'}`}>
          <a className=" flex-inline block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"><RiDashboardFill/> Dashboard</a>
          <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"><BiMessageSquareDetail/> Messages</a>
          <a className="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#"><IoSettingsSharp/> Settings</a>
        </nav>
      </div>

    </div>
   </>
    
  );
}
