import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Star from '../../public/images/Star.png'

interface Testimonials {
  image: StaticImageData;
  description: string;
  name: string;
  occupation: string;
}

const Testimonials = (props: Testimonials) => {
  return (
    <div className="flex flex-col space-y-4 border border-darkGray rounded-lg lg:w-[30%]">
      <div className="flex flex-col space-y-2 px-6 pt-5">
        <Image src={Star} alt="5 Star" />
        <p>{props.description}</p>
      </div>
      <div className="w-full border-t border-darkGray"></div>
      <div className="flex space-x-2 px-6 py-3">
        <Image src={props.image} alt="5 Star" />
        <div className="flex flex-col">
          <p className="font-semibold">{props.name}</p>
          <p className="text-darkGray">{props.occupation}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
