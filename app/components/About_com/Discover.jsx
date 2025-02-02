"use client";
import Lottie from "lottie-react";
import Different_abs from "../../Animation/Animation_Contact.json";

import React from "react";

function Discover() {
  return (
    <div className="  pt-24    ">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 ">
        <div className="flex flex-col md:flex-row items-center  gap-0  md:gap-12 lg:gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left  ">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#69370b] mb-6">
              Discover the best coffee
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-[#555] mb-8">
              Been Secret is a coffee that helps boost your energy and focus.
              Having a cup of coffee is good. But having a cup of real coffee is
              the greatest. There is no doubt that you will enjoy this coffee
              more than any other
            </p>
            <button className="py-2 px-8   sm:px-5 rounded-md text-white font-bold bg-[#69370b] hover:bg-[#4a2610] transition-colors">
              Explore More
            </button>
          </div>

          <div className="w-full md:w-1/2 flex justify-end   ">
            <div className="       w-[100%]  mx-auto   z-20">
              <Lottie animationData={Different_abs} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover;
