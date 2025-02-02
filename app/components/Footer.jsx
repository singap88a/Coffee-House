import React from "react";
import { FiSend } from "react-icons/fi"; 
import { Ri24HoursFill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-[#935831] text-white py-12">
      <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-center border-b-2 border-gray-400 md:pb-2 pb-5">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="md:text-2xl font-bold mb-4 text-xl">
              STILL YOU NEED OUR SUPPORT?
            </h2>
            <p className="text-gray-200 mb-6 family">
              Don't wait, make a smart & logical quote here. It's pretty easy
            </p>
          </div>

           <div className="relative w-full md:w-64">
            <input
             
              type="email"
              placeholder=" Your Email"
              className="w-full px-4 py-3 pr-12 rounded-full bg-primary text-white placeholder-white focus:outline-none"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white">
              <FiSend className="text-xl" />
            </button>
          </div>
        </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8  ">
           <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-200">Email: ohe@mail.com</p>
            <p className="text-gray-200">Phone: +77 564 33 25</p>
            <p className="text-gray-200 mt-2">
              Address: st. Marital District 24
            </p>
          </div>

           <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-200">
              Ink for dependable sale, and professional chauffeured car
            </p>
          </div>

           <div className="">
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>

            <div className="flex items-center gap-4">
              <div className=" bg-primary p-3 rounded-md">
                <Ri24HoursFill className="text-3xl    text-white rounded-lg " />
              </div>
              <div className="">
                <p className="text-gray-200">Mon - Sat (8:00 - 6:00)</p>
                <p className="text-gray-200"> Sunday - Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
