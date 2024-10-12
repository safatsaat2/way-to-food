"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RestaurantHeader = () => {
  const [details, setDetails] = useState();
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    let data = localStorage.getItem("restaurantUser");
    if (!data &&  pathName == "/restaurant/dashboard") {
      router.push("/restaurant");
    }
    else if(data && pathName == "/restaurant"){
        router.push("/restaurant/dashboard");
    }
    else{
      setDetails(JSON.parse(data));
    }
  }, []);

  return (
    <header className="bg-gradient-to-r from-blue-200 to-indigo-300 text-slate-900">
      <div className="max-w-[1200px] px-4 flex justify-between items-center mx-auto py-2">
        <div className="logo">
          <Image alt="logo" width={100} height={50} src="/100.png" />
        </div>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          {details && details.name ? 
            <>
              <li>
                <Link href="/">Profile</Link>
              </li>
              <li>
                <button className="btn">Log Out</button>
              </li>
            </>
           : 
            <li>
              <Link href="/restaurant">Login/Signup</Link>
            </li>
          }
        </ul>
      </div>
    </header>
  );
};

export default RestaurantHeader;
