import React from "react";
import RecruitImage from "../../public/images/RecruitHeroImage.png";
import ArrowPoints2 from "../Components/ArrowPoints2";
import RecruitImage2 from "../../public/images/recruitImage2.png";
import Image from "next/image";
import RecruitmentHero from "../Components/RecruitmentHero";
import Recruitment1 from "../Components/Recruitment1";
import Recruitment2 from "../Components/Recruitment2";
import WhyWork1 from "../../public/images/whyWorkImage.png";
import WhyWork2 from "../../public/images/why2.png";

const page = () => {
  return (
    <div>
      <div>
        <RecruitmentHero
          heading="Looking for a flexible job in cleaning?"
          description="If you're seeking part-time or full-time cleaning with us! We are actively 
          looking for individuals who share our values of hard work and reliability. 
          We'd love to have you on board—apply today and become part of our dedicated team!"
          image={RecruitImage}
          buttonName="Apply Online"
        />
      </div>

      {/* why recruit with us */}

      <div className="flex flex-wrap w-[100%] px-[8%] font-Urbanist">
        <div className=" lg:hidden py-[5%] flex flex-col space-y-[2%] justify-end relative ">
          <div className="relative flex space-x-5">
            <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full -z-10"></span>
            <p className="relative font-bold pt-[2px] text-lightBlack">
              OUR REQUIREMENTS
            </p>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <Image src={RecruitImage2} alt="Image" />
        </div>

        <div className="lg:w-[50%] flex flex-col lg:justify-center space-y-8 pb-[8%] lg:pb-0">
          <div className=" hidden lg:flex flex-col space-y-[2%] justify-end w-[60%] relative lg:mt-[3%]">
            <div className="relative flex space-x-5">
              <span className="absolute top-2 w-3 h-3 bg-[#F1598F] rounded-full z-10"></span>
              <p className="relative font-bold pt-[2px] text-lightBlack">
                OUR REQUIREMENTS
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-5">
            <ArrowPoints2 description="A positive attitude and willingness to handle all common household cleaning tasks to the best of your ability." />
            <ArrowPoints2 description="Being reliable, honest, and trustworthy." />
            <ArrowPoints2 description="Ability to communicate clearly with clients in English." />
            <ArrowPoints2 description="Providing at least two written references before starting any work" />
            <ArrowPoints2 description="Arriving on time for interviews and cleaning appointments, or informing both the client and us in advance if you're unable to attend." />
          </div>
        </div>
      </div>

      <div className="py-[5%]">
        <Recruitment1
          cleaningType="Why Work With Us"
          description="Scrubs&Rugs is a trusted home cleaning company that connects professional 
          cleaners with homeowners in need of quality cleaning services. Every week, we provide
          reliable and flexible cleaning jobs to many happy cleaners across the country. 
          Whether you're looking for part-time or regular work, we offer cleaning jobs that fit around your schedule. 
          With Scrubs&Rugs, you can enjoy steady work, great support, and the opportunity to build lasting relationships 
          with clients. Join us today and start earning with a job that works for you!"
          call="Join Us Today"
          buttonName="Apply Now"
          link="OurPrice"
          image={WhyWork1}
        />
      </div>

      <div className="py-[5%]">
        <Recruitment2
          cleaningType="Why Work With Us"
          description="With our online portal, you can easily manage your cleaning jobs from your mobile device or computer. 
          You'll have the flexibility to accept or decline available house cleaning jobs in your area and
          receive instant notifications about new opportunities. The portal also allows you to view your current 
          client details and schedule, update your availability and work status, and report any holidays or absences. 
          Plus, you'll get reminders for upcoming events, ensuring you stay organized and in control of your work."
          call="Join Us Today"
          link="OurPrice"
          buttonName="Apply Now"
          image={WhyWork2}
        />
      </div>
    </div>
  );
};

export default page;
