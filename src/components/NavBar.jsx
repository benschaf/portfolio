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
      href: "#home",
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
    <nav className="m-auto">
      <ul className="flex space-x-4 rounded-full bg-slate-50/50 p-3 backdrop-blur-lg shadow-xl">
        {navbarItems.map((item) => (
          <li
            key={item.id}
            className="hover:bg-orange-400 transition-colors duration-300 ease-in-out rounded-full px-4 py-2"
          >
            <a
              href={item.href}
              className="text-center flex items-center space-x-2"
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
