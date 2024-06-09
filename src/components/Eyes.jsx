import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Eyes = () => {
  let [pos, setPos] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let posX = e.clientX;
      let posY = e.clientY;
      let delX = posX - window.innerWidth / 2;
      let delY = posY - window.innerHeight / 2;
      let rad = Math.atan2(delY, delX);
      let angle = rad * (180 / Math.PI);
      setPos(angle);
    });
  });

  return (
    <>
      <div  className="eyes z-[3] w-full h-screen overflow-hidden">
        <div data-scroll data-scroll-section data-scroll-speed="-.4" className="w-full z-[4] h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] relative">
          <div className=" absolute gap-14 flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
            <div className="left w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-white">
              <motion.div initial={{x: "0"}} animate={{}} className="w-2/3 h-2/3 bg-black rounded-full relative">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${pos - 180}deg)`,
                  }}
                  className="line rotate-[${pos}deg] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                </div>
              </motion.div>
            </div>
            <motion.div initial={{x: "0"}} animate={{}} className="right w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-white">
              <div className="w-2/3 h-2/3 relative bg-black rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${pos - 180}deg)`,
                  }}
                  className="line rotate-[${pos}deg] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
                >
                  <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
