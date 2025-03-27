"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useForm } from "react-hook-form";

interface Recruitment1 {
  cleaningType: string;
  description: string;
  image: StaticImageData;
  call: string;
  link: string;
  buttonName: string;
}

const Recruitment1 = (props: Recruitment1) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState<number>(1);
  const { register, handleSubmit, reset } = useForm();

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = (data: Record<string, any>) => {
    console.log("Form Data:", data);
    setIsSubmitted(true);
    setIsModalOpen(false);
    reset();

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000); // Hide message after 5 seconds
  };

  return (
    <div className="flex flex-wrap-reverse px-[8%] lg:justify-between gap-y-4 lg:gap-y-0 font-Urbanist">
      <div className="lg:w-[37%]">
        <Image src={props.image} alt="Image" />
      </div>
      <div className="flex flex-col space-y-[3%] justify-center lg:w-[45%] relative text-lightBlack">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
          <p className="font-semibold">Work With Us</p>
        </div>

        <h1 className="font-bold text-3xl lg:text-[43px]">
          {props.cleaningType}
        </h1>
        <p className="w-[100%] text-darkGray text-[14px] lg:text-[15px]">
          {props.description}
        </p>
        <p className="text-spickyPink font-bold">{props.call}</p>
        <button
          className="py-2 lg:py-3 lg:w-[25%] rounded-3xl px-4 lg:px-6 font-semibold text-xs lg:text-sm border bg-black hover:bg-spickyPink text-white hover:scale-105 active:scale-95"
          onClick={() => setIsModalOpen(true)}
        >
          {props.buttonName}
        </button>
      </div>

      {/* Confirmation Message */}
      {isSubmitted && (
        <div className="fixed bottom-5 right-5 bg-spickyPink text-white py-3 px-6 rounded-lg shadow-lg">
          Application Submitted Successfully!
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[90%] lg:w-[40%] relative flex">
            <button
              className="absolute top-2 right-4 text-3xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="lg:w-[90%] flex flex-col justify-between"
            >
              {/* First Step */}
              {step === 1 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Personal Information
                  </h2>
                  <p className="text-sm mb-4">
                    Please fill out this form with the required information
                  </p>

                  {/* Step Indicators */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                    <div
                      className={`w-6 h-6 flex justify-center items-center rounded-full ${
                        step === 1 ? "bg-[#F1598F]" : "bg-white"
                      } border-2 ${step !== 1 ? "border-[#F1598F]" : ""}`}
                    >
                      1
                    </div>
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                    <div
                      className={`w-6 h-6 flex justify-center items-center rounded-full ${
                        step === 2 ? "bg-[#F1598F]" : "bg-white"
                      } border-2 ${step !== 2 ? "border-[#F1598F]" : ""}`}
                    >
                      2
                    </div>
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                    <div
                      className={`w-6 h-6 flex justify-center items-center rounded-full ${
                        step === 3 ? "bg-[#F1598F]" : "bg-white"
                      } border-2 ${step !== 3 ? "border-[#F1598F]" : ""}`}
                    >
                      3
                    </div>
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                  </div>

                  <input
                    {...register("name")}
                    placeholder="First Name"
                    className="border p-2 w-full mb-2"
                    required
                  />
                  <input
                    {...register("surname")}
                    placeholder="Surname"
                    className="border p-2 w-full mb-2"
                    required
                  />
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Email"
                    className="border p-2 w-full mb-2"
                    required
                  />
                  <textarea
                    {...register("coverLetter")}
                    placeholder="Cover Letter"
                    className="border p-2 w-full mb-2"
                    required
                  />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-black text-white px-6 py-2 rounded-3xl mt-2 hover:bg-spickyPink"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Second Step */}
              {step === 2 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">
                    Contact Information
                  </h2>
                  <p className="text-sm mb-4">
                    Please provide your contact details
                  </p>

                  {/* Step Indicators */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                    <div
                      className={`w-6 h-6 flex justify-center items-center rounded-full ${
                        step === 1 ? "bg-[#F1598F]" : "bg-white"
                      } border-2 ${step !== 1 ? "border-[#F1598F]" : ""}`}
                    >
                      1
                    </div>
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                    <div
                      className={`w-6 h-6 flex justify-center items-center rounded-full ${
                        step === 2 ? "bg-[#F1598F]" : "bg-white"
                      } border-2 ${step !== 2 ? "border-[#F1598F]" : ""}`}
                    >
                      2
                    </div>
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                    <div
                      className={`w-6 h-6 flex justify-center items-center rounded-full ${
                        step === 3 ? "bg-[#F1598F]" : "bg-white"
                      } border-2 ${step !== 3 ? "border-[#F1598F]" : ""}`}
                    >
                      3
                    </div>
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                  </div>

                  <input
                    {...register("phoneNumber")}
                    placeholder="Phone Number"
                    className="border p-2 w-full mb-2"
                    required
                  />
                  <input
                    {...register("dob")}
                    type="date"
                    className="border p-2 w-full mb-2"
                    required
                  />
                  <input
                    {...register("status")}
                    placeholder="Marital Status"
                    className="border p-2 w-full mb-2"
                    required
                  />
                  <input
                    {...register("address")}
                    placeholder="Home Address"
                    className="border p-2 w-full mb-2"
                    required
                  />
                  <input
                    {...register("gender")}
                    placeholder="Gender"
                    className="border p-2 w-full mb-2"
                    required
                  />
                  <div className="flex justify-end items-center">
                    <button
                      type="button"
                      onClick={prevStep}
                      className=" text-spickyPink px-4 py-2 rounded mt-2"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-black text-white px-6 py-2 rounded-3xl mt-2 hover:bg-spickyPink"
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}

              {/* Third Step */}
              {step === 3 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Upload CV</h2>
                  <p className="text-sm mb-4">Please upload your CV</p>

                  {/* Step Indicators */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                    <div
                      className={`w-6 h-6 flex justify-center items-center rounded-full ${
                        step === 1 ? "bg-[#F1598F]" : "bg-white"
                      } border-2 ${step !== 1 ? "border-[#F1598F]" : ""}`}
                    >
                      1
                    </div>
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                    <div
                      className={`w-6 h-6 flex justify-center items-center rounded-full ${
                        step === 2 ? "bg-[#F1598F]" : "bg-white"
                      } border-2 ${step !== 2 ? "border-[#F1598F]" : ""}`}
                    >
                      2
                    </div>
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                    <div
                      className={`w-6 h-6 flex justify-center items-center rounded-full ${
                        step === 3 ? "bg-[#F1598F]" : "bg-white"
                      } border-2 ${step !== 3 ? "border-[#F1598F]" : ""}`}
                    >
                      3
                    </div>
                    <div className="flex-1 h-[2px] bg-[#D4D4D8]"></div>
                  </div>

                  <input
                    {...register("cv")}
                    type="file"
                    className="border p-[25%] w-full mb-2"
                    required
                  />
                  <div className="flex justify-end items-center">
                    <button
                      type="button"
                      onClick={prevStep}
                      className=" text-spickyPink px-4 py-2 rounded mt-2"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-black text-white px-6 py-2 rounded-3xl mt-2 hover:bg-spickyPink"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recruitment1;
