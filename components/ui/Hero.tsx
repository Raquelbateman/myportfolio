import React from "react";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "./TextGenerateEffect";

import { GoProjectRoadmap } from "react-icons/go";
import MagicButton from "./MagicButton";

export const Hero = () => {
  return (
    <div className="relative w-full">
      <div className="pb-20 pt-36">
        {/* Spotlight container */}
        <div className="relative">
          <Spotlight
            className="top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vh]"
            fill="pink"
          />
          <Spotlight
            className="top-28 -left-80 h-[80vh] w-[100vw]"
            fill="purple"
          />
        </div>
        
        {/* Grid background container */}
        <div className="absolute inset-0 h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.7] bg-grid-black/[0.2] flex items-center justify-center">
          {/* Radial gradient overlay */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="mx-w-[89vw] md:max-w-2xl lg:max-w[60vw] flex flex-col items-center ">
          <h2 className="uppercase tracking-widest test-xs text-center text-blue-400 max-w-80"> Dynamic Web Magic Next.js
              </h2>
              <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Hello, I'm your friendly programming companion."/>
              <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">My name is Alicia Spruell and Im a fullstack developer from the San Joaquin Valley. I have a strong focus on UI with my main focus being design.</p>
              <a href="#about"><MagicButton icon={<GoProjectRoadmap />} title="My Projects" position="right" otherClasses={""}/></a>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;