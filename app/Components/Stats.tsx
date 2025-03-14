"use client";

import Counter from "./Counter";

const Stats = () => {
  return (
    <div className="flex space-x-[5%] lg:flex-col w-[100%] lg:w-[50%] lg:items-end lg:space-y-5 text-spickyBlue">
      {/* Homes Cleaned */}
      <div className="flex flex-col space-y-1 lg:items-end">
        <div className="flex space-x-1 justify-center">
          <h3 className="font-bold text-[24px] lg:text-3xl">
            <Counter target={10000} />
          </h3>
          <h3 className="font-bold  text-[24px] lg:text-3xl">+</h3>
        </div>
        <p className="text-[13px] lg:text-lg lg:text-left text-darkGray">Homes Cleaned</p>
      </div>

      {/* Professional Tools */}
      <div className="flex flex-col space-y-1 lg:items-end">
        <div className="flex space-x-1  justify-center">
          <h3 className="font-bold text-[24px] lg:text-3xl">
            <Counter target={126} />
          </h3>
          <h3 className="font-bold text-[24px] lg:text-3xl">+</h3>
        </div>
        <p className="text-[13px] lg:text-lg lg:text-left text-darkGray">Professional Tools</p>
      </div>

      {/* Satisfied Clients */}
      <div className="flex flex-col space-y-1 lg:items-end">
        <div className="flex space-x-1  justify-center">
          <h3 className="font-bold text-[24px] lg:text-3xl">
            <Counter target={99} />
          </h3>
          <h3 className="font-bold  text-[24px] lg:text-3xl">%</h3>
        </div>
        <p className="text-[13px] lg:text-lg lg:text-left text-darkGray">Satisfied Clients</p>
      </div>
    </div>
  );
};

export default Stats;
