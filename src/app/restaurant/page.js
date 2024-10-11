"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";

const Restaurant = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="flex justify-center flex-col py-20 bg-blue-200 min-h-screen ">
      <h1 className="text-5xl text-center text-slate-900">Welcome</h1>
      <div>{login ? <RestaurantLogin /> : <RestaurantSignUp />}</div>

      <div className="flex justify-center items-center mt-5">
        <button
          className="bg-indigo-600 text-white px-4 py-2 rounded-sm max-w-[300px] mx-auto"
          onClick={() => setLogin(!login)}
        >
          {login
            ? "Do Not have Account? Signup"
            : "Already have Account? Log In"}
        </button>
      </div>
    </div>
  );
};

export default Restaurant;
