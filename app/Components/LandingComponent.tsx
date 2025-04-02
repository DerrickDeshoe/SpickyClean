import React from "react";
import Image, { StaticImageData } from "next/image";

interface LandingComponent {
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
  image2: StaticImageData
}

const LandingComponent = (props: LandingComponent) => {
  return (
    <div>
      <div className="w-[100%] flex flex-wrap lg:justify-between px-[8%] pt-[5%] lg:pt-[1%] mb-[2%]">
        <div className="flex flex-col space-y-[3%] justify-center lg:w-[45%] relative">
          <div className="flex items-center space-x-2 transition-colors duration-300 hover:text-[#7F8490] active:text-[#7F8490]">
            <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
            <p className="font-bold text-lightBlack">{props.title}</p>
          </div>

          <h1 className="font-bold text-[27px] lg:text-[43px] text-lightBlack font-Urbanist lg:leading-tight lg:tracking-wide transition-colors duration-150 hover:text-black active:text-lightBlack w-[90%] lg:w-[100%]">
            {props.heading}
          </h1>
          <p className="w-[100%] text-darkGray font-Urbanist text-[13px] lg:text-[15px] transition-colors duration-150 hover:text-lightBlack active:text-lightBlack">
            {props.description}
          </p>

          <h3 className="text-spickyPink font-semibold">Scrubs&Rugs UK</h3>
        </div>

        <div className="hidden lg:w-[55%] lg:mt-[2%] lg:flex justify-center">
          <Image src={props.image} alt="Image" />
        </div>
        <div className="lg:hidden lg:mt-[2%] flex justify-center">
          <Image src={props.image2} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default LandingComponent;
