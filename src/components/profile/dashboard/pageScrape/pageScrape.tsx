"use-client"


import FormInput from '@/components/FormInput'
import { FlowInputSchema, FlowInputScraper, RefreshSearchSchema, RefreshSearch } from '@/lib/validations/flowInputScraper.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import {BsFillLockFill, BsFillPlayCircleFill, BsFillStopCircleFill, BsFillPauseCircleFill} from 'react-icons/bs'
import {TbNumbers} from 'react-icons/tb'
import {CgArrangeFront} from 'react-icons/cg'
import { FaFileContract} from 'react-icons/fa'
import {BiTimeFive, BiCodeCurly, BiUserCircle, BiMessageRoundedCheck, BiMessageRoundedDetail} from 'react-icons/bi'
import {RiRefreshFill} from 'react-icons/ri'
import {IoMdOptions} from 'react-icons/io'
import FormDropDown from '@/components/FormDropDown';

export default function PageScrape() {
  const methods = useForm<FlowInputScraper>({
    resolver: zodResolver(FlowInputSchema)
  });

  
  const {
    reset,
    handleSubmit, 
    formState: { isSubmitSuccessful }, 
  } = methods;


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  
  return (

    <div>

{/* <FormDropDown label='Select Search Refresh Options' name='searchRefresh' /> */}



{/* ACCORDION EXAMPLE */}
{/* <div id="accordion-arrow-icon" data-accordion="open">
  <h2 id="accordion-arrow-icon-heading-1">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 bg-gray-100 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-1" aria-expanded="true" aria-controls="accordion-arrow-icon-body-1">
      <span>Accordion without an arrow</span>
    </button>
  </h2>
  <div id="accordion-arrow-icon-body-1" aria-labelledby="accordion-arrow-icon-heading-1">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-arrow-icon-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-2" aria-expanded="false" aria-controls="accordion-arrow-icon-body-2">
      <span>Accordion with another icon</span>
      <svg data-accordion-icon className="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"></path></svg>
    </button>
  </h2>
  <div id="accordion-arrow-icon-body-2" className="hidden" aria-labelledby="accordion-arrow-icon-heading-2">
    <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-arrow-icon-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-arrow-icon-body-3" aria-expanded="false" aria-controls="accordion-arrow-icon-body-3">
      <span>Accordion without arrow rotation</span>
      <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  </h2>
  <div id="accordion-arrow-icon-body-3" className="hidden" aria-labelledby="accordion-arrow-icon-heading-3">
    <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
      <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>
 */}







{/* DROPDOWN EXAMPLE */}
    <div>
      <button
        id="dropdownHoverButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Dropdown hover{' '}
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          id="dropdownHover"
          className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Earnings
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                Sign out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>





<br></br>
<br></br>
<br></br>
<br></br>
      <br></br>
      <FormProvider {...methods} >
      <h5 className='mt-5 mb-2 flex justify-center items-center text-gray-600'><IoMdOptions className='mr-2'/>options scraping</h5>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <TbNumbers className="h-5 w-5 text-gray-400"/>
          <FormInput type="text" label="Total Number Page" name="totNumPage"/>
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <TbNumbers className="h-5 w-5 text-gray-400"/>
          <FormInput type="text" label="Total Number Cards" name="totNumCards"/>
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <FaFileContract className="h-5 w-5 text-gray-400"/>
          <FormInput type="text" label="Contract" name="contract"/>
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <BiCodeCurly className="h-5 w-5 text-gray-400"/>
          <FormInput type="text" label="Url" name="url"/>
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <BiUserCircle className="h-5 w-5 text-gray-400"/>
          <FormInput type="text" label="Username" name="username"/>
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <BsFillLockFill className="h-5 w-5 text-gray-400"/>
          <FormInput type="password" label="Password" name="password"/>
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <BiMessageRoundedCheck className="h-5 w-5 text-gray-400"/>
        message
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <BiMessageRoundedDetail className="h-5 w-5 text-gray-400"/>
        messageWebSite
        </div>
        <h5 className='mt-5 mb-2 flex justify-center items-center text-gray-600'><RiRefreshFill className='mr-2'/>Refresh Page</h5>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <CgArrangeFront className="h-5 w-5 text-gray-400"/>
          <FormInput type="text" label="Pool Number Page" name="poolPage"/>
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <CgArrangeFront className="h-5 w-5 text-gray-400"/>
          <FormInput type="text" label="Pool Number cards" name="poolCards"/>
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <BiTimeFive className="h-5 w-5 text-gray-400"/>
          <FormInput type="text" label="Time Range to Scrape" name="perTimeRange"/>
        </div>
      </FormProvider>


          <div>
            <button
            type="button"
            className="inline-block rounded-full px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:bg-slate-200 hover:text-[#125d68] hover: text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-black-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            <BsFillPlayCircleFill />
          </button>
          <button
            type="button"
            className="inline-block rounded-full px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:bg-slate-200 hover:text-[#125d68] hover: text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-black-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            <BsFillStopCircleFill />
          </button>
          <button
            type="button"
            className="inline-block rounded-full px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:bg-slate-200 hover:text-[#125d68] hover: text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-black-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            <BsFillPauseCircleFill />
          </button>
          </div>
    </div>
  )
}


