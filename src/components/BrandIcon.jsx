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
  const siIcon = React.createElement(icon, { size: small ? "1em" : "2em", color });

  if (small) {
    return (
      <div className="flex items-center justify-center mx-auto bg-white text-slate-700 rounded-full px-2 py-1 text-xs">
        {siIcon}
        {!link ? (
          <span className="ml-1 ">
            {name}
          </span>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <span className="ml-1 bg-white text-slate-700 rounded-full px-2 py-1 text-xs">
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
          <span className="font-bold text-slate-500">{name}</span>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-bold text-slate-500"
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