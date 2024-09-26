import lock from "../../assets/home/card/Lock.svg";
import key from "../../assets/home/card/Password.svg";
import done from "../../assets/home/card/Shield Done.svg";
import app from "../../assets/home/card/vector (1).png";

const Card = () => {
  return (
    <section className=" -mt-28">
      <div className="">
        <div className="">
          <h4 className=" font-Roboto  text-base text-primary text-center">
            STRONG SECURITY
          </h4>
          <h1 className=" mt-2 font-Roboto  text-white text-3xl text-center">
            <span className="text-primary ">Your</span> Card Your Datat
          </h1>
          <p className="px-10 mt-4 font-Roboto font-light text-sm text-white leading-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </p>
        </div>

        <div className="pt-16 px-4">
          <div className="">
            <div className=" flex justify-center gap-4">
              <img src={done} alt="" className=" w-11" />
              <span className=" font-Roboto text-md text-white">
                Privacy
                <br />& Security
              </span>
            </div>
            <hr className=" mt-6 w-44 border-primary mx-auto opacity-60" />
            <div className=" pt-6">
              <p className="px-4 font-Roboto font-light text-sm text-white leading-5 text-center">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10">
            <div className=" flex justify-center gap-4">
              <img src={key} alt="" className=" w-11" />
              <span className=" font-Roboto text-md text-white">
                256-bit
                <br />
                Encryption
              </span>
            </div>
            <hr className=" mt-6 w-44 border-primary mx-auto opacity-60" />
            <div className=" pt-6">
              <p className="px-4 font-Roboto font-light text-sm text-white leading-5 text-center">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10">
            <div className=" flex justify-center gap-4">
              <img src={lock} alt="" className=" w-11" />
              <span className=" font-Roboto  text-md text-white">
                Auto <br /> Locked
              </span>
            </div>
            <hr className=" mt-6 w-44 border-primary mx-auto opacity-60" />
            <div className=" pt-6">
              <p className="px-5 font-Roboto font-light text-sm text-white leading-5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-16">
        <img src={app} alt="" className=" w-72 mx-auto" />
      </div>
    </section>
  );
};

export default Card;
