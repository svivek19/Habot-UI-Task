import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SignIn />
    </div>
  );
};

export default App;
