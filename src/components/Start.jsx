import React from "react";
import Button from "./Button";

function Start() {
  return (
    <>
      <div className="start w-full h-screen p-32 flex flex-col items-center justify-between bg-[#cdea68]">
        <div className="text w-full text-center">
          {["Let's", "Start", "a", "Project"].map((item, index) => (
            <h1
              className="text-[10vw] uppercase font-bold tracking-tight leading-[15vh]  text-black/95"
              key={index}
            >
              {item}
            </h1>
          ))}
          <div className="button flex items-center justify-center">
          <a href="mailto:satendrakumarparteti.work@gmail.com">
            <Button text="Start" col="white" bgcol="black" />
          </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Start;
