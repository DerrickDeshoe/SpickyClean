"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Location from "../../public/images/Location.png";
import Phone from "../../public/images/Phone.png";
import Instagram from "../../public/images/Instagram.png";
import LinkedIn from "../../public/images/LinkedIn.png";
import Facebook from "../../public/images/Facebook.png";

const Footer = () => {
  return (
    <div className=" bg-spickyBlue space-y-2">
      <div className="flex flex-wrap w-[100%] space-y-5 lg:space-y-0 p-5 lg:p-10 text-white">
        <div className=" lg:w-[24%] flex flex-col space-y-5">
          {/* <Image src={Logo} alt="alt" className="w-[50%] lg:w-[60%]" /> */}
          <p className="font-bold">LOGO</p>
          <p className=" w-[80%]">
            Follow us for the latest cleaning tips, special offers and sparkling
            transformations!
          </p>
          <div className="flex space-x-1">
            <Link href="#" className="w-[8%]">
              <Image src={Instagram} alt="image" />
            </Link>
            <Link href="#" className="w-[8%]">
              <Image src={LinkedIn} alt="image" />
            </Link>
            <Link href="#" className="w-[8%]">
              <Image src={Facebook} alt="image" />
            </Link>
          </div>
        </div>
        <div className=" lg:w-[24%] flex flex-col space-y-3 lg:pl-[5%]">
          <h5 className="font-bold">Navigation</h5>
          <div className="flex flex-col space-y-2">
            <Link
              href="/Services"
              className="flex space-x-2 items-center hover:text-orange "
            >
              <p>Services</p>
            </Link>
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Pricing</p>
            </Link>
            <Link
              href="/Contact"
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Contact Us</p>
            </Link>
          </div>
        </div>
        <div className=" w-[100%] lg:w-[24%] flex flex-col space-y-3 lg:pl-[1%]">
          <h5 className="font-bold">Services</h5>
          <div className="flex flex-col space-y-2">
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange "
            >
              <p>House Cleaning</p>
            </Link>
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Kitchen Cleaning</p>
            </Link>
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Carpet Cleaning</p>
            </Link>
          </div>
        </div>
        <div className=" lg:w-[24%] flex flex-col space-y-4">
          <h5 className="font-bold">Contact Us</h5>
          <p className="w-[80%] lg:w-[90%]">
            Our Support and Sales team is available 24 /7 to answer your queries
          </p>
          <div className="flex flex-col space-y-3 w-[80%] lg:w-[100%]">
            <div className="flex space-x-2 items-center">
              <Image src={Phone} alt="image" className="w-[8%]" />
              <p>+44</p>
            </div>
            <div className="flex space-x-2 items-center">
              <Image src={Location} alt="image" className="w-[8%]" />
              <p>Leighton Buzzard</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-white w-[100%]"></div>
      <div className="flex flex-wrap justify-center space-y-1 lg:justify-between px-5 lg:px-10 w-[100%] text-xs lg:text-[16px]">
        <div className="flex space-x-1">
          <p className="text-white">Copyright 2024</p>
          <p className="text-white">All rights reserved</p>
        </div>
        <div className="flex space-x-1 pb-2">
          <p className="text-white">TERM OF USE | PRIVACY POLICY</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
