import arrow from "../../assets/arrow.svg";
import Monocard from "../../assets/home/hero/Monocard Front Side.png";
import wallet from "../../assets/home/hero/App - Wallet.png";
import visa from "../../assets/home/hero/visa.svg";
import line from "../../assets/seperator.svg";
import {  useRef } from "react"; // Import React hooks
import gsap from 'gsap'; // Import GSAP for animations
import { useGSAP } from '@gsap/react'; // Import GSAP React plugin

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const container = useRef(null);

  useGSAP(
    () => {
        // gsap code 
        gsap.fromTo('.right', { x: 200   }, { x: 0  ,duration:3});
        gsap.fromTo('.left ', { x: -100  }, { x: 0  ,duration:3});
        gsap.fromTo('.left2 ', { x: -300  }, { x: 0  ,duration:3});
        gsap.fromTo('.bottom ', { y: 200  }, { y: 0  ,duration:3});
        gsap.fromTo('.top ', { y: -100  }, { y: 0  ,duration:3});
    },
    { scope: container }
);
  return (
    <section ref={container} className=" pt-10 px-5 lg:px-8 overflow-hidden ">
      <div className=" lg:flex lg:items-center">
        <div className=" lg:w-2/5  lg:self-start lg:mt-16">
          <div className="">
            <h1 className="right text-white font-Roboto font-light text-5xl lg:text-6xl text-center lg:text-start">
              <span className=" text-primary">One</span> Payment Card for all
            </h1>
          </div>
          <div className=" mt-10">
            <p className="left font-Roboto text-white font-light text-sm leading-5 text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </p>
            <p className="right mt-5 md:mt-3 md:px-12 lg:px-0 font-Roboto text-white font-light text-sm leading-5 text-center lg:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis.
            </p>
          </div>
          <button className="bottom mt-7 flex items-center  gap-1 mx-auto lg:mx-0 border px-4 py-2 border-[#999999] rounded-full  ">
            <img src={arrow} alt="" className=" w-4" />
            <span className="text-secondary font-Roboto text-sm hover:text-gray-100 transition-all">
              GET MONOPAY
            </span>
          </button>
        </div>

        <div className=" pt-10 pb-36 px-2 lg:px-0 relative md:left-36 lg:ml-8 xl:ml-20    ">
          <div className="left w-60 lg:w-64  ">
            <img
              src={Monocard}
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="right absolute -top-3 xl:-top-7 xl:-right-48 md:w-96 lg:w-[400px] xl:w-[500px]  ">
            <img src={wallet} alt="" className=" w-full h-full object-cove e " />
          </div>
        </div>
      </div>

      <div className=" mt-10 lg:-mt-24 grid md:grid-cols-2 md:gap-6  md:items-center lg:w-[600px] xl:w-[700px] ">
        <div className=" flex flex-col gap-4 ">
          <div className=" flex items-center justify-between">
            <h1 className="left2 font-Roboto font-light text-4xl text-primary">5.9M+</h1>
            <p className="right font-Roboto text-secondary text-sm ">Daily Transaction</p>
          </div>
          <img src={line} alt="" className="bottom h-1"/>
        </div>
        <div className=" mt-8 md:mt-0 flex flex-col gap-4 ">
          <div className=" flex items-center justify-between">
            <h1 className="left2 font-Roboto font-light text-4xl text-primary">8.9M+</h1>
            <p className="right font-Roboto text-secondary text-sm ">App Downloads</p>
          </div>
          <img src={line} alt="" className="bottom h-1"/>
        </div>
        <div className=" mt-8 md:mt-2 flex flex-col gap-4 md:gap-6 ">
          <div className=" flex items-center justify-between">
            <h1 className="left2 font-Roboto font-light text-4xl text-primary">+2%</h1>
            <p className="right font-Roboto text-secondary text-sm ">Unlimited Daily Cashback</p>
          </div>
          <img src={line} alt=""  className="bottom h-1  "/>
        </div>

        <div className=" mt-8 md:mt-0 flex flex-col gap-4 ">
          <div className=" flex items-center justify-between">
            <img src={visa} alt=""  className="left2 w-28  "/>
            <p className="right font-Roboto text-secondary text-sm md:text-end ">We partner with top–tier companies.</p>
          </div>
          <img src={line} alt=""  className="bottom h-1"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
