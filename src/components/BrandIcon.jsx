import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faExternalLinkAlt,
  faExternalLinkSquare,
  faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

function BrandIcon({ icon, name, link, className, color= "#2dd4bf" }) {
  const siIcon = React.createElement(icon, { size: "2em", color });

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

export default BrandIcon;
