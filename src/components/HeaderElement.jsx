import React, { useState } from "react";

function HeaderElement({ className, children }) {
  return (
    <div className={`${className} z-40 rounded-full bg-[rgba(255,255,255,.4)] dark:bg-[rgba(0,0,0,.4)] text-text py-3 px-4 backdrop-blur-3xl shadow-[10px_10px_25px_20px_rgba(0,0,0,0.2)] md:shadow-[10px_10px_25px_0px_rgba(0,0,0,0.2)]`}>
      {children}
    </div>
  );
}

export default HeaderElement;