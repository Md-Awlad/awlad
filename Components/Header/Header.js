import React, { useState } from "react";
import {MdMenu} from "react-icons/md"
import {AiOutlineClose} from "react-icons/ai"

const Header = () => {
  const[isOpen , setIsOpen] = useState(false)
  return (
    <>
     <nav className="bg-white shadow dark:bg-gray-800">
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
              <div className="text-xl font-semibold text-gray-700">
                <a
                  className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300 italic"
                  href="#"
                >
                  Awlad Hossain
                </a>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                onClick={()=>setIsOpen(!isOpen)}
                  type="button"
                  className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                  aria-label="toggle menu"
                >
                </button>
                <svg name={isOpen?"close":"evenodd"}  viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                    ></path>
                  </svg>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className={`hidden -mx-4 lg:flex lg:items-center ${isOpen?"top-5":"-top-5"}`}>
              <a
                href="#"
                className="block mx-4 mt-2 text-md text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
              >
                Home
              </a>
              <a
                href="/about"
                className="block mx-4 mt-2 text-md text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
              >
                About
              </a>
              <a
                href="#"
                className="block mx-4 mt-2 text-md text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
              >
                Services
              </a>
              <a
                href="#"
                className="block mx-4 mt-2 text-md text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
              >
                Blogs
              </a>
              <a
                href="#"
                className="block mx-4 mt-2 text-md text-gray-700 capitalize lg:mt-0 dark:text-gray-200 hover:text-blue-600 dark:hover:text-indigo-400"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

