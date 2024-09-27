import React from "react";
import GridTile from "./GridTile";
import BrandIcon from "./BrandIcon";
import CodeInstituteLogo from "./CodeInstituteLogo";
import PHTGLogo from "./PHTGLogo";
import MyGithubCalendar from "./MyGithubCalendar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SiDjango,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiGit,
  SiHeroku,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiPython,
  SiStripe,
  SiLinkedin,
  SiLinkedinHex,
  SiGithub,
  SiCodeigniter,
  SiGithubHex,
} from "@icons-pack/react-simple-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

function BentoGrid() {
  return (
    <section>
      <h2 className="hidden">About me</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-8 gird-rows-6 gap-4 w-[80vw]">
          <GridTile className="col-span-4 row-span-2 col-start-3 row-start-3 p-10 flex flex-col justify-between bg-gradient-to-bl">
            <div>
              <p className="bg-slate-200 border border-slate-400 shadow-inner w-fit rounded-md px-2 font-mono mb-2">
                Hi, my name is
              </p>
              <h3 className="text-7xl ">
                Benjamin Schäfer
              </h3>
            </div>
            <div className="flex justify-between">
              <p className="font-bold text-4xl self-center text-slate-500">I make Websites.</p>
              <div className="bg-gradient-to-r via-pink-500 from-orange-500 to-teal-500 w-fit h-fit p-1 rounded-full self-center">
                <div className="bg-slate-200 rounded-full py-2 px-4">
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span className="pl-2">Let's connect</span>
                </div>
              </div>
            </div>
          </GridTile>
          <GridTile title="Tools I use" className="col-span-4 row-span-2 col-start-5 row-start-1 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-y-2 w-full">
              <BrandIcon icon={SiDjango} name="Django" color="#f97316" />
              <BrandIcon icon={SiReact} name="React" color="#f97316" />
              <BrandIcon icon={SiTailwindcss} name="Tailwind" color="#f97316" />
              <BrandIcon icon={SiBootstrap} name="Bootstrap" color="#f97316" />
              <BrandIcon icon={SiJquery} name="jQuery" color="#f97316" />
              <BrandIcon icon={SiGit} name="Git" color="#f97316" />
              <BrandIcon icon={SiHeroku} name="Heroku" color="#f97316" />
              <BrandIcon icon={SiStripe} name="Stripe" color="#f97316" />
            </div>
          </GridTile>
          <GridTile className="row-span-2 col-start-7 row-start-3 col-span-2 bg-emerald-400 flex justify-center items-center">
            <a
              href="https://1drv.ms/b/s!AiW3_9fEY4hWie0M5GfzPjSbVOYMiA?e=uGcNuN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-between"
            >
              <img
                src="/cv_thumbnail.png"
                alt="CV Thumbnail"
                className="w-2/3 object-scale-down"
              />
              <div className="bg-slate-200 rounded-full py-2 px-4">
                get my CV
              </div>
            </a>
          </GridTile>
          <GridTile title="My Diplomas" className="col-span-2 row-span-3 col-start-1 row-start-4 p-4 bg-white shadow-lg rounded-lg">
            <div className="flex flex-col items-center space-y-4">
              <CodeInstituteLogo className="h-10 mx-auto" />
              <div className="text-center">
                <p className="text-lg font-semibold">
                  Diploma: Fullstack Web Development
                </p>
                <p className="text-sm text-gray-600">Grade: Distinction</p>
              </div>
              <hr className="w-full border-t-2 border-gray-300 my-4" />
              <PHTGLogo className="h-10 mx-auto" />
              <div className="text-center">
                <p className="text-lg font-semibold">
                  Diploma: Master of Arts and Education
                </p>
              </div>
            </div>
          </GridTile>
          <GridTile
            className="col-span-2 row-span-2 col-start-3 row-start-5"
            noPadding
          >
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
          <GridTile className="col-span-4 row-span-2 col-start-5 row-start-5">
            <MyGithubCalendar />
          </GridTile>
          <GridTile
            className="col-span-2 row-span-2 col-start-1 row-start-2"
            noPadding
          >
            <img
              src="/headshot.png"
              alt="Headshot"
              className="rounded-3xl w-full h-full object-cover"
            />
          </GridTile>
          <GridTile title="Languages I know" className="row-span-2 col-span-2 col-start-3 row-start-1 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-y-2 w-full">
              <BrandIcon icon={SiHtml5} name="HTML5" />
              <BrandIcon icon={SiJavascript} name="JavaScript" />
              <BrandIcon icon={SiCss3} name="CSS3" />
              <BrandIcon icon={SiPython} name="Python" />
            </div>
          </GridTile>
          <GridTile
            className={`flex justify-center col-start-1 row-start-1 bg-[#0a66c2]`}
            noPadding
          >
            <a
              href="https://www.linkedin.com/in/beni-schaefer/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="LinkedIn Profile"
              className="flex items-center"
            >
              <BrandIcon
                icon={SiLinkedin}
                color="default"
                name="connect"
                link="https://www.linkedin.com/in/beni-schaefer/"
              />
            </a>
          </GridTile>
          <GridTile
            className={`col-start-2 row-start-1 flex justify-center bg-[#181717]`}
            noPadding
          >
            <a
              href="https://github.com/benschaf"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="GitHub Profile"
              className="flex items-center"
            >
              <BrandIcon
                icon={SiGithub}
                name="benschaf"
                color="default"
                link="https://github.com/benschaf"
                className="invert-icon"
              />
            </a>
          </GridTile>
        </div>
      </div>
    </section>
  );
}

export default BentoGrid;
