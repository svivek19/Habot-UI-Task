import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const places = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah & Ajman",
  "Fujairah",
  "Ras Al Khaimah",
  "Umm Al Quwain",
];

const SignIn = () => {
  return (
    <div className="my-20 w-11/12 md:w-5/6 mx-auto grid  grid-cols-1 md:grid-cols-2 space-x-4">
      <div className="w-full md:w-5/6">
        <h1 className="font-bold text-[37px]">
          Ready to dive into <span className="text-violet-950"> HABOT?</span>
        </h1>
        <p className="text-[17px] my-4 text-justify border border-[#00732F] p-1 rounded-[5px]">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="flex items-center space-x-3 bg-[#00732F] px-6 py-2 rounded-[5px] text-white font-bold">
          <span>Sign up Today !</span>
          <FaLongArrowAltRight />
        </button>
      </div>

      <div className="my-8 md:my-0 grid grid-cols-1 space-y-4 md:space-y-0 md:grid-cols-2 items-center w-11/12 md:w-5/6">
        {places.map((place, i) => (
          <div
            key={i}
            className="border border-[#E7760D] px-6 py-2 text-[#3E3E3E] mx-5"
          >
            <p className="text-center">{place}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignIn;
