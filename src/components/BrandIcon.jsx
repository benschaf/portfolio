import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLink,
  faExternalLinkAlt,
  faExternalLinkSquare,
  faExternalLinkSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

function BrandIcon({ icon, name, link, className, ...props }) {
  const siIcon = React.createElement(icon, { size: "2em" });

  return (
    <div className="flex flex-col items-center justify-center size-[5em]">
      {siIcon}
      {!link ? (
        <span>{name}</span>
      ) : (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          {name}{" "}
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} className="ml-2" />
        </a>
      )}
    </div>
  );
}

export default BrandIcon;
