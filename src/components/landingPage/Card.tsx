import lock from "../../assets/home/card/Lock.svg";
import key from "../../assets/home/card/Password.svg";
import done from "../../assets/home/card/Shield Done.svg";
import app from "../../assets/home/card/vector (1).png";

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger  } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Card = () => {

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
    <section ref={container} className=" overflow-hidden -mt-28   xl:flex xl:items-center xl:flex-row-reverse xl:justify-between">
      <div className=" xl:w-2/4">
        <div className="">
          <h4 className="right font-Roboto  text-base text-primary text-center xl:text-start">
            STRONG SECURITY
          </h4>
          <h1 className="left mt-2 font-Roboto  text-white text-3xl md:text-4xl text-center xl:text-start">
            <span className="text-primary ">Your</span> Card Your Datat
          </h1>
          <p className="bottom px-10 xl:px-0 mt-4 font-Roboto font-light text-sm text-white leading-6 text-center xl:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </p>
        </div>

        <div className="pt-16 px-4 grid md:grid-cols-2">
          <div className="">
            <div className="right  flex justify-center xl:justify-start gap-4">
              <img src={done} alt="" className=" w-11" />
              <span className=" font-Roboto text-md text-white">
                Privacy
                <br />& Security
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-60" />
            <div className=" pt-6">
              <p className="bottom px-4 lg:px-20 xl:px-0  font-Roboto font-light text-sm xl:text-xs text-white leading-5 text-center xl:text-start">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10 md:pt-0">
            <div className="right  flex justify-center xl:justify-start gap-4">
              <img src={key} alt="" className=" w-11" />
              <span className=" font-Roboto text-md text-white">
                256-bit
                <br />
                Encryption
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-60" />
            <div className=" pt-6">
              <p className="bottom px-4 lg:px-20 xl:px-0  font-Roboto font-light text-sm xl:text-xs text-white leading-5 text-center xl:text-start">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10 md:pt-16 md:col-span-2">
            <div className="right flex justify-center xl:justify-start gap-4">
              <img src={lock} alt="" className=" w-11" />
              <span className=" font-Roboto  text-md text-white">
                Auto <br /> Locked
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-60" />
            <div className=" pt-6">
              <p className="bottom px-5 md:px-24 lg:px-4 xl:px-0 lg:w-3/4 lg:mx-auto xl:mx-0 font-Roboto font-light text-sm text-white leading-5 text-center xl:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom px-4 xl:pl-12 pt-16 xl:pt-0 xl:ml-10 ">
        <img src={app} alt="" className=" w-72 xl:w-[350px] mx-auto " />
      </div>
    </section>
  );
};

export default Card;
