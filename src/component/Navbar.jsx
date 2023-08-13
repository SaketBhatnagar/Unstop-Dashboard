import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineLibraryBooks } from "react-icons/md";
import { LuClipboardSignature } from "react-icons/lu";
import { CgClose } from "react-icons/cg";
import { TbDeviceIpadCode } from "react-icons/tb";

const Navbar = ({ hideNav, handleNav }) => {
  return (
    <>
      <section
        className={` bg-[#00000060] w-full  sm:fixed lg:static close  z-[5] lg:block sm:${
          hideNav ? "block" : "hidden"
        }`}
        onClick={handleNav}
      >
        <nav className=" text-[#1c4980] p-4 lg:px-6 sm:px-4  h-[100vh] text-[1rem] bg-white sm:w-[70vw] lg:w-[initial] lg:bg-[white] sm:bg-[#f2f8fe]">
          <div className="flex justify-between items-center my-5 font-semibold lg:hidden">
            <span className="text-base">Menu</span>
            <span className=" p-2 rounded-full close" onClick={handleNav}>
              <CgClose
                className="text-2xl font-semibold close  p-1"
                onClick={handleNav}
              />
            </span>
          </div>
          <ul className="flex flex-col gap-1 font-semibold ">
            <li>
              <NavLink className="flex  lg:flex-col gap-2 lg:justify-center items-center border-2 p-6 sm:py-3 lg:py-6 rounded-xl border-[white] sm:border-transparent hover:border-[#0073e6] hover:bg-[#e5f1fc] hover:text-[#0073e6]">
                <MdOutlineDashboard className="text-2xl" />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="flex  lg:flex-col gap-2 lg:justify-center items-center border-2 p-6 sm:py-3 lg:py-6 rounded-xl border-[white] sm:border-transparent hover:border-[#0073e6] hover:bg-[#e5f1fc] hover:text-[#0073e6]">
                <LuClipboardSignature className="text-2xl" />
                <span>Assessment</span>
              </NavLink>
            </li>{" "}
            <li>
              <NavLink className="flex  lg:flex-col gap-2 lg:justify-center items-center border-2 p-6 sm:py-3 lg:py-6 rounded-xl border-[white] sm:border-transparent hover:border-[#0073e6] hover:bg-[#e5f1fc] hover:text-[#0073e6]">
                <MdOutlineLibraryBooks className="text-2xl" />
                <span>Library</span>
              </NavLink>
            </li>
          </ul>{" "}
          <ul className="flex flex-col mt-2 gap-9 border-t-2  justify-center  items-center border-dashed py-6 ">
            <li className="flex lg:flex-col lg:justify-center sm:justify-between items-center  flex-row-reverse  w-[85%]">
              <span className="lg:px-3 lg:py-1 lg:text-sm sm:px-3 sm:py-1 sm:text-xs border-2 rounded-2xl border-[#de5f37] text-[#de5f37] bg-[#fbebea] font-semibold mb-1 ">
                Admin
              </span>
              <NavLink className="flex  lg:flex-col gap-2 sm:px-2 lg:px-6 lg:justify-center items-center border-2 p-6 sm:py-3 lg:py-6 rounded-xl border-[white] sm:border-transparent hover:border-[#0073e6] hover:bg-[#e5f1fc] hover:text-[#0073e6]">
                <TbDeviceIpadCode className="text-2xl" />
                <span className="font-semibold flex-1 lg:text-center">
                  Round Status
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
