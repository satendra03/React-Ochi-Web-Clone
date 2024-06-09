// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { FaArrowRight } from 'react-icons/fa';

// const Button = ({ text, col, bgcol }) => {
//   const buttonRef = useRef(null);
//   const circleRef = useRef(null);
//   const arrowRef = useRef(null);

//   useEffect(() => {
//     const button = buttonRef.current;
//     const circle = circleRef.current;
//     const arrow = arrowRef.current;

//     const handleMouseEnter = () => {
//       gsap.to(circle, { scale: 2, duration: 0.3, zIndex: 1 });
//       gsap.to(arrow, { opacity: 1, duration: 0.3, zIndex: 3, color: 'black' });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(circle, { scale: 1, duration: 0.3, zIndex: 3 });
//       gsap.to(arrow, { zIndex: 1, opacity: 0, duration: 0.3 });
//     };

//     button.addEventListener('mouseenter', handleMouseEnter);
//     button.addEventListener('mouseleave', handleMouseLeave);

//     return () => {
//       button.removeEventListener('mouseenter', handleMouseEnter);
//       button.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   return (
//     <div className="button w-64">
//       <button
//         ref={buttonRef}
//         className={`text-${col} bg-${bgcol} flex items-center justify-between w-full rounded-full px-10 my-10 py-6 uppercase tracking-widest`}
//       >
//         {text}
//         <div
//           ref={circleRef}
//           className={`flex items-center justify-center circle rounded-full w-5 h-5 bg-${col}`}
//           style={{ transformOrigin: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//         >
//           <FaArrowRight ref={arrowRef} style={{ opacity: 0 }} />
//         </div>
//       </button>
//     </div>
//   );
// };

// export default Button;


import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ text, col, bgcol }) => {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;
    const arrow = arrowRef.current;

    const handleMouseEnter = () => {
      gsap.to(circle, { scale: 2, duration: 0.3 });
      gsap.to(arrow, { opacity: 1, color: bgcol, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to(circle, { scale: 1, duration: 0.3 });
      gsap.to(arrow, { opacity: 0, duration: 0.3 });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [bgcol]);

  return (
    <div className="button w-64">
      <button
        ref={buttonRef}
        className={`text-${col} bg-${bgcol} flex items-center justify-between w-full rounded-full px-10 my-10 py-6 uppercase tracking-widest`}
      >
        {text}
        <div
          ref={circleRef}
          className={`flex items-center justify-center circle rounded-full w-5 h-5 bg-${col}`}
          style={{ transformOrigin: 'center' }}
        >
          <div ref={arrowRef} style={{ opacity: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FaArrowRight />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Button;
