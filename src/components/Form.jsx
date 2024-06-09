import React, { useState } from "react";
import Buton from "./Buton";
import { db, set, ref } from "./Firebase/Firebase";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const putData = async (e) => {
    e.preventDefault();
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /\S+@\S+\.\S+/;
    
    if (name !== "" && email !== "" && message !== "") {
        if (!name.match(nameRegex)) {
            alert("Name must only contain letters (uppercase or lowercase) without any special symbols or numbers.");
            return;
        }
        if (!email.match(emailRegex)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (message.split(/\s+/).length < 3) {
            alert("Message must be at least 3 words long.");
            return;
        }
        try {
            await set(ref(db, `users/${name}`), {
                name: name,
                email: email,
                message: message
            });
            alert('Successfully Submitted');
            setName("");
            setEmail("");
            setMessage("");
        } catch (error) {
            console.error("Error:", error);
            alert("Error, please try again later.");
        }
    } else {
        alert("Please fill in all fields.");
    }
}
  return (
    <>
      <div className="form pb-12 border-zinc-700 w-full">
        <form action="" method="post">
          <div className="inputs p-2 w-full flex flex-col gap-5">
            <div className="name flex justify-between items-center w-full">
              <label htmlFor="name" className="w-28  mr-2">
                <h3 className="text-2xl cursor-pointer">Name</h3>
              </label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="Satendra Kumar Parteti"
                className="w-[30vw] placeholder-black/30 rounded-md outline-none border-none p-2 text-2xl text-black h-10"
                type="text"
                name="name"
                id="name"
              />
            </div>
            <div className="email flex justify-between items-center w-full">
              <label htmlFor="email" className="w-28 mr-2">
                <h3 className="text-2xl cursor-pointer">Email</h3>
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="satendra@gmail.com"
                className="w-[30vw] placeholder-black/30 rounded-md outline-none border-none p-2 text-2xl text-black h-10"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="message flex justify-between items-center w-full">
              <label htmlFor="message" className="mr-2 w-28">
                <h3 className="text-2xl cursor-pointer">Message</h3>
              </label>
              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows="4"
                cols="23"
                placeholder="You are literally Great!"
                className=" placeholder-black/30 resize-none w-[30vw] h-28 rounded-md outline-none border-none p-2 text-2xl text-black"
                name="message"
                id="message"
              />
            </div>
            <button onClick={putData}>
              <div className="container py-2 mt-5 w-full rounded-full flex justify-center items-center">
                <h1 className="flex capitalize items-center justify-between h-7 font-thin">
                  <Buton text={"SUBMIT"} extra={"w-20"} />
                </h1>
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
