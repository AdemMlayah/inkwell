import React from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function TopWriters() {
  return (
    <div className='flex flex-col gap-4'>
      <span className='text-header-3 text-dark-500'>Top Writers</span>
      {/* Repeat writer section */}
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className='flex flex-row items-start gap-4'>
          <div className='w-[240px] flex flex-col gap-2'>
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
            <span className='text-caption line-clamp-2'>
              This cosmic is a unique hip hop school, a true artist, one of its own, a real honest view of life. Kammal hakka cos. 5sara lem5a5 walle.
            </span>
          </div>
          <Badge className='h-8 justify-end bg-dark-950 hover:bg-dark-700 rounded-2xl mt-2'>
            Follow
          </Badge>
        </div>
      ))}
    </div>
  );
}

export default TopWriters;
