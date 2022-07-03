/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import logo from "../assets/logo.png";
// const Header = () => {
//   return (
//     <div>
//       <div className="w-full flex-col lg:flex lg:flex-row p-8 px-20">
//         <div className="w-full flex justify-center lg:justify-start  lg:w-1/4">
//           <img src={logo} className="h-10 w-30" alt="" />
//         </div>
//         <div className="w-full hidden lg:block">
//           <ul className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-0 lg:gap-14 text-xs font-medium justify-end items-center text-logoColor">
//             <li>STRONA GŁÓWNA</li>
//             <li>WERYFIKACJA</li>
//             <li>WSPIERANE CENTRA</li>
//             <li>FUNKCJONALNOŚCI</li>
//             <li>KONTAKT</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/Weryfikacja/menu.png";

const navLinks = [
  {
    Link: "STRONA GŁÓWNA",
    To: "/#home",
  },
  {
    Link: "WERYFIKACJA",
    To: "/#passes777",
  },
  {
    Link: "WSPIERANE CENTRA",
    To: "/#roadMap",
  },
  {
    Link: "FUNKCJONALNOŚCI",
    To: "/#meetTeam",
  },
  {
    Link: "KONTAKT",
    To: "/#walletCollection",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const [screenDimension, setScreenDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    let timeout;
    const handleResize = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScreenDimension({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 400);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" h-[5rem] mt-2">
      <div className=" w-full h-[4.5rem] px-2 lg:px-20  bg-transparent z-[50] ">
        <div className="md:flex items-center justify-between relative  md:px-10 h-full px-7">
          <div className="font-bold text-2xl cursor-pointer  flex  items-center ">
            <img
              onClick={() =>
                screenDimension.width < 1280 ? setOpen(!open) : ""
              }
              src={logo}
              className="h-10 w-30"
              alt=""
            />
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            <img src={menu} className="h-8 w-8 mt-[-1rem]" alt="" />
          </div>

          <div
            className={`md:flex md:items-center h-screen  z-10 rounded-l-sm lg:rounded-none lg:h-auto  bg-footerColor  lg:bg-transparent bg-opacity-90   md:pb-0 pb-12 absolute md:static gap-10 md:z-auto  w-full  md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${
              open
                ? "right-[-25vw] top-[4.5rem] lg:top-0 "
                : "right-[-175vw] top-[4.5rem] lg:top-0"
            }`}
          >
            <ul className="md:flex md:items-center lg:gap-5 text-md lg:text-xs font-light space-y-6 lg:space-y-0 ">
              {navLinks.map((value) => {
                return (
                  <div>
                    <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-transparent rounded-full  group">
                      <span className="w-0 h-0 rounded-full bg-pinkColor absolute top-0 left-0 ease-out duration-500 transition-all  group-hover:w-full group-hover:h-full -z-1"></span>

                      <a
                        smooth
                        className="w-full py-2 px-4 lg:m-0 text-white lg:text-black font-light duration-300 ease-in-out  z-10"
                        to={value.To}
                        onClick={() => setOpen(false)}
                      >
                        {value.Link}
                      </a>
                    </button>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
