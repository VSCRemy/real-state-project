import React from "react";
import Image from "../assets/img/house-banner.jpg";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-sky-500">Rent</span> Your Dream Home With Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Welcome to Dream Home, where your vision of the perfect living space
            transforms into reality. Embrace the extraordinary in our curated
            collection of exquisite rental properties that redefine the meaning
            of home. Whether you desire a sleek urban apartment, a tranquil
            countryside retreat, or a luxurious beachfront escape, Dream Home is
            your gateway to unparalleled comfort and style. Immerse yourself in
            the allure of exceptional living as we invite you to explore a world
            where every dwelling tells a unique story.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" className="rounded-2xl" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
