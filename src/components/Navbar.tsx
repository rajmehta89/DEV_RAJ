"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Freelance", href: "#freelance" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ name }: { name: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "nav-top"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-8 lg:px-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--primary)] text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition group-hover:brightness-110">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold text-[var(--text)] sm:inline">
            {name}
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 text-sm text-[var(--muted)] transition-colors duration-200 hover:text-[var(--text)] nav-link-item"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-500/25 transition hover:brightness-110 hover:shadow-lg hover:shadow-blue-500/30"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-[5px] p-1 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 rounded bg-[var(--text)] transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-[var(--text)] transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-[var(--text)] transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="border-t border-[color:var(--border)] bg-[#080f1e]/95 px-4 pb-4 pt-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-lg px-4 py-2.5 text-sm text-[var(--muted)] transition hover:bg-white/5 hover:text-[var(--text)]"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-3 block w-full rounded-lg bg-[var(--primary)] px-4 py-2.5 text-center text-sm font-semibold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
