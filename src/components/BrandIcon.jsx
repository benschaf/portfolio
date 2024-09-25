import React from "react";

function BrandIcon({ icon, name, ...props }) {
const siIcon = React.createElement(icon, { size: "2em", ...props });
  return (
    <div className="flex flex-col items-center justify-center size-[5em] text-blue-400">
      {siIcon}
      <span>{name}</span>
    </div>
  );
}

export default BrandIcon;
