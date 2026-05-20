"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Bosh Sahifa" },
    { href: "/about", label: "Biz Haqimizda" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Aloqa" },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`
              text-sm font-medium transition-colors
              ${pathname === link.href 
                ? "text-blue-600 border-b-2 border-blue-600" 
                : "text-gray-600 hover:text-blue-600"
              }
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}