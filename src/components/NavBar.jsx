import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faProjectDiagram,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t } = useTranslation();
  const navbarItems = [
    {
      id: 1,
      name: t("Home"),
      href: "#",
      icon: faHome,
    },
    {
      id: 2,
      name: t("About"),
      href: "#about",
      icon: faUser,
    },
    {
      id: 3,
      name: t("Projects"),
      href: "#projects",
      icon: faProjectDiagram,
    },
    {
      id: 4,
      name: t("Contact"),
      href: "#contact",
      icon: faEnvelope,
    },
  ];

  return (
      <nav className="h-full flex items-center">
        <ul className="flex justify-around w-full">
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
