import React from "react";
import logo from "../assets/logo.png";
import page404image from "../assets/page404/404.png";
import plus from "../assets/page404/plusImage.png";
const Page404 = () => {
  return (
    <div className="flex relative flex-col justify-center h-screen  bg-cover bg-no-repeat  bg-[url('assets/page404/404bgImage.png')]">
      <img
        src={plus}
        alt=""
        className="h-30 w-20 absolute hidden lg:block right-10 top-50"
      />
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-center mt-20 w-full">
          <img src={logo} className="h-10 w-30" alt="" />
        </div>
        <div className="w-full flex flex-col h-full  justify-center items-center">
          <img src={page404image} className="h-32 lg:h-52 " alt="" />
          <div className="w-full flex justify-center">
            <p className="text-center text-xs lg:text-md font-light text-logoColor">
              <span className=" text-lg lg:text-2xl font-light">
                Strona o podanym adresie nie istnieje
              </span>
              <br />
              Zapraszamy na stronę główną
            </p>
          </div>
          <div className="w-full flex mt-10 justify-center">
            <button className="text-xs font-light px-10 py-3 rounded-[0.3rem] text-white bg-buttonColor">
              Strona główna
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
