import About from "@/components/About";
import Hero from "@/components/Hero";
import React from "react";

const Home = () => {
  return (
    <div className="bg-red-500  p-1 min-h-dvh">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
