"use client";

import React, { useState } from "react";
import LandingComponent from "../Components/LandingComponent";
import ContactImage from "../../public/images/ContactImage.png";
import ContactImage2 from "../../public/images/contactMobile.png";
import SanitizerImage from "../../public/images/contactImage.svg";
import Image from "next/image";
import Contact1 from "../../public/images/Phone.svg";
import Contact2 from "../../public/images/Email.svg";
import Contact3 from "../../public/images/Location.svg";
import Contact4 from "../../public/images/Facebook.svg";
import Contact5 from "../../public/images/Instagram.svg";
import Contact6 from "../../public/images/LinkedIn.svg";
import Link from "next/link";
import emailjs from "emailjs-com";

const Page = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatusMessage("Please fill in all fields.");
      setStatusType("error");
      return;
    }

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(
      "service_7sf28cy",
      "template_6dzjvhl",
      templateParams,
      "4b7_cqTfdIwsXpaXR"
    );
  };

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
          image2={ContactImage2}
        />
      </div>

      <div className="bg-light px-[8%] flex flex-wrap-reverse py-[5%] font-Urbanist">
        <div className="py-[5%] lg:w-[50%]">
          <div className="flex flex-col space-y-5 bg-white p-5 rounded-lg">
            <div className="relative flex space-x-5">
              <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full z-10"></span>
              <p className="relative font-semibold pt-[2px] text-spickyBlue">
                Contact
              </p>
            </div>
            <h2 className="text-black font-bold tracking-wider lg:text-3xl">
              Enquire about our services
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-[5%]"
            >
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="first name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border border-black rounded-md p-2 text-xs lg:text-sm text-black outline-none w-[50%]"
                />
                <input
                  type="text"
                  placeholder="last name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border border-black rounded-md p-2 text-xs lg:text-sm text-black outline-none w-[50%]"
                />
              </div>
              <input
                type="email"
                placeholder="email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border border-black rounded-md p-2 pr-[113px] text-xs lg:text-sm text-black outline-none"
              />
              <input
                type="text"
                placeholder="subject line"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="border border-black rounded-md p-2 pr-[113px] text-xs lg:text-sm text-black outline-none"
              />
              <textarea
                placeholder="enter message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="border border-black rounded-md p-2 pb-[100px] pr-[113px] md:pb-[150px] text-xs lg:text-sm text-black outline-none"
              ></textarea>
              <div className="lg:pt-3">
                <button
                  type="submit"
                  className="py-2 lg:py-3 rounded-3xl px-4 lg:px-6  text-xs lg:text-sm bg-spickyPink text-white transition-all duration-1550 transform hover:bg-[#000000] hover:scale-105 active:bg-[#000000] active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>

            {/* Display status message */}
            {statusMessage && (
              <div
                className={`mt-4 p-3 rounded-md ${
                  statusType === "success"
                    ? "bg-spickyPink text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {statusMessage}
              </div>
            )}
          </div>
        </div>

        <div className="bg-spickyPink p-3 flex flex-col lg:w-[50%] text-white rounded-lg">
          <div className="w-[100%]">
            <Image src={SanitizerImage} alt="image" />
          </div>

          <div className="flex flex-col space-y-[5%] px-[8%] lg:px-0">
            <div className="flex flex-col lg:px-[11%] space-y-[2%]">
              <div className="flex space-x-3">
                <Image
                  src={Contact1}
                  alt="image"
                  className="w-[5%] lg:w-[5%]"
                />
                <p className="text-sm lg:text-lg">01525591040</p>
              </div>
              <div className="flex space-x-3">
                <Image
                  src={Contact2}
                  alt="image"
                  className="w-[5%] lg:w-[5%]"
                />
                <a href="mailto:scrubrugs@scrubsrugs.co.uk">
                  <p className="text-sm lg:text-lg">
                    scrubrugs@scrubsrugs.co.uk
                  </p>
                </a>
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
              <h4 className="lg:text-[17px]">Connect With Us</h4>
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

export default Page;
