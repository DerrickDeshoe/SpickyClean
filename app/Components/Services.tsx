"use client";

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion for smooth transitions

interface ServicesProps {
  image: StaticImageData;
  service: string;
  description: string;
}

const Services = ({ image, service, description }: ServicesProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center gap-y-4 lg:w-[25%]">
      <Image src={image} alt="ServiceIcon" className=" w-[16%] lg:w-[20%]" />
      <p className="font-bold text-2xl lg:text-[17px] text-spickyBlue">{service}</p>

      <AnimatePresence>
        {showMore ? (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 500 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="w-[90%]"
          >
            <p className="text-spickyBlue">{description}</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-[90%]"
          >
            <p className="text-darkGray text-center ">{description.slice(0, 100)} {description.length > 100 && "..."}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {description.length > 100 && (
        <button
          className="text-spickyPink lg:w-[40%] transition-all duration-300 hover:underline"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>
      )}
    </div>
  );
};

export default Services;
