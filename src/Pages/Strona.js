import React from "react";
import websiteImage from "../assets/Strona/website.png";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Strona = () => {
  return (
    <div className="flex flex-col relative h-auto   bg-cover bg-no-repeat  bg-[url('assets/Strona/StronaBgimage.png')] ">
      <Header />
      <div className="w-full flex px-4 lg:px-[10rem] mt-10 ">
        <div className="flex w-full lg:w-1/2 justify-start  items-center ">
          <div className="flex flex-col  items-start p-0 lg:pr-20">
            <h3 className=" text-lg lg:text-3xl font-bold opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </h3>
            <p className="text-xs font-light opacity-60 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <button className="text-xs mt-5 font-medium px-10 py-3 rounded-[0.3rem] text-white bg-footerColor border-2 border-lightfooterColor">
              WERYFIKUj PLIKI
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 justify-center  hidden lg:flex">
          <img src={websiteImage} alt="" className="h-[26rem] w-[full]" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Strona;
