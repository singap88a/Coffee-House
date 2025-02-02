"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay  } from "swiper/modules"; // استيراد Autoplay
import "swiper/css";
import "swiper/css/pagination";
import bannar_5 from "../../../public/About/bannar_1.png";
import bannar_1 from "../../../public/About/bannar_5.png";
import bannar_2 from "../../../public/About/bannar_2.webp";
import bannar_3 from "../../../public/About/bannar_3.webp";
import bannar_4 from "../../../public/About/bannar_4.webp";
import Image from "next/image";

function Bannar_About() {
  const bannars = [
    { image: bannar_1, width: "185px" },
    { image: bannar_2, width: "150px" },
    { image: bannar_3, width: "190px" },
    { image: bannar_4, width: "130px" },
    { image: bannar_5, width: "110px" },
  ];

  return (
    <div>
      <div className="container">
        <Swiper
          slidesPerView={2}  
          spaceBetween={20}  
          pagination={{ clickable: true }}  
          loop={true}  
          autoplay={{
            delay: 1000,  
            disableOnInteraction: false,  
          }}
          breakpoints={{
            640: { slidesPerView: 2 },  
            768: { slidesPerView: 3 },  
            1024: { slidesPerView: 5 },  
          }}
          modules={[Autoplay ]}  
          className="mySwiper"
        >
          {bannars.map((bannar, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center my-auto py-10">
                <Image
                  src={bannar.image}
                  alt=""
                  className="object-cover   "
                  style={{ width: bannar.width }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Bannar_About;