import React from "react";
import Analytics from "./assets/analytics.png";
import Document from "./assets/document.svg";
import Logout from "./assets/logout.svg";

const SideBar = () => {
  return (
    <div>
      <aside
        id="separator-sidebar"
        class="fixed top-0 left-0 z-40 w-68 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-[#111821]">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gradient-to-r from-green-800 to-green-500"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>

                <span class="ml-3">COMMUNITY DASHBOARD</span>
              </a>
            </li>
          </ul>
          <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-green-800">
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gradient-to-r from-green-800 to-green-500 dark:text-white group"
              >
                <img src={Analytics} />
                <span class="ml-4">ANALYTICS</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gradient-to-r from-green-800 to-green-500  dark:text-white group"
              >
                <img src={Document} />
                <span class="ml-3">PROPOSAL DASHBOARD</span>
              </a>
            </li>
          </ul>
          <div class=" bottom-0 left-0 absolute ml-4 mb-4 flex gap-4 text-white">
            <img src={Logout} />
            <p>Logout</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
