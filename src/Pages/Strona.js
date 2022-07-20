import React, { useState } from "react";
import websiteImage from "../assets/Strona/website.png";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import mobile from "../assets/Strona/mobile.png";
import downloadIcon from "../assets/Strona/downloadIcon.png";
import img1 from "../assets/Strona/1.svg";
import img2 from "../assets/Strona/2.svg";
import img3 from "../assets/Strona/3.svg";
import img4 from "../assets/Strona/4.svg";
import map from "../assets/Strona/map.png";
import locationIcon from "../assets/Strona/place.svg";
import plus from "../assets/page404/plusImage.png";
import file from "../assets/file.png";

const Strona = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="flex flex-col relative h-auto items-center   bg-cover bg-no-repeat  bg-[url('assets/Strona/StronaBgimage.png')] ">
      <div className="container">
        <img
          src={plus}
          alt=""
          className="h-26 w-16 absolute hidden lg:block right-10 top-[74rem]"
        />
        <Header />
        {/* First Section  */}
        <div className="w-full flex flex-col lg:flex-row px-4 lg:px-[10rem] pt-32 pb-20 ">
          <div className="flex w-full lg:w-1/2 justify-start  items-center ">
            <div className="flex flex-col  items-center lg:items-start p-0 lg:pr-20">
              <h3 className=" text-lg lg:text-3xl font-bold opacity-80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </h3>
              <p className="text-sm font-light opacity-60 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
              <button className="text-sm mt-5 font-medium px-10 py-3 rounded-[0.3rem] text-white bg-footerColor border-2 border-lightfooterColor">
                WERYFIKUj PLIKI
              </button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 justify-center flex">
            <img
              src={websiteImage}
              alt=""
              className="h-[15rem] mt-10 lg:mt-0 lg:h-[26rem] w-[full]"
            />
          </div>
        </div>

        {/* Second Section  */}
        <div className="w-full flex px-4 mt-24 lg:px-[10rem]">
          <div className="w-1/3 hidden lg:flex z-[50]">
            <img src={mobile} alt="" className="h-auto w-full" />
          </div>
          <div className="w-full ">
            <div className=" flex  flex-col items-center">
              <h3 className="text-3xl font-bold">Werfikacja</h3>
              <p className="text-center text-footerColor leading-5 text-xs mt-3 px-28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                adipiscing elit
              </p>
            </div>
            <div className="h-[24rem] lg:h-[20rem]  mt-5  ml-[-1rem] bg-right  bg-contain bg-no-repeat rounded-md border-2 border-lightfooterColor  bg-[url('assets/Strona/centra.png')]">
              <div className="bg-footerColor rounded-md h-full w-full bg-opacity-90 flex flex-col items-center  ">
                <div className="h-24 w-24 border-2 mt-10 border-white p-1  rounded-full">
                  <div
                    className="h-full relative w-full z-20 cursor-pointer flex justify-center items-center rounded-full bg-lightfooterColor"
                    for="file_input"
                  >
                    {selectedImage ? (
                      <img
                        alt="not fount"
                        className="h-full w-full rounded-full object-cover"
                        src={URL.createObjectURL(selectedImage)}
                      />
                    ) : (
                      <img src={file} alt="" className="h-10 w-8" />
                    )}

                    <input
                      className="opacity-0 absolute h-full  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                      }}
                    ></input>
                  </div>
                  {/* 
                  <div>
                    {selectedImage ? (
                      <div>
                        <img
                          alt="not fount"
                          width={"250px"}
                          src={URL.createObjectURL(selectedImage)}
                        />
                        <br />
                        <button onClick={() => setSelectedImage(null)}>
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div
                        className="h-full relative w-full z-20 cursor-pointer flex justify-center items-center rounded-full bg-lightfooterColor"
                        for="file_input"
                      >
                        <img
                          src={downloadIcon}
                          for="file_input"
                          alt=""
                          className="h-8 w-8 "
                        />
                      </div>
                    )}

                    <input
                      type="file"
                      id="file_input"
                      className="opacity-0"
                      name="myImage"
                      onChange={(event) => {
                        console.log(event.target.files[0]);
                        setSelectedImage(event.target.files[0]);
                      }}
                    />
                  </div> */}
                </div>
                <h3 className="text-white text-md font-normal mt-2">
                  Podstawowe Funkcionalosci
                </h3>
                <div className="flex px-10 mt-3">
                  {/* <div className="h-3 w-6 mt-1 bg-white rounded-sm"></div> */}
                  <input
                    className="h-5 w-7   border-none outline-none focus:outline-none"
                    type="checkbox"
                  />
                  <p className="text-xs text-white leading-5   ml-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet,
                    consectetur adipiscing
                  </p>
                </div>
                <button
                  className="text-sm relative mt-5 font-medium px-10 py-3 rounded-[0.3rem] text-footerColor bg-white border-2 border-footerColor"
                  for="file_input1"
                >
                  Strona główna
                  <input
                    className="opacity-0 left-0 top-0 absolute h-full  w-full "
                    id="file_input1"
                    type="file"
                  ></input>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className="flex px-2 lg:px-[10rem] mt-24 flex-col w-full ">
          <div className="flex flex-col w-full items-center">
            <h3 className="text-3xl font-bold ">Podstawowe Funkcionalosci</h3>
            <p className="text-sm font-light text-footerColor leading-5 mt-5 text-center px-20">
              do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
              adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
          </div>
          <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-4 px-20">
            <div className="w-[full] flex shadow-xl py-5 px-5 flex-col items-center ">
              <img src={img1} className="h-16 w-16" alt="" />
              <h3 className="text-sm mt-3 px-5 text-logoColor font-bold text-center ">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm font-light text-center mt-4 opacity-60">
                elit Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="w-[full] flex shadow-xl py-5 px-5 flex-col items-center ">
              <img src={img2} className="h-16 w-16" alt="" />
              <h3 className="text-sm mt-3 px-5 text-logoColor font-bold text-center ">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm font-light text-center mt-4 opacity-60">
                elit Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="w-[full] flex shadow-xl py-5 px-5 flex-col items-center ">
              <img src={img3} className="h-12 w-12 mt-3 " alt="" />
              <h3 className="text-sm mt-3 px-5 text-logoColor font-bold text-center ">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm font-light text-center mt-4 opacity-60">
                elit Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod Lorem ipsum dolor sit amet
              </p>
            </div>
            <div className="w-[full] flex shadow-xl py-5 px-5 flex-col items-center ">
              <img src={img4} className="h-16 w-16" alt="" />
              <h3 className="text-sm mt-3 px-5 text-logoColor font-bold text-center ">
                Lorem ipsum dolor
              </h3>
              <p className="text-sm font-light text-center mt-4 opacity-60">
                elit Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
        </div>
        {/* fourth Section */}
        <div className="flex px-2 lg:px-[10rem] bg-white lg:bg-transparent  mt-24 flex-col w-full">
          <div className="flex flex-col w-full items-center">
            <h3 className="text-3xl font-bold ">Wspierane Centra</h3>
            <p className="text-sm font-light text-footerColor mt-5 leading-5 text-center px-20">
              do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
              adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur
              adipiscing
            </p>
          </div>
          <div className="w-full relative flex justify-center">
            <img src={map} className="h-[20rem] w-[30rem] mt-10 " alt="" />
            <img
              src={locationIcon}
              className="h-8 w-8 mt-10 absolute top-10 left-90 "
              alt=""
            />
            <img
              src={locationIcon}
              className="h-8 w-8 mt-10 absolute top-32 left-90 "
              alt=""
            />
            <img
              src={locationIcon}
              className="h-8 w-8 mt-10 absolute top-32 left-60 "
              alt=""
            />
            <img
              src={locationIcon}
              className="h-8 w-8 mt-10 absolute bottom-10 right-60 "
              alt=""
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Strona;
