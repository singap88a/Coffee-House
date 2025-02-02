 











import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
 

const Hero = () => {
  return (
    <div className="relative w-full bg-center bg-cover" style={{ backgroundImage: "url('/bg_hero.png')" }}>
    
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

 
      <div className="relative container mx-auto">
        <div className="flex md:flex-col lg:flex-row w-full py-10 flex-col-reverse  pt-20">
      
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start pl-10    ">
            <div className="flex gap-4 mb-6">
              <div className="text-2xl w-14 h-14 rounded-full flex items-center justify-center border border-white text-white hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
                <FaInstagram />
              </div>
              <div className="text-2xl w-14 h-14 rounded-full flex items-center justify-center border border-white text-white hover:bg-primary hover:text-white transition duration-300 cursor-pointer">
                <FaFacebookF />
              </div>
            </div>

     
            <div className="text-white font-bold leading-tight">
              <h1 className="md:text-[80px] text-[50px] text-primary">COFFEE </h1>
              <h1 className="md:text-[80px] text-[50px] text-primary">
                HOUSES <span className="text-white">IN YOUR WAY</span>
              </h1>
            </div>

            <p className="text-lg text-white mb-8 family">
              Delicious handcrafted drinks and sweets made from the simplest, highest quality ingredients.
            </p>
            <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg hover:bg-[#ea9540b9] transition duration-300">
              Our new taste
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
