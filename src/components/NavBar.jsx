import React from "react";

const NavBar = () => {
  const navbarItems = [
    {
      id: 1,
      name: "Home",
      href: "#home",
    },
    {
      id: 2,
      name: "About",
      href: "#about",
    },
    {
      id: 3,
      name: "Projects",
      href: "#projects",
    },
    {
      id: 4,
      name: "Contact",
      href: "#contact",
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
            <a href={item.href} className="block text-center">
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
