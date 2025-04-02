import React from "react";
import LandingComponent from "../Components/LandingComponent";
import ServiceImage from "../../public/images/servicesHeroImage.png";
import ServiceImage2 from "../../public/images/servicesMobile.png";
import ServicesComponent1 from "../Components/ServicesComponent1";
import ServicesComponent2 from "../Components/ServiceComponent2";
import Cleaning2 from "../../public/images/ourServiceImage1.png";
import Cleaning3 from "../../public/images/ourServiceImage2.png";

const page = () => {
  return (
    <div>
      <div className="">
        <LandingComponent
          title="What we offer"
          heading="Expert Cleaning Services You Can Trust"
          description=" We are dedicated to providing top-notch cleaning services that leave 
          your home or business sparkling clean and refreshed. Our experienced team uses eco-friendly 
          products and cutting-edge techniques to ensure a deep, thorough clean every time. 
          Whether you need regular cleaning, one-time deep cleaning, or specialized services, 
          we're here to deliver results you can trust. Let us handle the cleaning so you can 
          focus on what matters most. "
          image={ServiceImage}
          image2={ServiceImage2}
        />
      </div>

      <div className="py-[5%]">
        <ServicesComponent2
          image={Cleaning2}
          cleaningType="Regular domestic cleaning"
          description="This is our regular weekly & fortnightly domestic cleaning service. It's purpose is to simply keep on top of all the general cleaning tasks around your home.
          We'll provide you with a trusted local Luton cleaner who will become familiar with the cleaning of your household, ensuring a personalised cleaning service is provided each scheduled clean.
          Call the Maid2Clean office now on 01582 226 013 to find out more about how we can help you."
          price="From 20.50 per hour"
          buttonName="Get Started"
          link="OurPrice"
        />
      </div>

      <div className="py-[5%]">
        <ServicesComponent1
          cleaningType="One off spring cleaning"
          description="Our one off house cleaning service is ideal for when you simply require a single cleaning visit to bring your home back to best standard possible in the shortest period of time.
          The clean can be booked from between 2-6 hours on a single day. Most of our clients in Luton require between 4 to 6 hours for this cleaning service.
          Should you require more hours we are able to return on another day at your earliest convenience."
          price="£25 + £16 per hour"
          link="OurPrice"
          buttonName="Get Started"
          image={Cleaning3}
        />
      </div>
    </div>
  );
};

export default page;
