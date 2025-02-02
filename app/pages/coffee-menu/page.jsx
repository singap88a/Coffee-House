"use client";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { IoIosInformationCircleOutline } from "react-icons/io";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import cards from "../../data/Data";  

function CoffeeMenu() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState(null);
  const cardsPerPage = 9;

  const filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter((card) => card.category === selectedCategory);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

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
    <div className="bg-[#E5DCD3] relative py-20">
      <div className="container mx-auto bg-[#E5DCD3] z-40 relative rounded-2xl">
        <div className="flex flex-wrap justify-between gap-2 py-6 items-center">
          <div className="text-center md:text-start">
            <h1 className="text-[#69370b] font-bold text-3xl">Coffee Menu</h1>
            <p className="text-[#69370b] family">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2 mx-auto md:mx-0">
            {["All", "Coffee", "Breakfast", "Dessert", "Beverage" , "Cappuccino"].map((category) => (
              <button
                key={category}
                className={`px-4 py-1 rounded-[20px] border-2 border-primary ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "hover:bg-orange-200 transition-all"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 text-center md:grid-cols-2 lg:grid-cols-3">
          {currentCards.length >= 1 ? (
            currentCards.map((card) => (
              <div key={card.id} className="relative    h-[460px] shadow rounded-xl" ref={cardRef}>
                <div className="relative ">
                  <Image
                    src={card.image}
                    alt={card.name}
 
                    className={`w-full object-cover rounded-xl ${
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
                      <p className="text-white font-semibold text-[17px]">{card.description}</p>
                    </div>
                  </div>
                )}
                <div className="p-4  rounded-b-md flex justify-between">
                  <div  className="text-start">
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
            ))
          ) : (
            <h1 className="font-bold text-center text-blue-500 col-span-full">
              No cards found
            </h1>
          )}
        </div>

        <div className="flex justify-end mt-6 py-3">
          <button
            className="px-4 py-2 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            <FaAnglesLeft />
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 rounded-lg ${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 mx-1 bg-gray-200 rounded-lg hover:bg-gray-300"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            <FaAnglesRight />
          </button>
        </div>
      </div>
     </div>
  );
}

export default CoffeeMenu;