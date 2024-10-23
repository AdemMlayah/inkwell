import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import {
    DropdownMenu,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import DropDown from "./DropDown";
  
function Navbar() {
  return (
    <div className="w-screen h-[60px] bg-dark-50 text-dark-600  flex items-center px-2 sm:px-10  drop-shadow-md gap-8	  ">
      <span className="text-header-1 text-dark-950">Inkwell</span>
      <div className="relative flex-grow min-w-0 hidden sm:block">
        <input
          type="text"
          className="w-60 min-w-0 h-[40px]  pl-10 pr-4 rounded-[20px]   outline-none bg-[#f4f3f3]"
          placeholder="Search..."
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <FaSearch className="text-dark-600" />
        </div>
      </div>
      <div className="flex justify-end w-full items-center gap-8">
        <CiSearch
          size={30}
          className="hover:text-dark-950 hover:cursor-pointer block sm:hi"
        />

        <IoCreateOutline
          className="hover:text-dark-950 hover:cursor-pointer hidden sm:block"
          size={30}
        />

        <IoMdNotificationsOutline
          className="hover:text-dark-950 hover:cursor-pointer"
          size={30}
        />
          <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative inline-block">
          <Avatar>
            <AvatarImage
              className="hover:cursor-pointer"
              src="https://github.com/shadcn.png"
            />
          </Avatar>
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 rounded-3xl hover:opacity-40 hover:cursor-pointer" />
        </div>
      </DropdownMenuTrigger>
      <DropDown/>
    </DropdownMenu>
      </div>
    </div>
  );
}

export default Navbar;
