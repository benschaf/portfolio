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
    <div key={project.id} className="mt-24 lg:mx-auto">
      <div className="relative">
        <div className="flex gap-12">
          <div className="lg:w-full">
            <div className="z-30 sticky md:static -mx-4 px-4 top-0 backdrop-blur-3xl md:backdrop-blur-none">
              <p className="font-bold text-text-secondary">Portfolio Project</p>
              <h2 className="text-3xl text-text">{project.name}</h2>
            </div>
            <p className="my-4 font-semibold text-text">
              {project.description}
            </p>
            <h3>Tech Stack</h3>
            <ul id="tech-stack" className="flex gap-2 flex-wrap">
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
            <div className="flex gap-4 mt-8">
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap border border-secondary-btn-background rounded-full w-fit py-2 px-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Visit live Website
                <FontAwesomeIcon
                  className="ml-3"
                  icon={faArrowUpRightFromSquare}
                />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap border border-secondary-btn-background rounded-full w-fit py-2 px-4 bg-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
              >
                GitHub
                <FontAwesomeIcon
                  className="ml-3"
                  icon={faGithub}
                />
              </a>
            </div>
            <img
              src={project.image}
              alt={`Mockup of the ${project.name} project.`}
              className="mt-3 md:w-2/3 mx-auto lg:hidden"
            />
          </div>
          <div>
            <img
              src={project.image}
              alt={`Mockup of the ${project.name} project.`}
              className="mt-3 hidden lg:block lg:w-full lg:object-contain lg:self-start"
            />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-12 my-8">
        <div
          id="tech-stack"
          className={`bg-card-background mb-8 lg:mb-0 lg:w-1/2 ${isExpanded ? 'h-fit' : ''} rounded-3xl p-8 shadow-lg`}
        >
          <h3 className="text-text-secondary">Top Technical Features</h3>
          {project.topFeatures.map((feature) => (
            <p
              key={feature.id}
              className="flex items-center text-text gap-4 py-3 px-5"
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
        </div>
        <div
          id="about-project"
          className={`relative ${ isExpanded ? 'h-full' : 'h-96'} overflow-hidden bg-card-background rounded-3xl pt-4 px-4 shadow-lg`}
        >
          <h3 className="text-text-secondary my-3">About the Project</h3>
          <ReactMarkdown className="prose text-text">
            {project.longDescription}
          </ReactMarkdown>
          <div className="sticky bottom-0 bg-gradient-to-b from-transparent to-[#f2f2f2] dark:to-[#383838] p-4">
            <div
              onClick={handleExpandToggle}
              className={`lg:mx-0 ${
                isExpanded
                  ? "bg-transparent border border-secondary"
                  : "bg-orange-400 dark:hover:text-black hover:bg-orange-300"
              } rounded-full py-2 px-4 block ml-auto w-fit lg:ml-auto text-center transition-colors duration-300`}
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
    </div>
  );
}

export default Project;
