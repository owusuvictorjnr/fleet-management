"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Login", href: "/login" },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-blue-600 capitalize">
          battery tracker
        </Link>

        <nav className="md:flex items-center gap-6 hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathName === link.href ? "text-blue-600" : "text-gray-600"
              } hover:text-blue-500 transition`}
            >
              {link.label}
            </Link>
          ))}

          <Button variant="outline" className="ml-4 sm:block">
            Sign Up
          </Button>
        </nav>
      </div>
    </header>
  );
}
