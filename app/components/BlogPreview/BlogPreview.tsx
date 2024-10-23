import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { GoComment } from "react-icons/go";
import { CiBookmark } from "react-icons/ci";

function BlogPreview() {
  return (
    <div className="max-w-xl w-full p-2">
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
       <div className="flex flex-row ">

       <div className="w-[70%]  flex flex-col gap-3">
 <span className="text-header-2 line-clamp-2">3 night In Klibia</span>
 <span className="text-body-2 line-clamp-2">this cosmic is a unique hip hop school, an true artist, a one of its own, a real honest view of life. kammal hakka cos. 5sara lem5a5 wallet yesser commerciales wel adhwa9 mouwajjha </span>
       </div>
       <div className="w-[30%] h-20  items-center flex justify-center">
        <img
       className="md:w-[160px] md:h-[110px] w-[80px] h-[50px] rounded-sm"
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
     />
       </div>
       </div>
    </div>
);
}

export default BlogPreview;

// <div className="w-[680px] h-[200px] flex flex-col gap-4 ">
//   <div className="flex flex-row gap-1 items-center">
//     <div className="relative inline-block">
//       <Avatar className="h-7 w-7">
//         <AvatarImage
//           className="hover:cursor-pointer"
//           src="https://github.com/shadcn.png"
//         />
//       </Avatar>
//       <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 rounded-3xl hover:opacity-40 hover:cursor-pointer" />
//     </div>
//     <span className="text-dark-700 hover:text-dark-950 hover:cursor-pointer hover:underline">
//       Adem Mlayah
//     </span>
//   </div>
//   <div className="flex flex-row gap-4 w-[95%]">
//     <div className="flex flex-col gap-2 ">
//       <span className="text-blog-header text-bold">Bye Bye, Spotify </span>
//       <span className="text-blog-body text-dark-600">
//         Digital and technological development continues unstoppable, so, if
//         we talk about the design of web applicati
//       </span>
//     </div>
//     <img
//       className="w-[160px] h-[110px] rounded-sm"
//       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1z3WO2y5h7YkHljxIsvwuOxP21OE_8tnedA&s"
//     />
//   </div>
//   <div className="flex justify-between items-center w-[70%] text-caption text-dark-700 p-2">
//     <div className="flex flex-row gap-4 items-center">
//       <span>Apr 12</span>
//       <div className="flex flex-row items-center gap-[3px]">
//         <FaRegHeart size={20} />
//         <span>4</span>
//       </div>
//       <div className="flex flex-row items-center gap-[3px]">
//         <GoComment size={20} />
//         <span>4</span>
//       </div>
//     </div>
//     <CiBookmark size={30} />
//   </div>
// </div>