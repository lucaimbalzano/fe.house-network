import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

type FormDropDownProps = {
  label: string;
  name: string;
};

const FormDropDown: React.FC<FormDropDownProps> = ({ label, name }) => {
  const { register, formState: { errors } } = useFormContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    // Aggiorna lo stato solo dopo il montaggio del componente
    setIsDropdownOpen(false);
  }, []);

  return (
    <>
            <button
        id="dropdownHoverButton"
        onClick={toggleDropdown}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        {...register(name)}
        >
        {label}{' '}
        <svg
        className="w-4 h-4 ml-2"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
        </button>
        {isDropdownOpen && (
        <div
        id="dropdownHover"
        className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
        <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Dashboard
        </a>
        </li>
        <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Settings
        </a>
        </li>
        <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Earnings
        </a>
        </li>
        <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
            Sign out
        </a>
        </li>
        </ul>
        </div>
        )}



      {/* ERRORS */}
      {errors[name] && (
        <span className="text-red-500 text-xs pt-1 block">
          {errors[name]?.message as string}
        </span>
      )}
    </>
  );
};

export default FormDropDown;



