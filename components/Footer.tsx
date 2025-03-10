import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 <Link href="https://flowbite.com/">Anan Mingmitpattanakul™</Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
