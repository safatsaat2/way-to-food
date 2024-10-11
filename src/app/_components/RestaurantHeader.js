import Image from "next/image";
import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-indigo-300 text-slate-900">
      <div className="max-w-[1200px] px-4 flex justify-between items-center mx-auto py-2">
      <div className="logo">
        <Image alt="logo" width={100} height={50} src="/100.png" />
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

export default RestaurantHeader;
