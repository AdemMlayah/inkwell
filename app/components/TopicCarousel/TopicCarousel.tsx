"use client"; // Add this at the very top to mark it as a Client Component

import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

const topics = [
  "Technology",
  "Health",
  "Science",
  "Travel",
  "Finance",
  "Education",
  "Entertainment",
  "Sports",
  "9tates",
  "Chrab",
  "Hamas",
  "NININI",
  "Weee",
];

function TopicCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null); 
  const scrollAmount = 150; 

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

 
  const handlePrevious = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -scrollAmount, 
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

      setCanScrollPrev(carousel.scrollLeft > 0);
      
      const isAtEnd = carousel.scrollLeft >= maxScrollLeft;
      setCanScrollNext(!isAtEnd);
    }
  };

  useEffect(() => {
    handleScroll();

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-8 border-b-2 h-10">
      {/* Previous Button */}
      {canScrollPrev && (
        <MdOutlineNavigateBefore
          onClick={handlePrevious}
          size={25}
          className="text-dark-600 hover:cursor-pointer hover:text-dark-950"
        />
      )}

      {/* Carousel*/}
      <div
        ref={carouselRef}
        className="flex no-scrollbar space-x-4 rounded-xl overflow-x-auto scroll-smooth scrollbar-hide w-[90%] mx-4"
      >
        {topics.map((topic, index) => (
          <div
            key={index}
            onClick={() => setSelectedTopic(topic)} 
            className={`min-w-max px-4 py-2 text-body-2 text-dark-400 cursor-pointer text-center rounded-lg ${
              selectedTopic === topic ? 'text-dark-950 underline text-body-3' : 'hover:text-dark-950'
            }`}
          >
            {topic}
          </div>
        ))}
      </div>

      {/* Next Button */}
      {canScrollNext && (
        <MdOutlineNavigateNext
          size={25}
          onClick={handleNext}
          className="text-dark-600 hover:cursor-pointer hover:text-dark-950"
        />
      )}
    </div>
  );
}

export default TopicCarousel;
