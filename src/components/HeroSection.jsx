import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className="relative left-1/2 w-1/3 mb-16">
      <p className="bg-slate-200 border border-slate-400 shadow-inner w-fit rounded-md px-2 font-mono mb-2">
        Hi, my name is
      </p>
      <h3 className="font-extrabold text-7xl mb-4">Benjamin Schäfer</h3>
      <p className="font-bold text-5xl mb-16">and I make Websites.</p>
      <div className="rounded-full bg-green-500 w-fit py-1 px-3">
        <FontAwesomeIcon icon={faAnglesDown} />
        <span className="ml-3">Get to know me</span>
      </div>
    </div>
  );
}

export default HeroSection;
