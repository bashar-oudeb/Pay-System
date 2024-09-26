import img from "../../assets/home/blog/img.png";
import img2 from "../../assets/home/blog/img (1).png";
import img3 from "../../assets/home/blog/img (2).png";
import arrow from "../../assets/home/blog/Arrow.png";

const Blog = () => {
  return (
    <section className=" px-4 pt-20">
      <div className="">
        <div className="">
          <div className="">
            <div className=" h-[400px] border border-[#262626] rounded-[62px]">
              <img src={img} alt="" className=" h-full w-full " />
            </div>
            <h1 className=" pt-7 px-2 text-center font-Roboto text-2xl text-white">
              Forget to bring your card? Just use the Monopay App
            </h1>
            <p className="pt-7 px-2 text-center font-Roboto font-light leading-5 text-sm text-[#cccccc]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod ncididunt ut labore et dolore magna aliqu Ut enim ad minim
              veniam, quis nostrudLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod ncididunt ut labore et dolore
              magna aliqu Ut enim ad minim veniam, quis nostrud...
            </p>
            <div className="pt-4 flex items-center gap-2 justify-center">
              <h1 className=" font-Roboto text-base text-primary hover:text-secondary transition-all">
                Continue reading
              </h1>
              <img src={arrow} alt="" className=" w-6" />
            </div>
          </div>

          <div className=" hidden lg:block"></div>
        </div>

        <div className=" pt-10">
          <div className=" h-[250px] border border-[#262626] rounded-[62px]">
            <img src={img2} alt="" className=" h-full w-full " />
          </div>
          <h1 className=" pt-7 px-2 text-center font-Roboto text-2xl text-primary">
            Forget to bring your card? Just use the Monopay App
          </h1>
          <div className="pt-4 flex items-center gap-2 justify-center">
            <h1 className=" font-Roboto text-base text-primary hover:text-secondary transition-all">
              Learn more
            </h1>
            <img src={arrow} alt="" className=" w-6" />
          </div>
        </div>

        <div className=" pt-10">
          <div className=" h-[250px] border border-[#262626] rounded-[62px]">
            <img src={img3} alt="" className=" h-full w-full " />
          </div>
          <h1 className=" pt-7 px-2 text-center font-Roboto text-2xl text-white">
            Forget to bring your card? Just use the Monopay App
          </h1>
          <div className="pt-4 flex items-center gap-2 justify-center">
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
