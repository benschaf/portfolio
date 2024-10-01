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
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block m-auto">
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

      {/* Mobile Navbar */}
      <nav className="block md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg">
        <ul className="flex justify-around p-2">
          {navbarItems.map((item) => (
            <li key={item.id} className="flex-1 text-center">
              <a
                href={item.href}
                className="flex flex-col items-center space-y-1"
              >
                <FontAwesomeIcon icon={item.icon} />
                <span className="text-xs">{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;