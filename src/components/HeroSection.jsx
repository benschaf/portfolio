import React from "react";

function HeroSection() {
  return (
    <div className="relative left-1/2 w-1/3 mb">
      <p className="bg-slate-200 border border-slate-400 shadow-inner w-fit rounded-md px-2 font-mono mb-2">
        Hi, my name is
      </p>
      <h3 className="font-extrabold text-7xl mb-4">Benjamin Schäfer</h3>
      <p className="font-bold text-5xl">and I make Websites.</p>
      <div className="rounded-full bg-green-500 w-fit py-1 px-3">
        Get to know me
      </div>
    </div>
  );
}

export default HeroSection;
