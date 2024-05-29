import React from "react";

const GetVerified = () => {
  return (
    <div className="w-full mb-20 md:w-5/6 p-10 bg-[#E8FBFF] mx-auto">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-around items-center">
        <h1 className="font-semibold text-2xl leading-loose">
          Let Suppliers{" "}
          <span className="underline underline-offset-4 text-[#EB7150]">
            Find You
          </span>
        </h1>
        <button className="bg-[#EB7150] font-semibold rounded-[5px] text-white px-6 py-2">
          Get Verified
        </button>
      </div>
    </div>
  );
};

export default GetVerified;
