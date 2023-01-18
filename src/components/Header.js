import React, { useState } from "react";

// import components
import Logo from "../assets/img/bdc_logo.png";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";

// import icons
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);

  //change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <header
      className={`${
        color ? "bg-indigo-100 shadow-xl" : "bg-transparent"
      } z-20 px-4 lg:px-0 fixed w-full`}
      data-aos="fade-down"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center gap-x-[110px]">
            {/* Logo */}
            <div className="flex items-center justify-between">
              <a href="#">
                <img className="object-contain h-20" src={Logo} alt="" />
              </a>
              <div className="hidden md:flex font-bold text-primary">
                Big Data Club
              </div>
            </div>
            {/* nav - initially is hidden / show on large screens */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          {/* mobile nav - initially is showing / hidden on large screens */}
          <div
            className={`${
              navMobile ? "max-h-65" : "max-h-0"
            } lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}
          >
            <NavMobile />
          </div>

          {/* button */}
          <button className="btn btn-quaternary flex items-center gap-x-[20px] group">
            Contact Us{" "}
            <BsArrowRight className="text-2xl text-accent-primary group-hover:text-white transition" />
          </button>

          {/* nav trigger btn / only shows on mobile screens */}
          <div
            onClick={() => setNavMobile(!navMobile)}
            className="lg:hidden text-2xl text-primary cursor-pointer"
          >
            <FaBars />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
