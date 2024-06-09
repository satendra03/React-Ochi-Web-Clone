// import { motion } from "framer-motion";
// import React from "react";
// import { FaArrowUpLong } from "react-icons/fa6";

// function Buton({ text }) {
//   return (
//     <button>
//       <div className="start flex items-center justify-between border border-zinc-500 rounded-full">
//         <div className="py-2 px-5 font-thin capitalize">{text}</div>
//         <div className="arrow w-10 h-10 flex items-center justify-center">
//           <motion.span className="rotate-45">
//             <FaArrowUpLong />
//           </motion.span>
//         </div>
//       </div>
//     </button>
//   );
// }

// export default Buton;


import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Buton({ text, extra }) {
  return (
    <motion.button
      className={`border border-zinc-500 rounded-full`}
      whileHover="hover"
      initial="initial"
    >
      <div className="start flex items-center justify-between">
        <div className="py-2 px-5 font-thin capitalize">{text}</div>
        <motion.div
          className={`arrow ${extra ? extra : 'w-10'} h-10 flex items-center justify-center`}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1 },
          }}
        >
          <motion.span
            variants={{
              initial: { rotate: 45, opacity: 1 },
              hover: { rotate: 90, opacity: 1 },
            }}
          >
            <FaArrowUpLong />
          </motion.span>
        </motion.div>
      </div>
    </motion.button>
  );
}

export default Buton;
