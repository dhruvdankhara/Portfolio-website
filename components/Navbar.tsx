"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Home } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/blogs", label: "Blogs", icon: BookOpen },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 bg-white border-b-2 border-x-2 border-black w-full max-w-[1400px]">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-black tracking-tight text-black hover:text-pop-pink transition-colors px-6 py-4 border-r-2 border-black"
        >
          DHRUV
        </Link>

        {/* Nav links */}
        <div className="flex items-center h-full border-2 border-r-0 border-black">
          {links.map(({ href, label, icon: Icon }) => {
            const active =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center px-6 py-4 font-bold text-sm transition-all duration-200 border-r-2 border-black ${
                  active ? "bg-pop-yellow" : "hover:bg-gray-100"
                }`}
              >
                <Icon className="mr-2 h-4 w-4" strokeWidth={2.5} />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <Link
          href="/#contact"
          className="bg-black text-white font-bold text-sm px-6 py-5 border border-black hover:bg-pop-teal transition-colors hidden md:block"
        >
          Start Project
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
