import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-full h-20 pl-4 pr-8 py-2 shadow-sm border flex justify-between items-center bg-transparent backdrop-blur-sm sticky top-0 z-10">
      <div className="font-bold text-lg md:text-xl text-blue-600 pr-8">
        Shopify
      </div>
      <div className="text-lg text-blue-600 space-x-7 hidden md:block">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="space-x-3 flex gap-1 items-center">
        <button
          className="bg-gradient-to-l from-blue-600 to-blue-400 text-white px-2 py-2 rounded-full md:px-5 md:py-2 md:rounded-md"
          onClick={() => setShowSearch(!showSearch)}
        >
          <span className="hidden md:block">Search</span>
          <IoSearch className="block md:hidden" />
        </button>
        <button className="bg-gradient-to-l from-blue-600 to-blue-400 text-white px-3 py-1 md:px-5 md:py-2 rounded-md">
          Login
        </button>
        <button className="bg-gradient-to-l from-blue-500 to-blue-700 text-white px-3 py-1 md:px-5 md:py-2 rounded-md">
          SignUp
        </button>
      </div>
      {/* Search Box */}
      {showSearch && (
        <div
          className={` w-[300px] h-[45px] rounded-md shadow-md absolute right-1 top-23 bg-white`}
        >
          <input
            className="w-[80%] h-full rounded-l-md pl-3 border border-gray-700 outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-gradient-to-l from-blue-600 to-blue-400 text-white px-1 py-[12px] rounded-r-md w-[20%]">
            Search
          </button>
        </div>
      )}

      {/* Mobile Navbar */}

      <div className="w-full h-[54px] bg-gradient-to-l from-blue-600 to-blue-700 px-3 py-6 absolute top-163 left-0 flex justify-evenly items-center text-white font-bold text-2xl md:hidden z-10 rounded-tl-md rounded-tr-md">
        <NavLink to="/">
          <FaHome />
        </NavLink>
        <NavLink to="/about">
          <FaUserTie />
        </NavLink>
        <NavLink to="/contact">
          <FaPhoneFlip />{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
