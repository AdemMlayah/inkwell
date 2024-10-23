import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";
import { PiDotsThreeCircle } from "react-icons/pi";

function BlogPreview() {
  return (
    <div className="max-w-xl w-full p-2 border-b flex flex-col gap-3 hover:cursor-pointer">
      {/* Poster Avatar and name  */}
      <div className="flex flex-row gap-2">
        <div className="relative inline-block">
          <Avatar className="h-7 w-7">
            <AvatarImage
              className="hover:cursor-pointer"
              src="https:github.com/shadcn.png"
            />
          </Avatar>
          <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 rounded-3xl hover:opacity-40 hover:cursor-pointer" />
        </div>
        <span className="text-dark-700 hover:text-dark-950 hover:cursor-pointer hover:underline">
          Adem Mlayah
        </span>
      </div>
      {/* Post Content  */}
      <div className="flex flex-row  ">
        <div className="w-[70%]  flex flex-col gap-3">
          <span className="text-header-2 line-clamp-2 text-dark-950">3 night In Klibia</span>
          <span className="text-body-2 line-clamp-2">
            this cosmic is a unique hip hop school, an true artist, a one of its
            own, a real honest view of life. kammal hakka cos. 5sara lem5a5
            wallet yesser commerciales wel adhwa9 mouwajjha{" "}
          </span>
        </div>
        <div className="w-[30%] h-20  items-center flex justify-center">
          <img
            className="sm:w-[160px] sm:h-[110px] w-[80px] h-[50px] rounded-sm"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
          />
        </div>
      </div>
      {/* bottom options  */}
      <div className="w-full text-dark-600">
        <div className="flex flex-row justify-between w-full items-center">
          {/* comment like date */}
          <div className="flex flex-row gap-4 items-center   ">
            <span className="" >Apr 12</span>
            <div className="sm:flex hidden flex-row items-center gap-[3px]">
              <FaRegHeart size={20} />
              <span>4</span>
            </div>
            <div className="sm:flex hidden  flex-row items-center gap-[3px]">
              <GoComment size={20} />
              <span>4</span>
            </div>
          </div>
          <div className="flex justify-end items-center flex-row gap-5">
            <PiDotsThreeCircle className="hover-darken"    size={25} />
            <CiBookmark className="hover-darken"   size={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPreview;
