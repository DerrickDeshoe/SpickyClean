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
    <div className=" bg-spickyBlue space-y-2 lg:px-[6%]">
      <div className="flex flex-wrap lg:justify-between w-[100%] space-y-5 lg:space-y-0 p-5 lg:p-10 text-white">
        <div className=" lg:w-[24%] flex flex-col space-y-5">
          {/* <Image src={Logo} alt="alt" className="w-[50%] lg:w-[60%]" /> */}
          <p className="font-bold lg:text-2xl">LOGO</p>
          <p className=" w-[80%] lg:w-[96%]">
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
        <div className=" w-[100%] lg:w-[24%] flex flex-col space-y-3">
          <h5 className="font-bold lg:text-2xl">Office opening times</h5>
          <div className="flex flex-col space-y-2">
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange "
            >
              <p>Monday-Thursday 9am - 8:30 pm</p>
            </Link>
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Friday 9am - 5:30 pm</p>
            </Link>
            <Link
              href="/OurPrice"
              className="flex space-x-2 items-center hover:text-orange"
            >
              <p>Saturday closed</p>
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
          <h5 className="font-bold lg:text-2xl">Contact Us</h5>
          <p className="w-[80%] lg:w-[100%]">
            Our Support and Sales team is available 24 /7 to answer your queries
          </p>
          <div className="flex flex-col space-y-3 w-[80%] lg:w-[100%]">
            <div className="flex space-x-2 items-center">
              <Image src={Phone} alt="image" className="w-[8%]" />
              <p>+44</p>
            </div>
            <div className="flex space-x-2 items-center">
              <Image src={Location} alt="image" className="w-[8%]" />
              <p>Head Office, 17 Lillian Street Bradford</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="border-b border-white w-[100%]"></div>
      <div className="flex flex-wrap justify-center space-y-1 lg:justify-between px-5 lg:px-10 w-[100%] text-xs lg:text-[16px]">
        <div className="flex space-x-1">
          <p className="text-white">Copyright 2024</p>
          <p className="text-white">All rights reserved</p>
        </div>
        <div className="flex space-x-1 pb-2">
          <p className="text-white">TERM OF USE | PRIVACY POLICY</p>
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
