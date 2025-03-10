import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white  fixed w-full z-20 top-0 start-0 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-xl sm:text-3xl font-semibold whitespace-nowrap dark:text-white pl-2">
            Bloom
          </span>
        </Link>
        <div
          className="items-center justify-between  flex w-auto order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-row p-3 md:space-x-8 rtl:space-x-reverse">
            <li>
              <Link
                href="/infos"
                className="block py-2 px-3 text-sm sm:text-base text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 hover:text-[#ffb8aa]"
              >
                Infos
              </Link>
            </li>
            <li>
              <Link
                href="/planning"
                className="block py-2 px-3 text-sm sm:text-base 'text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 hover:text-[#ffb8aa]"
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                href="/prices"
                className="block py-2 px-3 text-sm sm:text-base text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:p-0 hover:text-[#ffb8aa]"
              >
                Packages
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
