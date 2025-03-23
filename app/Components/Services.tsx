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
    <div className="flex flex-col items-center gap-y-4 lg:w-[16%] ">
      <Image src={image} alt="ServiceIcon" className="w-[16%] lg:w-[20%]" />
      <p className="font-bold text-2xl lg:text-[17px] text-spickyBlue">{service}</p>
      
      <button
        className="text-spickyPink lg:w-[70%] transition-all duration-300 hover:underline"
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
              <h2 className="text-xl font-bold text-spickyBlue">{service}</h2>
              <p className="text-darkGray mt-4">{description}</p>
              <button
                className="mt-4 px-4 py-2 bg-spickyPink text-white rounded-md hover:bg-opacity-80"
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