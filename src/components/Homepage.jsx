import React from "react";
import Buton from "./Buton";
import { motion, scroll } from "framer-motion";

function Homepage() {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className="homepage w-full h-screen bg-zinc-900 pt-1 z-[9]">
        <div className="main-text mt-44 px-20">
          {["He Create", "Eye Opening", "Presentations"].map((items, index) => {
            return (
              <div className="masker">
                <div animate className="w-fit flex items-center">
                  {index === 1 && (
                    <motion.div initial={{width: "0"}} 
                    animate={{width: "9vw"}}
                    transition={{
                      duration: 0.7
                    }}
                    className="mt-3 bg-red-500 w-[9vw] h-[6vw] rounded-md overflow-hidden">
                    </motion.div>
                  )}
                  <h1
                    key={index}
                    className="uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-bold text-8xl"
                  >
                    {items}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bottom-border border-t-2 border-zinc-800 mt-28 flex justify-between items-center py-5 px-20">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((items, index) => {
            return (
              <p
                key={index}
                className=" text-lg font-thin tracking-tight leading-none"
              >
                {items}
              </p>
            );
          })}
          <a href="mailto:satendrakumarparteti.work@gmail.com">
          <Buton text="Start a project" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Homepage;
