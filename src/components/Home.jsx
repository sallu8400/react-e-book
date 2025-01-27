import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform bg-white dark:bg-gray-800 shadow-lg w-64 transition-transform duration-300 ease-in-out z-50 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">My App</h2>
          <button
            className="sm:hidden text-gray-800 dark:text-white"
            onClick={toggleSidebar}
          >
            ✖
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            <li className="group">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V3m4 4h5m0 0l-3 3m3-3l-3-3"
                  />
                </svg>
                <span className="ml-4">Dashboard</span>
              </a>
            </li>
            <li className="group">
              <a
                href="#"
                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-6 h-6 text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 21V10M4 21v-6M4 10V3m0 7h16m0 0l-3-3m3 3l-3 3"
                  />
                </svg>
                <span className="ml-4">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Content */}
      <div className="flex-1 sm:ml-64 p-4">
        <button
          className="sm:hidden px-4 py-2 text-white bg-blue-600 rounded-md"
          onClick={toggleSidebar}
        >
          Menu
        </button>
        <h1 className="text-2xl font-bold">Welcome to the App!</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          This is the main content area. Adjust the sidebar visibility by
          clicking the menu button.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;