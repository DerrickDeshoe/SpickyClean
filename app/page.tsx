import Image from "next/image";
import Link from "next/link";
import HomeImage from "../public/images/HeroImage.png";
import HomeImage2 from "../public/images/HeroImageMobile.png";
import Stats from "./Components/Stats";
import Ideal from "../app/Components/Ideal";
import Card1 from "../public/images/icon1.svg";
import Card2 from "../public/images/icon2.svg";
import Card3 from "../public/images/icon3.svg";
import AboutUsImage from "../public/images/AboutImage.png";
import Services from "./Components/Services";
import Service1 from "../public/images/service1.png";
import Service2 from "../public/images/service2.png";
import Service3 from "../public/images/service3.png";
import Service4 from "../public/images/service4.png";
import Service5 from "../public/images/service5.png";
import Service6 from "../public/images/service6.png";
import WhyUs from "../public/images/WhyUsImage.svg";
import ArrowPoints from "./Components/ArrowPoints";
import OurTeam from "./Components/OurTeam";
import Team1 from "../public/images/Team2.png";
import Testimonials from "./Components/Testimonials";
import Testimonial1 from "../public/images/testimonial1.png";
import Star from '../public/images/Star.svg';

export default function Home() {
  return (
    <div className="w-[100%] pb-[3%]">
      {/* Mobile Landing Page */}

      <div className=" flex flex-col w-[100%] lg:hidden justify-between pt-[1%] mb-[6%]">
        <div className="w-[100%] flex flex-wrap lg:justify-between px-[8%] pt-[5%] lg:pt-[1%] mb-[2%]">
          <div className="flex flex-col space-y-[3%] justify-center lg:w-[45%] relative transition-colors duration-150 hover:text-[#7F8490] active:text-[#7F8490]">
            <div className="flex items-center space-x-2 transition-colors duration-300 hover:text-[#7F8490] active:text-[#7F8490]">
              <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
              <p className="font-bold text-lightBlack">Scrubs&Rugs</p>
            </div>

            <h1 className="font-bold font-Urbanist text-[27px] lg:text-[43px] lg:leading-tight lg:tracking-wide transition-colors duration-150 text-black hover:text-[#7F8490] active:text-[#7F8490] w-[90%] lg:w-[100%]">
              Cleaning Services For All Your Needs
            </h1>
            <p className="w-[100%] font-Urbanist text-lightBlack text-[15px] transition-colors duration-80 hover:text-darkGray active:text-darkGray">
              Looking for a house cleaning service in Leighton Buzzard? Look no
              further! Whether you need an insured regular cleaning or one-off
              deep clean we are ready to assist you.
            </p>
            <div>
              <Stats />
            </div>
          </div>

          <div className="lg:w-[55%] lg:mt-[2%] hidden lg:flex justify-center">
            <Image src={HomeImage} alt="Hero Image" className="" />
          </div>
          <div className=" lg:mt-[2%] flex lg:hidden justify-center w-[100%]">
            <Image src={HomeImage2} alt="Hero Image" className="" />
          </div>
        </div>
        <Link href="#" className="pt-3 px-[8%] w-[100%]">
          <button className="py-2 rounded-3xl font-Urbanist px-4 lg:px-6 bg-black text-white transition-all duration-1550 transform hover:bg-spickyPink hover:scale-105 active:bg-spickyPink active:scale-95 w-[100%]">
            Get Started
          </button>
        </Link>
      </div>

      {/* Laptop Landing Page */}
      <div className=" hidden w-[100%] lg:flex justify-between lg:px-[8%] pt-[1%] mb-[13%]">
        <div className=" flex flex-col space-y-[3%] justify-center w-[40%] relative lg:mt-[9%] text-spicklyBlue">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-bold pt-[1px] text-[17px] text-lightBlack">
              Scrubs&Rugs
            </p>
          </div>

          <h1 className="font-bold font-Urbanist text-[48px] text-black transition-colors duration-300 hover:text-lightBlack">
            Cleaning Services For All Your Needs
          </h1>
          <p className="w-[97%] text-spickyPink text-[17px] font-Urbanist font-semibold ">
            Looking for a house cleaning service in Leighton Buzzard? Look no
            further! Whether you need an insured regular cleaning or one-off
            deep clean we are ready to assist you.
          </p>
          <Link href="#" className="pt-3">
            <button className="py-2 lg:py-3 rounded-3xl font-Urbanist px-4 lg:px-6 text-xs lg:text-sm bg-black text-white transition-all duration-1550 transform hover:bg-spickyPink hover:scale-105 active:bg-spickyPink active:scale-95">
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
        <div className=" flex flex-col space-y-[5%] lg:space-y-[2%] justify-center w-[100%] relative mt-[6%] lg:mt-[3%] ">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-bold pt-[1px] text-lightBlack lg:text-[17px]">
              About Us
            </p>
          </div>

          <h1 className="font-bold  font-Urbanist text-2xl lg:text-[48px] lg:w-[70%] lg:leading-tight text-black">
            Clean Home with Our Professional Cleaning Services
          </h1>
          <p className="lg:w-[70%] font-Urbanist text-lightBlack text-[15px] lg:text-[17px]">
            At Scrubs&Rugs we&apos;re committed to provide cleanliness that
            meets excellence.We are dedicated to providing top-notch cleaning
            services that leave your home spotless and refreshed. Whether you
            need regular cleaning service, one-off deep cleaning or specialised
            services, we&apos;re here 2 deliver results you can trust. Let us
            handle the cleaning so you can focus on what matters most. Experience
            the difference with Srubs&Rugs -your clean healthy space is just a
            call away!
          </p>
        </div>
        <Image src={AboutUsImage} alt="About Us Image" />
      </div>

      <div className="">
        <div className="flex flex-wrap py-[5%] lg:justify-between lg:items-center space-y-[7%] lg:space-y-[2%] lg:w-[100%] px-[8%] ">
          <div className=" flex flex-col space-y-[5%] lg:space-y-[4%] justify-center lg:w-[60%] relative mt-[6%] lg:mt-[3%] text-spicklyBlue  ">
            <div className="relative flex space-x-5">
              <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
              <p className="relative font-bold pt-[1px] text-[17px] text-lightBlack">
                Our Services
              </p>
            </div>

            <h1 className="font-bold font-Urbanist text-2xl lg:text-[48px] lg:w-[80%] text-black">
              Services We Provide
            </h1>
            <p className="lg:w-[90%] font-Urbanist text-lightBlack text-[15px] lg:text-[18px]">
              At Scrubs&Rugs, we offer a full range of professional cleaning
              services designed to keep your home and workplace spotless, fresh
              and inviting.
            </p>
          </div>
          <Link href="/Services" className="pt-3 hidden lg:flex">
            <button className="py-2 lg:py-3 rounded-3xl px-4 lg:px-6 text-xs lg:text-sm bg-black font-Urbanist text-white transition-all duration-1550 transform hover:bg-spickyPink hover:scale-105 active:bg-spickyPink active:scale-95">
              All Services
            </button>
          </Link>
        </div>
        <div className="py-[7%] lg:py-[5%] space-y-8 lg:space-y-0 flex flex-wrap lg:justify-between bg-light px-[8%] ">
          <Services
            image={Service1}
            service="Ironing"
            description="Wrinkled clothes and linens can feel unkempt, so we provide professional ironing to smooth every crease. 
            With precise steaming and pressing techniques, we ensure your garments and fabrics look crisp, fresh, and perfectly presentable."
          />
          <Services
            image={Service2}
            service="Dusting"
            description="Dust accumulation can trigger allergies and dull your surfaces,
             so we carefully eliminate every speck from furniture, shelves, and décor. 
            Our thorough approach enhances cleanliness while maintaining a polished, allergen-free space."
          />
          <Services
            image={Service3}
            service="Polishing"
            description="To restore the brilliance of your surfaces, we expertly polish wood, glass,
             and metal to a flawless shine. Our detailed care eliminates smudges and dullness, 
             enhancing the elegance and longevity of your furnishings."
          />
          <Services
            image={Service4}
            service="Regular Cleans"
            description="Maintaining a consistently tidy home requires routine attention,
             so we offer scheduled cleaning to keep your space pristine. 
            Our systematic approach covers essential tasks, ensuring lasting cleanliness and a stress-free environment."
          />
          <Services
            image={Service5}
            service=" Vacuuming"
            description="We meticulously remove dust, dirt, 
            and debris from carpets, rugs, and upholstery, 
            ensuring a cleaner and fresher environment. 
            Our vacuuming process lifts hidden particles, 
            improving air quality and leaving your space spotless."
          />
          <Services
            image={Service6}
            service="One Off Cleans"
            description="Whether for a special occasion or post-renovation, our one-time cleaning revives your space with precision.
             We tackle built-up grime, sanitize key areas, and leave your home sparkling for a refreshed, welcoming atmosphere."
          />
          <Link href="/Services" className="pt-3 flex lg:hidden w-[100%]">
            <button className=" py-2 rounded-3xl px-3 lg:px-6 text-sm border bg-black font-Urbanist text-white w-[100%] transition-all duration-1550 transform hover:bg-spickyPink hover:scale-105 active:bg-spickyPink active:scale-95">
              All Services
            </button>
          </Link>
        </div>
      </div>

      {/* why us */}

      <div className="flex flex-wrap w-[100%] px-[8%] font-Urbanist">
        <div className=" lg:hidden py-[5%] flex flex-col space-y-[2%] justify-end relative ">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-bold pt-[2px] text-lightBlack">
              Why Choose Us
            </p>
          </div>

          <h1 className="font-bold text-3xl lg:w-[110%] text-black">
            Providing Friendly, Reliable Cleaning Services
          </h1>
        </div>
        <div className="lg:w-[50%]">
          <Image src={WhyUs} alt="Why Us Image" />
        </div>

        <div className="lg:w-[50%] flex flex-col space-y-8 pb-[8%] lg:pb-0">
          <div className=" hidden lg:flex flex-col space-y-[2%] justify-end w-[60%] relative] lg:mt-[3%]">
            <div className="relative flex space-x-5">
              <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full z-10"></span>
              <p className="relative font-bold pt-[2px] text-lightBlack">
                Why Choose Us
              </p>
            </div>

            <h1 className="font-bold text-3xl lg:w-[110%] text-black">
              Providing Friendly, Reliable Cleaning Services
            </h1>
          </div>
          <div className="flex flex-col space-y-5">
            <ArrowPoints
              heading="High-Quality Cleaning Services"
              description="We provide thorough and dependable cleaning for homes of any size."
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

      <div className="px-[8%] py-[5%]  bg-light">
        <div className=" flex flex-col space-y-[1%] justify-end items-center  text-spicklyBlue  ">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-bold text-[17px] pt-[1px] text-lightBlack">
              Our Team
            </p>
          </div>

          <h1 className="font-bold text-3xl text-black font-Urbanist text-center w-[70%] lg:w-[100%]">
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
            <p className="relative font-bold pt-[1px] text-lightBlack text-[17px]">
              Local Reviews
            </p>
          </div>

          <h1 className="font-bold text-3xl text-black font-Urbanist w-[80%] text-center lg:w-[100%]">
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

        <div className=" flex flex-col space-y-[1%] justify-end items-center lg:mt-[3%] font-Urbanist">
          <div className="">
            <p className="relative font-bold pt-[1px] text-black text-[17px]">
              Trusted by 50k+ customers
            </p>
          </div>

          <div className="flex space-x-4">
            <Image src={Star} alt='Image'/>
            <p className="text-lightBlack font-bold text-[16px]">4.4/5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
