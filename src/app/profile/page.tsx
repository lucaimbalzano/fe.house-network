"use client"

import Header from "@/components/Header";
import { apiGetAuthUser } from "@/lib/services/registration"
// import { cookies } from "next/headers";
import { AuthPageInvisible } from "@/lib/protect-page";
import SideBarProfile from "@/components/profile/SideBarProfile";
import DashboardPage from "@/components/profile/dashboard/DashboardPage";
import ErrorPage from "@/components/profile/ErrorPage";
import LoadingPage from "@/components/profile/LoadingPage";
import { useEffect, useState } from "react";
import MessagesPage from "@/components/profile/messages/MessagesPage";
// import NavbarProfile from "@/components/profile/NavbarProfile";

export default async function ProfilePage() {
  // const cookieStore = cookies();
  // const token = cookieStore.get("token");

  // const user = await apiGetAuthUser(token?.value);
  const [selectedPage, setSelectedPage] = useState('dashboard');


  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const cookieStore = await import("next/headers");
  //     const cookies = cookieStore.default;
  //     const token = cookies.get("token");

  //     if (token) {
  //       const user = await apiGetAuthUser(token);
  //       // Do something with the user data
  //     }
  //   };

  //   fetchUser();
  // }, []);



  // Render the appropriate page content based on the selectedPage state
  const renderPageContent = () => {
    switch (selectedPage) {
      case 'dashboard':
        return <DashboardPage />;
        case 'messages':
          return <MessagesPage />;
      case 'error':
        return <ErrorPage />;
      case 'loading':
        return <LoadingPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
        <div className="space-between-header" />
        <div className="flex">
        <div className="">
          {/* <SideBarProfile setSelectedPage={setSelectedPage} /> */}
        </div>
        <div className="ml-8 bg-ct-dark-100 h-screen flex justify-center w-full extra-small-container">
          {renderPageContent()}
        </div>
        </div>
        
      
      {/* <NavbarProfile user={user}/> */}
        {/* <div className="max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[20rem] flex justify-center items-center">
          <div>
            <p className="mb-3 text-5xl text-center font-semibold">
              Profile Page
            </p>
            <div className="mt-8">
              <p className="mb-3">Id: {user.id}</p>
              <p className="mb-3">Name: {user.name}</p>
              <p className="mb-3">Email: {user.email}</p>
              <p className="mb-3">Role: {user.role}</p>
              <p className="mb-3">Verified: {String(user.verified)}</p>
            </div>
          </div>
        </div> */}
      <AuthPageInvisible />
    </>
  );
}
