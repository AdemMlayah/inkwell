import React from "react";
import { CiUser } from "react-icons/ci";
import { LuLibrary } from "react-icons/lu";
import { IoCreateOutline } from "react-icons/io5";

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

function DropDown() {
  return (
    <DropdownMenuContent className="bg-white rounded-md shadow-lg mx-6 w-[240px] py-3">

      <DropdownMenuItem className="text-body-2 block sm:hidden">
        <IoCreateOutline style={{ width: "24px", height: "24px" }} />
        Write
      </DropdownMenuItem>
      <DropdownMenuSeparator className="w-[100px] block sm:hidden"/>
      <DropdownMenuItem className="text-body-2">
        <CiUser style={{ width: "24px", height: "24px" }} />
        Profile
      </DropdownMenuItem>
      <DropdownMenuItem className="text-body-2">
        <LuLibrary style={{ width: "24px", height: "24px" }} />
        Saved
      </DropdownMenuItem>
    <DropdownMenuSeparator/>
    <DropdownMenuItem className="text-body-2">Settings</DropdownMenuItem>
    <DropdownMenuItem className="text-body-2">Refine recommendations</DropdownMenuItem>
    <DropdownMenuItem className="text-body-2">Manage Puplications</DropdownMenuItem>
    <DropdownMenuItem className="text-body-2">Settings</DropdownMenuItem>
    <DropdownMenuSeparator/>
    <DropdownMenuItem className="text-body-2">Sign Out</DropdownMenuItem>
      
    </DropdownMenuContent>
  );
}

export default DropDown;
