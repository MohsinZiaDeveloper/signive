import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import plus from "../assets/page404/plusImage.png";
import massageIcon from "../assets/After_Send_a_form/2.svg";
import phoneIcon from "../assets/After_Send_a_form/tel.svg";
import cardImage from "../assets/After_Send_a_form/kontakt.png";
import mapImage from "../assets/Kontakt/mapimage .png";

const Kontakt = () => {
  return (
    <div className="flex flex-col relative h-auto  bg-cover bg-no-repeat  bg-[url('assets/polityka/politykaBgimage.png')] ">
      <img
        src={plus}
        alt=""
        className="h-20 w-14 absolute hidden lg:block left-10 top-56"
      />

      <Header />
      <div className="w-full  flex flex-col ">
        <div className="w-full flex flex-col lg:flex-row mt-10 lg:mt-32 gap-2 px-4 lg:px-48">
          <div className="w-full lg:w-1/2 flex justify-start border p-12 shadow-lg rounded-lg  ">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-light ">Kontakt</h3>
              <p className="mt-3 text-footerColor text-xs font-light">
                Cryptive Krzysztof Osiński <br />
                NIP: 5252853667
              </p>
              <div className="flex  items-center gap-3">
                <img src={massageIcon} alt="" className="h-4 w-4 " />
                <p className="text-footerColor text-xs font-light">
                  ul. Chmielna 2/31, 00-020 Warszawa
                </p>
              </div>
              <div className="flex  items-center gap-3">
                <img src={phoneIcon} alt="" className="h-4 w-4 " />
                <p className="text-footerColor text-xs font-light">
                  +48 500 582 410
                </p>
              </div>
              <div className="flex gap-2 items-center ">
                <img src={massageIcon} alt="" className="h-4 w-4" />
                <p className="text-footerColor text-xs font-light">
                  kontakt@signive.pl
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 border flex justify-start  items-center p-12 shadow-lg rounded-lg ">
            <div className="flex flex-col">
              <h3 className="text-2xl font-light ">Skontaktuj się z nami!</h3>
              <p className="text-footerColor text-xs mt-3 font-light">
                Masz problem z weryfikacją? Zauważyłeś błąd w serwisie? Wypełnij
                formularz i opisz sytuację. <br />
                <spa className="mt-2"> Odezwiemy się.</spa>
              </p>
            </div>
          </div>
        </div>
        {/* two cards ends  */}
        <div className="flex px-2 lg:px-48 mt-4  ">
          <div className="w-full h-auto flex  relative justify-center rounded-lg  py-5 bg-footerColor">
            <img
              src={cardImage}
              alt=""
              className="absolute hidden lg:block h-[13rem] w-[15rem] right-[-3rem] bottom-0 "
            />
            <div className="flex flex-col items-center  text-white">
              <div className="flex flex-col  items-center">
                <h3 className="text-sm font-light">Napisz do nas</h3>
                {/* <label className="mt-3 font-light text-[0.6rem] ">
                  Imię i nazwisko
                </label> */}
                <input
                  className="mt-3 font-light text-xs placeholder:text-white text-white w-full h-full bg-transparent outline-none border-none text-center"
                  placeholder="Imię i nazwisko"
                />
                <div className=" border-t-[0.02rem] mt-1 w-[20rem]"></div>

                <input
                  className="mt-3 font-light text-xs placeholder:text-white text-white w-full h-full bg-transparent outline-none border-none text-center"
                  placeholder="Adres email"
                />
                <div className=" border-t-[0.02rem] mt-1 w-[20rem]"></div>

                <input
                  className="mt-3 font-light text-xs placeholder:text-white text-white w-full h-full bg-transparent outline-none border-none text-center"
                  placeholder="  Treść wiadomości"
                />
              </div>
              <div className="mt-10 flex w-full lg:w-1/2 flex-col items-center text-white ">
                <div className=" border-t-[0.02rem] mt-1 w-[20rem]"></div>
                <div className="flex gap-3 mt-3 px-5 items-center">
                  <input type="checkbox" />
                  <p className="font-light text-[0.6rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                </div>
                <div className="flex gap-3 px-5 mt-5 items-center">
                  <input type="checkbox" />
                  <p className="font-light text-[0.6rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </div>
                <button className="text-xs mt-2 font-light px-20 py-3 rounded-[0.3rem] text-footerColor bg-white border-2 border-footerColor">
                  Wyślij
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* blue card ends  */}

        <div className="flex w-full relative">
          <div className="overlay w-full "></div>
          <img
            src={mapImage}
            className="h-[13rem] lg:h-[32rem]  w-full "
            alt=""
          />
        </div>
        {/* map ends  */}
      </div>
      <div className="mt-[-5rem]">
        <Footer />
      </div>
    </div>
  );
};

export default Kontakt;
