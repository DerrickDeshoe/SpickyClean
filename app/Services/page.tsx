import React from "react";
import LandingComponent from "../Components/LandingComponent";
import ServiceImage from "../../public/images/ServicesImage.png";
import ServicesComponent1 from "../Components/ServicesComponent1";
import ServicesComponent2 from "../Components/ServiceComponent2";
import Cleaning1 from "../../public/images/Cleaning1.png";
import Cleaning2 from "../../public/images/Cleaning2.png";
import Cleaning3 from "../../public/images/Cleaning3.png";
import Cleaning4 from "../../public/images/Cleaning4.png";

const page = () => {
  return (
    <div>
      <div>
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
          buttonText="Get Started"
        />
      </div>
      <div className="py-[5%]">
        <ServicesComponent1
          cleaningType="Standard Cleaning"
          description="Maintain a comfortable and organized home with regular dusting, 
          vacuuming, mopping, and sanitization, keeping your space fresh and welcoming every day."

          surfaceTitle="Kitchens"
          surfaceDescription="Surfaces are wiped down, appliances cleaned, countertops sanitized, 
          and trash removed, ensuring your kitchen remains tidy, functional, and inviting."
          surfaceTitle2="Bathrooms"
          surfaceDescription2="  Regular disinfection of sinks, toilets, mirrors, 
          and counters keeps your bathroom clean, hygienic, and ready for everyday use."
          surfaceTitle3="Living Spaces & Bedrooms"
          surfaceDescription3=" Dusting and vacuuming are performed to maintain a neat, organized atmosphere, 
          promoting a comfortable and relaxing environment throughout your home."
          image={Cleaning1}
        />
      </div>
      <div className="py-[5%]">
        <ServicesComponent2
          image={Cleaning2}
          cleaningType="Deep House Cleaning"
          description="Your home deserves to be a sanctuary, and we make sure it stays clean, organized, and inviting. 
          A clutter-free space promotes peace, reduces stress, and creates a cozy atmosphere."


          surfaceTitle="Kitchens"
          surfaceDescription="Stovetops, ovens, and cabinets are thoroughly cleaned,
           grease removed, and surfaces sanitized to create a spotless and food-safe cooking space."
          surfaceTitle2="Bathrooms"
          surfaceDescription2="Tiles are scrubbed, grout cleaned, and all surfaces disinfected, 
          leaving your bathroom fresh, hygienic, and free from bacteria."
          surfaceTitle3="Living Spacs & Bedrooms"
          surfaceDescription3="  Carpets, upholstery, and furniture are deeply cleaned, dust is removed from vents,
           and high-touch areas are sanitized to ensure an allergen-free, cozy environment."
        />
      </div>

      <div className="py-[5%]">
        <ServicesComponent1
          cleaningType="Specialized Home Cleaning"
          description="This customized service combines both Standard and Deep Cleaning, adding extra touches like stain removal,
           allergen reduction, and post-renovation cleanup to meet your specific needs."

          surfaceTitle="Kitchens"
          surfaceDescription="We target grease buildup and stains with specialized treatments, 
          applying additional sanitization for a pristine, food-safe kitchen space."
          surfaceTitle2="Bathrooms"
          surfaceDescription2=" Advanced disinfection, odor control, and mold prevention 
          treatments ensure your bathroom is hygienic, fresh, and free from lingering germs."
          surfaceTitle3="Living Spaces & Bedrooms"
          surfaceDescription3="Specialized cleaning for delicate fabrics, plus air purification and deep dust extraction, 
          to ensure a healthier, more comfortable home."
          image={Cleaning3}
        />
      </div>

      {/* <div className="py-[5%]">
        <ServicesComponent2
          image={Cleaning4}
          cleaningType="Kitchen Cleaning"
          description="A clean kitchen makes all the difference, and we're here to keep it spotless and ready for action.
           A well-maintained kitchen helps you stay organized, cook efficiently, and keep a healthy space for you and your family."

          surfaceTitle="Automated Cleaning"
          surfaceDescription="SpicklyClean uses high-tech systems to wipe down counters and appliances.
          We provide a seamless, tech-driven clean for your kitchen, leaving it fresh and tidy"
          surfaceTitle2="Tiles"
          surfaceDescription2="Safe, non-toxic cleaning solutions for your tiles. We
          restore grout to its original color and shine, giving your tiles a long-lasting gleam."
          surfaceTitle3="Dishes"
          surfaceDescription3=" We ensure delicate dishware remains intact and clean, using powerful 
          dishwashers to kill bacteria and germs. Guaranting spotless dishes ready for use in no time!"
        />
      </div> */}
    </div>
  );
};

export default page;
