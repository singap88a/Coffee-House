"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Customers() {
  const Customers_Data = [
    {
      name: "Sarah Johnson",
      image: "/About/Customer_1.avif",
      rating: 5,
      description:
        "I absolutely love the coffee here! The atmosphere is cozy and the staff is very friendly. Highly recommended!",
    },
    {
      name: "Michael Smith",
      image: "/About/Customer_2.jpg",
      rating: 4,
      description:
        "Great place to relax and enjoy a cup of coffee. The pastries are delicious too! Will definitely come back.",
    },
    {
      name: "David Brown",
      image: "/About/Customer_3.jpg",
      rating: 5,
      description:
        "The best coffee in town! The baristas are very skilled and the service is top-notch. A must-visit spot!",
    },
    {
      name: "Emily Davis",
      image: "/About/Customer_4.avif",
      rating: 4,
      description:
        "Such a lovely place! The coffee is amazing and the ambiance is perfect for catching up with friends.",
    },
    {
      name: "James Wilson",
      image: "/About/Customer_5.jpg",
      rating: 5,
      description:
        "Fantastic coffee and a great selection of snacks. The staff is always welcoming and the place is very clean.",
    },
  ];

  return (
    <div>
      <div className="py-5 pt-10 ">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#69370b]">
                Hear From Our Amazing Team!
              </h2>
              <p className="text-base md:text-lg text-[#69370b] mt-2">
                Get to know what our talented staff members have to say about
                working here.
              </p>
            </div>

            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {Customers_Data.map((customer, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-[#ecd7c1] shadow  hover:shadow-xl transition-shadow duration-300 text-center my-10 mx-2  rounded-xl    border-2 border-[#ffb575a5]">
                    <Image
                      src={customer.image}
                      alt={customer.name}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover rounded-t-xl"
                    />
                    <div className="p-6 text-left">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-[#69370b]">
                          {customer.name}
                        </h3>
                        <div className="flex">
                          {Array.from({ length: customer.rating }, (_, i) => (
                            <span key={i} className="text-[#f9ab68] text-2xl">
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4 mt-4">
                        <FaFacebook className="text-[#69370b] text-xl cursor-pointer h-10 w-10 flex items-center justify-center rounded-full border border-[#69370b] p-2 transition duration-300 hover:bg-[#69370b] hover:text-white" />
                        <FaTwitter className="text-[#69370b] text-xl cursor-pointer h-10 w-10 flex items-center justify-center rounded-full border border-[#69370b] p-2 transition duration-300 hover:bg-[#69370b] hover:text-white" />
                        <FaInstagram className="text-[#69370b] text-xl cursor-pointer h-10 w-10 flex items-center justify-center rounded-full border border-[#69370b] p-2 transition duration-300 hover:bg-[#69370b] hover:text-white" />
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed">
                        {customer.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ccc;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #f9ab68;
        }
      `}</style>
    </div>
  );
}

export default Customers;
