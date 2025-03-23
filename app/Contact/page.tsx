import React from "react";
import LandingComponent from "../Components/LandingComponent";
import ContactImage from "../../public/images/ContactImage.png";
import SanitizerImage from "../../public/images/sanitizerImage.png";
import Image from "next/image";
import Contact1 from "../../public/images/Phone.png";
import Contact2 from "../../public/images/Email.png";
import Contact3 from "../../public/images/Location.png";
import Contact4 from "../../public/images/Facebook.png";
import Contact5 from "../../public/images/Instagram.png";
import Contact6 from "../../public/images/LinkedIn.png";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div>
        <LandingComponent
          title="Get In Touch"
          heading="Clean Spaces, Fair Prices"
          description="Get in touch with Scrubs&Rugs for top-notch cleaning services tailored to your needs.
           Whether you have questions, need a quote, or want to schedule a service, we're here to help. 
           Reach us via email or phone for a quick response. 
           Our team is available to assist you with flexible scheduling and personalized solutions."
          image={ContactImage}
          buttonText="Get Started"
        />
      </div>

      <div className="bg-light px-[8%] flex flex-wrap-reverse py-[5%]">
        <div className="py-[5%] lg:w-[50%]">
          <div className=" flex flex-col space-y-5 bg-white p-5 rounded-lg">
            <div className="relative flex space-x-5">
              <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full z-10"></span>
              <p className="relative font-semibold pt-[2px] text-spickyBlue">
                Contact
              </p>
            </div>
            <h2 className="text-spickyBlue font-bold tracking-wider lg:text-3xl">
              Get In Touch
            </h2>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="first name"
                className="border border-spickyBlue rounded-lg p-2 text-xs lg:text-sm text-black outline-none w-[50%]"
              />
              <input
                type="text"
                placeholder="last name"
                className="border border-spickyBlue rounded-lg p-2 text-xs lg:text-sm  text-black outline-none w-[50%]"
              />
            </div>
            <input
              type="text"
              placeholder="email address"
              className="border border-spickyBlue rounded-lg p-2 pr-[113px] text-xs lg:text-sm text-black outline-none"
            />

            <input
              type="text"
              placeholder="subject line"
              className="border border-spickyBlue rounded-lg p-2 pr-[113px] text-xs lg:text-sm text-black outline-none"
            />
            <input
              type="text"
              placeholder="enter message"
              className="border border-spickyBlue rounded-lg p-2 pb-[100px] pr-[113px] md:pb-[150px] text-xs lg:text-sm text-black outline-none"
            />
            <div className="lg:pt-3">
              <button className="py-2 lg:py-3 rounded-3xl px-4 lg:px-6 font-semibold text-xs lg:text-sm border bg-spickyBlue text-white transition-all duration-1550 transform hover:bg-[#F1598F] hover:scale-105 active:bg-[#F1598F] active:scale-95 ">
                Send Message
              </button>
            </div>
          </div>
        </div>

        <div className="bg-spickyBlue p-3 flex flex-col lg:w-[50%] text-white rounded-lg">
          <Image src={SanitizerImage} alt="image" />
          <div className="flex flex-col space-y-[5%]">
            <div className="flex flex-col lg:px-[11%] space-y-[2%]">
              <div className="flex space-x-3">
                <Image
                  src={Contact1}
                  alt="image"
                  className="w-[5%] lg:w-[5%]"
                />
                <p className="text-sm lg:text-lg">+44</p>
              </div>
              <div className="flex space-x-3">
                <Image
                  src={Contact2}
                  alt="image"
                  className="w-[5%] lg:w-[5%]"
                />
                <p className="text-sm lg:text-lg">+44</p>
              </div>
              <div className="flex space-x-3">
                <Image
                  src={Contact3}
                  alt="image"
                  className="w-[5%] lg:w-[5%]"
                />
                <p className="text-sm lg:text-lg">
                  Head Office, 17 Lillian Street Bradford
                </p>
              </div>
            </div>
            <div className="lg:px-[11%] flex flex-col space-y-[2%]">
              <h4 className="lg:text-[17px] text-darkGray">Connect With Us</h4>
              <div className="flex space-x-2">
                <Link href="#" className="w-[6%]">
                  <Image src={Contact4} alt="image" />
                </Link>
                <Link href="#" className="w-[6%]">
                  <Image src={Contact5} alt="image" />
                </Link>
                <Link href="#" className="w-[6%]">
                  <Image src={Contact6} alt="image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
