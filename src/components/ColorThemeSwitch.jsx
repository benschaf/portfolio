import React from "react";

function ColorThemeSwitch() {
  return (
    <div className="absolute end-3">
      {/* > Credit for toggle: https://flowbite.com/docs/forms/toggle/ */}
      <label className="flex items-center cursor-pointer relative group">
        <input type="checkbox" value="" className="sr-only peer"></input>
        <div className="bg-sky-200/50 p-4 shadow-[inset_2px_1px_4px_rgba(0,0,0,0.2)] peer-checked:shadow-[inset_2px_1px_4px_rgba(255,255,255,0.2)] after:shadow-inner relative w-14 h-7 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-1 after:start-[4px] after:bg-yellow-300 after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:after:bg-teal-200 peer-checked:bg-teal-900">
        </div>
      </label>
    </div>
  );
}

export default ColorThemeSwitch;
