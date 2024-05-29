import React from "react";
import {
  RiUserAddFill,
  RiFileList2Fill,
  RiContactsBookFill,
  RiNotificationFill,
  RiChat3Fill,
} from "react-icons/ri";
import { FaHandshakeSimple } from "react-icons/fa6";

const Works = () => {
  const steps = [
    { title: "Select Your Role and Sign Up", icon: RiUserAddFill },
    { title: "Buyers Post Your Requirements", icon: RiFileList2Fill },
    {
      title: "Review, Select, and Contact the Best Suppliers",
      icon: RiContactsBookFill,
    },
    {
      title:
        "Suppliers Complete your profile and get notified for opportunities",
      icon: RiNotificationFill,
    },
    {
      title: "Contact to Buyers and Share your Quote for the service",
      icon: RiChat3Fill,
    },
    {
      title: "Both the Parties can Connect and Make Business Leave a Feedback",
      icon: FaHandshakeSimple,
    },
  ];

  return (
    <div className="text-center py-10">
      <h2 className="text-4xl text-[#222222] font-bold mb-6">How it works?</h2>
      <p className="mb-8 w-1/2 mx-auto">
        Buyers post their needs and review top suppliers, while suppliers
        complete profiles, connect with potential buyers, and build successful
        business relationships, sharing valuable feedback.
      </p>

      <div className="w-5/6 mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-[5px] flex items-center justify-center ${
                index % 2 === 0 ? "bg-[#E8FBFF]" : ""
              }`}
            >
              <div className="flex flex-col space-y-4 mb-4">
                <div className="text-5xl mx-auto mb-2 ">
                  {React.createElement(step.icon)}
                </div>
                <h3 className="text-[16px] font-normal">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
