import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface ServicesComponent1 {
  cleaningType: string;
  description: string;
  image: StaticImageData;
  price: string;
  link: string;
  buttonName: string;
}

const ServicesComponent1 = (props: ServicesComponent1) => {
  return (
    <div className="flex flex-wrap-reverse px-[8%] lg:justify-between gap-y-4 lg:gap-y-0 font-Urbanist">
      <div className="lg:w-[37%]">
        <Image src={props.image} alt="Image" />
      </div>
      <div className="flex flex-col space-y-[3%] justify-center lg:w-[47%] relative text-lightBlack transition-colors duration-150 hover:text-[#7F8490] active:text-[#7F8490]">
        {/* Circle and Text in a row */}
        <div className="flex items-center space-x-2 transition-colors duration-300 hover:text-[#7F8490] active:text-[#7F8490]">
          <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
          <p className="font-semibold">Our Services</p>
        </div>

        <h1 className="font-bold text-3xl lg:text-[42px] lg:leading-tight lg:tracking-wide transition-colors duration-150 hover:text-[#7F8490] active:text-[#7F8490]">
          {props.cleaningType}
        </h1>
        <p className="w-[100%] text-darkGray text-[14px] lg:text-[15px] transition-colors duration-150 hover:text-black active:text-black">
          {props.description}
        </p>
        <p className="text-spickyPink font-bold">{props.price}</p>
        <Link href={props.link} className="pt-3">
          <button className="py-2 lg:py-3 rounded-3xl px-4 lg:px-6 font-semibold text-xs lg:text-sm border bg-black text-white transition-all duration-1550 transform hover:bg-[#F1598F] hover:scale-105 active:bg-[#F1598F] active:scale-95">
            {props.buttonName}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesComponent1;
