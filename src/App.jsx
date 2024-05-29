import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignIn from "./components/SignIn";
import VideoSection from "./components/VideoSection";
import GetVerified from "./components/GetVerified";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SignIn />
      <VideoSection />
      <GetVerified />
    </div>
  );
};

export default App;
