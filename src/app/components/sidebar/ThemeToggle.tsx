'use client'

import React from "react";
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = ({ isDarkMode, toggleDarkMode } : {isDarkMode: boolean, toggleDarkMode : () => void}) => {
    return (
        <div className="flex items-center">
            <input
                type="checkbox"
                id="switch-mode"
                checked={isDarkMode}
                onChange={toggleDarkMode}
                className="hidden"
            />
            <label
                htmlFor="switch-mode"
                className={`cursor-pointer flex items-center w-12 h-6 rounded-full relative transition duration-200 ease-in-out ${isDarkMode ? "bg-gray-600" : "bg-gray-400"}`}
            >
                <span className={`absolute left-0 top-0 w-6 h-6 rounded-full shadow transform transition duration-200 ease-in-out ${isDarkMode ? "translate-x-6 bg-gray-200" : "bg-white"} `}>
                    {isDarkMode ?
                        <FaMoon className="text-gray-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/> :
                        <FaSun className="text-yellow-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
                    }
                </span>
            </label>
        </div>
    );
}

export default ThemeToggle;