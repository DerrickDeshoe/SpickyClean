import React from "react";
import LandingComponent from "../Components/LandingComponent";
import ContactImage from '../../public/images/ContactImage.png';

const page = () => {
  return (
    <div>
      <div>
        <LandingComponent
          title="Get In Touch"
          heading="Clean Spaces, Fair Prices"
          description="Get in touch with SpickyClean for top-notch cleaning services tailored to your needs.
           Whether you have questions, need a quote, or want to schedule a service, we're here to help. 
           Reach us via email or phone for a quick response. 
           Our team is available to assist you with flexible scheduling and personalized solutions.
            Contact us today and let SpickyClean bring freshness and sparkle to your space! "
          image={ContactImage}
        />
      </div>
    </div>
  );
};

export default page;
