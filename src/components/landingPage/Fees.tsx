import app from '../../assets/home/fees/vector (1).png'


const Fees = () => {
  return (
    <section className=" pt-20">
      <div className="">
        <div className="">
          <h4 className=" font-Roboto  text-base text-primary text-center">
            NO HIDDEN FEES
          </h4>
          <h1 className=" mt-2 font-Roboto  text-white text-3xl text-center">
            <span className="text-primary ">No</span> fees or interest
          </h1>
          <p className="px-10 mt-4 font-Roboto font-light text-sm text-white leading-6 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ac ultrices odio.
          </p>
        </div>

        <div className="pt-16 px-4">
          <div className="">
            <div className=" flex justify-center gap-4">
              <h1 className=" font-Roboto font-light text-5xl text-primary">
                0%{" "}
              </h1>
              <span className=" font-Roboto text-md text-white">
                No <br />
                Fees
              </span>
            </div>
            <hr className=" mt-6 w-44 border-primary mx-auto" />
            <div className=" pt-6">
              <p className="px-4 font-Roboto font-light text-sm text-white leading-5 text-center">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10">
            <div className=" flex justify-center gap-4">
              <h1 className=" font-Roboto font-light text-5xl text-primary">
                0%{" "}
              </h1>
              <span className=" font-Roboto text-md text-white">
                No <br />
                Interest
              </span>
            </div>
            <hr className=" mt-6 w-44 border-primary mx-auto" />
            <div className=" pt-6">
              <p className="px-4 font-Roboto font-light text-sm text-white leading-5 text-center">
                Lorem ipsum dolor sit amet jamet, consectetu adipiscing elit,
                sed dodol eiusmod tempor utla bore.
              </p>
            </div>
          </div>

          <div className=" pt-10">
            <div className=" flex justify-center gap-4">
              <h1 className=" font-Roboto font-light text-5xl text-primary">
                2%{" "}
              </h1>
              <span className=" font-Roboto  text-md text-white">
                Unlimited <br /> Daily Cashback
              </span>
            </div>
            <hr className=" mt-6 w-44 border-primary mx-auto" />
            <div className=" pt-6">
              <p className="px-4 font-Roboto font-light text-sm text-white leading-5 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" px-4 overflow-hidden ">
        <div className=" mx-auto">
            <img src={app} alt="" className=' -mt-12 mx-auto' />
        </div>
      </div>
    </section>
  );
};

export default Fees;
