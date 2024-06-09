import React from "react";
import Button from "./Button";
import Marquee from "./Marquee";

function About() {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed=".1" className="h-full">
        <Marquee />
        <div className="z-[11]">
          <div className="about w-full bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl text-black text-[4vw]  p-20 leading-[3.8vw]">
            <h1 className="font-thin tracking-tighter">
            "An accomplished professional with a proven track record of leveraging cutting-edge technology to drive impactful solutions, committed to fostering innovation and delivering exceptional results with integrity and reliability."
            </h1>
          </div>
          <div className="about-text bg-[rgb(205,234,104)] border-t-2 flex border-zinc-500 w-full px-20 py-10 font-thin text-2xl text-black">
            <div className="w-[30%] font-medium">
              <h3 className="">What you can expect:</h3>
            </div>
            <div className="w-full justify-evenly flex gap-2 p-2">
              <div className="first text-[1.4rem] leading-[2vw] tracking-tighter">
              <p>- Tailored solutions designed to meet your specific needs.</p>
  <p>- Transparent communication and regular updates throughout the process.</p>
  <p>- High-quality work delivered on time, every time.</p>
  <p>- Ongoing support and assistance even after project completion.</p>
  <p>- Trustworthy and professional conduct with a focus on integrity.</p>
  <p>- Collaboration and partnership to achieve shared goals.</p>
  <p>- Continuous improvement and innovation to exceed expectations.</p>
              </div>
              <div className="links flex flex-col justify-center items-center">
                <div className="flex flex-col">
                  {[{name: "Instagram", link: "https://www.instagram.com/_satendra_03/"}, {name: "Github", link: "https://github.com/satendra03"}, {name:"LinkedIn", link: "https://www.linkedin.com/in/connect-to-satendra/"}].map(
                    (items, index) => {
                      return (
                        <a target="_blank" rel="noopener noreferrer" className="text-[1.3vw]" key={index} href={items.link}>
                          {items.name}
                        </a>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="img-about flex w-full px-20 py-10 bg-[rgb(205,234,104)] text-zinc-900 border-t-2 border-zinc-500">
            <div className="w-1/2 ">
              <h1 className="text-6xl ">Our approach :</h1>
              <Button text="Read more" col="white" bgcol="black" />
            </div>
            <div className="w-1/2 bg-[rgb(153,173,77)] h-[70vh] rounded-3xl overflow-hidden">
            <img className=" object-center h-full" src="https://images.unsplash.com/photo-1688166800462-f46a3d7167a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
