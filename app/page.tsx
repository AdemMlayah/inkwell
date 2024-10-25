"use client";
import BlogPreview from "./components/HomeComponents/BlogPreview/BlogPreview";
import HomeSideBar from "./components/HomeComponents/HomeSideBar/HomeSideBar";
import TopicCarousel from "./components/HomeComponents/TopicCarousel/TopicCarousel";

export default function Home() {
  return (
    <div className="w-screen h-screen mt-20">

    <div className=" grid grid-flow-col max-w-[1350px] mx-auto transition-gap gap-0 md:gap-2 lg:gap-10 xl:gap-20 justify-center">
      <div className="max-w-[800px] flex flex-col overflow-auto">
     
     
   
        <TopicCarousel/>
        <div className="">
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
          <BlogPreview />
        </div>
      </div>
      <div 

      className=" hidden md:block max-w-[350px] h-screen shrink-1   sticky top-24 border-l ">
<HomeSideBar/>
        
      </div>
    </div>
    </div>
  );
}