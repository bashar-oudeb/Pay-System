import img from "../../assets/home/blog/img.png";
import img2 from "../../assets/home/blog/img (1).png";
import img3 from "../../assets/home/blog/img (2).png";
import arrow from "../../assets/home/blog/Arrow.png";
import seperator from "../../assets/seperator.svg";

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger  } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Blog = () => {

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
    <section ref={container} className=" px-4 pt-20 md:pt-28 overflow-hidden">
      <div className=" grid  lg:grid-cols-2 lg:grid-rows-2 lg:gap-4 ">
        <div className="lg:row-span-2	 md:w-3/4 lg:w-full  md:mx-auto xl:px-7">
          <div className="">
            <div className=" right h-[400px]  border border-[#262626] rounded-[62px]">
              <img src={img} alt="" className=" h-full w-full  " />
            </div>
            <h1 className="left pt-7 px-2 text-center xl:text-start font-Roboto text-2xl text-white">
              Forget to bring your card? Just use the Monopay App
            </h1>
            <p className="bottom pt-7 px-2 text-center xl:text-start font-Roboto font-light leading-5 text-sm text-[#cccccc]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod ncididunt ut labore et dolore magna aliqu Ut enim ad minim
              veniam, quis nostrudLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod ncididunt ut labore et dolore
              magna aliqu Ut enim ad minim veniam, quis nostrud...
            </p>
            <div className="right pt-4 xl:px-2 flex items-center gap-2  justify-center xl:justify-start">
              <h1 className=" font-Roboto text-base xl:text-xs text-primary hover:text-secondary transition-all">
                Continue reading
              </h1>
              <img src={arrow} alt="" className=" w-6  xl:w-5 mt-1 " />
            </div>
          </div>

          <div className="bottom hidden lg:flex  justify-center xl:justify-between items-center gap-4 pt-32 ">
             <img src={seperator} alt="" className=" w-72" />
             <div className=" px-2 py-1 border border-[#999999] rounded-full">
              <span className=" font-Roboto text-base text-primary">BROWSE ARTICLES</span>
             </div>
          </div>
        </div>

        <div className=" pt-10 lg:pt-2 md:w-3/4 lg:w-[450px]  md:mx-auto">
          <div className="left h-[250px] border border-[#262626] rounded-[62px]">
            <img src={img2} alt="" className=" h-full w-full " />
          </div>
          <h1 className="right pt-7 px-2 text-center font-Roboto text-2xl text-primary">
            Forget to bring your card? Just use the Monopay App
          </h1>
          <div className="left pt-4 flex items-center gap-2 justify-center">
            <h1 className=" font-Roboto text-base text-primary hover:text-secondary transition-all">
              Learn more
            </h1>
            <img src={arrow} alt="" className=" w-6" />
          </div>
        </div>

        <div className=" pt-10 lg:pt-5 md:w-3/4 lg:w-[450px] md:mx-auto">
          <div className="bottom h-[250px] border border-[#262626] rounded-[62px]">
            <img src={img3} alt="" className=" h-full w-full " />
          </div>
          <h1 className="right pt-7 px-2 text-center font-Roboto text-2xl text-white">
            Forget to bring your card? Just use the Monopay App
          </h1>
          <div className="left pt-4 flex items-center gap-2 justify-center">
            <h1 className=" font-Roboto text-base text-primary hover:text-secondary transition-all">
              Learn more
            </h1>
            <img src={arrow} alt="" className=" w-6" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
