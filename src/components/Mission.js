import React from "react";

import MissionCard from "./MissionCard";

import { missionData } from "../data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Mission = () => {
  return (
    <section className="my-[70px]">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 mb-6" data-aos="fade-down" data-aos-delay="100">
            Our Mission
          </h2>
        </div>
        {/* large screen */}
        <div className="hidden lg:flex w-full h-[480px] flex-row items-center justify-center py-4 gap-16">
          {missionData.map((mission) => {
            // destructure mission
            return (
              <MissionCard
                image={mission.image}
                content={mission.content}
                bgcolor={mission.bgcolor}
              />
            );
          })}
        </div>
        {/* mobile screen */}
        <div className="flex lg:hidden"></div>
      </div>
    </section>
  );
};

export default Mission;
