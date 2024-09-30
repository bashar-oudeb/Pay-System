import app from '../../assets/home/fees/vector (1).png'
import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger  } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Fees = () => {

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
    <section ref={container} className=" pt-20 xl:pt-0 xl:-mt-32 xl:px-7 md:pt-28 xl:flex xl:items-center xl:justify-between ">
      <div className=" xl:w-2/5 xl:pl-11 ">
        <div className="">
          <h4 className="bottom font-Roboto  text-base text-primary text-center xl:text-start" >
            NO HIDDEN FEES
          </h4>
          <h1 className="right mt-2 font-Roboto  text-white text-3xl md:text-4xl text-center  xl:text-start">
            <span className="text-primary ">No</span> fees or interest
          </h1>
          <p className="left px-10  md:px-36 xl:px-0 mt-4 font-Roboto font-light text-sm text-white leading-6 text-center xl:text-start" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </p>
        </div>

        <div className="pt-16 px-4 xl:px-0  grid md:grid-cols-2 xl:gap-5  ">
          <div className="">
            <div className="right flex justify-center xl:justify-start gap-4">
              <h1 className=" font-Roboto font-light text-5xl text-primary">
                0%{" "}
              </h1>
              <span className=" font-Roboto text-md text-white">
                No <br />
                Fees
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-50" />
            <div className=" pt-6">
              <p className="bottom px-4 lg:px-20 xl:px-0 font-Roboto font-light text-sm xl:text-xs text-white leading-5 text-center xl:text-start">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10 md:pt-0">
            <div className="right flex justify-center xl:justify-start  gap-4">
              <h1 className=" font-Roboto font-light text-5xl text-primary">
                0%{" "}
              </h1>
              <span className=" font-Roboto text-md text-white">
                No <br />
                Interest
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-50" />
            <div className=" pt-6">
              <p className="bottom px-4 lg:px-20 xl:px-0 font-Roboto font-light text-sm xl:text-xs text-white leading-5 text-center xl:text-start">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10 md:pt-16 md:col-span-2">
            <div className="right flex justify-center  xl:justify-start gap-4">
              <h1 className=" font-Roboto font-light text-5xl text-primary">
                2%{" "}
              </h1>
              <span className=" font-Roboto  text-md text-white">
                Unlimited <br /> Daily Cashback
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-50" />
            <div className=" pt-6">
              <p className="bottom px-4 lg:w-3/4 lg:mx-auto xl:mx-0 md:px-20 xl:px-0 font-Roboto font-light text-sm xl:text-xs text-white leading-5 text-center xl:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4  overflow-hidden ">
        <div className="left mx-auto xl:mx-0  ">
            <img src={app} alt="" className=' -mt-12 xl:mt-48 mx-auto xl:mx-0 md:w-96 xl:w-[450px]' />
        </div>
      </div>
    </section>
  );
};

export default Fees;
