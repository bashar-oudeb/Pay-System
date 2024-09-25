import logo from "../assets/logo (1).svg";
import arrow from "../assets/arrow.svg";


const Navbar = () => {
  return (
    <nav className=" px-5 xl:px-10 py-6 xl:py-5">
      <div className=" flex justify-between items-center">
        <div className="">
          <img src={logo} alt="logo" className=" w-10 " />
        </div>
        <div className=" hidden xl:block ">
          <ul className=" flex gap-3 items-center ml-7">
            {["BLOG", "FEATURES", "COMPANY", "MORE"].map((item) => (
              <li>
                <a href="" className=" text-secondary font-Roboto text-sm">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" hidden xl:flex items-center gap-2">
          <span className="text-secondary font-Roboto text-sm">CONTACT</span>
          <button className="flex items-center gap-1 border px-2 py-1 border-[#999999] rounded-full  ">
            <img src={arrow} alt="" className=" w-4" />
            <span className="text-secondary font-Roboto text-sm hover:text-gray-100 transition-all">
              GET MONOPAY
            </span>
          </button>
        </div>

        <div className=" xl:hidden">
          <button>
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
    </nav>
  );
};

export default Navbar;
