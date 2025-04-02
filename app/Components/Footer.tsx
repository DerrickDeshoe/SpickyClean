"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Location from "../../public/images/Location.svg";
import Phone from "../../public/images/Phone.svg";
import Instagram from "../../public/images/Instagram.svg";
import LinkedIn from "../../public/images/LinkedIn.svg";
import Facebook from "../../public/images/Facebook.svg";
import Logo from '../../public/images/logo2.png'

const Footer = () => {
  return (
    <div className=" bg-spickyPink space-y-2 lg:px-[3%]">
      <div className="flex flex-wrap lg:justify-between w-[100%] space-y-5 lg:space-y-0 p-5 lg:p-10 text-white">
        <div className=" lg:w-[24%] flex flex-col space-y-5">
          <Image src={Logo} alt="alt" className="w-[20%] lg:w-[30%]" />
          <p className=" w-[90%] lg:w-[96%] font-DMSans">
            Follow us for the latest cleaning tips, special offers and sparkling
            transformations!
          </p>
          <div className="flex space-x-1">
            <Link href="#" className="w-[7%] lg:w-[8%]">
              <Image src={Instagram} alt="image" />
            </Link>
            <Link href="#" className="w-[7%] lg:w-[8%]">
              <Image src={LinkedIn} alt="image" />
            </Link>
            <Link href="#" className="w-[7%] lg:w-[8%]">
              <Image src={Facebook} alt="image" />
            </Link>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[24%] flex flex-col space-y-3">
          <h5 className="font-bold text-[19px]  lg:text-2xl  font-Urbanist">Office opening times</h5>
          <div className="flex flex-col space-y-2">
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange "
            >
              <p className="font-DMSans">Monday-Thursday 9am - 8:30 pm</p>
            </Link>
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p className="font-DMSans">Friday 9am - 5:30 pm</p>
            </Link>
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p className="font-DMSans">Saturday closed</p>
            </Link>
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Sunday 9am-3pm</p>
            </Link>
          </div>
        </div>
        <div className=" lg:w-[25%] flex flex-col space-y-4">
          <h5 className="font-bold  text-[19px] lg:text-2xl  font-Urbanist">Contact Us</h5>
          <p className="w-[90%] lg:w-[100%] font-DMSans">
            Our Support and Sales team is available 24/7 to answer your queries
          </p>
          <div className="flex flex-col space-y-3 w-[80%] lg:w-[100%]">
            <div className="flex space-x-2 items-center">
              <Image src={Phone} alt="image" className="w-[8%]" />
              <p className="font-DMSans">01525591040</p>
            </div>
            <div className="flex space-x-2 items-center lg:w-[100%]">
              <Image src={Location} alt="image" className="w-[8%]" />
              <p className="font-DMSans">Head Office, 17 Lillian Street Bradford</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
