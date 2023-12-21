import React from "react";
import Image from "next/image";
import "./hero-section.scss";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="Hero__wrap">
        <div className="Hero__wrap--left-col">
          <h2>Discover, and collect Digital Art NFTs </h2>
        </div>
        <div className="Hero__wrap--right-col">
          <Image
            src="https://i.ibb.co/VtR795b/Playstore.png"
            alt="demo"
            width={100}
            height={24}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
