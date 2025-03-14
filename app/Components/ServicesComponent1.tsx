import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Arrow from '../../public/images/arrow.png';

interface ServicesComponent1 {
  cleaningType: string;
  description: string;
  surfaceTitle: string;
  surfaceDescription: string;
  surfaceTitle2: string;
  surfaceDescription2: string;
  surfaceTitle3: string;
  surfaceDescription3: string;
  image: StaticImageData
}

const ServicesComponent1 = (props: ServicesComponent1) => {
  return (
    <div className="flex flex-wrap px-[8%] lg:justify-between space-y-[7%] lg:space-y-0">
      
        <div className="flex flex-col space-y-[3%] justify-center lg:w-[45%] relative text-spickyBlue transition-colors duration-150 hover:text-[#7F8490] active:text-[#7F8490]">
          {/* Circle and Text in a row */}
          <div className="flex items-center space-x-2 transition-colors duration-300 hover:text-[#7F8490] active:text-[#7F8490]">
            <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
            <p className="font-semibold">Our Services</p>
          </div>

          <h1 className="font-bold text-3xl lg:text-[43px] lg:leading-tight lg:tracking-wide transition-colors duration-150 hover:text-[#7F8490] active:text-[#7F8490]">
            {props.cleaningType}
          </h1>
          <p className="w-[100%] text-darkGray text-[14px] lg:text-[15px] transition-colors duration-150 hover:text-[#052148] active:text-[#7F8490]">
            {props.description}
          </p>

          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 items-center text-spickyBlue font-semibold">
              <Image src={Arrow} alt="Arrow" className="w-[6%] lg:w-[4%]"/>
              <p className="pt-2 lg:pt-1 text-[19px]">{props.surfaceTitle}</p>
            </div>
            <p className="text-darkGray text-[14px]">{props.surfaceDescription}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 items-center text-spickyBlue font-semibold">
              <Image src={Arrow} alt="Arrow" className="w-[6%] lg:w-[4%]"/>
              <p className="pt-2 lg:pt-1 text-[19px]">{props.surfaceTitle2}</p>
            </div>
            <p className="text-darkGray text-[14px]">{props.surfaceDescription2}</p>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-2 items-center text-spickyBlue font-semibold">
              <Image src={Arrow} alt="Arrow" className="w-[6%] lg:w-[4%]"/>
              <p className="pt-2 lg:pt-1 text-[19px]">{props.surfaceTitle3}</p>
            </div>
            <p className="text-darkGray text-[14px]">{props.surfaceDescription3}</p>
          </div>

          <Link href="#" className="pt-3">
            <button className="py-2 lg:py-3 rounded-3xl px-4 lg:px-6 font-semibold text-xs lg:text-sm border bg-spickyBlue text-white transition-all duration-1550 transform hover:bg-[#F1598F] hover:scale-105 active:bg-[#F1598F] active:scale-95">
              Get Started
            </button>
          </Link>
        </div>

        <div className="lg:w-[37%]">
        <Image src={props.image} alt="Image" />
        </div>
      
    </div>
  );
};

export default ServicesComponent1;
