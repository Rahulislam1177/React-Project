import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <div className="w-full bg-[url('/public/assets/aboutcober.png')] bg-cover bg-center pt-[100px] sm:pt-[150px] lg:pt-[230px] pb-[100px]">
      <div className="text-center ">
        <h1 className="text-7xl font-bold text-white mt-20">About Us</h1>
        <p className="text-white text-xl flex justify-center mt-5">
          <div>
            <Link className=" mt-20 text-inherit" to="/">
              Home{" "}
            </Link>
          </div>{" "}
          <div className="flex ">
            <img
              className="w-5 h-3 mt-2 ml-2  "
              src="/public/assets/right-arrow.png"
              alt=""
            />
            About Us
          </div>
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
