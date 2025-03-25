"use client";

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ServicesProps {
  image: StaticImageData;
  service: string;
  description: string;
}

const Services = ({ image, service, description }: ServicesProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col items-center gap-y-4 w-[100%] lg:w-[16%] font-Urbanist">
      <Image src={image} alt="ServiceIcon" className="w-[16%] lg:w-[20%]" />
      <p className="font-bold text-2xl lg:text-[18px] text-black font-Urbanist">{service}</p>
      
      <button
        className="text-spickyPink lg:w-[70%] transition-all duration-300 hover:underline font-Urbanist"
        onClick={() => setShowModal(true)}
      >
        Learn More
      </button>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full text-center -z-11">
              <h2 className="text-[17px] lg:text-xl font-bold text-black">{service}</h2>
              <p className="text-lightBlack mt-4">{description}</p>
              <button
                className="mt-4 px-4 py-2 bg-spickyPink text-white rounded-md hover:bg-black font-Urbanist"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;