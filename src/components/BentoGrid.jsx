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
  SiGithub,
} from "@icons-pack/react-simple-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const tools = [
  { icon: SiDjango, name: "Django" },
  { icon: SiReact, name: "React" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiBootstrap, name: "Bootstrap" },
  { icon: SiJquery, name: "jQuery" },
  { icon: SiGit, name: "Git" },
  { icon: SiHeroku, name: "Heroku" },
  { icon: SiStripe, name: "Stripe" },
];

const languages = [
  { icon: SiHtml5, name: "HTML5" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiCss3, name: "CSS3" },
  { icon: SiPython, name: "Python" },
];

function BentoGrid() {
  return (
    <section className="mt-2 md:mt-0">
      <h2 className="hidden">About me</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4">
          <GridTile className="row-start-1 col-span-2 !bg-transparent md:row-span-1 lg:row-span-2 md:!bg-white md:col-start-5 lg:col-start-5 md:row-start-1 !p-0">
            <img
              src="/headshot.png"
              alt="Headshot"
              className="rounded-full md:rounded-3xl w-1/2 md:w-full h-full object-cover"
              loading="lazy"
            />
          </GridTile>
          <GridTile
            className="col-span-2 row-span-2 col-start-1 row-start-2 md:col-span-4 md:row-span-2 md:col-start-1 md:row-start-1 md:p-10 top-0"
            innerClassName="flex flex-col justify-between"
          >
            <div>
              <p className="bg-white dark:bg-card-background border border-secondary shadow-inner w-fit rounded-md px-2 font-mono mb-2">
                Hi, my name is
              </p>
              <h3 className="text-5xl md:text-7xl">Benjamin Schäfer</h3>
            </div>
            <div className="lg:flex justify-between">
              <p className="font-bold text-4xl lg:text-4xl self-center text-text-secondary">
                I make Websites.
              </p>
              <div className="mt-10 md:mt-5 md:ml-auto lg:ml-0 bg-gradient-to-r via-pink-500 from-orange-500 to-teal-500 w-fit h-fit p-1 rounded-full self-center transition-all duration-500 hover:bg-gradient-to-l">
                <div className="bg-[#F2F2F2] dark:bg-[#383838] hover:bg-card-btn-background text-text rounded-full py-2 px-4">
                  <a href="#contact">
                    <FontAwesomeIcon icon={faUserPlus} />
                    <span className="pl-2">Let's connect</span>
                  </a>
                </div>
              </div>
            </div>
          </GridTile>
          <GridTile
            title="Languages I know"
            className="col-span-2 md:row-span-1 lg:row-span-2 md:col-span-2 md:col-start-1 md:row-start-3"
            innerClassName="flex items-center justify-center"
          >
            <div className="grid grid-cols-2 gap-y-2 w-full">
              {languages.map((language) => (
                <BrandIcon
                  key={language.name}
                  icon={language.icon}
                  name={language.name}
                />
              ))}
            </div>
          </GridTile>
          <GridTile
            title="Tools I use"
            className="col-span-2 md:col-span-4 md-row-span-1 lg:row-span-2 md:col-start-3 md:row-start-3"
            innerClassName="flex items-center justify-center"
          >
            <div className="grid grid-cols-3 md:grid-cols-4 gap-y-2 w-full">
              {tools.map((tool) => (
                <BrandIcon
                  key={tool.name}
                  icon={tool.icon}
                  name={tool.name}
                  color="#f97316"
                />
              ))}
            </div>
          </GridTile>
          <GridTile
            title="My Diploma"
            className="col-span-2 md:col-span-2 md:row-span-2 lg:row-span-1 md:col-start-1 lg:col-start-1 md:row-start-4"
          >
            <div className="flex flex-col space-y-4">
              <div className="text-center">
                <p className="font-semibold mt-3">Fullstack Web Development</p>
                <p className="text-sm text-text-secondary">Grade: Distinction</p>
              </div>
              <CodeInstituteLogo className="h-10 mx-auto" />
            </div>
          </GridTile>
          <GridTile
            title="My Degree"
            className="col-span-2 md:col-span-2 md:row-span-2 lg:row-span-1 md:col-start-3 lg:col-start-3 md:row-start-4 lg:row-start-5"
          >
            <div className="flex flex-col space-y-4">
              <p className="font-semibold mt-3 text-center">
                Master of Arts and Education
              </p>
              <PHTGLogo className="h-10 mx-auto" />
            </div>
          </GridTile>
          <GridTile className="hidden md:block md:col-span-2 md:row-span-1 md:col-start-5 lg:col-start-7 md:row-start-2 lg:row-start-1 !p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88424.03638441453!2d10.893116525075726!3d50.26030977205642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a3ce1441f48837%3A0x41db728f061d9a0!2s96450%20Coburg!5e1!3m2!1sde!2sde!4v1727172427223!5m2!1sde!2sde"
              width="100%"
              height="100%"
              className="border-0 rounded-3xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </GridTile>
          <GridTile
            className="hidden md:block md:col-span-4 md:row-span-1 md:col-start-1 lg:col-start-5 md:row-start-6 lg:row-start-5"
            title="My Github Activity"
            innerClassName="flex justify-center"
          >
            <MyGithubCalendar />
          </GridTile>
          <GridTile
            className="md:col-start-5 lg:col-start-7 md:row-start-4 !p-0"
            innerClassName="flex justify-center align-center"
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
          <GridTile className="px-1 row-span-2 md:row-span-2 md:col-start-5 lg:col-start-7 md:row-start-5 lg:row-start-2 md:col-span-2 md:flex justify-center items-center">
            <a
              href="https://1drv.ms/b/s!AiW3_9fEY4hWie0M5GfzPjSbVOYMiA?e=uGcNuN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-between"
            >
              <img
                src="/cv_thumbnail.png"
                alt="CV Thumbnail"
                className="w-2/3 object-scale-down [filter:drop-shadow(0_0_1.75rem_rgba(0,_0,_0,_0.2))]"
              />
              <div className="border border-card-btn-background hover:bg-card-btn-background text-text rounded-full py-2 px-3">
                get my CV
              </div>
            </a>
          </GridTile>
          <GridTile
            className="md:col-start-6 lg:col-start-8 md:row-start-4 lg:row-start-4 !p-0"
            innerClassName="flex justify-center align-center"
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
