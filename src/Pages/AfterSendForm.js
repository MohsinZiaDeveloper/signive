import React from "react";
import logo from "../assets/logo.png";
import cardImage from "../assets/After_Send_a_form/kontakt.png";
import circleplus from "../assets/After_Send_a_form/plusCircle.png";
import massageIcon from "../assets/After_Send_a_form/2.svg";
import phoneIcon from "../assets/After_Send_a_form/tel.svg";
import svgLogo from "../assets/After_Send_a_form/logoSvgicon.svg";
import footerBgimage from "../assets/After_Send_a_form/footerbgimage.png";
import buttonIcon from "../assets/After_Send_a_form/send.png";

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
        <div className="flex w-full p-0 lg:pt-32 lg:px-36">
          <div className="card shadow-lg rounded-2xl relative  items-center py-10   bg-white flex flex-col px-4 lg:px-72">
            <img
              src={cardImage}
              alt=""
              className="absolute hidden lg:block h-[15rem] w-[15rem] right-[-3rem] bottom-0 "
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

        <div className="w-full p-0 lg:p-8">
          <div className="flex-col lg:flex lg:flex-row pt-10 pb-10 mt-20 rounded-2xl  bg-cover lg:bg-contain  bg-no-repeat  bg-[url('assets/After_Send_a_form/footerbgimage.png')]">
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
                  <h3 className="text-lg text-white font-light">
                    SZYBKI DOSTĘP
                  </h3>
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
                <h3 className="text-2xl text-white font-light">
                  Masz pytanie?
                </h3>
                <p className="text-[0.6rem] text-white font-light">
                  Wyślij nam swój adres email. Skontaktujemy się z Tobą
                  najszybciej jak to możliwe.
                </p>
                <button className="mt-5 w-[18rem] lg:w-auto text-xs font-light text-logoColor pl-8 relative pr-28 py-4 bg-white rounded-full">
                  wpisz adres email
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
    </div>
  );
};

export default AfterSendForm;
