import BlogPreview from "./components/BlogPreview/BlogPreview";
import TopicCarousel from "./components/TopicCarousel/TopicCarousel";

export default function Home() {
  return (
    <div className=" max-w-[1350px] w-full mx-auto h-60 flex transition-gap gap-0 md:gap-4 lg:gap-8 xl:gap-16 justify-center items-center my-5">
      <div className="max-w-[820px] flex flex-col w-full mx-auto ">
        <TopicCarousel/>
        <BlogPreview />
      </div>
      <div className="w-[350px] hidden h-screen md:block border-l">
      </div>
    </div>
  );
}
