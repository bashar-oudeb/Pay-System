import arrow from "../../assets/arrow.svg";
import Monocard from "../../assets/home/hero/Monocard Front Side.png";
import wallet from "../../assets/home/hero/App - Wallet.png";
import visa from "../../assets/home/hero/visa.svg";
import line from "../../assets/seperator.svg";

const Hero = () => {
  return (
    <section className=" pt-10 px-5">
      <div className="">
        <div className="">
          <div className="">
            <h1 className=" text-white font-Roboto font-light text-5xl text-center">
              <span className=" text-primary">One</span> Payment Card for all
            </h1>
          </div>
          <div className=" mt-10">
            <p className=" font-Roboto text-white font-light text-sm leading-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio.
            </p>
            <p className="mt-5 font-Roboto text-white font-light text-sm leading-5 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ac ultrices odio. Nulla at congue diam, at dignissim turpis.
            </p>
          </div>
          <button className=" mt-7 flex items-center  gap-1 mx-auto border px-4 py-2 border-[#999999] rounded-full  ">
            <img src={arrow} alt="" className=" w-4" />
            <span className="text-secondary font-Roboto text-sm hover:text-gray-100 transition-all">
              GET MONOPAY
            </span>
          </button>
        </div>

        <div className=" pt-10 pb-36 px-2 relative">
          <div className=" w-60">
            <img
              src={Monocard}
              alt=""
              className=" w-full h-full object-cover"
            />
          </div>
          <div className=" absolute -top-3">
            <img src={wallet} alt="" className=" w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <div className=" flex flex-col gap-4">
          <div className=" flex items-center justify-between">
            <h1 className=" font-Roboto font-light text-4xl text-primary">5.9M+</h1>
            <p className=" font-Roboto text-secondary text-sm ">Daily Transaction</p>
          </div>
          <img src={line} alt="" className=" h-1"/>
        </div>
        <div className=" mt-8 flex flex-col gap-4">
          <div className=" flex items-center justify-between">
            <h1 className=" font-Roboto font-light text-4xl text-primary">8.9M+</h1>
            <p className=" font-Roboto text-secondary text-sm ">App Downloads</p>
          </div>
          <img src={line} alt="" className=" h-1"/>
        </div>
        <div className=" mt-8 flex flex-col gap-4 ">
          <div className=" flex items-center justify-between">
            <h1 className=" font-Roboto font-light text-4xl text-primary">+2%</h1>
            <p className=" font-Roboto text-secondary text-sm ">Unlimited Daily Cashback</p>
          </div>
          <img src={line} alt=""  className=" h-1"/>
        </div>

        <div className=" mt-8 flex flex-col gap-4">
          <div className=" flex items-center justify-between">
            <img src={visa} alt=""  className=" w-28  "/>
            <p className=" font-Roboto text-secondary text-sm ">We partner with top–tier companies.</p>
          </div>
          <img src={line} alt=""  className=" h-1"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
