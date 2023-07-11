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
        <div className="bg-ct-dark-100 h-screen flex justify-center w-auto w-full">
          {renderSelectedPage()}
        </div>
      </div>
      <AuthPageInvisible />
    </>
  );
}
