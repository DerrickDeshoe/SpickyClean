import React from "react";
import LandingComponent from "../Components/LandingComponent";
import OurPriceImage from "../../public/images/PricingImage.svg";
import OurPriceImage2 from "../../public/images/pricingRecruitMobile.png";
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
          description="At Scrubs&Rugs, we provide exceptional cleaning services at affordable rates, 
          ensuring your space remains spotless and refreshed.
          Our flexible pricing options are designed to suit various needs, whether it's routine upkeep, 
          a deep one-time clean, or specialized services. Using eco-friendly products and modern techniques,
          we deliver outstanding results without compromising on quality. Explore our pricing plans 
          and experience top-tier cleanliness within your budget. "
          image={OurPriceImage}
          image2={OurPriceImage2}
          buttonText="Get Started"
        />
      </div>
      <div className=" flex flex-col space-y-[3%] lg:space-y-[1%] justify-end items-center mt-[7%] lg:mt-[3%] text-lightBlack px-[8%] ">
        <div className="relative flex space-x-5">
          <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
          <p className="relative font-semibold pt-[2px]">Pricing Table</p>
        </div>

        <h1 className="font-bold text-3xl text-center text-spickyPink">
          Pricing Plans for Every Budget
        </h1>
        <p className="text-darkGray text-[15px] lg:w-[50%] text-center">
          Our pricing is designed to give you the best cleaning services at an
          affordable rate. We offer a range of flexible packages tailored to
          your needs.
        </p>
      </div>
      <div className="flex flex-wrap lg:justify-between px-[8%] py-[7%] lg:py-[3%] space-y-[8%] lg:space-y-0">
        <Pricing
          image={Arrow1}
          cleaningCategory="Regular Domestic Cleaning"
          price="From 20.50"
          description="If you want consistent cleaning to keep your home spotless, our regular domestic cleaning service is perfect! Our cleaners visit weekly, bi-weekly, 
          or monthly to keep your space tidy, handling all the cleaning tasks you need, so you can enjoy a fresh home all the time! "
          service1="vacuuming"
          service2="polishing"
          service3="dusting"
          service4="ironing"
          backgroundColor="#000000"
          textColor="white"
          priceColor="white"
          serviceColor="white"
          serviceTextColor="white"
          textColor2="#F1598F"
          buttonColor="spickyPink"
        />
        <Pricing
          image={Arrow2}
          cleaningCategory="One Off Cleans"
          price="£30 fee + £15.50"
          description="If you don't need a regular cleaning service but still want a spotless home ,
          this is the perfect option! Our one-off cleaning service lets you book one of our local cleaners 4 2-6 hours in a single day. 
          They will handle any cleaning tasks you need, whether you're at home or out and about! "
          service1="vacuuming"
          service2="polishing"
          service3="dusting"
          service4="ironing"
          backgroundColor="#FAFAFA"
          textColor="#7F8490"
          priceColor="#F1598F"
          serviceColor="#F1598F"
          serviceTextColor="#F1598F"
          textColor2="#7F8490"
          buttonColor="spickyPink"
        />
        <Pricing
          image={Arrow1}
          cleaningCategory="Category Coming Soon"
          price="TBD"
          description="Exciting news!
          We're preparing a brand-new service to make your home even more immaculate and fresh. 
          Stay tuned for our upcoming offering, designed to provide you with an enhanced cleaning experience.
          Get ready for something special, launching soon!"
          service1="vacuuming"
          service2="polishing"
          service3="dusting"
          service4="ironing"
          backgroundColor="#000000"
          textColor2="#F1598F"
          textColor="white"
          priceColor="white"
          serviceColor="white"
          serviceTextColor="white"
          buttonColor="spickyPink"
        />
      </div>
    </div>
  );
};

export default page;
