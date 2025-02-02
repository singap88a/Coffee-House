import React from "react";
import bannar_1 from "../../public/Vector_1.png";
import bannar_2 from "../../public/Vector_2.png";
import Image from "next/image";
import { IoIosInformationCircleOutline } from "react-icons/io";

function Bannar_2() {
  return (
    <div>
      <div className="text-secondary  ">
        <div className="container">
          <div className="w-full md:flex flex-col md:flex-row mx-auto py-6 pb-20 px-4 md:px-52">
            {" "}
             <div className="w-full md:w-1/2 relative">
               <div className="md:hidden text-center">
                <h1 className="md:text-[40px] font-bold uppercase text-primary text-[30px] ">
                  coffee houses{" "}
                  <span className="text-secondary">at your home</span>
                </h1>
                <p className="text-lg py-5 family">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                </p>
              </div>

               <div className="flex flex-col items-center md:flex-row">
                <Image
                  src={bannar_1}
                  alt="Banner Image 1"
                  className="w-[40%] md:w-[30%] h-auto z-50 absolute  -left-[20%] top-[50%] md:top-0 md:left-0"
                />
                <Image
                  src={bannar_2}
                  alt="Banner Image 2"
                  className="w-[70%] md:w-[57%] h-auto z-50 mt-4 md:mt-0 md:absolute md:-top-20 md:right-14"
                />
              </div>

               <div className="md:hidden flex flex-col items-center mt-4">
                <h1 className="text-secondary text-2xl font-semibold">
                  $12.00
                </h1>
                <button className="bg-primary text-white py-2 px-4 rounded-lg mt-2">
                  Buy now
                </button>
              </div>

               <div className="hidden md:block">
                <div className="bg-secondary bg-opacity-90 text-white p-2 w-full md:w-[70%] rounded-lg absolute md:top-[40%] -left-[190px] z-[999]">
                  <IoIosInformationCircleOutline className="w-6 h-6 text-white" />
                  <p>½ Espresso ⅓ Warm Milk Total Size: 180 ml</p>
                </div>
              </div>
            </div>

             <div className="w-full md:w-1/2 pt-5 md:pt-0 text-center md:text-start hidden md:block">
              <h1 className="md:text-[46px] font-bold text-[40px] uppercase text-primary">
                coffee houses{" "}
                <span className="text-secondary">at your home</span>
              </h1>
              <p className="text-lg py-5 family">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </p>
              <div className="flex gap-7 items-center justify-center md:justify-start">
                <h1 className="text-secondary text-2xl font-semibold">
                  $12.00
                </h1>
                <button className="bg-primary text-white py-2 px-4 rounded-lg">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bannar_2;