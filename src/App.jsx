import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <>
      <div className="if-small h-screen w-full text-white flex justify-center items-center bg-black font-semibold uppercase text-[9vw] sm:text-[7vw md:text-[5vw] lg:hidden">
        <h1>Please Use Laptop</h1>
      </div>

      <div className="hidden lg:block main w-full min-h-screen text-white bg-zinc-900">
        <Navbar />
        <Homepage />
        <About />
        <Eyes />
        <Featured />
        <Footer />
      </div>
    </>
  );
}

export default App;
