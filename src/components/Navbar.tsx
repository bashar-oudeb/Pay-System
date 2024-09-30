import logo from "../assets/logo (1).svg";
import arrow from "../assets/arrow.svg";
import { useState, useRef } from "react"; // Import React hooks
import gsap from 'gsap'; // Import GSAP for animations
import { useGSAP } from '@gsap/react'; // Import GSAP React plugin

gsap.registerPlugin(useGSAP);

const Navbar = () => {
  const [oppen, setOppen] = useState(false);

  const container = useRef(null);

  useGSAP(
    () => {
        // gsap code 
        gsap.fromTo('.logo', { x: 200   }, { x: 0  ,duration:3});
        gsap.fromTo('.link ', { x: -200  }, { x: 0  ,duration:3});
    },
    { scope: container }
);

  return (
    <nav ref={container} className=" relative px-5 md:px-9 lg:px-5 xl:px-10 py-6 lg:py-8 xl:pb-2 xl:pt-8">
      <div className=" flex justify-between items-center">
        <div className="">
          <img src={logo} alt="logo" className="logo w-10 " />
        </div>
        <div className=" hidden lg:block ">
          <ul className="logo flex gap-3 items-center lg:ml-20">
            {["BLOG", "FEATURES", "COMPANY", "MORE"].map((item) => (
              <li>
                <a
                  href=""
                  className=" text-secondary font-Roboto text-sm hover:text-white transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="link hidden lg:flex items-center  gap-2">
          <span className="text-secondary font-Roboto text-sm hover:text-white transition-all cursor-pointer">
            CONTACT
          </span>
          <button className="flex items-center gap-1 border px-2 py-1 border-[#999999] rounded-full  ">
            <img src={arrow} alt="" className=" w-4" />
            <span className="text-secondary font-Roboto text-sm hover:text-gray-100 transition-all">
              GET MONOPAY
            </span>
          </button>
        </div>

        <div className=" lg:hidden">
          <button onClick={() => setOppen(!oppen)}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              className=" w-11 pt-1"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </button>
        </div>
      </div>

      {oppen && (
        <div className="absolute w-full md:w-[95%] bg-black lg:hidden z-30  transition-all px-0   -mt-28 overflow-hidden">
          <div className="flex items-center justify-between ">
            <div className="">
              <img src={logo} alt="logo" className=" w-10 " />
            </div>
            <button className=" mr-10" onClick={() => setOppen(!open)}>
              <svg
                fill="#ffffff"
                height="200px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
                stroke="#ffffff"
                className=" w-10"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <g>
                      {" "}
                      <polygon points="512,59.076 452.922,0 256,196.922 59.076,0 0,59.076 196.922,256 0,452.922 59.076,512 256,315.076 452.922,512 512,452.922 315.076,256 "></polygon>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </button>
          </div>

          <div className=" mt-12 mr-5">
            <ul className="flex flex-col gap-12 text-center ">
              {["BLOG", "FEATURES", "COMPANY", "MORE"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-Roboto text-3xl leading-8 text-primary transition-all hover:text-linkHover opacity-80"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className=" pt-10 pb-16  flex flex-col items-center  gap-4">
            <span className="text-primary font-Roboto text-2xl hover:text-white transition-all cursor-pointer">
              CONTACT
            </span>
            <button className="flex items-center gap-1 border px-2 py-1 border-[#999999] rounded-full  ">
              <img src={arrow} alt="" className=" w-4" />
              <span className="text-primary font-Roboto text-2xl hover:text-gray-100 transition-all">
                GET MONOPAY
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
