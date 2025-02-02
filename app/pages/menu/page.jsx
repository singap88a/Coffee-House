import Image from "next/image";
import cards from "../../data/Data";
import bg from "../../../public/mune.png";

const Menu = () => {
  const categories = ["Coffee", "Breakfast", "Dessert", "Beverage"];
  const categorizedItems = categories.map((category) => ({
    category,
    items: cards.filter((item) => item.category === category),
  }));

  return (
    <div className="bg-[#E5DCD3]">
      <div className="container text-text_color">
        <div className="pt-24 pb-20">
          <h1 className="text-center text-4xl font-bold text-text_color pb-10">
            MENUS
          </h1>
          <div className="grid md:grid-cols-2 gap-10">
            {categorizedItems.map(({ category, items }) => (
              <div key={category} className="border-x border-dashed border-text_color px-4">
                <h2 className="text-2xl font-semibold border-y-2 border-text_color pb-2 mb-4 uppercase">
                  {category}
                </h2>
                <ul>
                  {items.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between py-2 border-b border-gray-300"
                    >
                      <span className="text-lg font-medium up py-2">{item.name}</span>
                      <span className="text-lg font-semibold">
                        ${item.price.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;