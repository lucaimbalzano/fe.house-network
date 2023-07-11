'use client'


import Header from "@/components/Header";
import { AuthPageInvisible } from "@/lib/protect-page";
import DashboardPage from "@/components/profile/dashboard/DashboardPage";
import ErrorPage from "@/components/profile/ErrorPage";
import LoadingPage from "@/components/profile/LoadingPage";
import { useEffect, useState } from "react";
import MessagesPage from "@/components/profile/messages/MessagesPage";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [selectedPage, setSelectedPage] = useState("");
  const [isSmallerThan426, setIsSmallerThan426] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallerThan426(window.innerWidth <= 426);
    };
    
    handleResize(); // execution only the first time for the initial value of the width
    window.addEventListener("resize", handleResize); // added listener in order to call handleResize each time the with is changing
    return () => {
      window.removeEventListener("resize", handleResize); // removing the listener to clean the memory
    };
  }, []);


  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "dashboard":
        return <DashboardPage />;
      case "messages":
        return <MessagesPage />;
      case "error":
        return <ErrorPage />;
      case "loading":
        return <LoadingPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <Header onPageSelect={setSelectedPage} />
      <div className="space-between-header" />
      <div className="flex">
        <div className="">
        </div>
        <div className={`${
        isSmallerThan426 ? "bg-ct-dark-100 h-screen flex justify-center w-auto" : "bg-ct-dark-100 h-screen flex justify-center w-auto w-full"
      }`}>
          {renderSelectedPage()}
        </div>
      </div>
      <AuthPageInvisible />
    </>
  );
}


