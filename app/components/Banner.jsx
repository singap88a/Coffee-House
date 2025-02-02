import React from 'react'
import bannar_1 from "../../public/bannar_1.png"
import bannar_2 from "../../public/bannar_2.png"
import Image from 'next/image'
import Link from 'next/link'
import { IoIosInformationCircleOutline } from "react-icons/io";

function Banner() {
    const buttons = [
        {label: 'Our Story', url: '/pages/about'},
        {label: 'Our Menu', url: '/pages/coffee-menu'},
        {label: 'Contact Us', url: '/pages/contact'},
        {label: 'Book a Table', url: '/book-table'}
    ]

  return (
    <div className='bg-[#935831]'>
       <div className="container">
        <div className="w-full md:flex md:pt-10 flex-col md:flex-row pt-0">  
            <div className="w-full md:w-1/2 relative">
                <div className="flex flex-col md:flex-row"> 
                    <Image src={bannar_1} alt="Banner Image 1" className='w-[60%] md:w-[35%] h-auto z-50 mx-auto'/>
                    <Image src={bannar_2} alt="Banner Image 2" className='w-full md:w-[45%] h-auto z-50'/>  
                </div>
                <div className="bg-secondary text-white p-4 w-full md:w-[50%] rounded-lg absolute md:top-[50%] top-[70%] md:block hidden">  
                    <IoIosInformationCircleOutline className="w-6 h-6 text-white"/>
                    <p>½ Espresso ⅓ Warm Milk Total Size: 180 ml</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 pt-5 md:pt-0 text-center md:text-start">  
                <h1 className="text-white md:text-[50px] font-bold text-[40px]  ">DELICIOUS  <br />COFFEE TO GO</h1>
                <p className="text-white text-lg py-5">For the price of one espresso, get two cappuccinos The excellent deal is available till May 20. </p>
                <div className="hidden md:block">  
                    {
                        buttons.map((button, index) => (
                            <Link href={button.url} key={index} className="  hover:text-white hover:bg-primary  transition duration-300 text-white rounded-xl border border-1 hover:border-primary py-2 px-2  mx-1">
                                 {button.label} 
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Banner
