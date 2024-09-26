import arrow from "../../assets/arrow.svg";
import appStore from "../../assets/home/cta/app_store.svg";
import googlePlay from "../../assets/home/cta/google_play.svg";
import app from "../../assets/home/cta/App - card.png";

const Cta = () => {
  return (
    <section className=" pt-20 px-4">
      <div className=" border border-secondary rounded-3xl">
        <div className="">
          <h1 className=" font-Roboto text-primary text-3xl text-center pt-10 ">Download today <br /> and get 2% Cashback </h1>
          <p className=" mt-10 font-Roboto font-light text-white px-8 text-center">Monopay available on Apple App Store and Google Play Store.</p>
          <div className=" mt-10">
            <button className="mx-auto flex items-center gap-1 border px-2 py-1 border-[#999999] rounded-full  ">
              <img src={arrow} alt="" className=" w-4" />
              <span className="text-primary font-Roboto text-sm hover:text-gray-100 transition-all">
                GET MONOPAY
              </span>
            </button>
            <div className=" mt-4 flex items-center gap-3 justify-center">
              <img src={appStore} alt=""  className=" w-11"/>
              <img src={googlePlay} alt=""  className=" w-16"/>
            </div>
          </div>
        </div>

        <div className=" relative overflow-hidden">
            <div className="-mt-8">
                <img src={app} alt=""  className=""/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
