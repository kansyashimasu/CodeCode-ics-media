// NOTE: Heroコンポーネント

import React from "react";

const Hero = ({ title }: { title: string }) => {
  return (
    <>
      <div
        className="bg-gradient-to-r from-blue-950 via-purple-950 to-pink-950 h-36 -mb-28 relative w-full animate-pulse"
        style={{ animationDuration: "6s" }}
      ></div>
      <section className="container mx-auto py-18">
        <div className="relative">
          <h2
            className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center text-2xl font-bold md:text-3xl bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent z-10 animate-pulse"
            style={{ animationDuration: "4s" }}
          >
            {title}
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
