"use client"

import React, { useEffect } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { RiDashboardFill } from "react-icons/ri"
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoSettingsSharp } from 'react-icons/io5'
import { CgMenuGridR } from 'react-icons/cg'
import Link from 'next/link';


type SideBarProfileProps = {
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
  };
  

const SideBarProfile: React.FC<SideBarProfileProps> = ({ setSelectedPage }) => {
    const [collapsed, setCollapsed] = React.useState(false);
    const handleMenuSelected = useEffect(() => {
      return () => {
        console.log('hel')
      };
    }, []);


    const handleMenuClick = (page: string) => {
        setSelectedPage(page);
      };

  return (
    <div className='flex h-screen min-h-full'>
    <Sidebar collapsed={collapsed} transitionDuration={1000} onClick={() => setCollapsed(!collapsed)}>
      <Menu>
      {!collapsed ? (
            <>
              <MenuItem >
        
              <div onClick={() => handleMenuClick('dashboard')} className='flex flex-row justify-start items-center' >
              <RiDashboardFill className='mr-1'/> <p>Dashboard</p>
              </div>
              </MenuItem>
              <MenuItem >
              <div  onClick={() => handleMenuClick('messages')}  className='flex flex-row justify-start items-center'>
              <BiMessageSquareDetail className='mr-1'/> <p>Messages</p>
              </div>
              </MenuItem>
              <MenuItem >
              <div className='flex flex-row justify-start items-center'>
              <IoSettingsSharp className='mr-1'/> <p>Settings</p>
              </div>
              </MenuItem>
            </>
          ) : (
            <>
              <MenuItem><RiDashboardFill/></MenuItem>
              <MenuItem><BiMessageSquareDetail/></MenuItem>
              <MenuItem><IoSettingsSharp/></MenuItem>
            </>
          )
        }
      </Menu>
    </Sidebar>
  </div>
  )
}


export default SideBarProfile;