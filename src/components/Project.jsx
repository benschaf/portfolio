import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import BrandIcon from "./BrandIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project({ project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div key={project.id} className="mx-3 mt-8 lg:mx-auto">
      <div className="relative">
        <div className="z-30 sticky md:static top-0 bg-slate-200/50 backdrop-blur-lg">
          <p className="font-bold text-slate-700">Portfolio Project</p>
          <h2 className="text-3xl">{project.name}</h2>
        </div>
        <div className="flex gap-12">
          <div>
            <ul className="mt-3 flex gap-2 flex-wrap">
              {project.techStack.map((tech) => (
                <li key={tech.id}>
                  <BrandIcon
                    small={true}
                    icon={tech.icon}
                    name={tech.name}
                    color="default"
                  ></BrandIcon>
                </li>
              ))}
            </ul>
            <p className="my-4 font-semibold text-slate-800">
              {project.description}
            </p>
            <div className="flex lg:flex-row gap-4">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 rounded-full w-fit py-2 px-4 hover:bg-slate-300 transition-colors duration-300"
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
                className="border border-slate-600 rounded-full w-fit py-2 px-4 hover:bg-slate-300 transition-colors duration-300"
              >
                GitHub
                <FontAwesomeIcon
                  className="ml-3"
                  icon={faGithub}
                ></FontAwesomeIcon>
              </a>
            </div>
            <img
              src={project.image}
              alt={`Mockup of the ${project.name} project.`}
              className="mt-3 md:w-2/3 mx-auto lg:hidden"
            />
            <div
              className={`relative ${
                isExpanded ? "h-fit" : "h-52 lg:h-96"
              } overflow-hidden bg-white rounded-3xl pt-4 px-4 w-full my-4 shadow-lg`}
            >
              <h3 className="text-slate-600 mb-3">Top Technical Features</h3>
              {project.topFeatures.map((feature) => (
                <p
                  key={feature.id}
                  className="flex items-center gap-4 py-3 px-5"
                >
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    color="green"
                    size="2xl"
                  ></FontAwesomeIcon>
                  <div>
                    <h4 className="font-bold">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </p>
              ))}
              <h3 className="text-slate-600 my-3">About the Project</h3>
              <ReactMarkdown className="prose">
                {project.longDescription}
              </ReactMarkdown>
              <div className="sticky bottom-0 bg-gradient-to-b from-transparent via-white to-white p-4">
                <div
                  onClick={handleExpandToggle}
                  className={`lg:mx-0 ${
                    isExpanded
                      ? "bg-white border border-slate-700"
                      : "bg-orange-400 hover:bg-orange-300"
                  } rounded-full py-2 px-4 block mx-auto w-fit lg:ml-auto text-center transition-colors duration-300`}
                >
                  {isExpanded ? "See Less" : "See More"}
                  <FontAwesomeIcon
                    className="ml-3"
                    icon={isExpanded ? faAngleUp : faAngleDown}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          </div>
          <img
            src={project.image}
            alt={`Mockup of the ${project.name} project.`}
            className="mt-3 hidden lg:block lg:w-3/6 lg:object-contain lg:self-start"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
