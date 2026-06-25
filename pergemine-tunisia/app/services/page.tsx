"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/useTranslations";

export default function ServicesPage() {
  const { t, messages, createLocalizedHref } = useTranslations();
  const services = messages.services.grid;
  const steps = messages.services.process.steps;
  const cta = messages.services.cta;

  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/services.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-blue/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
            {t("services.hero.pre")}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {t("services.hero.titleStart")}{" "}
            <span className="text-brand-yellow">{t("services.hero.titleHighlight")}</span>
          </h1>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            {t("services.intro")}
          </p>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-brand-yellow group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("services.process.pre")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue">
              {t("services.process.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((p) => (
              <div key={p.step} className="text-center">
                <p className="text-5xl font-bold text-brand-yellow">{p.step}</p>
                <h3 className="mt-4 text-xl font-bold text-brand-blue">
                  {p.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ===== CTA ===== */}
      <section className="relative py-24 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.webp')" }}
        />
        <div className="absolute inset-0 bg-brand-blue/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {cta.title}
          </h2>
          <p className="mt-6 text-gray-200 text-lg">
            {cta.desc}
          </p>
          <Link
            href={createLocalizedHref("/contact")}
            className="inline-block mt-8 bg-brand-yellow text-brand-blue font-semibold px-8 py-4 rounded-md hover:bg-yellow-400 transition shadow-lg"
          >
            {cta.action}
          </Link>
        </div>
      </section>
    </>
  );
}