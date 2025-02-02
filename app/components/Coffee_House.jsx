import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function Coffee_House() {
  return (
    <div className="bg-[#E5DCD3]">
      <div className="container text-center">
        <div className="py-10">
          <h1 className="font-bold text-3xl text-text_color"> COFFEE HOUSE </h1>
          <h3 className="py-4 uppercase  text-2xl font-normal text-text_color">
            DELICIOUS HANDCRAFTED DRINKS AND SNACKS MADE FROM THE SIMPLEST,
            HIGHEST QUALITY INGREDIENTS. COFFEE IS AT THE HEART OF WHAT WE DO,
            AND SO ARE ALL THE WAYS WE BRING YOU THE COFFEE HOUSE EXPERIENCE
            WHEREVER YOU ARE.
          </h3>
          <p className="pb-4 text-secondary">
            Whether it's a quick morning coffee from the nearest coffee shop or
            a quick midday snack, we have something for everyone. Here are some
            options to help you celebrate the little joys of each day with us.
          </p>
          <button className="bg-primary px-3 py-2 rounded-lg text-white">
          Our New Taste

          </button>
        </div>
      </div>
    </div>
  );
}

export default Coffee_House;
