import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface LandingComponent {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
}

const LandingComponent = (props: LandingComponent) => {
  return (
    <div>
      <div className="w-[100%] flex flex-wrap lg:justify-between px-[8%] pt-[5%] lg:pt-[1%] mb-[2%]">
        <div className="flex flex-col space-y-[3%] justify-center lg:w-[45%] relative text-spickyBlue transition-colors duration-150 hover:text-[#7F8490] active:text-[#7F8490]">
          <div className="flex items-center space-x-2 transition-colors duration-300 hover:text-[#7F8490] active:text-[#7F8490]">
            <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
            <p className="font-semibold">{props.title}</p>
          </div>

          <h1 className="font-bold text-[27px] lg:text-[43px] lg:leading-tight lg:tracking-wide transition-colors duration-150 hover:text-[#7F8490] active:text-[#7F8490] w-[90%] lg:w-[100%]">
            {props.heading}
          </h1>
          <p className="w-[100%] text-darkGray text-[13px] lg:text-[15px] transition-colors duration-150 hover:text-[#052148] active:text-[#7F8490]">
            {props.description}
          </p>

          <Link href="#" className="pt-3">
            <button className="py-2 lg:py-3 rounded-3xl px-4 lg:px-6 font-semibold text-xs lg:text-sm border bg-spickyBlue text-white transition-all duration-1550 transform hover:bg-[#F1598F] hover:scale-105 active:bg-[#F1598F] active:scale-95">
              Get Started
            </button>
          </Link>
        </div>

        <div className="lg:w-[55%] lg:mt-[2%] flex justify-center">
          <Image src={props.image} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
