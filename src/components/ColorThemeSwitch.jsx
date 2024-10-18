import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke, faMoon } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useTranslation } from "react-i18next";

function ColorThemeSwitch({ className, toggleFunction, isDarkMode }) {
  const { t } = useTranslation();

  return (
    <>
      {/* > Credit for toggle: https://flowbite.com/docs/forms/toggle/ */}
      <label className="hover:bg-card-btn-background flex ml-2 mr-1 items-center cursor-pointer px-2 h-fit py-2 rounded-full relative group">
        <FontAwesomeIcon icon={faCircleHalfStroke} className="mr-1" />
        <input
          type="checkbox"
          aria-label={t("Toggle dark mode")}
          checked={isDarkMode}
          onChange={toggleFunction}
          className="sr-only peer"
        />
        <div className="bg-sky-200/50 p-3 shadow-[inset_2px_1px_4px_rgba(0,0,0,0.2)] peer-checked:shadow-[inset_2px_1px_4px_rgba(0,0,0,0.2)] after:shadow-inner relative w-12 h-6 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[3px] after:bg-yellow-300 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:after:bg-teal-200 peer-checked:bg-teal-900"></div>
      </label>
    </>
  );
}

export default ColorThemeSwitch;
