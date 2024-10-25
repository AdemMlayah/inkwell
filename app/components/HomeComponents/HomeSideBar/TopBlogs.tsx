import React from 'react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import WriterProfilePreview from './WriterProfilePreview';

function TopBlogs() {
  return (
    <div className='flex flex-col gap-4'>
      <span className='text-header-3 text-dark-500'>Top Blogs</span>
      <div className='flex flex-col gap-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='flex flex-col gap-1 w-[90%]'>
              <HoverCard>
  <HoverCardTrigger>
            <div className="flex flex-row gap-2 items-center jus">
              <div className="relative inline-block">
                <Avatar className="h-4 w-4">
                  <AvatarImage className="hover:cursor-pointer" src="https:github.com/shadcn.png" />
                </Avatar>
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 rounded-3xl hover:opacity-40 hover:cursor-pointer" />
              </div>
              <span className="text-dark-700 text-body-1 hover:text-dark-950 hover:cursor-pointer">
                Adem Mlayah
              </span>

            </div>
  </HoverCardTrigger>
  <HoverCardContent className='relative right-20'>
    <WriterProfilePreview/>
  </HoverCardContent>
</HoverCard>
            <span className='text-header-3 font-bold text-dark-900 line-clamp-1 hover:cursor-pointer hover:text-dark-950'>
              3 nights in Klibia
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopBlogs;
