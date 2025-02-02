"use client";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import cards from "../data/Data"; // استيراد البيانات من ملف Data.js
import Bannar_2 from "./Bannar_2";

// استيراد Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

function CoffeeMenu() {
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsToShow = cards.slice(0, 6); // عرض أول 6 منتجات فقط

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId === selectedCard ? null : cardId);
  };

  const cardRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setSelectedCard(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-[#E5DCD3] relative">
      <div className="bg-text_color w-[40%] h-[70%] absolute left-0 bottom-0 z-10 hidden md:flex"></div>
      <div className="container mx-auto bg-[#E5DCD3] z-40 relative rounded-2xl">
        <div className="  py-6 flex items-center justify-between">
          <div className="">
            <h1 className=" text-text_color  font-bold text-3xl">
              COFFEE MENU
            </h1>
            <p className="text-text_color family">
              From warm and smooth to cold and refreshing, there are endless
              drink options
            </p>
          </div>

          <div className="">
            <button>
            <Link href="/pages/coffee-menu" className="   text-primary font-bold text-xl hover:text-text_color transition-all underline      ">
              Our Menu
              </Link>
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {cardsToShow.map((card) => (
            <SwiperSlide key={card.id}>
              <div
                className="relative    h-[460px] shadow rounded-xl mb-14"
                ref={cardRef}
              >
                <div className="relative">
                  <Image
                    src={card.image}
                    alt={card.name}
                    width={300}
                    height={200}
                    className={`w-full object-cover ${
                      selectedCard === card.id ? "filter brightness-50" : ""
                    }`}
                  />
                  <button
                    className="absolute top-[20%] right-0 text-white text-2xl bg-primary rounded-l-full p-1 hover:bg-opacity-70 transition-all"
                    onClick={() => handleCardClick(card.id)}
                  >
                    <IoIosInformationCircleOutline />
                  </button>
                </div>
                {selectedCard === card.id && (
                  <div className="absolute top-[30%] -left-8 w-full flex items-center justify-end p-4 bg-opacity-50 transition-all duration-300 rounded-lg">
                    <div className="bg-[#d78425a9] p-4 rounded-lg max-w-[80%]">
                      <p className="text-white font-semibold text-[17px]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                )}
                <div className="p-4  rounded-b-md flex justify-between">
                  <div className="text-start">
                    <h1 className="text-[18px] font-bold text-[#69370b] w-[200px] ">
                      {card.name}
                    </h1>
                  </div>
                  <div>
                    <p className="text-primary font-bold text-xl">
                      $ {card.price}
                    </p>
                    <p className="text-secondary font-semibold">{card.size}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container relative z-50">
        <Bannar_2 />
      </div>
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #b65413;
        }
        .swiper-pagination-bullet-active {
          background-color: #b65413;
        }
      `}</style>
    </div>
  );
}

export default CoffeeMenu;
