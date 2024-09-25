import React from "react";
import GridTile from "./GridTile";

function BentoGrid() {
  return (
    <section>
      <h2 className="hidden">About me</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-4 size-[80vw]">
          <GridTile className="col-span-2 row-span-2">
            <img
              src="/headshot.png"
              alt="Headshot"
              className="rounded-full w-1/3 aspect-square mb-12"
            />
            <p className="bg-slate-200 border border-slate-400 shadow-inner w-fit rounded-md px-2 font-mono mb-2">
              Hi, my name is
            </p>
            <h3 className="font-extrabold text-7xl mb-4">Benjamin Schäfer</h3>
            <p className="font-bold text-5xl">and I make Websites.</p>
          </GridTile>
          <GridTile className="col-span-2">
            I have the following Certifications
          </GridTile>
          <GridTile className="h-full" noPadding>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88424.03638441453!2d10.893116525075726!3d50.26030977205642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3ce1441f48837%3A0x41db728f061d9a0!2s96450%20Coburg!5e1!3m2!1sde!2sde!4v1727172427223!5m2!1sde!2sde"
              width="100%"
              height="100%"
              className="border-0 rounded-3xl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </GridTile>

          <GridTile className="row-span-2">
            I know the following Technologies
          </GridTile>
          <GridTile className="row-span-2">
            This is the project I am most proud of.
          </GridTile>
          <GridTile className="col-span-2">This is my resume</GridTile>
          <GridTile className="">This is how you can reach out to me</GridTile>
          <GridTile className="col-span-2">
            These are my up to date github stats.
          </GridTile>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;
