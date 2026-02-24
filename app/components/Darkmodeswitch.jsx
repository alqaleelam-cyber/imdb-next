"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "../context/themeContext";

export default function DarkModeSwitch() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-xl cursor-pointer hover:text-amber-500 transition-colors"
    >
      {!darkMode ? (
        <MdLightMode className="text-gray-800" />
      ) : (
        <MdDarkMode className="text-gray-100 dark:text-gray-100" />
      )}
    </button>
  );
}
