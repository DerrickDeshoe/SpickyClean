import React from "react";
import LandingComponent from "../Components/LandingComponent";
import OurPriceImage from "../../public/images/OurPriceImage.png";
import Pricing from "../Components/Pricing";
import Arrow1 from "../../public/images/arrowWhite.png";
import Arrow2 from "../../public/images/arrow.png";

const page = () => {
  return (
    <div>
      <div>
        <LandingComponent
          title="Budget-Friendly Cleaning"
          heading="Clean Spaces, Fair Prices"
          description="At SpicklyClean, we provide exceptional cleaning services at affordable rates, 
          ensuring your space remains spotless and refreshed.
          Our flexible pricing options are designed to suit various needs, whether it's routine upkeep, 
          a deep one-time clean, or specialized services. Using eco-friendly products and modern techniques,
          we deliver outstanding results without compromising on quality. Explore our pricing plans 
          and experience top-tier cleanliness within your budget. "
          image={OurPriceImage}
        />
      </div>
      <div className=" flex flex-col space-y-[3%] lg:space-y-[1%] justify-end items-center mt-[7%] lg:mt-[3%] text-spickyBlue px-[8%] ">
        <div className="relative flex space-x-5">
          <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
          <p className="relative font-semibold pt-[2px]">Pricing Table</p>
        </div>

        <h1 className="font-bold text-3xl text-center">Pricing Plans for Every Budget</h1>
        <p className="text-darkGray text-[15px] lg:w-[50%] text-center">
          Our pricing is designed to give you the best cleaning services at an
          affordable rate. We offer a range of flexible packages tailored to
          your needs.
        </p>
      </div>
      <div className="flex flex-wrap lg:justify-between px-[8%] py-[7%] lg:py-[3%] space-y-[8%] lg:space-y-0">
        <Pricing
          image={Arrow1}
          cleaningCategory="Basic Cleaning"
          price="$350"
          description="Perfect for routine upkeep, our Basic Cleaning package keeps your space fresh.
           We handle dusting, vacuuming, and surface wiping, ensuring a
            tidy and comfortable environment for everyday living. "
          service1="02 Bedroom cleaning"
          service2="01 Living room cleaning"
          service3="02 Bathroom cleaning"
          service4="window cleaning"
          backgroundColor="#50647F"
          textColor="white"
          priceColor="white"
          serviceColor="white"
          serviceTextColor="white"
          textColor2="#052148"
        />
        <Pricing
          image={Arrow2}
          cleaningCategory="Pro Cleaning"
          price="$650"
          description="When your space needs a more thorough touch, 
          our Pro Cleaning package delivers a deeper clean. 
          We focus on high-traffic areas, disinfect key surfaces, 
          and remove built-up dirt to create a healthier environment. "
          service1="02 Bedroom cleaning"
          service2="01 Living room cleaning"
          service3="02 Bathroom cleaning"
          service4="window cleaning"
          backgroundColor="#D0D8E4"
          textColor="#052148"
          priceColor="#052148"
          serviceColor="#052148"
          serviceTextColor="#052148"
          textColor2="#052148"
        />
        <Pricing
          image={Arrow1}
          cleaningCategory="Deluxe Cleaning"
          price="$950"
          description="For the ultimate cleaning experience, our Deluxe Cleaning 
          package offers a top-to-bottom deep clean. 
          We leave no corner untouched, tackling grime, stains,
           and hard-to-reach spots with expert precision."
          service1="02 Bedroom cleaning"
          service2="01 Living room cleaning"
          service3="02 Bathroom cleaning"
          service4="window cleaning"
          backgroundColor="#50647F"
          textColor2="#052148"
          textColor="white"
          priceColor="white"
          serviceColor="white"
          serviceTextColor="white"
        />
      </div>
    </div>
  );
};

export default page;
