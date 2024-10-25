import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

function BrandIcon({
  icon,
  name,
  link,
  className,
  color = "#2dd4bf",
  small = false,
}) {
  if (
    (color === "default" && localStorage.theme === "dark") ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    color = "white";
  }

  let siIcon = null;
  if (icon) {
    siIcon = React.createElement(icon, {
      size: small ? "1em" : "2em",
      color,
    });
  }

  if (small) {
    return (
      <div className="flex items-center justify-center mx-auto bg-card-background text-text-secondary rounded-full px-2 py-1 text-xs">
      {siIcon}
      {!link ? (
        <span className={`${siIcon ? "ml-1" : ""}`}>{name}</span>
      ) : (
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
        >
        <span className={`${siIcon ? "ml-1" : ""} bg-white text-text-secondary rounded-full px-2 py-1 text-xs`}>
          {name}
        </span>
        <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="ml-2" />
        </a>
      )}
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center mx-auto size-[5em]">
        {siIcon}
        {!link ? (
          <span className="text-text">{name}</span>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-bold text-text"
          >
            {name}{" "}
            <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="ml-2" />
          </a>
        )}
      </div>
    );
  }
}

export default BrandIcon;
