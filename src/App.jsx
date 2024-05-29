import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignIn from "./components/SignIn";
import VideoSection from "./components/VideoSection";
import GetVerified from "./components/GetVerified";
import Works from "./components/Works";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SignIn />
      <VideoSection />
      <GetVerified />
      <Works />
    </div>
  );
};

export default App;
