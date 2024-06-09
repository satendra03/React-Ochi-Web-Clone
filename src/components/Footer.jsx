import React from "react";
import Start from "./Start";
import Buton from "./Buton";
import Form from "./Form";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="footer relative">
        <div className="footer sticky top-0 w-full">
          <Start />
        </div>

        <div className="footer__container flex items-center w-full z-[100] px-20 sticky top-0 bg-zinc-900 h-screen">
          <div className="container flex border-b-2 py-5 border-zinc-700">
            <div className="w-1/2  flex flex-col justify-between h-[70vh]">
              <div className="heading h-3/4 ">
                {["Satendra", "Kumar", "Parteti"].map((item, index) => (
                  <h1
                    key={index}
                    className="uppercase font-bold tracking-tighter leading-[15vh] text-9xl"
                  >
                    {item}
                  </h1>
                ))}
              </div>
              <div className="chat h-fit w-44 ">
                <a
                  href="http://wa.me/+918103957449"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Buton text="Let's Chat" />
                </a>
              </div>
            </div>
            <div className="w-1/2 h-[70vh] border-l-2 border-zinc-700">
              <div className="w-full h-full px-10">
                <Form />
                <div className="logos flex flex-col items-center justify-evenly text-3xl px-4 my-3 w-full">
                  <div className="container flex gap-4 py-12 items-center justify-evenly">
                    <a
                      target="_blank"
                      href="https://www.instagram.com/_satendra_03/"
                    >
                      <FaInstagram className=" opacity-50 hover:opacity-90 cursor-pointer" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/connect-to-satendra/"
                    >
                      <FaLinkedinIn className=" opacity-50 hover:opacity-90 cursor-pointer" />
                    </a>
                    <a
                      href="http://github.com/satendra03"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub className=" opacity-50 hover:opacity-90 cursor-pointer" />
                    </a>
                    <a
                      href="http://telegram.me/satendra_03"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTelegram className=" opacity-50 hover:opacity-90 cursor-pointer" />
                    </a>
                    <a
                      href="http://x.com/satendra_03/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaXTwitter className=" opacity-50 hover:opacity-90 cursor-pointer" />
                    </a>
                    <a
                      href="https://www.facebook.com/people/Satendra-K-Parteti/100086976720913/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook className=" opacity-50 hover:opacity-90 cursor-pointer" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
