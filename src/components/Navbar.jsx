import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar fixed z-[999] w-full px-20 py-8 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-3xl">Satendra</h1>
        </div>
        <div className="links flex gap-x-10">
          {["Services", "Our Work", "About Us", "Insights", "Contact Us"].map(
            (item, index) => (
              <a
                className={`text-md font-light capitalize ${
                  index === 4 && "ml-40"
                }`}
                key={index}
                href="#"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;