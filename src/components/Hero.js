import React from "react";

// import hero data
import { heroData } from "../data";

const Hero = () => {
  // destructure heroData
  const { title1, title2, subtitle, btnText, image } = heroData;
  return (
    <section className="xl:h-[700px] pt-36 pb-12">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row xl:gap-12 items-center h-full">
          {/*text*/}
          <div className="text-center xl:text-left">
            <h1
              className="h1 xl:max-w-[700px] mb-3 xl:mb-5"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {title1}
            </h1>
            <h1
              className="h1 xl:max-w-[700px] mb-6 xl:mb-12 text-accent-primary"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {title2}
            </h1>
            <p
              className="lead xl:max-w-[700px] mb-6 lg:mb-12"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              {subtitle}
            </p>
            <button
              className="btn btn-primary mb-8 md:mb-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              {btnText}
            </button>
          </div>
          {/*image*/}
          <div
            className="flex justify-center max-w-[600px]"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <img className="xl:w-full" src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
