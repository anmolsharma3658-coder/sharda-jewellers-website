"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV = [
  { label: "Collections", href: "/gallery" },
  { label: "Rates", href: "/rates" },
  { label: "Our Story", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/95 shadow-[0_1px_0_rgba(201,168,76,0.15)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group" onClick={() => setOpen(false)}>
          <span
            className={`font-serif text-xl font-bold tracking-wide transition-colors duration-300 sm:text-2xl ${
              scrolled ? "text-charcoal" : "text-ivory"
            }`}
          >
            SHARDA
          </span>
          <span
            className={`ml-1.5 text-[10px] font-medium uppercase tracking-[0.3em] transition-colors duration-300 sm:text-xs ${
              scrolled ? "text-gold" : "text-gold-light"
            }`}
          >
            Jewellers
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                scrolled
                  ? "text-charcoal hover:text-gold"
                  : "text-ivory/90 hover:text-ivory"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="https://wa.me/919425561850"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 border border-gold/40 px-5 py-2 text-[12px] font-medium uppercase tracking-[0.15em] text-gold transition-all duration-300 hover:bg-gold hover:text-ivory"
          >
            WhatsApp Us
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-px w-6 transition-all duration-300 ${
              open
                ? "translate-y-[3.5px] rotate-45 bg-charcoal"
                : scrolled
                  ? "bg-charcoal"
                  : "bg-ivory"
            }`}
          />
          <span
            className={`h-px w-6 transition-all duration-300 ${
              open
                ? "-translate-y-[3.5px] -rotate-45 bg-charcoal"
                : scrolled
                  ? "bg-charcoal"
                  : "bg-ivory"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-ivory lg:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-2xl font-medium text-charcoal transition-colors hover:text-gold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="https://wa.me/919425561850"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-4 border border-gold px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-ivory"
                >
                  WhatsApp Us
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
