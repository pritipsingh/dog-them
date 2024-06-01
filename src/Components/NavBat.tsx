import  { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { BsGlobeAmericas } from "react-icons/bs";
import { TiHomeOutline } from "react-icons/ti";
import { MdEmojiEvents } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { IoPersonAddOutline } from "react-icons/io5";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navBar = [
    {
      id: 1,
      title: "My Space",
      icon: <BsGlobeAmericas />,
      path: "/my-space"
    },
    {
      id: 2,
      title: "Home",
      icon: <TiHomeOutline />,
      path: "/"
    },
    {
      id: 3,
      title: "Events",
      icon: <MdEmojiEvents />,
      path: "/events"
    },
    {
      id: 4,
      title: "Videos",
      icon: <BsGlobeAmericas />,
      path: "/videos"
    },
    {
      id: 5,
      title: "Live",
      icon: <MdOutlineVideoSettings />,
      path: "/live"
    },
    {
      id: 6,
      title: "Register",
      icon: <IoPersonAddOutline />,
      path: "/register"
    },
  ];

  return (
    <nav className="bg-navbar p-4 text-text shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <div className="hidden md:flex space-x-4">
            {
                navBar.map((nav) => (
                    <div className='flex gap-2 items-center'>
                        {nav.icon}
      <a href={nav.path} className="hover:text-gray-500 whitespace-nowrap dark:hover:text-gray-300 focus:underline active:underline">{nav.title}</a>
                    </div>

                ))
            }
    
          
        </div>
        <div className="flex items-center justify-end w-full">
          <ThemeToggle />
          <button onClick={toggleMenu} className="md:hidden ml-4 focus:outline-none transform transition-all delay-100">
            <svg
              className="w-6 h-6 text-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
               {navBar.map((nav) => (
            <div key={nav.title} className="flex gap-3 items-center justify-start text-start px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700">
              {nav.icon}
              <a href={nav.path} className="hover:text-gray-500 whitespace-nowrap dark:hover:text-gray-300 focus:underline active:underline">{nav.title}</a>
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
