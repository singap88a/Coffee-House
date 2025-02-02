"use client";

import React from "react";
import Image from "next/image";
import Different_1 from "../../../public/About/Different_1.png";
import Different_2 from "../../../public/About/Different_2.png";
import Different_3 from "../../../public/About/Different_3.png";
import Different_4 from "../../../public/About/Different_4.png";
import Different_abs from "../../../public/About/Different_abs.png";

function Different() {
  const features = [
    {
      title: "Supreme Beans",
      description: "Beans that provide good taste",
      image: Different_1,
    },
    {
      title: "High Quality",
      description: "We provide the highest quality",
      image: Different_2,
    },
    {
      title: "Extraordinary",
      description: "Coffee like you have never tested",
      image: Different_3,
    },
    {
      title: "Affordable Price",
      description: "Our Coffee prices are easy to afford",
      image: Different_4,
    },
  ];

  return (
    <div className="  py-12  relative   ">
      <div className="container mx-auto    ">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#69370b] text-center  ">
            Why are we different?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#69370b] text-center mb-6 family">
            We don't just make your coffee, we make your day!
          </p>
        </div>

        <div className=" absolute top-0 right-0 w-[270px] hidden md:block   ">
          <Image src={Different_abs} alt="Discover Coffee" className=" " />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f9c06a27] p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow border-1 border-[#F9C06A] border"
            >
              <div className="mb-3">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-[70px]  mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-[#69370b] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-[#555]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Different;
