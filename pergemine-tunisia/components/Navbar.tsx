"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations } from "@/lib/useTranslations";

const navLinks = [
  { key: "navbar.home", href: "/" },
  { key: "navbar.about", href: "/about" },
  { key: "navbar.services", href: "/services" },
  { key: "navbar.rig", href: "/rig" },
  { key: "navbar.hse", href: "/hse" },
  { key: "navbar.camp", href: "/camp" },
  { key: "navbar.contact", href: "/contact" },
];

export default function Navbar() {
  const { t, locale, switchLocale, createLocalizedHref } = useTranslations();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-blue/95 backdrop-blur shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <Link href={createLocalizedHref("/")} className="flex items-center gap-3">
          <img
            src="/pergemine_tunisie_logo.png"
            alt="Pergemine Tunisia logo"
            className="h-14 object-contain"
          />
        </Link>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-white">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={createLocalizedHref(link.href)}
              className="relative hover:text-brand-yellow after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-brand-yellow after:transition-all after:duration-300 hover:after:w-full"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => switchLocale(locale === "fr" ? "en" : "fr")}
            className="rounded-full border border-white px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>

          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-brand-dark text-white px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={createLocalizedHref(link.href)}
              className="hover:text-brand-yellow"
              onClick={() => setOpen(false)}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}