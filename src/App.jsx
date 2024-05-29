import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignIn from "./components/SignIn";
import VideoSection from "./components/VideoSection";
import GetVerified from "./components/GetVerified";
import Works from "./components/Works";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SignIn />
      <VideoSection />
      <GetVerified />
      <Works />
      <Footer />
    </div>
  );
};

export default App;
