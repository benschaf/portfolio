import React, { useState } from "react";
import i18next from "i18next";

function LanguageSwitch({ className }) {
  const [language, setLanguage] = useState(i18next.language);

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      setLanguage(lng);
      console.log(`Language changed to ${lng}`);
    });
  };

  return (
    <div className={`absolute end-20 inline-flex items-center ${className}`}>
      <span className="mr-2 text-sm font-medium text-gray-700">EN</span>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={language === 'de'}
          onChange={() => changeLanguage(language === 'en' ? 'de' : 'en')}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
      </label>
      <span className="ml-2 text-sm font-medium text-gray-700">DE</span>
    </div>
  );
}

export default LanguageSwitch;