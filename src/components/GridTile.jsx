import React from "react";

function GridTile({ className, children, title, innerClassName }) {
  return (
    <div
      className={`${className} bg-card-background text-text rounded-3xl p-5`}
    >
      <h3 className="text-text-secondary">{title}</h3>
      <div className={`w-full h-full ${innerClassName}`}>{children}</div>
    </div>
  );
}

export default GridTile;
