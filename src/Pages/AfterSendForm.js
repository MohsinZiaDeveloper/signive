import React from "react";

import cardImage from "../assets/After_Send_a_form/kontakt.png";
import circleplus from "../assets/After_Send_a_form/plusCircle.png";
import Footer from "../Components/Footer";

import Header from "../Components/Header";

const AfterSendForm = () => {
  return (
    <div>
      <div className="flex flex-col relative h-screen  bg-cover bg-no-repeat  bg-[url('assets/page404/404bgImage.png')] ">
        <img
          src={circleplus}
          className="h-[12.5rem] w-[13rem] absolute left-[-2rem] top-[30%] "
          alt=""
        />
        <Header />

        <div className="flex w-full p-0 lg:pt-32 pt-10 lg:px-36">
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
        <Footer />
      </div>
    </div>
  );
};

export default AfterSendForm;
