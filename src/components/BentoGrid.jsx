import React from "react";
import GridTile from "./GridTile";

function BentoGrid() {
  return (
    <section>
      <h2 className="hidden">About me</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4 size-[80vw]">
          <div className="col-span-2 row-span-2 bg-red-500">This is me</div>
          <div className="col-span-2 bg-blue-500">
            I have the following Certifications
          </div>
          <div className="bg-blue-500 h-full">I am Based in Coburg, Germany</div>
          <div className="row-span-2 bg-blue-500">
            I know the following Technologies
          </div>
          <div className="row-span-2 bg-blue-500">
            This is the project I am most proud of.
          </div>
          <div className="col-span-2 bg-blue-500">This is my resume</div>
          <div className="bg-blue-500">This is how you can reach out to me</div>
          <div className="col-span-2 bg-blue-500">
            These are my up to date github stats.
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;
