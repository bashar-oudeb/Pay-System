import logo from "../../src/assets/logo (1).svg";
import apple from "../../src/assets/home/cta/app_store.svg";
import googlePlay from "../../src/assets/home/cta/google_play.svg";

import { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger  } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

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
        { y: 100,opacity: 0  }, 
        { y: 0, opacity: 1, duration: 2,delay:.5, scrollTrigger: { trigger: '.bottom', start: 'top 80%' } }
      );
    
      
    }, container);

    // Cleanup the GSAP context on component unmount
    return () => ctx.revert();
  }, []);
  return (
    <footer ref={container} className=" pt-20  lg:pt-24 xl:pt-28 overflow-hidden">
      <div className="px-6 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2   gap-y-12 gap-x-2 ">
          <div className="col-span-2 md:col-span-4 xl:pr-8">
            <img src={logo} alt="" className="right mx-auto  w-20 xl:w-16" />
            <p className="left md:px-20 lg:px-28 xl:w-2/4 xl:px-0 xl:mx-auto text-sm leading-6 text-secondary text-center  mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
              vehicula sed velit a faucibus. In feugiat vestibulum velit vel
              pulvinar. Fusce id mollis ex.{" "}
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="right mt-7 flex items-center gap-1 border px-4 py-2 border-[#999999] rounded-full">
                <img src={apple} alt="" className="w-6" />
                <span className="text-secondary font-Roboto text-sm hover:text-gray-100 transition-all">
                  APP STORE
                </span>
              </button>
              <button className="left mt-7 flex items-center gap-1 border px-4 py-2 border-[#999999] rounded-full">
                <img src={googlePlay} alt="" className="w-6" />
                <span className="text-secondary font-Roboto text-sm hover:text-gray-100 transition-all">
                  GOOGLE PLAY
                </span>
              </button>
            </div>
          </div>

          {/* List Sections */}
          {["Company", "Help", "Resources", "Extra Links"].map(
            (sectionTitle, index) => (
              <div key={index} className="px-4 lg:px-6 xl:pt-10">
                <p className="bottom text-base font-semibold text-white">
                  {sectionTitle}
                </p>
                <ul className="left mt-6 space-y-5 w-full lg:w-48">
                  {" "}
                  {/* Set a fixed or percentage width */}
                  {[
                    "About",
                    "Features",
                    "Works",
                    "Career",
                    "Customer Support",
                    "Delivery Details",
                    "Terms & Conditions",
                    "Privacy Policy",
                    "Free eBooks",
                    "Development Tutorial",
                    "How to - Blog",
                    "YouTube Playlist",
                  ]
                    .slice(0, 4) // Adjust to each section
                    .map((item, idx) => (
                      <li key={idx}>
                        <a
                          href="#"
                          className="flex text-sm text-secondary transition-all duration-200 hover:text-primary focus:text-gray-600"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            )
          )}
        </div>

        <hr className="bottom mt-10 mb-8 lg:mb-4   border-primary opacity-50" />

        <div className="md:flex md:items-center md:justify-between">
          <p className="right text-sm text-secondary text-center lg:text-start">
            © Copyright 2021, All Rights Reserved by Bashar Oudeb
          </p>

          <ul className="left pb-6 flex items-center justify-center lg:justify-start mt-5 space-x-3 md:order-3">
            {/* Social icons */}
            {["twitter", "facebook", "instagram", "github"].map(
              (platform, index) => (
                <li key={index}>
                  <a
                    href="#"
                    title=""
                    className="flex items-center justify-center text-secondary transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7  hover:text-primary focus:text-white hover:bg-slate-700 hover:border-orange-600 focus:border-orange-600"
                  >
                      {platform === "twitter" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M22.46 6c-.77.35-1.61.58-2.46.69a4.29 4.29 0 001.88-2.37 8.47 8.47 0 01-2.71 1.03 4.26 4.26 0 00-7.29 3.9 12.1 12.1 0 01-8.8-4.46 4.26 4.26 0 001.32 5.69 4.25 4.25 0 01-1.93-.54v.05a4.27 4.27 0 003.42 4.18 4.28 4.28 0 01-1.92.07 4.27 4.27 0 003.99 2.96 8.54 8.54 0 01-6.29 1.76 12.09 12.09 0 006.52 1.91c7.84 0 12.13-6.49 12.13-12.12v-.55A8.7 8.7 0 0024 5.57a8.5 8.5 0 01-2.54.7z" />
          </svg>
        )}
        {platform === "facebook" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H8.9V12h1.54V9.89c0-1.53.92-2.38 2.33-2.38.68 0 1.4.12 1.4.12v1.55h-.79c-.78 0-1.02.48-1.02.98V12h1.74l-.28 2.89h-1.46v6.99C18.34 21.12 22 16.99 22 12z" />
          </svg>
        )}
        {platform === "instagram" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm4.25 3a5.25 5.25 0 110 10.5 5.25 5.25 0 010-10.5zm0 1.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm5-2.25a.875.875 0 110 1.75.875.875 0 010-1.75z" />
          </svg>
        )}
        {platform === "github" && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48v-1.71c-2.78.61-3.37-1.34-3.37-1.34-.46-1.17-1.12-1.48-1.12-1.48-.92-.63.07-.62.07-.62 1.02.07 1.56 1.05 1.56 1.05.91 1.55 2.38 1.1 2.96.84.09-.66.36-1.1.65-1.35-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.02-2.68-.1-.26-.44-1.28.1-2.67 0 0 .83-.27 2.75 1.02A9.56 9.56 0 0112 6.85c.85.003 1.71.12 2.51.35 1.92-1.29 2.75-1.02 2.75-1.02.54 1.39.2 2.41.1 2.67.64.7 1.02 1.59 1.02 2.68 0 3.84-2.35 4.68-4.59 4.93.37.31.69.92.69 1.85v2.75c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
          </svg>
        )}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
