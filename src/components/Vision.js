import React from "react";

// import about data
import { visionData } from "../data";

const Vision = () => {
  // destructure about
  const { image, title, subtitle } = visionData;
  return (
    <section
      className="my-[30px] xl:mt-0"
      data-aos="fade-up"
      data-aos-offset="300"
    >
      <div className="container mx-auto">
        <div className="bg-violet-100 rounded-[50px] min-h-[450px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0">
          {/* image */}
          <div className="flex-1" data-aos="zoom-in-left">
            <img src={image} alt="" />
          </div>
          {/* text */}
          <div className="flex-1 xl:pr-12">
            <h2 className="h2 mb-10" data-aos="fade-up" data-aos-delay="300">
              {title}
            </h2>
            <p
              className="max-w-[474px] mx-auto xl:mx-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
