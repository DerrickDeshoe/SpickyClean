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
          products and cutting-edge techniques to ensure a deep, thorough clean every time. Whether 
          you need regular cleaning, one-time deep cleaning, or specialized services,
           we're here to deliver results you can trust. "
          image={ServiceImage}
        />
      </div>
      <div className="py-[5%]">
        <ServicesComponent1
          cleaningType="Office Cleaning"
          description="We ensure your office remains spotless, organized, and welcoming. 
          A clean workspace boosts productivity, enhances employee well-being, 
          and leaves a great impression on clients."

          surfaceTitle="Office Bathrooms"
          surfaceDescription="Hygiene is essential,
           and our bathroom cleaning service guarantees a fresh, germ-free environment. 
           We thoroughly clean and disinfect all areas, including"
          surfaceTitle2="Offices"
          surfaceDescription2="We use eco-friendly products and flexible scheduling to keep your office looking its best!
          A clean workspace enhances efficiency, boosts morale, and impresses clients."
          surfaceTitle3="Office Windows"
          surfaceDescription3="Our professional window cleaning enhances natural light, 
          improves your view, and boosts your property's appearance.
          We guarantee a brighter and cleaner space with our expert window cleaning"
          image={Cleaning1}
        />
      </div>
      <div className="py-[5%]">
        <ServicesComponent2
          image={Cleaning2}
          cleaningType="House Cleaning"
          description="Your home deserves to be a sanctuary, and we make sure it stays clean, organized, and inviting. 
          A clutter-free space promotes peace, reduces stress, and creates a cozy atmosphere."


          surfaceTitle="Kitchen"
          surfaceDescription="Our SpicklyClean kitchen cleaning service guarantees a spotless, hygienic cooking space.
          We ensure your kitchen is sparkling clean, organized, and ready to use!"
          surfaceTitle2="Bathrooms"
          surfaceDescription2="SpicklyClean guarantees your bathroom is pristine, sanitized, and revitalizing.
          Making sure your bathroom is flawless, fresh and sanitary after each clean!"
          surfaceTitle3="Bedrooms"
          surfaceDescription3=" We offer meticulous bedroom cleaning to create a peaceful, tidy retreat. Our services include
          We transform your bedroom into a clean, serene, and restful haven!"
        />
      </div>

      <div className="py-[5%]">
        <ServicesComponent1
          cleaningType="Carpet Cleaning"
          description="When it comes to your carpets, we go the extra mile to ensure they are deep cleaned and refreshed. 
          Clean carpets enhance your home's look, improve air quality, and maintain a healthier living environment."

          surfaceTitle="Vacuuming"
          surfaceDescription="At SpicklyClean, we provide thorough vacuuming services to keep your floors clean and dust-free.
          We leave your space looking fresh and tidy, with clean floors all around!"
          surfaceTitle2="Soap Soaking"
          surfaceDescription2="We leave your surfaces deeply cleaned and refreshed, with long-lasting results!
          Our soap soaking service ensures tough stains and grime are easily lifted, providing deep cleaning for various surfaces."
          surfaceTitle3="Dry Washing "
          surfaceDescription3="Dry washing is perfect for delicate fabrics and surfaces that require gentle care.
          With SpicklyClean dry washing, your fabrics are treated with care, restored to their original state, and smelling fresh!"
          image={Cleaning3}
        />
      </div>

      <div className="py-[5%]">
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
      </div>
    </div>
  );
};

export default page;
