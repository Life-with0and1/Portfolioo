import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toogleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <button
      onClick={toogleTheme}
      className="fixed top-5 right-5 rounded-full p-2 transition-colors duration-300 focus:outline-hidden max-sm-hidden"
    >
      {isDarkMode ? (
        <Sun className="w-6 h-6 text-yellow-300 cursor-pointer" />
      ) : (
        <Moon className="w-6 h-6 text-blue-900 cursor-pointer" />
      )}
    </button>
  );
}

export default ThemeToggle;
