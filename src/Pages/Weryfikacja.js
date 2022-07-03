import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import arrowup from "../assets/Funkcjonalnosci/arrowupicon.png";
import arrowdown from "../assets/Funkcjonalnosci/arrowDownIocn.png";
import pencil from "../assets/Weryfikacja/pencil.png";
import downloadIcon from "../assets/Strona/downloadIcon.png";
import signiveImage from "../assets/Funkcjonalnosci/signiveimage.png";
import officeimage1 from "../assets/Weryfikacja/wakimage2.png";

const dropDowndata = [
  { title: "Donec nec accumsan libero?", open: true },
  { title: "Nullam euismod consectetur enim sed suscipit?", open: true },
  {
    title:
      "Fusce posuere dolor eu placerat condimentum. Vivamus interdum leo quis justo fringilla?",
    open: true,
  },
  {
    title: "Donec nec accumsan libero?",
    open: true,
  },
  {
    title: "Nullam euismod consectetur enim sed suscipit?",
    open: true,
  },
];

const Weryfikacja = () => {
  const [click, setClick] = useState(0);
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex flex-col relative h-auto  bg-cover bg-no-repeat  bg-[url('assets/Weryfikacja/WeryfikacjaBackground.png')] ">
          <Header />

          <div className="flex flex-col px-4 mt-0 lg:mt-20 lg:px-32 ">
            <div className="flex flex-col lg:flex-row">
              <div className="flex  w-full lg:w-1/2  ">
                <div className="flex flex-col">
                  <p className="text-sm lg:text-3xl font-bold pr-20 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor
                  </p>
                  <p className="text-[0.6rem] lg:text-xs font-light mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed{" "}
                    <br />
                    do eiusmod tempor
                  </p>
                  <div className="w-auto mt-5">
                    <button className="text-xs font-light px-10 py-3 rounded-[0.3rem] text-white bg-buttonColor">
                      WERYFIKUj PLIKI
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex w-full lg:w-1/2">
                <img
                  src={pencil}
                  className="h-[12rem] lg:h-[22rem] w-full mt-10 lg:mt-[-5rem] "
                  alt=""
                />
              </div>
            </div>

            {/* first section ends  */}
            <div className="w-full flex px-4 mt-24 lg:px-[10rem]">
              <div className="w-full ">
                <div className=" flex  flex-col items-center">
                  <h3 className="text-3xl font-bold">Werfikacja</h3>
                  <p className="text-center text-footerColor text-[0.7rem] mt-3 px-4 lg:px-28">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit
                  </p>
                </div>
                <div className="h-[22rem] lg:h-[18rem]  mt-5  bg-contain bg-no-repeat rounded-md border-2 border-lightfooterColor  bg-[url('assets/Strona/centra.png')]">
                  <div className="bg-footerColor rounded-md h-full w-full opacity-90 flex flex-col items-center  ">
                    <div className="h-20 w-20 border-2 mt-10 border-white p-1 opacity-70 rounded-full">
                      <div className="h-full w-full flex justify-center items-center rounded-full bg-lightfooterColor">
                        <img src={downloadIcon} alt="" className="h-8 w-8 " />
                      </div>
                    </div>
                    <h3 className="text-white text-md font-normal mt-2">
                      Podstawowe Funkcionalosci
                    </h3>
                    <div className="flex px-10 mt-3">
                      <div className="h-3 w-6 mt-1 bg-white rounded-sm"></div>
                      <p className="text-[0.6rem] text-white   ml-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod Lorem ipsum
                        dolor sit amet, consectetur adipiscing
                      </p>
                    </div>
                    <button className="text-xs mt-5 font-medium px-10 py-3 rounded-[0.3rem] text-footerColor bg-white border-2 border-footerColor">
                      Strona główna
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* second section end  */}
            <div className="flex flex-col lg:flex-row my-10 mt-32 px-4 lg:px-10">
              <div className="flex w-full lg:w-1/2 justify-center">
                <img src={signiveImage} alt="" className="h-[8rem] w-[20rem]" />
              </div>
              <div className="flex w-full lg:w-1/2 flex-col items-start ">
                <h3 className="text-3xl font-bold mt-10 lg:mt-0 ">
                  Najwyższa jakość
                </h3>
                <p className="text-xs font-light  leading-5 mt-5 pr-10 text-footerColor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                  Aliquam auctor nibh vitae mauris molestie rhoncus a eu libero.
                  Nullam interdum augue in ipsum rhoncus, sit amet fringilla
                  felis vehicula. Donec vel viverra metus. Fusce tristique sed
                  magna non tempor.{" "}
                </p>
              </div>
            </div>

            {/* third sec ends  */}

            <div className="flex flex-col lg:flex-row mt-20 ">
              <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="text-3xl font-bold">Funkcjonalności</h3>
                <p className="text-xs font-light pr-0 lg:pr-24 mt-5 text-footerColor leading-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                  Aliquam auctor nibh vitae mauris molestie rhoncus a eu libero.
                  Nullam interdum augue in ipsum rhoncus, sit amet fringilla
                  felis vehicula. Donec vel viverra metus. Fusce tristique sed
                  magna non tempor. Vestibulum molestie urna at turpis porta, ac
                  sagittis metus tincidunt. Morbi mollis a turpis sit amet
                  pretium.
                </p>
                <div className="w-auto">
                  <button className="text-xs mt-5 font-medium px-10 py-3 rounded-[0.3rem] text-footerColor bg-white border-2 border-footerColor">
                    Strona główna
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <img
                  src={officeimage1}
                  className="h-full w-full mt-5 lg:mt-0"
                  alt=""
                />
              </div>
            </div>
            {/* fourth section ends  */}

            <div className="flex mt-5 lg:mt-32 flex-col">
              <div className="flex flex-col items-center">
                <h3 className=" text-sm lg:text-3xl font-bold ">
                  Najczęściej zadawane pytania
                </h3>
                <p className="text-[0.6rem] lg:text-xs mt-10 font-light text-center  text-footerColor px-5 lg:px-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                  Aliquam auctor nibh vitae mauris molestie rhoncus a eu libero.
                  Nullam interdum augue in ipsum rhoncus, sit amet fringilla
                  felis vehicula. Donec vel viverra metus. Fusce tristique sed
                  magna non tempor. Vestibulum molestie urna at turpis porta, ac
                  sagittis metus tincidunt. Morbi mollis a turpis sit amet
                  pretium.
                </p>
              </div>
              <div className="flex flex-col my-10 px-4 lg:px-20">
                {/* drop downs  */}
                <div className="flex flex-col ">
                  {dropDowndata.map((data, index) => {
                    return (
                      <div
                        className="cursor-pointer mt-5"
                        onClick={() => setClick(index)}
                      >
                        <div className="flex p-2 justify-between items-center shadow-2xl rounded-lg  ">
                          <h3 className="text-xs lg:text-sm font-light pl-5">
                            {data.title}
                          </h3>
                          <div className="cursor-pointer">
                            {click === index ? (
                              <img
                                src={arrowup}
                                alt=""
                                className="h-2 w-5 lg:w-3"
                              />
                            ) : (
                              <img src={arrowdown} alt="" className="h-2 w-3" />
                            )}
                          </div>
                        </div>
                        {click === index && (
                          <div className="mt-3">
                            <p className="px-8 py-4 text-[0.6rem] lg:text-xs font-light opacity-90">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Proin condimentum lacinia nisl, ac
                              scelerisque libero porta sit amet. Suspendisse
                              porttitor a lacus in semper. Donec nec accumsan
                              libero. Maecenas scelerisque at nunc sit amet
                              efficitur. Lorem ipsum dolor sit amet, consectetur
                              adipiscing elit. Proin condimentum lacinia nisl,
                              ac scelerisque libero porta sit amet. Suspendisse
                              porttitor a lacus in semper. Donec nec accumsan
                              libero. Maecenas scelerisque at nunc sit amet
                              efficitur.
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* section 4 ends  */}
          </div>

          <div className="mt-[-5rem]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weryfikacja;
