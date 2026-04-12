"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/rates", label: "Live Rates" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-navy/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🪙</span>
          <div>
            <span className="text-lg font-bold text-gold">Sharda Jewellers</span>
            <span className="ml-2 hidden text-xs text-slate-400 sm:inline">Since 1971</span>
          </div>
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/919425561850?text=Hello%20Sharda%20Jewellers!"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-500"
            >
              WhatsApp Us
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="text-slate-300 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/10 bg-navy-light px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-slate-300 transition hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/919425561850?text=Hello%20Sharda%20Jewellers!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
