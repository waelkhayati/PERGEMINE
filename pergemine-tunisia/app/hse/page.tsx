"use client";

import { useState } from "react";
import Link from "next/link";
import CertificateLightbox from "@/components/CertificateLightbox";
import { useTranslations } from "@/lib/useTranslations";

export default function HSEPage() {
  const { t, messages, createLocalizedHref } = useTranslations();

  const [active, setActive] = useState<null | {
    img: string;
    title: string;
    subtitle: string;
  }>(null);

  const certificates = [
    {
      img: "/certificates/eni-hse-2011.png",
      title: t("hse.certificates.items.eni.title"),
      subtitle: t("hse.certificates.items.eni.subtitle"),
    },
    {
      img: "/certificates/hse-satisfaction-2015.png",
      title: t("hse.certificates.items.satisfaction.title"),
      subtitle: t("hse.certificates.items.satisfaction.subtitle"),
    },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/safety.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-blue/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
            {t("hse.hero.pre")}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {t("hse.hero.titleStart")}{" "}
            <span className="text-brand-yellow">{t("hse.hero.titleHighlight")}</span>
          </h1>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
            {t("hse.intro.pre")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
            {t("hse.intro.title")}
          </h2>
          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            {t("hse.intro.desc")}
          </p>
        </div>
      </section>

      {/* ===== HSE POLICIES (image + pillars) ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-12 text-center">
            {t("hse.policies.title")}
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/hse-politics.png"
              alt={t("hse.policies.imageAlt")}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 px-6 grid md:grid-cols-3 gap-8">
          {messages.hse.pillars.items.map((p) => (
            <div
              key={p.title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-brand-yellow text-center"
            >
              <div className="text-5xl mb-4">{p.icon}</div>
              <h3 className="text-2xl font-bold text-brand-blue mb-3">
                {p.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ISO CERTIFICATIONS ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("hse.iso.pre")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              {t("hse.iso.title")}
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              {t("hse.iso.desc")}
            </p>
          </div>

          <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-6 mb-12 max-w-2xl mx-auto">
            <p className="text-sm text-gray-700 leading-relaxed text-center">
              <span className="font-semibold text-brand-blue">
                {t("hse.iso.noteLabel")}:
              </span>{" "}
              {t("hse.iso.noteText")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {messages.hse.iso.items.map((c) => (
              <div
                key={c.code}
                className="relative bg-brand-blue text-white p-8 rounded-lg shadow-md hover:shadow-2xl transition text-center overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-brand-yellow" />
                <p className="text-brand-yellow font-bold text-3xl tracking-tight">
                  {c.code}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
                <p className="mt-3 text-gray-200 text-sm leading-relaxed">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CERTIFICATES GALLERY ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("hse.certificates.pre")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              {t("hse.certificates.title")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {certificates.map((c) => (
              <button
                key={c.title}
                onClick={() => setActive(c)}
                className="text-left bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border-b-4 border-brand-yellow group cursor-pointer"
              >
                <div className="relative h-72 bg-gray-100 flex items-center justify-center overflow-hidden">
                  <div
                    className="w-full h-full bg-contain bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${c.img}')` }}
                  />
                  <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-brand-yellow text-brand-blue font-semibold px-4 py-2 rounded-md transition">
                      🔍 {t("hse.certificates.view")}
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-brand-blue">{c.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{c.subtitle}</p>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10 italic">
            {t("hse.certificates.hint")}
          </p>
        </div>
      </section>

      {/* ===== POLICY ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("hse.policy.pre")}
            </p>
            <h2 className="text-4xl font-bold text-brand-blue leading-tight">
              {t("hse.policy.title")}
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              {t("hse.policy.desc")}
            </p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              {messages.hse.policy.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-blue text-white p-10 rounded-lg shadow-xl">
            <p className="text-brand-yellow uppercase text-xs tracking-widest font-semibold">
              {t("hse.recognition.pre")}
            </p>
            <h3 className="text-2xl font-bold mt-2">
              {t("hse.recognition.title")}
            </h3>
            <div className="mt-6 space-y-4">
              {messages.hse.recognition.items.map((r) => (
                <div key={r.label} className="flex items-start gap-4">
                  <p className="text-3xl font-bold text-brand-yellow">
                    {r.year}
                  </p>
                  <p className="text-gray-200">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SAFETY GAME TEASER ===== */}
      <section className="relative py-24 text-white overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" />
        <div className="absolute inset-0 bg-brand-blue/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
            {t("hse.game.pre")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t("hse.game.title")}
          </h2>
          <p className="mt-6 text-gray-200 text-lg">
            {t("hse.game.desc")}
          </p>
         <Link
  href={createLocalizedHref("/hse/safety-game")}
  className="inline-block mt-8 bg-brand-yellow text-brand-blue font-semibold px-8 py-4 rounded-md hover:bg-yellow-400 transition shadow-lg"
>
  {t("hse.game.cta")}
</Link>
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {active && (
        <CertificateLightbox
          src={active.img}
          title={active.title}
          subtitle={active.subtitle}
          onClose={() => setActive(null)}
        />
      )}
    </>
  );
}
