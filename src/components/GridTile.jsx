import React from "react";

function GridTile({ className, children, noPadding, }) {
    const padding = noPadding ? "" : "p-5";
    return(
        <div className={`bg-white rounded-3xl ${padding} drop-shadow-lg ${className}`}>{children}</div>
    );
}

export default GridTile;
