import img from "../../assets/testimonials/avatar.png";
import img1 from "../../assets/testimonials/people02.png";
import img2 from "../../assets/testimonials/img.png";
import { useState, useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
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

  const slides = [
    {
      img: img,
      description:
        "  elit. Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
      user: "John Smith",
      job: " CFO at The Verge",
    },
    {
      img: img1,
      description:
        "Lorem ipsum dolor ,Curabitur ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
      user: "Mike Johns",
      job: "Sydney, Australia",
    },
    {
      img: img2,
      description:
        "Lorem ipsum dolor sit amet Nulla at congue diam, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.",
      user: "JEmily G",
      job: "Sydney, Japan",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0); // State to manage the current slide index

  // Function to go to the next slide
  const nextSlide = () =>
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);

  // Function to go to the previous slide
  const prevSlide = () =>
    setSlideIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );

  return (
    <section ref={container} className=" pt-20 md:pt-24 xl:pt-40  overflow-hidden">
      <div className="">
        <h4 className="bottom font-Roboto font-light text-base text-primary text-center">
          WHAT THEY SAY ABOUT MONOPAY
        </h4>
        <h1 className="right mt-2 xl:mt-4  font-Roboto font-light text-white text-3xl lg:text-4xl text-center">
          <span className="text-primary ">98%</span> Customer Satisfaction
        </h1>
        <p className="left px-6 xl:px-20 md:w-2/4 md:mx-auto mt-4 font-Roboto font-light text-sm text-white leading-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congu
        </p>
      </div>

      <div className="pt-16 px-5 xl:hidden">
        <div className=" flex items-center justify-center gap-5">
          <div className="left w-16 h-16 ">
            <img
              src={slides[slideIndex].img}
              alt=""
              className=" w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="">
            <h1 className="right font-Roboto font-semibold text-base text-white">
              {slides[slideIndex].user}
            </h1>
            <span className="right font-Roboto  text-sm text-gray-400 ">
              {slides[slideIndex].job}
            </span>
          </div>
        </div>
        <p className="bottom px-2 md:px-28 lg:px-0 lg:w-2/5 lg:mx-auto  mt-5 font-Roboto text-sm font-light text-white leading-5 text-center">
          {slides[slideIndex].description}
        </p>

        <div className="left pt-5  flex justify-center items-center gap-5 lg:relative">
          <button
            className=" py-2 px-3 rounded-full lg:absolute lg:left-0 lg:-top-20"
            onClick={prevSlide}
          >
            <svg
              fill="#ADA785"
              height="200px"
              width="200px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 489.967 489.967"
              xmlSpace="preserve"
              className=" w-8 h-8  rotate-180"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="XMLID_103_">
                  {" "}
                  <path
                    id="XMLID_104_"
                    d="M481.065,257.197c5.305-1.714,8.902-6.648,8.902-12.218c0-5.569-3.597-10.502-8.902-12.217L16.78,83.075 c-4.933-1.591-10.352-0.052-13.711,3.898c-3.358,3.953-4.014,9.55-1.645,14.164c18.539,36.218,30.102,87.237,30.102,143.843 c0,56.605-11.573,107.624-30.12,143.853c-2.358,4.615-1.715,10.202,1.654,14.162c3.359,3.952,8.77,5.49,13.713,3.898 L481.065,257.197z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
          <button
            className="right py-2 px-3 rounded-full lg:absolute lg:right-0 lg:-top-20 "
            onClick={nextSlide}
          >
            <svg
              fill="#ADA785"
              height="200px"
              width="200px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 489.967 489.967"
              xmlSpace="preserve"
              className=" w-8 h-8 "
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="XMLID_103_">
                  {" "}
                  <path
                    id="XMLID_104_"
                    d="M481.065,257.197c5.305-1.714,8.902-6.648,8.902-12.218c0-5.569-3.597-10.502-8.902-12.217L16.78,83.075 c-4.933-1.591-10.352-0.052-13.711,3.898c-3.358,3.953-4.014,9.55-1.645,14.164c18.539,36.218,30.102,87.237,30.102,143.843 c0,56.605-11.573,107.624-30.12,143.853c-2.358,4.615-1.715,10.202,1.654,14.162c3.359,3.952,8.77,5.49,13.713,3.898 L481.065,257.197z"
                  ></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>

      <div className="pt-28 px-5 xl:px-8 hidden xl:flex justify-between items-center gap-12">
        <div className=" right">
          <div className=" flex items-center justify-start gap-5">
            <div className=" w-14 h-14 ">
              <img
                src={img}
                alt=""
                className=" w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="">
              <h1 className=" font-Roboto font-semibold text-base text-white">
                John Smith
              </h1>
              <span className=" font-Roboto  text-sm text-gray-400 ">
                CFO at The Verge
              </span>
            </div>
          </div>
          <p className="  mt-6 font-Roboto text-xs font-light text-white leading-5 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>
        </div>


        <div className="bottom">
          <div className=" flex items-center justify-start gap-5">
            <div className=" w-14 h-14 ">
              <img
                src={img1}
                alt=""
                className=" w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="">
              <h1 className=" font-Roboto font-semibold text-base text-white">
              Mike Johns
              </h1>
              <span className=" font-Roboto  text-sm text-gray-400 ">
              Sydney, Australia
              </span>
            </div>
          </div>
          <p className="  mt-6 font-Roboto text-xs font-light text-white leading-5 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>
        </div>


        <div className="left">
          <div className=" flex items-center justify-start gap-5">
            <div className=" w-14 h-14 ">
              <img
                src={img2}
                alt=""
                className=" w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="">
              <h1 className=" font-Roboto font-semibold text-base text-white">
              Sally Wilson
              </h1>
              <span className=" font-Roboto  text-sm text-gray-400 ">
              CFO at Amazon
              </span>
            </div>
          </div>
          <p className="  mt-6 font-Roboto text-xs font-light text-white leading-5 text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio. Nulla at congue diam, at dignissim turpis. Ut
            vehicula sed velit a faucibus. In feugiat vestibulum velit vel
            pulvinar.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default Testimonials;
