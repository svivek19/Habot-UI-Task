import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 mt-10">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-2xl font-bold">HABOT</h1>
            <p>© R Singhania</p>
          </div>
          <div className="flex flex-col sm:flex-row text-sm space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              FAQ
            </a>
            <a href="#" className="hover:underline">
              Data privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Accessibility
            </a>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
