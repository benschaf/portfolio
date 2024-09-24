import React from "react";

function GridTile({ className, children, noPadding }) {
    const padding = noPadding ? "" : "p-5";
    return(
        <div className={`${className} bg-white rounded-3xl ${padding} drop-shadow-lg`}>{children}</div>
    );
}

export default GridTile;
