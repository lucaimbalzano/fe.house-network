"use-client"

import React, { useEffect, useState, useRef } from 'react'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-hot-toast';

import {BsHousesFill ,BsFillLockFill, BsFillPlayCircleFill, BsFillStopCircleFill, BsFillPauseCircleFill} from 'react-icons/bs'
import {TbNumbers} from 'react-icons/tb'
import {CgArrangeFront} from 'react-icons/cg'
import { FaFileContract} from 'react-icons/fa'
import {BiTimer, BiTimeFive, BiCodeCurly, BiUserCircle, BiMessageRoundedCheck, BiMessageRoundedDetail} from 'react-icons/bi'
import { SiGooglemessages } from 'react-icons/si'
import {RiRefreshFill} from 'react-icons/ri'
import { FiTool } from 'react-icons/fi'
import {IoMdOptions} from 'react-icons/io'
import {MdError,MdFindInPage ,MdVideoSettings} from 'react-icons/md'

import FormDropDown from '@/components/FormDropDown';
import FormInput from '@/components/FormInput'
import { LoadingButton } from '@/components/LoadingButton';
import RecipeHandler from '@/components/profile/dashboard/pageScrape/recipeHandler'

import { handleApiError } from '@/lib/helpers';
import { FlowInputScraperPush } from '@/lib/services/flowInputScraper';
import { FlowInputScraperResponse } from '@/lib/types/flowInputScraper';
import { FlowInputSchema, FlowInputScraper } from '@/lib/validations/flowInputScraper.schema';

import { zodResolver } from '@hookform/resolvers/zod';
import stylesModal from './Modal.module.css';
import  useStore  from '@/store';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


export default function PageScrape() {
  const [ defaultSettingHandler, setDefaultSettingHandler ] = useState(true);
  var [inputValues, setInputValues] = useState({})
  var defaultSettingsObj = useRef(); //TODO
  const store = useStore();
  const router = useRouter();
  const methods = useForm<FlowInputScraper>({
    resolver: zodResolver(FlowInputSchema)
  });

  const defaultValues:FlowInputScraper = {
    totNumPage: "10",
    totNumCards: "10",
    contract: "SALES",
    url: "http:localhost",
    username: "user",
    password: "pswd",
    refreshSearch: {
        poolPage: "10",
        poolCards: "10",
        perTimeRange: "10",
    },
    message: true,
    messageWebSite: true,
    default: true
  }

  const {
    reset,
    handleSubmit, 
    register,
    setValue,
    formState: { isSubmitSuccessful }, 
  } = methods;


  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);


  async function FlowInputScrapeFunction(credentials: FlowInputScraper){
    console.log(JSON.stringify(credentials));
    store.setRequestLoading(true);
    try { 
      const flowInputScraper = await FlowInputScraperPush(JSON.stringify(credentials));
      store.setFlowInputScraper(flowInputScraper);
      return router.push("/login");
    } catch (error:any) {
      if (error instanceof Error) {
        handleApiError(error)
      } else {
        toast.error(error.message);
        console.log("Error message:", error.message);
      }
    } finally {
      store.setRequestLoading(false)
      reset();
    }
  }

  const onSubmit: SubmitHandler<FlowInputScraper> = (values: FlowInputScraper) => { 
    FlowInputScrapeFunction(values);
  };
  const onError = (errors:any, e:any) => console.log(errors, e);
  
  // const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };


    const handleClickSettingDefault = () => {
      setDefaultSettingHandler(!defaultSettingHandler);
    };

  return (

    <div>
      {isOpen && (
        <div className={stylesModal.modalOverlay}>
          <FormProvider {...methods} >
          <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className={stylesModal.modalContent}>
            <div className={`${defaultSettingHandler ? 'select-none' : 'select-text'}`}>
              <h5 className='mt-5 mb-2 flex justify-center items-center text-gray-600'><IoMdOptions className='mr-2'/>options scraping</h5>
              <div className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ${defaultSettingHandler ? 'bg-gray-300 select-none-input' : 'bg-white'} `}>
                <TbNumbers className="h-5 w-5 text-gray-400"/>
                <FormInput type="text" label="Total Number Page" name="totNumPage"  defaultChecked={defaultSettingHandler} defaultValue={defaultValues.totNumPage}/>
              </div>
              <div className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ${defaultSettingHandler ? 'bg-gray-300 select-none-input' : 'bg-white'} `}>
              <TbNumbers className="h-5 w-5 text-gray-400"/>
                <FormInput type="text" label="Total Number Cards" name="totNumCards" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.totNumCards}/>
              </div>
              <div className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ${defaultSettingHandler ? 'bg-gray-300 select-none-input' : 'bg-white'} `}>
              <FaFileContract className="h-5 w-5 text-gray-400"/>
                <FormInput type="text" label="Contract" name="contract" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.contract}/>
              </div>
              <div className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ${defaultSettingHandler ? 'bg-gray-300 select-none-input' : 'bg-white'} `}>
              <BiCodeCurly className="h-5 w-5 text-gray-400"/>
                <FormInput type="text" label="Url" name="url" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.url}/>
              </div>
              <div className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ${defaultSettingHandler ? 'bg-gray-300 select-none-input' : 'bg-white'} `}>
              <BiUserCircle className="h-5 w-5 text-gray-400"/>
                <FormInput type="text" label="Username" name="username" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.username}/>
              </div>
              <div className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ${defaultSettingHandler ? 'bg-gray-300 select-none-input' : 'bg-white'} `}>
              <BsFillLockFill className="h-5 w-5 text-gray-400"/>
                <FormInput type="password" label="Password" name="password" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.password}/>
              </div>
              
              <div className={`flex-col items-center py-2 px-3 mb-4  sm:ml-5 sm:mr-5 ${defaultSettingHandler ? 'select-none-input' : ''} `}>
                <div className="flex items-center mb-4">
                  <div className='inline-flex'>
                    <FormInput type="checkbox" name="message" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.message}/>
                    <div  className="flex ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"> <BiMessageRoundedCheck className="mr-1 h-5 w-5 text-gray-400 "/> <div className='text-gray-400'>Whatsapp msg </div></div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <div className='inline-flex'>
                  <FormInput type="checkbox" name="messageWebSite" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.messageWebSite}/>
                    <label  className="flex ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"> <BiMessageRoundedDetail className="mr-1 h-5 w-5 text-gray-400"/><div className='text-gray-400'>Website msg </div></label>
                  </div>
                </div>
              </div>
          
    
          <h5 className='mt-5 mb-2 flex justify-center items-center text-gray-600'><RiRefreshFill className='mr-2'/>Refresh Page</h5>
          <div className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ${defaultSettingHandler ? 'bg-gray-300 select-none-input' : 'bg-white'} `}>
            <CgArrangeFront className="h-5 w-5 text-gray-400"/>
              <FormInput type="text" label="Pool Number Page" name="refreshSearch.poolPage" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.refreshSearch?.poolPage ?? defaultValues.refreshSearch?.poolPage}/>
            </div>
            <div className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ${defaultSettingHandler ? 'bg-gray-300 select-none-input' : 'bg-white'} `}>
            <CgArrangeFront className="h-5 w-5 text-gray-400"/>
              <FormInput type="text" label="Pool Number cards" name="refreshSearch.poolCards"  defaultChecked={defaultSettingHandler} defaultValue={defaultValues.refreshSearch?.poolCards ?? defaultValues.refreshSearch?.poolCards}/>
            </div>
            
            <div className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width ${defaultSettingHandler ? 'bg-gray-300 select-none-input' : 'bg-white'} `}>
            <BiTimeFive className="h-5 w-5 text-gray-400"/>
              <FormInput type="number" label="Time Range to Scrape" name="refreshSearch.perTimeRange" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.refreshSearch?.perTimeRange ?? defaultValues.refreshSearch?.perTimeRange}/>
            </div>

            <div className="flex justify-center items-center mt-4">
                <div className='inline-flex'>
                  <div  className="flex mr-2 text-sm font-medium text-gray-900 dark:text-gray-400"> <FiTool className="mr-1 h-5 w-5 text-gray-400 "/> <div className='text-gray-400'>Default Settings </div></div>
                  <div onClick={() => handleClickSettingDefault()}>
                    <FormInput type="checkbox" name="default" defaultChecked={defaultSettingHandler} defaultValue={defaultValues.default}/>
                  </div>
                </div>
            </div>
          </div>
            <div className='flex justify-start items-center'>
              <LoadingButton 
                    loading={store.requestLoading}
                    textColor="text-white"
                  >
                    Submit
              </LoadingButton>
              <button onClick={closeModal} className={`${stylesModal.closeButton} ml-3 hover:bg-red-400 hover:shadow-md`}>
                Close
              </button>
            </div>
            
          </div>
          </form>
          </FormProvider>
        </div>
      )}


    <div className='flex justify-center items-center'>
      <div className='mr-3'>
        <Image className="text-white font-bold text-4xl font-sans" src="/img/subitoitimmobili.svg" alt="Subito.it Immobili" width={90} height={100} />
   
      </div>
         <RecipeHandler />
          <button
            onClick={openModal}
            type="button"
            className="inline-block rounded-full px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal hover:bg-slate-200 hover:text-[#125d68] hover: text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-black-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-slate-600 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-te-ripple-init
            data-te-ripple-color="light">
            <MdVideoSettings />
          </button>
     </div>
     <div>
     <div className="border-b font-light dark:border-neutral-300 flex mt-5">
                 <div className="px-6 py-4">
                    <div className='flex justify-center items-center'>
                      <BiTimer className='text-gray-600'/> <div className='ml-1'>0</div> 
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className='flex justify-center items-center'>
                      <MdFindInPage className='text-gray-600'/> <div className='ml-1'>0</div> 
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className='flex justify-center items-center'>
                      <SiGooglemessages className='text-gray-600'/> <div className='ml-1'>0</div> 
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className='flex justify-center items-center'>
                      <BsHousesFill className='text-gray-600'/> <div className='ml-1'>0</div> 
                    </div>
                  </div>
                  <div className="px-6 py-4">
                    <div className='flex justify-center items-center'>
                      <MdError className='text-red-600'/> <div className='ml-1'>!</div> 
                    </div>
                  </div>
      </div>
     </div>
    </div>
  )
}


