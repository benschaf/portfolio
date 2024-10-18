import React from "react";
import { useTranslation } from "react-i18next";

const InputField = ({
  id,
  name,
  type,
  placeholder,
  handleBlur,
  handleChange,
  error,
  edited,
}) => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        className="bg-transparent peer placeholder-transparent h-10 w-full border-b-2 border-x-0 border-t-0 border-b-gray-300 dark:border-b-gray-600 text-text focus:ring-0 focus:border-blue-200 pl-2"
        placeholder={placeholder}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <label
        htmlFor={id}
        className="cursor-text absolute left-0 -top-3.5 text-text-secondary dark:text-gray-400 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-text-secondary dark:peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-text-secondary dark:peer-focus:text-gray-400 peer-focus:text-sm pl-2"
      >
        {t(placeholder)}
      </label>
      {error && edited ? (
        <p className="text-red-600 dark:text-red-400 bg-red-200 dark:bg-transparent rounded mt-1 w-fit px-2 text-sm">
          {error}
        </p>
      ) : (
        <p className="invisible text-red-600 dark:text-red-400 bg-red-200 dark:bg-transparent rounded mt-1 w-fit px-2 text-sm">
          a
        </p>
      )}
    </div>
  );
};

export default InputField;