import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

interface PricingProps {
  image: StaticImageData;
  cleaningCategory: string;
  price: string;
  description: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  backgroundColor: string;
  textColor: string; 
  textColor2: string; 
  priceColor: string; 
  serviceColor: string; 
  serviceTextColor: string; 
}

const Pricing: React.FC<PricingProps> = (props) => {
  return (
    <div
      className="rounded-lg lg:w-[30%] p-4 transition-all duration-300 hover:shadow-lg"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="p-4 flex flex-col space-y-3">
        <div className="flex items-center space-x-2 transition-colors duration-300 hover:text-[#7F8490] active:text-[#7F8490]">
          <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
          <p
            className="font-semibold leading-10 tracking-normal"
            style={{ color: props.textColor2 }}
          >
            {props.cleaningCategory}
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <p style={{ color: props.priceColor }} className="text-[27px] font-bold">{props.price}</p>
          <p style={{ color: props.serviceTextColor }}>/service</p>
        </div>
        <div>
          <p style={{ color: props.textColor }}>{props.description}</p>
        </div>
      </div>
      <div className="w-full border-t border-darkGray"></div>
      <div className="flex flex-col space-y-3 p-4">
        {[props.service1, props.service2, props.service3, props.service4].map(
          (service, index) => (
            <div key={index} className="flex space-x-2 items-center">
              <Image src={props.image} alt="Arrow" width={20} height={20} />
              <p style={{ color: props.serviceColor }}>{service}</p>
            </div>
          )
        )}
      </div>
      <Link href="#" className="pt-3">
        <button className="py-3 rounded-3xl px-3 lg:px-6 font-semibold text-sm bg-spickyBlue text-white w-[100%]">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Pricing;
