import React from "react";
import logo from "../assets/logo.png";
import cardImage from "../assets/After_Send_a_form/kontakt.png";
import circleplus from "../assets/After_Send_a_form/plusCircle.png";
import massageIcon from "../assets/After_Send_a_form/2.svg";
import phoneIcon from "../assets/After_Send_a_form/tel.svg";
import svgLogo from "../assets/After_Send_a_form/logoSvgicon.svg";

const AfterSendForm = () => {
  return (
    <div>
      <div className="flex flex-col relative h-screen  bg-cover bg-no-repeat  bg-[url('assets/page404/404bgImage.png')] ">
        <img
          src={circleplus}
          className="h-[12.5rem] w-[13rem] absolute left-[-2rem] top-[30%] "
          alt=""
        />

        <div className="w-full flex-col lg:flex lg:flex-row p-8 px-20">
          <div className="w-full flex justify-center lg:justify-start  lg:w-1/4">
            <img src={logo} className="h-10 w-30" alt="" />
          </div>
          <div className="w-full ">
            <ul className="flex flex-col lg:flex-row gap-6 mt-10 lg:mt-0 lg:gap-14 text-xs font-medium justify-end items-center text-logoColor">
              <li>STRONA GŁÓWNA</li>
              <li>WERYFIKACJA</li>
              <li>WSPIERANE CENTRA</li>
              <li>FUNKCJONALNOŚCI</li>
              <li>KONTAKT</li>
            </ul>
          </div>
        </div>
        <div className="flex w-full pt-32 px-36">
          <div className="card shadow-lg rounded-2xl relative  items-center py-10   bg-white flex flex-col px-72">
            <img
              src={cardImage}
              alt=""
              className="absolute h-[15rem] w-[15rem] right-[-3rem] bottom-0 "
            />
            <h3 className="text-md font-light text-logoColor mt-5">
              Dziękujemy
            </h3>
            <p className="text-center mt-5 leading-6 text-logoColor text-xs font-light">
              Twoja widaomość została wysłan prawidłowo.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Quisque in porta odio.
              Suspendisse a ullamcorper lectus, ac euismod erat. Proin rhoncus
              vehicula finibus.
            </p>

            <button className="text-xs mt-10 font-medium px-10 py-3 rounded-[0.3rem] text-footerColor bg-white border-2 border-footerColor">
              Strona główna
            </button>
          </div>
        </div>

        <div className="w-full p-8">
          <div className="bg-footerColor flex pt-10 pb-10 mt-20 rounded-2xl border-2 border-lightfooterColor ">
            <div className="w-[60%] flex">
              <div className="w-2/6 pl-10 flex flex-col">
                <img src={svgLogo} className="h-10 w-30 text-white " alt="" />
                <div className="flex">
                  <img src={massageIcon} className="h-4 w-4" alt=""></img>
                  <h3>+48 500 582 410</h3>
                </div>
                <div className="flex">
                  <img src={phoneIcon} className="h-4 w-4" alt=""></img>
                  <h3>kontakt@signive.pl</h3>
                </div>
              </div>
              <div className="w-2/6">sec</div>
              <div className="w-2/6">third</div>
            </div>
            <div className="w-[40%]">zis</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AfterSendForm;
