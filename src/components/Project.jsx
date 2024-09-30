import React from "react";
import ReactMarkdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faArrowUpRightFromSquare,
  faForward,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project({ project }) {
  return (
    <div key={project.id} className="w-[80vw] mx-auto mt-16">
      <p className="font-bold text-slate-700">Portfolio Project</p>
      <h2 className="text-3xl">{project.name}</h2>
      <p className="font-semibold text-slate-800 max-w-md">
        {project.description}
      </p>
      <div className="md:flex gap-10">
        <div>
          <div className="bg-white rounded-3xl p-4 w-full my-4 shadow-lg">
            <h3 className="text-slate-600 mb-3">Top Technical Features</h3>
            {project.topFeatures.map((feature) => (
              <p key={feature.id} className="flex items-center gap-2 py-3 px-5">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  color="green"
                  size="2xl"
                ></FontAwesomeIcon>
                <ReactMarkdown className="prose">{feature.name}</ReactMarkdown>
              </p>
            ))}
          </div>
          <div className="bg-white rounded-3xl p-4 w-full my-4 shadow-lg">
            <h3 className="text-slate-600 mb-3">Tech Stack</h3>
            <ul className="flex gap-5 flex-wrap">
              {project.techStack.map((tech) => (
                <li key={tech.id} className="flex">
                  <tech.icon color="default" />{" "}
                  <span className="ml-2">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[40vw] flex flex-col justify-between p-4">
          <img
            src={project.image}
            alt={`Mockup of the ${project.name} project.`}
            className="rounded-3xl"
          />
          <div>
            <div className="flex justify-end gap-4">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 rounded-full py-2 px-4 hover:bg-slate-300 transition-colors duration-300"
              >
                Visit live Website
                <FontAwesomeIcon
                  className="ml-3"
                  icon={faArrowUpRightFromSquare}
                ></FontAwesomeIcon>
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 rounded-full py-2 px-4 hover:bg-slate-300 transition-colors duration-300"
              >
                Go to GitHub Repository
                <FontAwesomeIcon
                  className="ml-3"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </a>
            </div>
            <div className="bg-orange-400 rounded-full py-2 px-4 mt-4 block w-fit ml-auto text-center hover:bg-orange-300 transition-colors duration-300">
              See More
              <FontAwesomeIcon
                className="ml-3"
                icon={faAngleDown}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
