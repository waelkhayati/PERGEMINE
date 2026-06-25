"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/useTranslations";

export default function Footer() {
  const { t, createLocalizedHref } = useTranslations();

  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-3">
            <img
              src="/pergemine_tunisie_logo.png"
              alt="Pergemine Tunisia logo"
              className="h-30 object-contain"
            />
          </h3>
          <p className="text-sm leading-relaxed max-w-md">
            {t("footer.description")}
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
            {t("footer.navigation")}
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={createLocalizedHref("/about")} className="hover:text-brand-yellow">{t("navbar.about")}</Link></li>
            <li><Link href={createLocalizedHref("/services")} className="hover:text-brand-yellow">{t("navbar.services")}</Link></li>
            <li><Link href={createLocalizedHref("/rig")} className="hover:text-brand-yellow">{t("navbar.rig")}</Link></li>
            <li><Link href={createLocalizedHref("/hse")} className="hover:text-brand-yellow">{t("navbar.hse")}</Link></li>
            <li><Link href={createLocalizedHref("/contact")} className="hover:text-brand-yellow">{t("navbar.contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
            {t("footer.contact")}
          </h4>
          <p className="text-sm leading-relaxed">
            Rue du Lac Houran,<br />
            Rahma Building A5<br />
            1053 Les Berges du Lac 1<br />
            Tunis, Tunisia
          </p>
          <a
            href="https://www.pergemine.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-brand-yellow hover:underline text-sm"
          >
            {t("footer.parent")}
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-xs py-5 text-gray-400">
        {t("footer.rights", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}