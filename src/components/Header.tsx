"use client";

import Spinner from "./Spinner";
import Link from "next/link";
import useSession from "@/lib/useSession";
import useStore from "@/store";
import { apiLogoutUser } from "@/lib/services/login";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {BiLogInCircle, BiUserCircle} from "react-icons/bi"

const Header = () => {
  const store = useStore();
  const user = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    store.setRequestLoading(true);
    try {
      await apiLogoutUser();
    } catch (error) {
    } finally {
      store.reset();
      router.push("/login");
    }
  };

  return (
    <>
    <div>
      
    </div>
      <header className="bg-white h-15 p-1 fixed top-0 left-0 w-full flex justify-between container items-center max-w-full mr-8">
          <div className="flex justify-start extra-small-hidden-logo">
            <Link href="/" className="text-ct-dark-600 text-2xl font-semibold">
            <Image src="/img/house-net.png" width="40" height="40" alt="house-network"/>

            </Link>
          </div>
          <div className="mr-8 sm:mr-6">
          <ul className="flex items-center gap-4 ul-navbar-mr-4">
            {!user && (
              <>
                <li className="px-4 py-2 font-semibold text-sm shadow-sm rounded-md bg-[#01bed2] text-white hover:text-[#166370] hover:bg-slate-400">
                  <Link href="/login">
                    Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link href="/profile" className="text-ct-dark-600 hover:text-[#d1dade] text-2xl">
                  <BiUserCircle />
                  </Link>
                </li>
                <li className="cursor-pointer hover:text-[#d1dade] text-2xl" onClick={handleLogout}>
                  <BiLogInCircle />
                </li>
              </>
            )}
          </ul>
          </div>
      </header>

    </>
  );
};

export default Header;
