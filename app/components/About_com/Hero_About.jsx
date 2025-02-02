"use client";
import React from "react";
import hero_about_2 from "../../../public/About/hero_about_2.png";
import hero_about_3 from "../../../public/About/hero_about_3.png";
import Image from "next/image";
import Lottie from "lottie-react";
import Animation_hero from "../../Animation/hero_About_An.json";
function Hero_About() {
  return (
    <div>
      <div
        className="relative w-full bg-center bg-cover h-[250px] md:h-[350px]   "
        style={{ backgroundImage: "url('/About/hero_about_1.png')" }}
      >
        <div className="absolute inset-0 bg-[#69370ba7] bg-opacity-60">
          <div className="flex flex-col-reverse md:flex-row w-full container mx-auto h-full   lg:px-12">
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left pb-5">
              <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">
                Get a chance to have an Amazing morning
              </h1>
              <p className="text-white text-sm sm:text-base lg:text-lg mb-6 family">
                We are giving you a one-time opportunity to experience a better
                life with coffee.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="py-2 px-5     rounded-md text-white font-bold bg-[#8c6a4a] hover:bg-primary-dark transition-colors">
                  Book Now
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/2 flex justify-end items-center      ">
              <div className="w-[70%]   md:w-[40%]   relative z-20 hidden md:flex">
                <Image src={hero_about_2} alt="Hero About 2" />
              </div>
              <div className="absolute right-0 bottom-0  md:flex hidden  ">
                <Image src={hero_about_3} alt="Hero About 3" width={340} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_About;
