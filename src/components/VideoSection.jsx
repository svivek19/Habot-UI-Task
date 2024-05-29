import React from "react";
import { MdOutlineDone } from "react-icons/md";

const VideoSection = () => {
  return (
    <div
      className="bg-[#072F57] my-20 p-1 md:p-4 w-full md:w-5/6 mx-auto rounded
    -[5px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center p-10">
          <iframe
            className="md:w-[460px] md:h-[215px] rounded-[5px]"
            src="https://www.youtube.com/embed/IZLp-TZyDkQ?si=UQ03Ctdus95eEzQh"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <div className="flex justify-around items-center p-2 md:p-10 text-white space-x-10 font-bold text-2xl">
            <h1 className="text-[#EB7150] underline underline-offset-8">
              Buyer
            </h1>
            <h1>Supplier</h1>
          </div>
          <div className="ml-0 md:ml-6">
            <div className="flex items-center text-white">
              <MdOutlineDone className="bg-green-500 text-white rounded-full w-4 h-4 m-5 font-bold" />
              <p className="text-sm md:text-[16px]">Post your requirements.</p>
            </div>
            <div className="flex items-center text-white">
              <MdOutlineDone className="bg-green-500 text-white rounded-full w-4 h-4 m-5 font-bold" />
              <p className="text-sm md:text-[16px]">
                Sit back for multiple suppliers to contact you.
              </p>
            </div>
            <div className="flex items-center text-white">
              <MdOutlineDone className="bg-green-500 text-white rounded-full w-4 h-4 m-5 font-bold" />
              <p className="text-sm md:text-[16px]">
                Choose among the suppliers based on the ratings and reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
