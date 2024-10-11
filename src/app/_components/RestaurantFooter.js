import Image from "next/image";
import Link from "next/link";
import React from "react";

const RestaurantFooter = () => {
  return (
    <div className="bg-slate-900 text-white">
      <div className="max-w-[1200px] px-4 flex justify-between items-center mx-auto py-2">
        <div className="footer-logo">
          <Image alt="logo" width={100} height={50} src="/100.png" />
          <p className="mt-2">All Right Reserved to Way To food</p>
        </div>
        <ul className="flex justify-center items-center gap-5">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/restaurant">Login/Signup</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantFooter;
