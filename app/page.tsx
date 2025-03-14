"use client";
import Image from "next/image";
import Link from "next/link";
import HomeImage from "../public/images/HeroImage.png";
import Stats from "./Components/Stats";
import Ideal from "../app/Components/Ideal";
import Card1 from "../public/images/icon1.png";
import Card2 from "../public/images/icon2.png";
import Card3 from "../public/images/icon3.png";
import AboutUsImage from "../public/images/AboutImage.png";
import Services from "./Components/Services";
import Service1 from "../public/images/service1.png";
import Service2 from "../public/images/service2.png";
import Service3 from "../public/images/service3.png";
import Service4 from "../public/images/service4.png";
import WhyUs from "../public/images/whyUsImage.png";
import ArrowPoints from "./Components/ArrowPoints";
import OurTeam from "./Components/OurTeam";
import Team1 from "../public/images/Team2.png";
import Testimonials from "./Components/Testimonials";
import Testimonial1 from "../public/images/testimonial1.png";

export default function Home() {
  return (
    <div className="w-[100%] pb-[3%]">
      {/* Mobile Landing Page */}

      <div className=" flex flex-col w-[100%] lg:hidden justify-between pt-[1%] mb-[6%]">
        <div className="w-[100%] flex flex-wrap lg:justify-between px-[8%] pt-[5%] lg:pt-[1%] mb-[2%]">
          <div className="flex flex-col space-y-[3%] justify-center lg:w-[45%] relative text-spickyBlue transition-colors duration-150 hover:text-[#7F8490] active:text-[#7F8490]">
            <div className="flex items-center space-x-2 transition-colors duration-300 hover:text-[#7F8490] active:text-[#7F8490]">
              <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
              <p className="font-semibold">
                SpicklyClean
              </p>
            </div>

            <h1 className="font-bold text-[27px] lg:text-[43px] lg:leading-tight lg:tracking-wide transition-colors duration-150 hover:text-[#7F8490] active:text-[#7F8490] w-[90%] lg:w-[100%]">
              Cleaning Services For All Your Needs
            </h1>
            <p className="w-[100%] text-darkGray text-[15px] transition-colors duration-150 hover:text-[#052148] active:text-[#7F8490]">
              A clean space is a fresh start! Breathe easier, live healthier,
              and shine brighter in a spotless environment where comfort,
              productivity and happiness thrive.
            </p>
            <div>
              <Stats />
            </div>
          </div>

          <div className="lg:w-[55%] lg:mt-[2%] flex justify-center">
            <Image src={HomeImage} alt="Hero Image" className="" />
          </div>
        </div>
        <Link href="#" className="pt-3 px-[8%] w-[100%]">
          <button className="py-2 lg:py-3 rounded-3xl px-4 lg:px-6 font-semibold text-xs lg:text-sm border bg-spickyBlue text-white transition-all duration-1550 transform hover:bg-[#F1598F] hover:scale-105 active:bg-[#F1598F] active:scale-95 w-[100%]">
            Get Started
          </button>
        </Link>
      </div>

      {/* Laptop Landing Page */}
      <div className=" hidden w-[100%] lg:flex justify-between lg:px-[8%] pt-[1%] mb-[13%]">
        <div className=" flex flex-col space-y-[3%] justify-center w-[40%] relative lg:mt-[9%] text-spicklyBlue">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-semibold pt-[2px] text-spickyBlue">
              SpicklyClean: Spotless and Pristine Homes, Always!
            </p>
          </div>

          <h1 className="font-bold text-[48px] text-spickyBlue">
            Cleaning Services For All Your Needs
          </h1>
          <p className="w-[97%] text-darkGray text-[17px]">
            A clean space is a fresh start! Breathe easier, live healthier, and
            shine brighter in a spotless environment where comfort, productivity
            and happiness thrive.
          </p>
          <Link href="#" className="pt-3">
            <button className="py-2 lg:py-3 rounded-3xl px-4 lg:px-6 font-semibold text-xs lg:text-sm border bg-spickyBlue text-white transition-all duration-1550 transform hover:bg-[#F1598F] hover:scale-105 active:bg-[#F1598F] active:scale-95">
              Get Started
            </button>
          </Link>
        </div>
        <div className="absolute lg:left-[24%] lg:top-[14%]">
          <Image src={HomeImage} alt="Hero Image" className="" />
        </div>

        <div className=" flex flex-col w-[45%] items-end lg:mt-[9%] space-y-3">
          <Stats />
        </div>
      </div>

      <div className="bg-light py-[5%] px-[8%] flex flex-wrap space-y-[7%] lg:space-y-0 lg:justify-between">
        <Ideal
          image={Card1}
          idealItem="Flexible Scheduling"
          reason="We work around your schedule, not the other way around! Whether it's early mornings, late evenings, or weekends, SpicklyClean ensures your space stays spotless at a time that suits you best."
        />
        <Ideal
          image={Card2}
          idealItem="Professional Staff"
          reason="Our highly trained and experienced cleaning professionals are dedicated to providing top-quality service with attention to detail. We take pride in delivering thorough and reliable cleaning every time."
        />
        <Ideal
          image={Card3}
          idealItem="Competitive Pricing"
          reason="Enjoy a sparkling clean space without breaking the bank! At SpicklyClean, we offer premium cleaning services at competitive rates, ensuring you get the best value for top-tier quality."
        />
      </div>

      <div className="flex flex-wrap px-[8%] justify-center space-y-[7%] lg:space-y-[2%]">
        <div className=" flex flex-col space-y-[5%] lg:space-y-[2%] justify-center w-[100%] relative mt-[6%] lg:mt-[3%] text-spicklyBlue  ">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-semibold pt-[2px] text-spickyBlue">
              About Us
            </p>
          </div>

          <h1 className="font-bold text-2xl lg:text-[48px] lg:w-[70%] lg:leading-tight text-spickyBlue">
            Clean Home with Our Professional Cleaning Services
          </h1>
          <p className="lg:w-[70%] text-darkGray text-[15px] lg:text-[18px]">
            When you choose SpicklyClean, you are choosing reliability,
            professionalism and a commitment to excellence. Let us handle the
            mess, so you can enjoy the freshness!
          </p>
        </div>
        <Image src={AboutUsImage} alt="About Us Image" />
      </div>

      <div className="px-[8%] ">
        <div className="flex flex-wrap lg:justify-between lg:items-center space-y-[7%] lg:space-y-[2%] lg:w-[100%]">
          <div className=" flex flex-col space-y-[5%] lg:space-y-[2%] justify-center lg:w-[60%] relative mt-[6%] lg:mt-[3%] text-spicklyBlue  ">
            <div className="relative flex space-x-5">
              <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
              <p className="relative font-semibold pt-[2px]">Our Services</p>
            </div>

            <h1 className="font-bold text-2xl lg:text-[48px] lg:w-[80%] text-spickyBlue">
              Services We Provide
            </h1>
            <p className="lg:w-[90%] text-darkGray text-[15px] lg:text-[18px]">
              At SpicklyClean, we offer a full range of professional cleaning
              services designed to keep your home and workplace spotless, fresh
              and inviting.
            </p>
          </div>
          <Link href="#" className="pt-3 hidden lg:flex">
            <button className=" py-3 rounded-3xl px-3 lg:px-6 font-semibold text-sm border bg-spickyBlue text-white">
              All Services
            </button>
          </Link>
        </div>
        <div className="py-[7%] lg:py-[5%] space-y-8 lg:space-y-0 flex flex-wrap lg:justify-between">
          <Services
            image={Service1}
            service="House Cleaning"
            description=" A clean home is a happy home, and at SpicklyClean, we take pride in making your 
            living space fresh, comfortable, and inviting. Our thorough house cleaning services cover everything 
            from dusting, sweeping, and mopping to deep cleaning hard-to-reach areas. 
            Whether it's a routine cleaning or a one-time deep clean, our team ensures
             that your home remains organized, sanitized, and a place where you can truly relax."
          />
          <Services
            image={Service2}
            service="Carpet Cleaning"
            description="Over time, carpets trap dust, dirt, and allergens that can affect the air quality in your home or office. 
            Our professional carpet cleaning services use deep-cleaning methods that remove stubborn stains, eliminate odors, 
            and restore your carpets' original softness and color. We use safe, eco-friendly solutions to 
            keep your carpets fresh, extending their lifespan and enhancing the overall cleanliness of your space."
          />
          <Services
            image={Service3}
            service="Office Cleaning"
            description="A clean office is key to a productive and professional workspace. 
            Our office cleaning services focus on creating a tidy, organized, and sanitary 
            environment for you and your employees. We handle everything from dusting desks
             and sanitizing high-touch surfaces to cleaning common areas and restrooms.
            With SpicklyClean, you can trust that your office will always make a positive
             impression on clients and employees alike."
          />
          <Services
            image={Service4}
            service="Kitchen Cleaning"
            description="Your kitchen is the heart of your home, and keeping it clean is essential for a safe 
            and healthy cooking environment. At SpicklyClean, we offer meticulous kitchen cleaning services that
            remove grease, grime, and food residues from every surface. From scrubbing countertops and cleaning
            appliances to sanitizing sinks and floors, we ensure your kitchen remains germ-free, sparkling, and ready for use."
          />
          <Link href="#" className="pt-3 flex lg:hidden w-[100%]">
            <button className=" py-3 rounded-3xl px-3 lg:px-6 font-semibold text-sm border bg-spickyBlue text-white w-[100%]">
              All Services
            </button>
          </Link>
        </div>
      </div>

      {/* why us */}

      <div className="flex flex-wrap w-[100%] px-[8%]">
        <div className=" lg:hidden flex flex-col space-y-[2%] justify-end relative lg:mt-[3%] text-spicklyBlue  ">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-semibold pt-[2px] text-spickyBlue">
              Why Choose Us
            </p>
          </div>

          <h1 className="font-bold text-3xl lg:w-[110%] text-spickyBlue">
            Providing Friendly, Reliable Cleaning Services
          </h1>
        </div>
        <div className="lg:w-[50%]">
          <Image src={WhyUs} alt="Why Us Image" />
        </div>

        <div className="lg:w-[50%] flex flex-col space-y-8 pb-[8%] lg:pb-0">
          <div className=" hidden lg:flex flex-col space-y-[2%] justify-end w-[60%] relative] lg:mt-[3%] text-spicklyBlue  ">
            <div className="relative flex space-x-5">
              <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
              <p className="relative font-semibold pt-[2px] text-spickyBlue">
                Why Choose Us
              </p>
            </div>

            <h1 className="font-bold text-3xl lg:w-[110%] text-spickyBlue">
              Providing Friendly, Reliable Cleaning Services
            </h1>
          </div>
          <div className="flex flex-col space-y-5">
            <ArrowPoints
              heading="High-Quality Cleaning Services"
              description="We provide thorough and dependable cleaning for homes, offices, and spaces of any size."
            />
            <ArrowPoints
              heading="Trained and Professional Staff"
              description="Our experienced team is skilled, reliable, and dedicated to delivering top-tier cleaning results."
            />
            <ArrowPoints
              heading="Exceptional Customer Service"
              description="We prioritize customer satisfaction, offering responsive support and ensuring a seamless, hassle-free cleaning experience."
            />
          </div>
        </div>
      </div>

      {/*  Our Team*/}

      <div className="px-[8%] py-[5%] bg-light">
        <div className=" flex flex-col space-y-[1%] justify-end items-center lg:mt-[3%] text-spicklyBlue  ">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-semibold pt-[2px] text-spickyBlue">
              Our Team
            </p>
          </div>

          <h1 className="font-bold text-3xl text-spickyBlue text-center w-[70%] lg:w-[100%]">
            Meet Our Cleaning Team
          </h1>
        </div>
        <div className="flex flex-wrap lg:justify-between pt-[10%] lg:pt-[5%]">
          <OurTeam
            image={Team1}
            personName="Michael Fobbs"
            jobPosition="Marketing Coordinator"
            socialMedia="#"
          />
          <OurTeam
            image={Team1}
            personName="Michael Fobbs"
            jobPosition="Marketing Coordinator"
            socialMedia="#"
          />
          <OurTeam
            image={Team1}
            personName="Michael Fobbs"
            jobPosition="Marketing Coordinator"
            socialMedia="#"
          />
          <OurTeam
            image={Team1}
            personName="Michael Fobbs"
            jobPosition="Marketing Coordinator"
            socialMedia="#"
          />
        </div>
      </div>

      {/* Testimonial */}

      <div className="px-[8%] py-[3%] space-y-5">
        <div className=" flex flex-col space-y-[1%] justify-end items-center lg:mt-[3%] text-spicklyBlue  ">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-semibold pt-[2px] text-spickyBlue">
              Testimonials
            </p>
          </div>

          <h1 className="font-bold text-3xl text-spickyBlue w-[80%] text-center lg:w-[100%]">
            Our Client&apos;s Feedback
          </h1>
        </div>

        <div className="flex flex-wrap space-y-[7%] lg:space-y-0 lg:justify-between">
          <Testimonials
            image={Testimonial1}
            description="Purus ipsum facilisis cursus nunc egestas vel praesent auctor dolor. Et proin dolor rhoncus sit."
            name="Carol Smith"
            occupation="Office Manager"
          />
          <Testimonials
            image={Testimonial1}
            description="Purus ipsum facilisis cursus nunc egestas vel praesent auctor dolor. Et proin dolor rhoncus sit."
            name="Carol Smith"
            occupation="Office Manager"
          />
          <Testimonials
            image={Testimonial1}
            description="Purus ipsum facilisis cursus nunc egestas vel praesent auctor dolor. Et proin dolor rhoncus sit."
            name="Carol Smith"
            occupation="Office Manager"
          />
        </div>
      </div>
    </div>
  );
}
