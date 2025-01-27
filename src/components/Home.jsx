import React, { useState } from "react";
import { Menu, X, Home, User, Settings, LogOut, ChevronDown } from "lucide-react";

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // Manage submenu state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const menuItems = [
    { name: "Home", icon: <Home />, link: "#" },
    { name: "Profile", icon: <User />, link: "#", submenu: true }, // Add submenu flag
    { name: "Settings", icon: <Settings />, link: "#" },
    { name: "Logout", icon: <LogOut />, link: "#" },
  ];

  return (
    <div className="flex flex-col h-screen">
      {/* Top Header */}
      <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-20 shadow-md">
        <div className="flex items-center justify-between">
          <button
            className="md:hidden p-2"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="text-xl font-semibold">My Application</div>
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform transition-transform duration-300 ease-in-out z-10 md:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <div className="p-4 border-b border-gray-700 text-lg font-semibold">
            My Sidebar
          </div>
          <ul className="mt-4 space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                {/* Profile Item with Submenu */}
                {item.submenu ? (
                  <div>
                    <a
                      href={item.link}
                      className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 rounded-lg"
                      onClick={toggleProfileMenu}
                    >
                      {item.icon}
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`ml-auto transform transition-transform duration-300 ${isProfileOpen ? "rotate-180" : ""}`}
                      />
                    </a>
                    {isProfileOpen && (
                      <ul className="ml-6 mt-2 space-y-2">
                        <li>
                          <a
                            href="#"
                            className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 rounded-lg"
                          >
                            <span>View Profile</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 rounded-lg"
                          >
                            <span>Edit Profile</span>
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="flex items-center gap-4 px-4 py-2 hover:bg-gray-700 rounded-lg"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-1 ml-0 md:ml-64 p-4">
          <h1 className="text-2xl font-bold">Content Area</h1>
          <p className="mt-2 text-gray-600">
            This is where your main content will go. Resize the screen to see the responsive sidebar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
