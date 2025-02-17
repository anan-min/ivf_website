import React from "react";
import Link from "next/link"; // Import Link from Next.js
import { PhoneCall } from "lucide-react"; // Using PhoneIcon as a contact icon

const ContactButton = () => {
  return (
    <Link
      href="/contacts"
      className="fixed bottom-3 right-3 rounded-full p-3 flex justify-center items-center shadow-lg transition-all duration-300 ease-in-out hover:bg-white-100 z-20 bg-white border border-gray-300 opacity-80"
    >
      <PhoneCall className="block lg:hidden text-grey-500 text-sm" size={15} />
      <PhoneCall className="hidden lg:block text-grey-500 text-sm" size={20} />
    </Link>
  );
};

export default ContactButton;
