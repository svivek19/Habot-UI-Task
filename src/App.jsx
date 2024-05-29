import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignIn from "./components/SignIn";
import VideoSection from "./components/VideoSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SignIn />
      <VideoSection />
    </div>
  );
};

export default App;
