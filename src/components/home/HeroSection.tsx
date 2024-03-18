import React from "react";
import Search from "./Search";
const HeroSection = () => {
  return (
    <>
      <section className="relative ">
        <div
          className="flex flex-col items-center justify-center  bg-gradient-to-r from-indigo-500 to-indigo-900"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=1089&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNwYWNlfGVufDB8fDB8fHww")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "75vh",
          }}
        >
          <h1 className="sm:text-3xl md:text-4xl lg:text-5xl  mb-4 text-white text-center font-bold">
            FlexGallery Where Every Pixel Tells a Story!
          </h1>
          <Search />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
