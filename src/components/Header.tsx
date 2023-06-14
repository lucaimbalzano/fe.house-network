"use client";

import Spinner from "./Spinner";
import Link from "next/link";
import useSession from "@/lib/useSession";
import useStore from "@/store";
import { apiLogoutUser } from "@/lib/services/login";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
          <div className="flex justify-start">
            <Link href="/" className="text-ct-dark-600 text-2xl font-semibold">
            <Image src="/img/house-net.png" width="40" height="40" alt="house-netowork"/>

            </Link>
          </div>
          <div className="mr-8 sm:mr-6">
          <ul className="flex items-center gap-4 ul-navbar-mr-4">
            {!user && (
              <>
                <li>
                  <Link href="/register" className="text-ct-dark-600">
                    Register
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="text-ct-dark-600">
                    Login
                  </Link>
                </li>
              </>
            )}
            {user && (
              <>
                <li>
                  <Link href="/profile" className="text-ct-dark-600">
                    Profile
                  </Link>
                </li>
                <li className="cursor-pointer" onClick={handleLogout}>
                  Logout
                </li>
              </>
            )}
          </ul>
          </div>
          
      </header>
      <div className="pt-4 pl-2 bg-gray-600 fixed">
        {store.requestLoading && <Spinner color="text-ct-yellow-600" />}
      </div>
    </>
  );
};

export default Header;
