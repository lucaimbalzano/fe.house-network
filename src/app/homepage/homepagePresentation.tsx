import Image from "next/image";
import React from "react";
import { BiAlarm } from 'react-icons/bi'

const HomepagePresentation: React.FC = () => {
  return (
    <>
      <div className="col">
        <div className="h-screen overflow-hidden flex items-center justify-center">
          <div className="w-full h-screen md:flex">
            <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#0a7f94] to-gray-200 i justify-around items-center hidden ">
              <div>
                <h1 className="text-white font-bold text-4xl font-sans">House</h1>
                <h1 className="text-[#cfd7d9] font-bold text-4xl font-sans">NETWORK</h1>
                <p className="text-white mt-1">Your Automation tool.</p>
                <p className="text-white mt-1">The machine is the new employee.</p>
              </div>
              <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
              <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
              <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
              <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>

           <div className="md:hidden bg-gradient-to-tr from-[#0a7f94] to-gray-200 h-screen h-1/2">
            <div className="flex flex-col justify-center items-center h-full">
              <h1 className="text-white font-bold text-4xl font-sans">House</h1>
              <h1 className="text-[#cfd7d9] font-bold text-4xl font-sans">NETWORK</h1>
              <p className="text-white mt-1">Your Automation tool.</p>
              <p className="text-white mt-1">The machine is the new employee.</p>
            </div>
          </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
              <Image className="text-white font-bold text-4xl font-sans" src="/img/house-net.png" alt="house NET" width={300} height={250} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomepagePresentation;
