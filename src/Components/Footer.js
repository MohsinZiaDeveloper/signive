import React from "react";
import massageIcon from "../assets/After_Send_a_form/2.svg";
import phoneIcon from "../assets/After_Send_a_form/tel.svg";
import svgLogo from "../assets/After_Send_a_form/logoSvgicon.svg";
import dotsCircle from "../assets/After_Send_a_form/dotsCircle.png";
import buttonIcon from "../assets/After_Send_a_form/send.png";

const Footer = () => {
  return (
    <div>
      <div className="w-full p-0 lg:p-8">
        <div className="flex-col lg:flex lg:flex-row pt-10 pb-10 mt-20 border-4 border-lightfooterColor relative  bg-footerColor rounded-2xl  ">
          <img
            src={dotsCircle}
            className="h-[5rem] w-[5rem] absolute bottom-[-2rem] left-[-2rem] overflow-hidden"
            alt=""
          />
          <img
            src={dotsCircle}
            className="h-[5rem] w-[5rem] absolute top-[-2rem] right-[-2rem] overflow-hidden"
            alt=""
          />
          <div className="w-full lg:w-[60%] pl-10 lg:pl-20 flex-col lg:flex lg:flex-row">
            <div className="w-full lg:w-2/6  flex items-start flex-col">
              <img src={svgLogo} className="h-10 w-30 text-white " alt="" />
              <div className="flex mt-5 gap-2 items-center">
                <img src={phoneIcon} className="h-4 w-4" alt=""></img>
                <h3 className="text-white text-sm font-light">
                  +48 500 582 410
                </h3>
              </div>
              <div className="flex mt-2 gap-2 items-center">
                <img src={massageIcon} className="h-4 w-4" alt=""></img>
                <h3 className="text-white text-sm font-light">
                  kontakt@signive.pl
                </h3>
              </div>
            </div>
            <div className="w-2/6 mt-5 flex justify-start lg:justify-end">
              <div className="w-auto">
                <h3 className="text-lg text-white font-light">SZYBKI DOSTĘP</h3>
                <ul className="flex flex-col gap-2 mt-2 text-xs font-light text-white">
                  <li>STRONA GŁÓWNA</li>
                  <li>WERYFIKACJA</li>
                  <li>WSPIERANE CENTRA</li>
                  <li>FUNKCJONALNOŚCI</li>
                </ul>
              </div>
            </div>
            <div className="w-2/6 mt-5 flex justify-start lg:justify-end">
              <div className="w-auto">
                <h3 className="text-lg text-white font-light">KONTAKT</h3>
                <ul className="flex flex-col gap-2 mt-2 text-xs font-light text-white">
                  <li>FORMULARZ</li>
                  <li>O NAS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[40%] flex mt-4 pl-5">
            <div className="border-white border-l-[0.05rem] flex flex-col pl-4 lg:pl-10 items-start">
              <h3 className="text-2xl text-white font-light">Masz pytanie?</h3>
              <p className="text-[0.6rem] text-white font-light">
                Wyślij nam swój adres email. Skontaktujemy się z Tobą
                najszybciej jak to możliwe.
              </p>
              <button className="mt-5 w-[18rem] lg:w-auto text-xs font-light text-white pl-8 relative pr-20  bg-white rounded-full">
            
                <input  type="text" className="py-4 border-0 outline-0 text-black"/>
                <div className="h-10 w-10 absolute flex items-center justify-center bg-logoColor top-1 right-1 rounded-full">
                  <img
                    className="h-5 w-5 rounded-full"
                    src={buttonIcon}
                    alt=""
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full pl-32 mt-[-1rem]  pb-5 justify-start">
        <h3 className="text-xs font-light ">
          Sygnive 2022 © All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
