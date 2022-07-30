import React, { useState } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import signiveImage from "../assets/Funkcjonalnosci/signiveimage.png";
import image1 from "../assets/Funkcjonalnosci/funkconaloimage1.png";
import image2 from "../assets/Funkcjonalnosci/laptopimage2.png";
import image3 from "../assets/Funkcjonalnosci/falconoimage3.png";
import img1 from "../assets/Strona/1.svg";
import img2 from "../assets/Strona/2.svg";
import img3 from "../assets/Strona/3.svg";
import img4 from "../assets/Strona/4.svg";
import officeimg1 from "../assets/Funkcjonalnosci/officeimg1.jpg";
import officeimg2 from "../assets/Funkcjonalnosci/officeimg2.jpg";
import officeimg3 from "../assets/Funkcjonalnosci/officeimg3.jpg";
import officeimg4 from "../assets/Funkcjonalnosci/officeimg4.jpg";
import arrowup from "../assets/Funkcjonalnosci/arrowupicon.png";
import arrowdown from "../assets/Funkcjonalnosci/arrowDownIocn.png";

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

const Funkcjonalnosci = () => {
  const [click, setClick] = useState(0);
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex flex-col relative h-auto  bg-cover bg-no-repeat  bg-[url('assets/Funkcjonalnosci/bgimageFunkcjonalnosci.png')] ">
          {/* <img
        src={plus}
        alt=""
        className="h-20 w-14 absolute hidden lg:block left-10 top-56"
      /> */}

          <Header />

          <div className="flex flex-col px-4 lg:px-44 ">
            <div className="flex flex-col mt-5 lg:mt-20 items-center ">
              <h3 className="text-3xl font-light ">Funkcjonalnosci</h3>
              <p className="px-4 lg:px-20  leading-5 text-xs font-light mt-3 text-center text-footerColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                Aliquam auctor nibh vitae mauris molestie rhoncus a eu libero.
                Nullam interdum augue in ipsum rhoncus, sit amet fringilla felis
                vehicula. Donec vel viverra metus. Fusce tristique sed magna non
                tempor. Vestibulum molestie urna at turpis porta, ac sagittis
                metus tincidunt. Morbi mollis a turpis sit amet pretium.
              </p>
              <div className="flex justify-center mt-10">
                <img src={signiveImage} alt="" className="h-[9rem] w-[25rem]" />
              </div>
            </div>
            {/* top section end */}
            <div className="flex flex-col lg:flex-row w-full mt-10  ">
              <div className="w-full  lg:w-1/2 hidden lg:flex justify-center items-center ">
                <img
                  src={image1}
                  alt=""
                  className="h-[18rem]  w-[18rem] object-contain"
                />
              </div>
              <div className="w-full mt-10 lg:mt-0 lg:w-1/2 flex    items-center relative flex-row  ">
                <h1 className="absolute left-0 top-0 text-[4rem] font-bolder text-footerColor opacity-20 ">
                  1.
                </h1>
                <div className="flex mt-5 flex-col pl-10">
                  <h3 className="text-2xl font-light ">Prześlij plik</h3>
                  <p className="mt-5 font-light leading-5   text-xs text-footerColor">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                    Aliquam auctor nibh vitae mauris molestie rhoncus a eu
                    libero. Nullam interdum augue in ipsum rhoncus, sit amet
                    fringilla felis vehicula. Donec vel viverra metus. Fusce
                    tristique sed magna non tempor.
                  </p>
                </div>
              </div>
            </div>
            {/* first section ends  */}
            <div className="flex flex-col lg:flex-row w-full mt-10  ">
              <div className="w-full lg:w-1/2 flex  items-center relative flex-row  ">
                <h1 className="absolute left-0 top-0 text-[4rem] font-bolder text-footerColor opacity-20 ">
                  2.
                </h1>
                <div className="flex mt-5 flex-col pl-10">
                  <h3 className="text-2xl font-light ">Werfikacja</h3>
                  <p className="mt-5 leading-5 font-light text-xs text-footerColor">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                    Aliquam auctor nibh vitae mauris molestie rhoncus a eu
                    libero. Nullam interdum augue in ipsum rhoncus, sit amet
                    fringilla felis vehicula. Donec vel viverra metus. Fusce
                    tristique sed magna non tempor.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 hidden  lg:flex justify-center items-center ">
                <img
                  src={image2}
                  alt=""
                  className="h-[18rem]  w-[18rem] object-contain"
                />
              </div>
            </div>
            {/* section 2 ends  */}
            <div className="flex flex-col lg:flex-row w-full mt-10  ">
              <div className="w-full hidden  lg:w-1/2 lg:flex justify-center items-center ">
                <img
                  src={image3}
                  alt=""
                  className="h-[18rem]  w-[18rem] object-contain"
                />
              </div>
              <div className="w-full lg:w-1/2 flex  items-center relative flex-row  ">
                <h1 className="absolute left-0 top-0 text-[4rem] font-bolder text-footerColor opacity-20 ">
                  3.
                </h1>
                <div className="flex mt-5 flex-col pl-10">
                  <h3 className="text-2xl font-light ">Prześlij plik</h3>
                  <p className="mt-5 font-light leading-5 text-xs text-footerColor">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                    Aliquam auctor nibh vitae mauris molestie rhoncus a eu
                    libero. Nullam interdum augue in ipsum rhoncus, sit amet
                    fringilla
                  </p>
                </div>
              </div>
            </div>
            {/* section 3 ends  */}

            <div className="flex mt-24 flex-col w-full ">
              <div className="w-full mt-10 grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-4 px-4 lg:px-20">
                <div className="w-[full] flex shadow-xl py-5 px-5 flex-col items-center ">
                  <img src={img1} className="h-16 w-16" alt="" />
                  <h3 className="text-xs mt-3 px-5 text-logoColor font-bold text-center ">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-xs font-light text-center mt-4 opacity-60">
                    elit Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className="w-[full] flex shadow-xl py-5 px-5 flex-col items-center ">
                  <img src={img2} className="h-16 w-16" alt="" />
                  <h3 className="text-xs mt-3 px-5 text-logoColor font-bold text-center ">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-xs font-light text-center mt-4 opacity-60">
                    elit Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className="w-[full] flex shadow-xl py-5 px-5 flex-col items-center ">
                  <img src={img3} className="h-12 w-12 mt-3 " alt="" />
                  <h3 className="text-xs mt-3 px-5 text-logoColor font-bold text-center ">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-xs font-light text-center mt-4 opacity-60">
                    elit Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className="w-[full] flex shadow-xl py-5 px-5 flex-col items-center bg-white ">
                  <img src={img4} className="h-16 w-16" alt="" />
                  <h3 className="text-xs mt-3 px-5 text-logoColor font-bold text-center ">
                    Lorem ipsum dolor
                  </h3>
                  <p className="text-xs font-light text-center mt-4 opacity-60">
                    elit Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod Lorem ipsum dolor sit amet
                  </p>
                </div>
              </div>
            </div>

            <div className="flex px-4 lg:px-20 mt-10  ">
              <div className="flex flex-col rounded-lg py-16 p-10 shadow-2xl items-center">
                <h3 className="text-2xl font-light ">Szybko i bezpiecznie</h3>
                <p className="text-xs mt-10 px-2 leading-5 lg:px-20 text-center font-light text-footerColor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                  Aliquam auctor nibh vitae mauris molestie rhoncus a eu libero.
                  Nullam interdum augue in ipsum rhoncus, sit amet fringilla
                  felis vehicula. Donec vel viverra metus. Fusce tristique sed
                  magna non tempor. Vestibulum molestie urna at turpis porta, ac
                  sagittis metus tincidunt. Morbi mollis a turpis sit amet
                  pretium.
                </p>
              </div>
            </div>
            {/* section 4 ends  */}

            <div className="flex mt-10 flex-col">
              <div className="flex justify-center">
                <h3 className="text-2xl font-light ">Co mówią nasi klienci</h3>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 py-10 ">
                <div className="flex flex-col items-center">
                  <img
                    src={officeimg1}
                    className="h-32 w-32 object-cover rounded-full"
                    alt=""
                  />
                  <p className="text-[0.6rem] mt-5 font-light opacity-60 px-10 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing pharetra.
                    Praesent pharetra suscipit pharetra pharetra suscipit
                    rhoncus.
                  </p>
                  <h3 className="text-footerColor mt-5 font-bold text-xs">
                    pharetra suscipit{" "}
                  </h3>
                  <p className="text-[0.6rem] text-footerColor font-light">
                    Praesent pharetra suscipit rhoncus{" "}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={officeimg2}
                    className="h-32 w-32 object-cover rounded-full"
                    alt=""
                  />
                  <p className="text-[0.6rem] mt-5 font-light opacity-60 px-10 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing pharetra.
                    Praesent pharetra suscipit pharetra pharetra suscipit
                    rhoncus.
                  </p>
                  <h3 className="text-footerColor mt-5 font-bold text-xs">
                    pharetra suscipit{" "}
                  </h3>
                  <p className="text-[0.6rem] text-footerColor font-light">
                    Praesent pharetra suscipit rhoncus{" "}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={officeimg3}
                    className="h-32 w-32 object-cover rounded-full"
                    alt=""
                  />
                  <p className="text-[0.6rem] mt-5 font-light opacity-60 px-10 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing pharetra.
                    Praesent pharetra suscipit pharetra pharetra suscipit
                    rhoncus.
                  </p>
                  <h3 className="text-footerColor mt-5 font-bold text-xs">
                    pharetra suscipit{" "}
                  </h3>
                  <p className="text-[0.6rem] text-footerColor font-light">
                    Praesent pharetra suscipit rhoncus{" "}
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src={officeimg4}
                    className="h-32 w-32 object-cover rounded-full"
                    alt=""
                  />
                  <p className="text-[0.6rem] mt-5 font-light opacity-60 px-10 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing pharetra.
                    Praesent pharetra suscipit pharetra pharetra suscipit
                    rhoncus.
                  </p>
                  <h3 className="text-footerColor mt-5 font-bold text-xs">
                    pharetra suscipit{" "}
                  </h3>
                  <p className="text-[0.6rem] text-footerColor font-light">
                    Praesent pharetra suscipit rhoncus{" "}
                  </p>
                </div>
              </div>
            </div>
            {/* section 5 ends  */}

            <div className="flex mt-10 flex-col">
              <div className="flex flex-col items-center">
                <h3 className="text-2xl font-light ">
                  Najczęściej zadawane pytania
                </h3>
                <p className="text-xs mt-5 leading-5  font-light text-center  text-footerColor px-5 lg:px-20">
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
                <div className="flex flex-col z-50 ">
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
                            <p className="px-8 py-4 leading-5 text-[0.6rem] lg:text-xs font-light opacity-90">
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

export default Funkcjonalnosci;
