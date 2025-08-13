import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="header" className="box-border flex w-full flex-col z-50 h-auto sm:flex-row fixed sm:h-[60px] p-2 justify-center items-center bg-[#C0C9EE]">
      <div id="navigation_bar" className="flex flex-col gap-y-4 sm:gap-y-0 sm:flex-row  text-center sm:w-full  lg:w-2/5 sm:justify-evenly ">
        <NavLink
          className={({isActive})=> isActive? " rounded-lg text-white p-2  bg-black text-lg font-medium sm:text-xl md:text-2xl " : "hover:text-blue-800 text-lg  p-2 font-medium sm:text-xl md:text-2xl"}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
        className={({ isActive }) => isActive ? " rounded-lg text-white p-2 bg-black font-medium text-lg sm:text-xl md:text-2xl " : "hover:text-blue-800 p-2 text-lg font-medium sm:text-xl md:text-2xl "} 
          
          to="/codebucket"
        >
          Previous Buckets
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
