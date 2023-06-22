"use client"

import React, { useEffect } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, sidebarClasses } from 'react-pro-sidebar';
import { RiDashboardFill } from "react-icons/ri"
import { BiMessageSquareDetail } from 'react-icons/bi'
import { IoSettingsSharp } from 'react-icons/io5'
import { CgMenuGridR } from 'react-icons/cg'
import Link from 'next/link';


type SideBarProfileProps = {
    setSelectedPage: React.Dispatch<React.SetStateAction<string>>;
  };
  

const SideBarProfile: React.FC<SideBarProfileProps> = ({ setSelectedPage }) => {
    const [collapsed, setCollapsed] = React.useState(true);
    const [hideSideBar, setHideSideBar] = React.useState(false)
    const [hamburgerClicked, setHamburgerClicked] = React.useState(false);
  
    const handleMenuClick = (page: string) => {
      setSelectedPage(page);
    };
  
    const toggleHamburger = () => {
      setHamburgerClicked(!hamburgerClicked);
      setHideSideBar(!hideSideBar);
    };
    const handleMenuSelected = useEffect(() => {
      return () => {
        console.log('hel')
      };
    }, []);



  return (
    <>
      <div className={`flex h-screen min-h-full fixed ${hideSideBar ? 'hidden' : ''}`}>
   <Sidebar 
      rootStyles={{
        [`.${sidebarClasses.container}`]: {
          backgroundColor: 'white',
          collapsedWidth: "60px",
        },
      }}
    collapsed={collapsed} transitionDuration={1000} onClick={() => setCollapsed(!collapsed)}>
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
    </>

  )
}


export default SideBarProfile;