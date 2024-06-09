import React from "react";
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div className="marquee rounded-tl-3xl rounded-tr-3xl bg-[#004d43] z-10 w-full py-10">
      <div className="text border-t-[1px] border-b-[1px] py-10 border-zinc-400 flex font-bold whitespace-nowrap overflow-hidden">
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 3}} className="text-[15vw] leading-none uppercase -mb-[2vh] -mt-[6vh]">
          •He is Best
        </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 3}} className="text-[15vw] leading-none uppercase -mb-[2vh] -mt-[6vh]">
          •He is Best
        </motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 3}} className="text-[15vw] leading-none uppercase -mb-[2vh] -mt-[6vh]">
          •He is Best
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
