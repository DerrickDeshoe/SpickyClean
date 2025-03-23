import React from 'react';
import LandingComponent from '../Components/LandingComponent';
import ContactImage from '../../public/images/OurPriceImage.png'

const page = () => {
  return (
    <div>
      <div>
        <LandingComponent
          title="Work With Us"
          heading="Looking for cleaning work in Leighton Buzzard?"
          description="If you're seeking part-time or full time cleaning with us! 
          We are actively looking for individuals who share our values of hard work 
          and reliability. Visit our recruitment page 4 more information"
          image={ContactImage}
          buttonText="Apply Online"
        />
      </div>
    </div>
  )
}

export default page
