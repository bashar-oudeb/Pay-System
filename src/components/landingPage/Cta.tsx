import arrow from "../../assets/arrow.svg";
import appStore from "../../assets/home/cta/app_store.svg";
import googlePlay from "../../assets/home/cta/google_play.svg";
import app from "../../assets/home/cta/App - card.png";

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger  } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Cta = () => {
  const container = useRef<HTMLDivElement>(null); // Create a ref for the container element


  // UseEffect to run animations when the component mounts
  useEffect(() => {
    // Create a GSAP context to scope animations to this component
    const ctx = gsap.context(() => {
      // Define GSAP animations with ScrollTrigger
     
      gsap.fromTo('.right', 
        { x: 300,opacity: 0 }, 
        { x: 0,opacity: 1, duration: 3, delay:.9, scrollTrigger: { trigger: '.right', start: 'top 80%' } }
      );
      gsap.fromTo('.left', 
        { x: -400,opacity: 0  }, 
        { x: 0, opacity: 1, duration: 3,delay:.9, scrollTrigger: { trigger: '.left', start: 'top 80%' } }
      );
      gsap.fromTo('.bottom', 
        { y: 200,opacity: 0  }, 
        { y: 0, opacity: 1, duration: 3,delay:.9, scrollTrigger: { trigger: '.bottom', start: 'top 80%' } }
      );
    
      
    }, container);

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);
  return (
    <section ref={container} className=" pt-20 md:pt-28 px-4 xl:px-7">
      <div className=" border border-secondary rounded-3xl md:flex">
        <div className=" lg:pt-24 xl:px-14">
          <h1 className="right font-Roboto text-primary text-3xl xl:text-5xl text-center xl:text-start pt-10 ">Download today <br /> and get 2% Cashback </h1>
          <p className="left mt-10  font-Roboto font-light xl:text-sm text-secondary px-8 xl:px-0 text-center xl:text-start">Monopay available on Apple App Store and Google Play Store.</p>
          <div className=" mt-10 lg:mt-4 lg:flex lg:items-center lg:justify-center xl:justify-start lg:gap-4 xl:gap-12 ">
            <button className="right mx-auto lg:mx-0 flex items-center gap-1 border px-2 py-1 lg:py-2 border-[#999999] rounded-full  ">
              <img src={arrow} alt="" className=" w-4" />
              <span className="text-primary font-Roboto text-sm hover:text-gray-100 transition-all">
                GET MONOPAY
              </span>
            </button>
            <div className="left mt-4 lg:mt-0 flex items-center  gap-3 justify-center">
              <img src={appStore} alt=""  className=" w-11 lg:w-10"/>
              <img src={googlePlay} alt=""  className=" w-16 lg:w-13"/>
            </div>
          </div>
        </div>

        <div className=" relative overflow-hidden">
            <div className="left -mt-8 md:-mt-0 ">
                <img src={app} alt=""  className=""/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
