'use client'

import React from "react";
import Image, { StaticImageData } from "next/image";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to initialize Stripe with your public key
const stripePromise = loadStripe("your-public-key-here");

interface PricingProps {
  image: StaticImageData;
  cleaningCategory: string;
  price: string;
  description: string;
  service1: string;
  service2: string;
  service3: string;
  service4: string;
  backgroundColor: string;
  textColor: string;
  textColor2: string;
  priceColor: string;
  serviceColor: string;
  serviceTextColor: string;
  buttonColor: string;
}

const Pricing: React.FC<PricingProps> = (props) => {
  // Function to handle the "Get Started" button click
  const handlePayment = async () => {
    const stripe = await stripePromise;

    // Create a checkout session or redirect to Stripe Checkout (optional, using frontend only)
    const checkoutSession = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        price: props.price, // Send the price or other info to the backend (you can just send price)
      }),
    });

    const session = await checkoutSession.json();

    // Redirect to Stripe Checkout
    const result = await stripe!.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div
      className="rounded-lg lg:w-[30%] p-4 transition-all duration-300 hover:shadow-lg font-Urbanist"
      style={{ backgroundColor: props.backgroundColor }}
    >
      <div className="p-4 flex flex-col space-y-3">
        <div className="flex items-center space-x-2 transition-colors duration-300 hover:text-[#7F8490] active:text-[#7F8490]">
          <span className="w-3 h-3 bg-[#F1598F] rounded-full"></span>
          <p
            className="font-semibold leading-10 tracking-normal"
            style={{ color: props.textColor2 }}
          >
            {props.cleaningCategory}
          </p>
        </div>
        <div className="flex space-x-2 items-center">
          <p
            style={{ color: props.priceColor }}
            className="text-[27px] font-bold"
          >
            {props.price}
          </p>
          <p style={{ color: props.serviceTextColor }}>/hour</p>
        </div>
        <div>
          <p style={{ color: props.textColor }}>{props.description}</p>
        </div>
      </div>
      <div className="w-full border-t border-darkGray"></div>
      <div className="flex flex-col space-y-3 p-4">
        {[props.service1, props.service2, props.service3, props.service4].map(
          (service, index) => (
            <div key={index} className="flex space-x-2 items-center">
              <Image src={props.image} alt="Arrow" width={20} height={20} />
              <p style={{ color: props.serviceColor }}>{service}</p>
            </div>
          )
        )}
      </div>
      <button
        className={`bg-${props.buttonColor} py-2 lg:py-3 rounded-3xl px-3 lg:px-6 text-sm w-[100%] font-Urbanist text-white font-semibold`}
        onClick={handlePayment} // Trigger the payment when clicked
      >
        Get Started
      </button>
    </div>
  );
};

export default Pricing;
