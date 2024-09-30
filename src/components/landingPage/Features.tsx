import close from "../../assets/home/features/Close.svg";
import Chart from "../../assets/home/features/Chart.svg";
import Activity from "../../assets/home/features/Activity.svg";
import Calendar from "../../assets/home/features/Calendar.svg";
import Wallet from "../../assets/home/features/App - Wallet.png";
import vector from "../../assets/home/features/vector.png";

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger  } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Features = () => {

  const container = useRef<HTMLDivElement>(null); // Create a ref for the container element


  // UseEffect to run animations when the component mounts
  useEffect(() => {
    // Create a GSAP context to scope animations to this component
    const ctx = gsap.context(() => {
      // Define GSAP animations with ScrollTrigger
     
      gsap.fromTo('.right', 
        { x: 300,opacity: 0 }, 
        { x: 0,opacity: 1, duration: 2, delay:.5, scrollTrigger: { trigger: '.right', start: 'top 80%' } }
      );
      gsap.fromTo('.left', 
        { x: -400,opacity: 0  }, 
        { x: 0, opacity: 1, duration: 2,delay:.5, scrollTrigger: { trigger: '.left', start: 'top 80%' } }
      );
      gsap.fromTo('.bottom', 
        { y: 200,opacity: 0  }, 
        { y: 0, opacity: 1, duration: 2,delay:.5, scrollTrigger: { trigger: '.bottom', start: 'top 80%' } }
      );
    
      
    }, container);

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);
  return (
    <section ref={container} className=" pt-16 md:pt-20 xl:pt-24 overflow-hidden">
      <div className="">
        <h4 className="bottom font-Roboto font-light text-base xl:text-xl text-primary text-center">
          EXCLUSIVE FEATURES
        </h4>
        <h1 className="right mt-2 font-Roboto font-light text-white text-3xl lg:text-4xl text-center">
          <span className="text-primary ">Top</span> Monopay Features
        </h1>
        <p className="left px-10 md:px-36 mt-4 font-Roboto font-light text-sm text-white leading-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congu
        </p>
      </div>

      <div className="pt-8 xl:pt-16 px-4 xl:px-20 grid grid-cols-gridColumns md:grid-cols-2 xl:grid-cols-3 md:gap-3 xl:gap-5">
        <div className="right relative mt-10 h-[250px] border border-borders rounded-[60px] xl:col-span-2    overflow-hidden ">
          <div className=" text-center xl:text-start">
            <h1 className=" pt-8 xl:pt-10 xl:px-7 font-Roboto font-light text-4xl text-white ">
              Titanium Card
            </h1>
            <p className=" mt-3 px-4 xl:px-7 xl:w-80 font-Roboto font-light text-sm leading-5 text-white ">
              Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
              dodol eiusmod tempor incididunt.
            </p>
          </div>
          <img
            src={vector}
            alt=""
            className="w-60 xl:w-96 absolute bottom-1  right-0 "
          />
        </div>

        <div className="left mt-10 h-[250px] border border-borders rounded-[60px]">
          <div className=" px-8  flex items-center justify-between lg:justify-center xl:justify-start lg:gap-6 ">
            <h4 className=" pt-9 font-Roboto font-light text-2xl text-white ">
              2% Daily Cashback
            </h4>
            <img src={close} alt="" className=" w-8 h-8 self-end" />
          </div>
          <p className="px-4 xl:px-7 pt-7 xl:pt-4 font-Roboto font-light text-sm  leading-5 text-white text-center xl:text-start">
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>

        <div className="left mt-10 h-[250px] border border-borders rounded-[60px] text-center">
          <img src={Activity} alt="" className=" w-11 h-11 mx-auto mt-16" />
          <h1 className=" pt-4 font-Roboto font-light text-4xl text-white">
            Card Activity
          </h1>
        </div>

        <div className="bottom mt-10 h-[250px] border border-borders rounded-[60px]">
          <div className="px-8 flex items-center justify-between lg:justify-center xl:justify-start lg:gap-6">
            <h1 className="pt-9 font-Roboto font-light text-2xl text-white">
              Daily/Weekly Report
            </h1>
            <img src={close} alt="" className=" w-8 h-8 self-end" />
          </div>
          <p className="px-4 xl:px-7 pt-7 xl:pt-4  font-Roboto font-light text-sm leading-5 text-white text-center xl:text-start">
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>

        <div className="right mt-10 h-[250px] border border-borders rounded-[60px] text-center">
          <img src={Chart} alt="" className=" w-11 h-11 mx-auto mt-16" />
          <h1 className="pt-4 font-Roboto font-light text-4xl text-white">
            Card Statistics
          </h1>
        </div>

        <div className="left mt-10 h-[250px] border border-borders rounded-[60px] text-center">
          <img src={Calendar} alt="" className=" w-11 h-11 mx-auto mt-16" />
          <h1 className="pt-4 font-Roboto font-light text-4xl text-white">
            Auto Cashflow
          </h1>
        </div>

        <div className="right relative xl:flex xl:justify-between mt-10 h-[250px] border border-borders rounded-[60px] xl:col-span-2 overflow-hidden">
          <div className=" text-center xl:text-start">
            <h1 className="pt-8 xl:pt-14  xl:px-7 font-Roboto font-light text-4xl text-white">
              Exclusive Deals
            </h1>
            <p className="mt-3 px-4 xl:px-7 xl:w-80 font-Roboto font-light text-sm leading-5 text-white">
              Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
              dodol eiusmod tempor incididunt.
            </p>
          </div>
          <div className=" mt-4 w-40 xl:w-52 mx-auto  ">
            <img
              src={Wallet}
              alt=""
              className=" w-full h-full object-cover  "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
