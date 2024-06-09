import { motion } from "framer-motion";
import React, { useState } from "react";

function FeaturedCards({ url, name, pos, site }) {
  const [isHovering, setHovering] = useState(false);
  return (
    <>
      <a href={site} target="_blank" rel="noopener noreferrer">
      <div
        onMouseEnter={() => {
          setHovering(true);
        }}
        onMouseLeave={() => {
          setHovering(false);
        }}
        className="cardcontainer relative min-w-[48%] h-[70vh]"
      >
        <h1
          className={`${
            pos === "right"
              ? "right-full translate-x-1/2 -translate-y-1/2"
              : "-translate-y-1/2 -translate-x-1/2 left-full"
          } uppercase tracking-tighter absolute text-7xl -translate-x-1/2 ${pos}-full z-[9] top-1/2 -translate-y-1/2 overflow-hidden flex text-[#cdea68]`}
        >
          {`${name}`.split("").map((item, index) => (
            <motion.span
              className=" inline-block"
              initial={{ y: "100%" }}
              animate={isHovering ? ({y: "0"}) : ({y: "100%"})}
              transition={{
                ease: [0.22, 1, 0.36, 1],
                delay: index*0.1
              }}
              key={index}
            >
              {item}
            </motion.span>
          ))}
        </h1>
        <div className="card overflow-hidden rounded-lg h-full w-full relative bg-bottom">
          <img className=" bg-cover bg-bottom" src={url} alt="" />
        </div>
      </div>
      </a>
    </>
  );
}

export default FeaturedCards;
