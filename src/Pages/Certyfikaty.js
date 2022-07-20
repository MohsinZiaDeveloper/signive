import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import signiveImage from "../assets/Funkcjonalnosci/signiveimage.png";
import austriaFlag from "../assets/certyfikaty/austriaFlag.png";
import belgiaFlag from "../assets/certyfikaty/belgiaFlag.png";
import bulgeriaFloag from "../assets/certyfikaty/bulgariaflag.png";
import chorFlag from "../assets/certyfikaty/chorwacFlag.png";
import islandiaFLag from "../assets/certyfikaty/islandiaFlag.png";
import czevhyFlag from "../assets/certyfikaty/czechyFlag.png";
import daniaFlag from "../assets/certyfikaty/deniaFlag.png";
import estoniaFlag from "../assets/certyfikaty/estoniaFlag.png";
import finlandFlag from "../assets/certyfikaty/firlandFlag.png";
import franceFlag from "../assets/certyfikaty/francjFlag.png";
import niemcyFlagg from "../assets/certyfikaty/niemcyFlag.png";
import grecFlag from "../assets/certyfikaty/grecjFlag.png";
import englandFlag from "../assets/certyfikaty/englandFlag.png";
import learning from "../assets/certyfikaty/learningimage.png";

const Certyfikaty = () => {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="flex flex-col relative h-auto  bg-cover bg-no-repeat  bg-[url('assets/Funkcjonalnosci/bgimageFunkcjonalnosci.png')] ">
          <Header />

          <div className="flex flex-col mt-10 px-4 lg:px-44 ">
            <div className="flex flex-col mt-5 lg:mt-20 items-center ">
              <h3 className="text-3xl font-light ">Wspierane centra</h3>
              <p className="px-4 lg:px-20 text-xs leading-5 font-light mt-3 text-center text-footerColor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                Aliquam auctor nibh vitae mauris molestie rhoncus a eu libero.
                Nullam interdum augue in ipsum rhoncus, sit amet fringilla felis
                vehicula. Donec vel viverra metus. Fusce tristique sed magna non
                tempor. Vestibulum molestie urna at turpis porta, ac sagittis
                metus tincidunt. Morbi mollis a turpis sit amet pretium.
              </p>
              <div className="flex justify-center mt-8">
                <img src={signiveImage} alt="" className="h-[9rem] w-[25rem]" />
              </div>
            </div>
            {/* top section end */}
            <div className="flex flex-col">
              <div className="flex items-center flex-col">
                <h3 className="text-2xl font-bold mt-10 ">Zaufana listy</h3>
                <p className="text-xs font-light text-footerColor leading-5 mt-3 px-4 lg:px-32 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesent pharetra suscipit rhoncus. Quisque sed quam mauris.
                  Aliquam auctor nibh vitae mauris molestie rhoncus a eu libero.
                  Nullam interdum augue in ipsum rhoncus, sit amet fringilla
                  felis vehicula. Donec vel viverra metus. Fusce tristique sed
                  magna
                </p>
              </div>
              <div className="grid grid-cols-2  lg:grid-cols-3 gap-6 mt-10">
                <div className="flex justify-start gap-3 ">
                  <div>
                    <img src={austriaFlag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Austria
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-center gap-3 ">
                  <div>
                    <img src={belgiaFlag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Austria
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-end gap-3 ">
                  <div>
                    <img src={bulgeriaFloag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Belgia
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>

                {/* flags first row end */}
                <div className="flex justify-start gap-3 ">
                  <div>
                    <img src={chorFlag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Bułgaria
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-center gap-3 ">
                  <div>
                    <img src={islandiaFLag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Chorwacja
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-end gap-3 ">
                  <div>
                    <img src={czevhyFlag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Czechy
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
                {/* sec flag row ends */}
                <div className="flex justify-start lg:justify-start gap-3 ">
                  <div>
                    <img src={daniaFlag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Dania
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-center gap-3 ">
                  <div>
                    <img src={estoniaFlag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Estonia
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-end gap-3 ">
                  <div>
                    <img src={finlandFlag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Finlandia
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>

                {/*3rd flag ends   */}

                <div className="flex justify-start gap-3 ">
                  <div>
                    <img src={franceFlag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Francja
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-center gap-3 ">
                  <div>
                    <img src={niemcyFlagg} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Niemcy
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
                <div className="flex justify-start lg:justify-end gap-3 ">
                  <div>
                    <img src={grecFlag} className="h-full w-14" alt="" />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <h3 className="text-sm font-medium text-footerColor">
                      Grecja
                    </h3>
                    <p className="text-xs text-footerColor opacity-80 font-light ">
                      Data wydania 2022-04-07
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full mt-20 justify-center">
                <div className="w-auto">
                  <button className="text-xs mt-5 font-medium px-10 py-3 rounded-[0.3rem] text-footerColor bg-white border-2 border-footerColor">
                    Zobacz więcej
                  </button>
                </div>
              </div>
            </div>
            {/* sec sec ends */}
            <div className="flex justify-center px-2 lg:px-10 mt-20 ">
              <div className="flex flex-col items-center bg-white rounded-lg shadow-2xl p-8">
                <img src={englandFlag} className="h-9 w-14 " alt="" />
                <h3 className="text-xs mt-3 font-normal text-footerColor">
                  Wielka Brytania
                </h3>
                <p className="text-[0.6rem] font-light">
                  Data wydania 2022-04-07
                </p>
                <h3 className="text-2xl font-bold mt-5 ">eIDAS TLs Scheme</h3>
                <p className="text-xs font-light mt-10 leading-5 px-4 lg:px-32 text-center pb-5 text-footerColor">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque in porta odio. Suspendisse a ullamcorper lectus, ac
                  euismod erat. Proin rhoncus vehicula finibus. Aenean sit amet
                  rhoncus mauris. Curabitur odio lorem, consectetur at massa
                  quis, lobortis gravida nisi. Suspendisse accumsan felis et
                  diam viverra, sed placerat metus volutpat. Suspendisse ornare
                  semper fringilla. Nulla sapien ante, eleifend sit amet augue
                  in, molestie molestie ante. Vivamus tincidunt, sem vel cursus
                  gravida, neque diam rutrum quam, vel accumsan nisl ex sed
                  massa. Vestibulum vitae sagittis nunc, ac condimentum massa.
                </p>
              </div>
            </div>
            {/* third sec ends */}
            <div className="flex flex-col lg:flex-row my-20 ">
              <div className="flex flex-col justify-center px-4 lg:px-20 w-full lg:w-1/2">
                <h3 className="text-2xl font-bold ">Statystyki</h3>
                <p className="text-xs font-light leading-5 text-footerColor mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque in porta odio. Suspendisse a ullamcorper lectus, ac
                  euismod erat. Proin rhoncus vehicula finibus. Aenean sit amet
                  rhoncus mauris. Curabitur odio lorem, consectetur at massa
                  quis, lobortis gravida nisi. Suspendisse accumsan felis et
                  diam viverra, sed placera
                </p>
              </div>
              <div className="flex w-full lg:w-1/2">
                <img src={learning} className="h-full w-full " alt="" />
              </div>
            </div>
            {/* fourth div  */}
          </div>

          <div className="mt-[-5rem]">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certyfikaty;
