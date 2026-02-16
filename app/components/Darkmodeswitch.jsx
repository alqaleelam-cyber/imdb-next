"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null
  };

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-xl cursor-pointer hover:text-amber-500 transition-colors"
    >
      {theme === "dark" ? (
        <MdLightMode className="text-gray-100" />
      ) : (
        <MdDarkMode className="text-gray-800 dark:text-gray-100" />
      )}
    </button>
  );
}
