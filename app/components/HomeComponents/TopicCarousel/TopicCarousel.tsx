"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const topics = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
];

const ResponsiveCarousel = () => {
  return (
    <Carousel className="w-[80%] m-auto">
      <CarouselContent className="">
        {topics.map((topic, index) => (
          <CarouselItem className="basis-auto" key={index}>
            <div className="text-center p-4 ">{topic}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="" />
      <CarouselNext className="" />
    </Carousel>
  );
};

export default ResponsiveCarousel;
