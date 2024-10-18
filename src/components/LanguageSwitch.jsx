import React, { useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

function LanguageSwitch({ className }) {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(i18next.language);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      setLanguage(lng);
      console.log(`Language changed to ${lng}`);
    });
    setDropdownOpen(false);
  };

  return (
    <div className={`relative m-2 inline-block text-left ${className}`}>
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className={`flex items-center py-2 px-4 ${dropdownOpen ? 'rounded-t-2xl bg-card-btn-background' : 'rounded-full'} hover:bg-card-btn-background transition-colors`}
        aria-label={t("Pick language")}
      >
        <FontAwesomeIcon icon={faLanguage} className="mr-2" />
        {language === 'en' ? t("English") : t("German")}
      </button>
      {dropdownOpen && (
        <div className="absolute left-0 w-full bg-card-btn-background hover:bg-gray-200 dark:hover:bg-gray-800 rounded-b-2xl">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => changeLanguage('en')}
              className={`block px-4 py-2 text-sm ${language === 'de' ? 'text-text' : 'hidden'} w-full text-left`}
              role="menuitem"
            >
              {t("English")}
            </button>
            <button
              onClick={() => changeLanguage('de')}
              className={`block px-4 py-2 text-sm ${language === 'en' ? 'text-text' : 'hidden'} w-full text-left`}
              role="menuitem"
            >
              {t("German")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitch;