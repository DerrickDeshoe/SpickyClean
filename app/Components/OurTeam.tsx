import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface OurTeam {
  image: StaticImageData;
  personName: string;
  jobPosition: string;
  socialMedia: string;
}

const OurTeam = (props: OurTeam) => {
  return (
    <div className="pb-5 rounded-lg w-[100%] lg:w-[23%] font-Urbanist">
      <Image src={props.image} alt="Team Image" className="w-[100%]"/>
      <div className="flex flex-col bg-white">
        <div className="flex flex-col p-4">
          <p className="text-spickyBlue font-semibold text-[17px]">
            {props.personName}
          </p>
          <p className="text-darkGray">{props.jobPosition}</p>
        </div>

        <div className="w-full border-t border-darkGray my-2"></div>

        <Link href={props.socialMedia} className="text-spickyPink p-4">
          +Follow On Twitter
        </Link>
      </div>
    </div>
  );
};

export default OurTeam;
