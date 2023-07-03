"use-client"


import FormInput from '@/components/FormInput'
import { FlowInputSchema, FlowInputScraper, RefreshSearchSchema, RefreshSearch } from '@/lib/validations/flowInputScraper.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect, useState } from 'react'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import {BsFillLockFill, BsFillPlayCircleFill, BsFillStopCircleFill, BsFillPauseCircleFill} from 'react-icons/bs'
import {TbNumbers} from 'react-icons/tb'
import {CgArrangeFront} from 'react-icons/cg'
import { FaFileContract} from 'react-icons/fa'
import {BiTimeFive, BiCodeCurly, BiUserCircle, BiMessageRoundedCheck, BiMessageRoundedDetail} from 'react-icons/bi'
import {RiRefreshFill} from 'react-icons/ri'
import {IoMdOptions} from 'react-icons/io'
import FormDropDown from '@/components/FormDropDown';
import { FlowInputScraperResponse } from '@/lib/types/flowInputScraper';
import  useStore  from '@/store';
import { useRouter } from 'next/navigation';
import { LoadingButton } from '@/components/LoadingButton';

export default function PageScrape() {
  const store = useStore();
  const router = useRouter();
  const methods = useForm<FlowInputScraper>({
    resolver: zodResolver(FlowInputSchema)
  });

  
  const {
    reset,
    handleSubmit, 
    formState: { isSubmitSuccessful }, 
  } = methods;


  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  async function FlowInputScrapeFunction(credentials: FlowInputScraper){
    console.log("FlowInputScrapeFunction-> pageScrape: "+ JSON.stringify(credentials))
    store.setRequestLoading(true);
    return;
  }

  const onSubmit: SubmitHandler<FlowInputScraper> = (values: FlowInputScraper) => {
    console.log("submitHandler-> pageScrape: "+ JSON.stringify(values))
    FlowInputScrapeFunction(values);
  };

  
  
  return (

    <div>
      <br></br>
      <FormProvider {...methods} >
      <form onSubmit={handleSubmit(onSubmit)}>
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
          <FormInput type="checkbox" label="message" name="message"/>
        
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
        <BiMessageRoundedDetail className="h-5 w-5 text-gray-400"/>
        <FormInput type="checkbox" label="messageWebSite" name="messageWebSite"/>
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
        <LoadingButton 
                  loading={store.requestLoading}
                  textColor="text-white"
                >
                  Submit
        </LoadingButton>

      </form>
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


