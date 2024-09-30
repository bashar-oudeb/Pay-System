import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger  } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Steps = () => {
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
    <section ref={container} className=" pt-20 md:pt-28 overflow-hidden">
        <div className="">
        <div className="">
          <h4 className="bottom font-Roboto  text-base text-primary text-center">
          NO FEES OR INTEREST?
          </h4>
          <h1 className="left mt-2 font-Roboto  text-white text-3xl md:text-4xl text-center">
            <span className="text-primary ">How</span> does it work?
          </h1>
          <p className="right px-10 mt-4 font-Roboto font-light text-sm text-white leading-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </p>
        </div>

        <div className="pt-16 md:pt-20 xl:pt-24 px-4 xl:px-7 grid md:grid-cols-2 xl:grid-cols-4 md:gap-3 xl:gap-6">
          <div className="">
            <div className="right flex justify-center xl:justify-start gap-6">
               <h1 className=" font-Roboto font-light text-5xl text-primary">1.</h1>
              <span className=" font-Roboto text-md text-white">
                Privacy
                <br />& Security
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-50" />
            <div className=" pt-6">
              <p className="bottom  px-4 xl:px-0 font-Roboto font-light text-sm xl:text-xs text-white leading-5 text-center xl:text-start">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10 md:pt-0 xl:pt-0">
            <div className="right flex justify-center xl:justify-start gap-6">
             <h1 className=" font-Roboto font-light text-5xl text-primary">2.</h1>
              <span className=" font-Roboto text-md text-white">
                256-bit
                <br />
                Encryption
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-60" />
            <div className=" pt-6">
              <p className="bottom px-4 xl:px-0 font-Roboto font-light text-sm xl:text-xs text-white leading-5 text-center xl:text-start">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10 md:pt-16 xl:pt-0">
            <div className="left flex justify-center xl:justify-start gap-6">
              <h1 className=" font-Roboto font-light text-5xl text-primary">3.</h1>
              <span className=" font-Roboto  text-md text-white">
                Auto <br /> Locked
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-50" />
            <div className=" pt-6">
              <p className="bottom px-5 xl:px-0 font-Roboto font-light text-sm xl:text-xs text-white leading-5 text-center xl:text-start">
              Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
              sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10 md:pt-16 xl:pt-0">
            <div className="left flex justify-center xl:justify-start gap-6">
              <h1 className=" font-Roboto font-light text-5xl text-primary">4.</h1>
              <span className=" font-Roboto  text-md text-white">
                Auto <br /> Locked
              </span>
            </div>
            <hr className="left mt-6 w-44 border-primary mx-auto xl:mx-0 opacity-50" />
            <div className=" pt-6">
              <p className="bottom px-5 xl:px-0 font-Roboto font-light text-sm xl:text-xs text-white leading-5 text-center xl:text-start">
              Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
              sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps