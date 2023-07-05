'use client'

import React, { useState } from "react";
import Image from "next/image";
import { BiLogInCircle, BiUserCircle, BiMessageSquareDetail, BiX } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { RiDashboardFill } from "react-icons/ri"
import Link from "next/link";
import useSession from "@/lib/useSession";
import useStore from "@/store";
import { apiLogoutUser } from "@/lib/services/login";
import { useRouter } from "next/navigation";


const Header = ({ onPageSelect }) => {
  const store = useStore();
  const user = useSession();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    store.setRequestLoading(true);
    try {
      await apiLogoutUser();
    } catch (error) {
    } finally {
      store.reset();
      router.push("/login");
    }
  };

  const handleMenuClick = (page: string) => {
    setMobileMenuOpen(false);
    onPageSelect(page);
  }

  return (
    <>
      <header className="bg-white h-15 p-1 fixed top-0 left-0 w-full flex justify-between container items-center max-w-full mr-8">
        <div className="flex justify-start extra-small-hidden-logo">
          <div className="">
            <button
              className="text-2xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Mobile Menu Toggle"
            >
              {mobileMenuOpen ? (
                <BiX className="text-[#07adbc] hover:text-[#d1dade] w-9 h-9" />
              ) : (
                <Image src="/img/house-net.png" width="40" height="40" alt="house-network" />
              )}
            </button>
            {mobileMenuOpen && (
              <div className="absolute z-10 top-full h-screen left-0 mt-0 w-48 bg-gradient-to-br from-[#fff] to-[#b9c1cf] transform  rounded shadow-lg">
                <ul className="py-2">
                  {!user && (
                    <li>
                      <Link href="/login">
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                          Login
                        </div>
                      </Link>
                    </li>
                  )}
                  {user && (
                    <>
                      <li>
                        <Link href="/profile">
                          <div onClick={() => handleMenuClick('profile')} className='flex flex-row justify-start items-center' >
                            <BiUserCircle className='ml-3 mr-1'/> <p className="py-2 text-sm text-gray-700">Profile</p>
                         </div>
                        </Link>
                      </li>
                      <li>
                        <div onClick={() => handleMenuClick('dashboard')} className='flex flex-row justify-start items-center' >
                          <RiDashboardFill className='ml-3 mr-1'/> <p className="py-2 text-sm text-gray-700">Dashboard</p>
                        </div>
                      </li>
                      <li>
                        <div onClick={() => handleMenuClick('messages')} className='flex flex-row justify-start items-center' >
                          <BiMessageSquareDetail className='ml-3 mr-1'/> <p className="py-2 text-sm text-gray-700">Messages</p>
                        </div>
                      </li>
                      <li>
                        <div onClick={() => handleMenuClick('settings')} className='flex flex-row justify-start items-center' >
                          <IoSettingsSharp className='ml-3 mr-1'/> <p className="py-2 text-sm text-gray-700">Settings</p>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="flex flex-row justify-start items-center"
                        >
                            <BiLogInCircle className='ml-3 mr-1'/> <p className="py-2 text-sm text-gray-700">Logout</p>
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="mr-8 sm:mr-6">
          <ul className="flex items-center gap-4 ul-navbar-mr-4">
            {!user && (
              <>
                <li className="px-4 py-2 font-semibold text-sm shadow-sm rounded-md bg-[#01bed2] text-white hover:text-[#166370] hover:bg-slate-400">
                  <Link href="/login">Login</Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link href="/profile" className="flex justify-center  items-center text-[#07adbc] hover:text-[#d1dade] text-2xl">
                    <div className="text-sm"> {user.name} </div>
                  </Link>
                </li>
                <li className="cursor-pointer text-[#07adbc] hover:text-[#d1dade] text-2xl" onClick={handleLogout}>
                  <BiLogInCircle className="text-[#07adbc] hover:text-[#d1dade]" />
                </li>
              </>
            )}
          </ul>

        </div>
      </header>
    </>
  );
};

export default Header;
