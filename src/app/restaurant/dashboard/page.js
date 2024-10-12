import RestaurantFooter from "@/app/_components/RestaurantFooter";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import React from "react";

const Dashboard = () => {
  return (
    <>
      <RestaurantHeader />
      <div className="min-h-screen">
        <h3 className="text-3xl text-slate-900 text-center">
          Restaurant Sign Up
        </h3>
      </div>
      <RestaurantFooter />
    </>
  );
};

export default Dashboard;
