import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Coffee_House from "./components/Coffee_House";
import CoffeeMenu from "./components/CoffeeMenu";
import Roasting from "./components/Roasting";
import Beakfast_menu from "./components/Breakfast_menu";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div  >
 
      <Hero/>
     <Banner/>
     <Coffee_House/>
      <CoffeeMenu/>
      <Roasting/>
     < Beakfast_menu/>
     </div>
  );
}
