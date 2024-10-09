import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const navbarItems = [
    {
      id: 1,
      name: "Home",
      href: "#",
      icon: faHome,
    },
    {
      id: 2,
      name: "About",
      href: "#about",
      icon: faUser,
    },
    {
      id: 3,
      name: "Projects",
      href: "#projects",
      icon: faProjectDiagram,
    },
    {
      id: 4,
      name: "Contact",
      href: "#contact",
      icon: faEnvelope,
    },
  ];

  return (
      <nav className="m-auto w-11/12 md:w-fit p-2 md:p-3">
        <ul className="flex justify-around rounded-full bg-[rgba(255,255,255,.4)] dark:bg-[rgba(0,0,0,.4)] text-text p-3 backdrop-blur-3xl shadow-[10px_10px_25px_20px_rgba(0,0,0,0.2)] md:shadow-[10px_10px_25px_0px_rgba(0,0,0,0.2)]">
          {navbarItems.map((item) => (
            <li
              key={item.id}
              className="hover:bg-orange-400 dark:hover:text-black transition-colors duration-300 ease-in-out rounded-full px-4 py-2 flex"
            >
              <a
                href={item.href}
                className="text-center flex flex-col md:flex-row md:gap-2 items-center"
              >
                <FontAwesomeIcon icon={item.icon} />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
  );
};

export default NavBar;
