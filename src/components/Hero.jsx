import React from "react";
import bg from "../assets/bg.png";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.85) 10.8%, rgba(7, 47, 87, 0.25) 94.58%), linear-gradient(0deg, rgba(7, 47, 87, 0.65), rgba(7, 47, 87, 0.65))`,
          }}
        ></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 py-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Are You a Supplier?
        </h2>
        <h2 className="text-2xl md:text-4xl font-normal mb-8">
          Explore Matching Opportunities.
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="Search your required service here"
            className="px-4 py-2 bg-white text-[#6B7280] text-[15px] rounded-[5px] outline-none w-full md:w-auto"
          />
          <input
            type="text"
            placeholder="Search your desired location here"
            className="px-4 py-2 bg-white text-[#6B7280] text-[15px] rounded-[5px] outline-none w-full md:w-auto"
          />
          <button className="px-8 py-2 bg-[#00732F] text-white rounded-[5px] w-full md:w-auto">
            Search
          </button>
        </div>
        <p className="text-[18px] font-bold my-4">
          Are you a buyer?{" "}
          <span className="underline font-normal">
            Click here if you are looking to post a requirements
          </span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
