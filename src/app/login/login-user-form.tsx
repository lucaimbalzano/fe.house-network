"use client"

import { LoginUserInput, LoginUserSchema } from "@/lib/validations/user.schema";
import { apiLoginUser } from "@/lib/services/login";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "@/components/FormInput";
import { LoadingButton } from "@/components/LoadingButton";
import useStore from "@/store";
import { handleApiError } from "@/lib/helpers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { MdEmail } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
import { toast } from "react-hot-toast";

export default function LoginUserForm() {
    const store = useStore();
    const router = useRouter();
  
    const methods = useForm<LoginUserInput>({
      resolver: zodResolver(LoginUserSchema),
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
  
    useEffect(() => {
      store.reset();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    async function LoginUserFunction(credentials: LoginUserInput) {
      store.setRequestLoading(true);
      try {
        await apiLoginUser(JSON.stringify(credentials));
  
        toast.success("Logged in successfully");
        return router.push("/profile");
      } catch (error: any) {
        console.log(error);
        if (error instanceof Error) {
          handleApiError(error);
        } else {
          toast.error(error.message);
          console.log("Error message:", error.message);
        }
      } finally {
        store.setRequestLoading(false);
      }
    }
  
    const onSubmitHandler: SubmitHandler<LoginUserInput> = (values) => {
      console.log(values)
      LoginUserFunction(values);
    };    


  return (
        <div className="h-screen overflow-hidden flex items-center justify-center" >
            <div className="w-full h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-[#0a7f94] to-gray-200 i justify-around items-center hidden rounded-tr-2xl rounded-lr-2xl">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">House NET</h1>
                    <p className="text-white mt-1">Your Automation tool to gain clean leads</p>
                    <button type="submit" className="block w-28 bg-white text-gray-600 mt-4 py-2 rounded-2xl font-bold mb-2 hover:bg-gray-400 hover:text-white hover:shadow-md">Read More</button>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <FormProvider {...methods}>
                <form className="bg-white" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className='w-full flex-col flex justify-center items-center'>
                        
                        <div className='flex flex-row'><h1 className="text-[#02b0cd] font-bold text-2xl mb-1 custom-smaller-width mr-0">Log</h1>
                        <p className="text-[#c9caca] font-bold text-2xl mb-1 custom-smaller-width">in</p>
                        </div>
                        <div className='ml-5 mr-5 flex flex-row flex-inline text-xxs'>
                            <p className="text-sm font-normal text-gray-600 mb-7 custom-smaller-width sm:text-center flex flex-row ml-50 mr-1">Welcome</p>
                            <p className="text-sm font-normal text-gray-600 mb-7 custom-smaller-width sm:text-center flex flex-row ml-50"> back</p>
                        </div>
                        
                    </div>
                    <div className="w-full flex-col flex justify-center items-center">
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
                        <MdEmail className="h-5 w-5 text-gray-400"/>
                        <FormInput type="email" label="Email" name="email"/>
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 hover:shadow-md sm:ml-5 sm:mr-5 custom-smaller-width bg-white">
                        <BsFillLockFill className="h-5 w-5 text-gray-400"/>
                        <FormInput type="password" label="Password" name="password" />
                    </div>

                            <LoadingButton
                        loading={store.requestLoading}
                        textColor="text-white"
                        >
                        Login
                        </LoadingButton>
                        <span className="text-sm ml-2 hover:text-gray-400    cursor-pointer">Forgot Password ?</span>
                    </div>
                </form>
                </FormProvider>
            </div>
        </div>
        </div>
  )
}
