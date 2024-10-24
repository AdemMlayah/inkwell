"use client";
import BlogPreview from "./components/BlogPreview/BlogPreview";
import TopicCarousel from "./components/TopicCarousel/TopicCarousel";

export default function Home() {


  return (
<div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(350px,_1fr)] h-screen overflow-hidden">
  <div className=" overflow-hidden">
    <TopicCarousel />
  </div>
  <div className="bg-red-500 hidden md:block min-w-[350px]">
    {/* Sidebar content */}
  </div>
</div>

  );
}

