"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { useForm } from "react-hook-form";

interface RecruitmentProps {
  cleaningType: string;
  description: string;
  image: StaticImageData;
  call: string;
  buttonName: string;
}

const Recruitment1: React.FC<RecruitmentProps> = (props) => {
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

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-wrap px-8 lg:justify-between space-y-7 lg:space-y-0 font-Urbanist">
      <div className="flex flex-col space-y-3 justify-center lg:w-2/5 text-lightBlack">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
          <p className="font-semibold">Work With Us</p>
        </div>
        <h1 className="font-bold text-3xl lg:text-4xl">{props.cleaningType}</h1>
        <p className="text-darkGray text-sm lg:text-base">{props.description}</p>
        <p className="text-spickyPink font-bold">{props.call}</p>
        <button
          className="py-2 lg:py-3 w-32 rounded-3xl px-4 lg:px-6 font-semibold text-xs lg:text-sm border bg-black hover:bg-spickyPink text-white hover:scale-105 active:scale-95"
          onClick={() => setIsModalOpen(true)}
        >
          {props.buttonName}
        </button>
      </div>
      <div className="lg:w-2/5">
        <Image src={props.image} alt="Cleaning service" className="w-full h-auto" />
      </div>

      {isSubmitted && (
        <div className="fixed bottom-5 right-5 bg-spickyPink text-white py-3 px-6 rounded-lg shadow-lg">
          Application Submitted Successfully!
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg relative">
            <button
              className="absolute top-2 right-4 text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {step === 1 && (
                <>
                  <h2 className="text-xl font-bold">Personal Information</h2>
                  <p className="text-sm">Fill out the form with your details.</p>
                  <input {...register("name")} placeholder="First Name" className="border p-2 w-full" required />
                  <input {...register("surname")} placeholder="Surname" className="border p-2 w-full" required />
                  <input {...register("email")} type="email" placeholder="Email" className="border p-2 w-full" required />
                  <textarea {...register("coverLetter")} placeholder="Cover Letter" className="border p-2 w-full" required />
                  <div className="flex justify-end">
                    <button type="button" onClick={nextStep} className="bg-black text-white px-6 py-2 rounded-3xl hover:bg-spickyPink">Next</button>
                  </div>
                </>
              )}
              {step === 2 && (
                <>
                  <h2 className="text-xl font-bold">Contact Information</h2>
                  <input {...register("phoneNumber")} placeholder="Phone Number" className="border p-2 w-full" required />
                  <input {...register("dob")} type="date" className="border p-2 w-full" required />
                  <input {...register("status")} placeholder="Marital Status" className="border p-2 w-full" required />
                  <div className="flex justify-between">
                    <button type="button" onClick={prevStep} className="text-spickyPink px-4 py-2">Previous</button>
                    <button type="button" onClick={nextStep} className="bg-black text-white px-6 py-2 rounded-3xl hover:bg-spickyPink">Next</button>
                  </div>
                </>
              )}
              {step === 3 && (
                <>
                  <h2 className="text-xl font-bold">Upload CV</h2>
                  <input {...register("cv")} type="file" className="border p-2 w-full" required />
                  <div className="flex justify-between">
                    <button type="button" onClick={prevStep} className="text-spickyPink px-4 py-2">Previous</button>
                    <button type="submit" className="bg-black text-white px-6 py-2 rounded-3xl hover:bg-spickyPink">Submit</button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recruitment1;
