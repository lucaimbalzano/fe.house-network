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
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
              <Image className="text-white font-bold text-4xl font-sans" src="/img/house-net.png" alt="house NET" width={300} height={250} />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col">
        <section className="section" id="about">
          <div className="container p-10 flex">
            <div className="row flex">
              <div className="col-lg-7 col-md-12 col-sm-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s" data-scroll-reveal-id="3" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                <Image src="/img/left-image.png" className="rounded img-fluid d-block mx-auto" alt="App" width={300} height={500}/>
              </div>
              <div className="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
                <div className="left-heading">
                  <h5>Vivamus sodales nisi id ante molestie venenatis</h5>
                </div>
                <div className="left-text">
                  <p>This template is <a href="#">last updated on 20 August 2019 </a>for main menu drop-down arrow and sub menu text color. Duis auctor dolor eu scelerisque vestibulum. Vestibulum lacinia, nisl sit amet tristique condimentum. <br /><br />
                    Sed a consequat velit. Morbi lectus sapien, vestibulum et sapien sit amet, ultrices malesuada odio. Donec non quam euismod, mattis dui a, ultrices nisi.</p>
                  <a href="#about2" className="main-button">Discover More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default HomepagePresentation;
