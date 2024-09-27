import React from "react";

function GridTile({ className, children, title, innerClassName }) {
  return (
    <div
      className={`${className} bg-white rounded-3xl p-5 drop-shadow-lg`}
    >
      <h3 className="text-slate-600">{title}</h3>
      <div className={`w-full h-full ${innerClassName}`}>{children}</div>
    </div>
  );
}

export default GridTile;
