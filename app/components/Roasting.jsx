import React from "react";
import roasting from "../../public/roasting.png";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

function Roasting() {
  const Cards = [
    {
      title: "SISTER",
      origin: "Papua New Guinea + Ethiopia",
      blendFor: "Hot coffee",
 
    },
    {
      title: "DECAF",
      origin: "Columbia + Guatemala",
      blendFor: "Hot coffee",
 
    },
    {
      title: "BUD HAND",
      origin: "Columbia + Thai",
      blendFor: "Milk/Cold coffee",
 
    },
    {
      title: "ROASTERY",
      origin: "Panama + Ethiopia",
      blendFor: "Filter coffee",
 
    },
  ];

  return (
    <div className="bg-secondary relative">
      <div className="container">
        <div className="py-10">
          <div className="text-center">
            <h1 className="uppercase font-bold text-white text-3xl">
              OUR ROASTING
            </h1>
            <p className="text-lg py-5 text-white pb-10">
              Whether it's a quick morning coffee from the nearest coffee shop
              or a quick midday snack, we have something for everyone. Here are
              some options to help you celebrate the little joys of each day
              with us.
            </p>
          </div>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
            {Cards.map((card, index) => (
              <div key={index} className="">
                <div className="shadow-md p-5 rounded-xl bg-primary">
                  <div className="">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-semibold text-white">
                        {card.title}
                      </h2>
                      <GoArrowUpRight className="text-white font-bold text-2xl" />
                    </div>
                    <p className="text-sm text-white mt-2">
                      <strong>Origin:</strong> {card.origin}
                    </p>
                    <p className="text-sm text-white">
                      <strong>Blend for:</strong> {card.blendFor}
                    </p>
                   </div>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute -top-[20%] right-[15%] hidden md:flex">
            <Image
              src={roasting}
              alt="Roasting"
              className="w-32 border-[7px] border-[#E5DCD3] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roasting;