import React from "react";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div>
      <div className="w-full flex-col lg:flex lg:flex-row p-8 px-20">
        <div className="w-full flex justify-center lg:justify-start  lg:w-1/4">
          <img src={logo} className="h-10 w-30" alt="" />
        </div>
        <div className="w-full hidden lg:block">
          <ul className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-0 lg:gap-14 text-xs font-medium justify-end items-center text-logoColor">
            <li>STRONA GŁÓWNA</li>
            <li>WERYFIKACJA</li>
            <li>WSPIERANE CENTRA</li>
            <li>FUNKCJONALNOŚCI</li>
            <li>KONTAKT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
