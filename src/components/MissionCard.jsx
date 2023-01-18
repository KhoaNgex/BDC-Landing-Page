import React from "react";

// import icons
import { BsArrowRight } from "react-icons/bs";

const MissionCard = ({ image, content, bgcolor }) => {
  return (
    <div class={`${bgcolor} max-w-[270px] h-full px-4 flex flex-col items-center justify-center rounded-[50px] shadow-2xl`}>
      <div>
        <img src={image}/>
      </div>
      <div className="flex flex-col items-center">
        <p class="font-light italic mb-5 text-center">
          {content}
        </p>
        <div className="flex items-center gap-x-2 group">
          <a className="text-primary font-bold" href="#">
            View more
          </a>
          <BsArrowRight className="text-xl text-accent-primary group-hover:ml-[5px] transition-all" />
        </div>
      </div>
    </div>
  );
};

export default MissionCard;
