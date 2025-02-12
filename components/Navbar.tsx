import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 shadow-sm">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl sm:text-2xl font-semibold text-[#daa9a9] whitespace-nowrap dark:text-white pl-2">
            Bloom
          </span>
        </a>
        <div
          className="items-center justify-between  flex w-auto order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-row p-3 md:space-x-8 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-sm sm:text-base text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 hover:text-[#ffb8aa]"
              >
                Infos
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-sm sm:text-base text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 hover:text-[#ffb8aa]"
              >
                Plannings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-sm sm:text-base text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 hover:text-[#ffb8aa]"
              >
                Packages
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
