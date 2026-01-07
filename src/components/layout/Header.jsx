"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
   
            <div className="leading-tight">
              <Image
              src="/logo.png"
              alt="Sarthi Tours & Travels"
              width={100}
              height={38}
              priority
            />
              <p className="text-md font-bold text-[#42194C]"> TOURS & TRAVELS</p>

            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-[#42194C]">Home</Link>
            <Link href="/about" className="hover:text-[#42194C]">About</Link>
            <Link href="/tours" className="hover:text-[#42194C]">
              Tours +
            </Link>
            <Link href="/cabs" className="hover:text-[#42194C]">Cabs</Link>
            <Link href="/blogs" className="hover:text-[#42194C]">Blogs</Link>
            <Link href="/contact" className="hover:text-[#42194C]">Contact</Link>
          </nav>

          {/* Right Info */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <a
              href="tel:+918141884446"
              className="font-semibold text-[#42194C]"
            >
              +91 11111 11111
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            <span className="text-2xl">☰</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col gap-4 px-4 py-6 text-sm font-medium text-gray-700">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/tours" onClick={() => setOpen(false)}>Tours</Link>
            <Link href="/cabs" onClick={() => setOpen(false)}>Cabs</Link>
            <Link href="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <a
              href="tel:+911111111111"
              className="mt-2 font-semibold text-[#42194C]"
            >
              Login
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
