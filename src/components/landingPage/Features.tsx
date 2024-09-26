import close from '../../assets/home/features/Close.svg'
import Chart from '../../assets/home/features/Chart.svg'
import Activity from '../../assets/home/features/Activity.svg'
import Calendar from '../../assets/home/features/Calendar.svg'
import Wallet from '../../assets/home/features/App - Wallet.png'
import vector from '../../assets/home/features/vector.png'


const Features = () => {
  return (
    <section className=" pt-16">
      <div className="">
        <h4 className=" font-Roboto font-light text-base text-primary text-center">
          EXCLUSIVE FEATURES
        </h4>
        <h1 className=" mt-2 font-Roboto font-light text-white text-3xl text-center">
          <span className="text-primary ">Top</span> Monopay Features
        </h1>
        <p className="px-10 mt-4 font-Roboto font-light text-sm text-white leading-6 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac
          ultrices odio. Nulla at congu
        </p>
      </div>

      <div className="pt-8 px-4 grid grid-cols-gridColumns">
        <div className="relative mt-10 h-[250px] border border-borders rounded-[60px] overflow-hidden ">
          <div className=" text-center">
            <h1 className=" pt-8 font-Roboto font-light text-4xl text-white ">Titanium Card</h1>
            <p className=" mt-3 px-4 font-Roboto font-light text-sm leading-5 text-white ">
              Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
              dodol eiusmod tempor incididunt.
            </p>
          </div>
          <img src={vector} alt=""  className='w-60 absolute bottom-1 right-0 '/>
        </div>

        <div className="mt-10 h-[250px] border border-borders rounded-[60px]">
          <div className=" px-8 flex items-center justify-between">
            <h4 className=" pt-9 font-Roboto font-light text-2xl text-white ">2% Daily Cashback</h4>
            <img src={close} alt="" className=' w-8 h-8 self-end'/>
          </div>
          <p className="px-4 pt-7 font-Roboto font-light text-sm leading-5 text-white text-center">
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>

        <div className="mt-10 h-[250px] border border-borders rounded-[60px] text-center">
          <img src={Activity} alt=""  className=' w-11 h-11 mx-auto mt-16'/>
          <h1 className=" pt-4 font-Roboto font-light text-4xl text-white">Card Activity</h1>
        </div>

        <div className="mt-10 h-[250px] border border-borders rounded-[60px]">
          <div className="px-8 flex items-center justify-between">
            <h1 className='pt-9 font-Roboto font-light text-2xl text-white'>Daily/Weekly Report</h1>
            <img src={close} alt=""  className=' w-8 h-8 self-end'/>
          </div>
          <p className='px-4 pt-7 font-Roboto font-light text-sm leading-5 text-white text-center'>
            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </div>

        <div className="mt-10 h-[250px] border border-borders rounded-[60px] text-center">
          <img src={Chart} alt=""  className=' w-11 h-11 mx-auto mt-16'/>
          <h1 className="pt-4 font-Roboto font-light text-4xl text-white">Card Statistics</h1>
        </div>

        <div className="mt-10 h-[250px] border border-borders rounded-[60px] text-center">
          <img src={Calendar} alt=""  className=' w-11 h-11 mx-auto mt-16'/>
          <h1 className="pt-4 font-Roboto font-light text-4xl text-white">Auto Cashflow</h1>
        </div>

        <div className="mt-10 h-[250px] border border-borders rounded-[60px] overflow-hidden">
          <div className=" text-center">
            <h1 className="pt-8 font-Roboto font-light text-4xl text-white">Exclusive Deals</h1>
            <p className="mt-3 px-4 font-Roboto font-light text-sm leading-5 text-white">
              Lorem ipsum dolor sit amet jamet, consectetur adipis cing elit sed
              dodol eiusmod tempor incididunt.
            </p>
          </div>
          <div className=" mt-4 w-40 mx-auto">
            <img src={Wallet} alt="" className=' w-full h-full object-cover ' loading='lazy'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
