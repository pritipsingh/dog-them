import  { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector("body")?.setAttribute("data-theme" ,'dark');
    } else {
      document.querySelector("body")?.setAttribute("data-theme" ,'light');
    }
    // Save the theme to local storage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light');
  };
console.log(theme)
  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-8 rounded-full w-16 transition-colors duration-300 focus:outline-none bg-gray-300 dark:bg-gray-600"
    >
      <span className={`absolute ${
            theme === 'dark' ? 'left-9' : 'left-1'
          }  inline-block w-6 h-6 transform bg-white rounded-full transition-all duration-300 `}>
        <svg
          className={`w-6 h-6 text-gray-500 dark:text-yellow-400 ${
            theme === 'dark' ? 'hidden' : 'block'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2a9.926 9.926 0 013.86.74A10.019 10.019 0 0122 12c0 5.523-4.477 10-10 10S2 17.523 2 12A10.019 10.019 0 018.14 2.74 9.926 9.926 0 0112 2z"
          />
        </svg>
        <svg
          className={`w-6 h-6 text-yellow-400 dark:text-gray-500 ${
            theme === 'light' ? 'hidden' : 'block'
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17.657 16.657A8 8 0 018.343 8.343M15.536 8.465A5.5 5.5 0 108.464 15.536m-5.778 1.414A9 9 0 1118.364 6.364M12 3v1m0 16v1m8.364-8.364h-1m-16.728 0h-1m12.728 5.536l-.707-.707m-10.607 0l-.707.707m12.728-12.728l-.707.707m-10.607 0l-.707-.707"
          />
        </svg>
      </span>
    </button>
  );
};

export default ThemeToggle;
