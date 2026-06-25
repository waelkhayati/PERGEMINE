"use client";

import { useState } from "react";
import Link from "next/link";
import CertificateLightbox from "@/components/CertificateLightbox";
import { useTranslations } from "@/lib/useTranslations";

export default function RigPage() {
  const { t, messages, createLocalizedHref } = useTranslations();

  const [active, setActive] = useState<null | {
    img: string;
    title: string;
    subtitle: string;
  }>(null);

  // Layout images — labels translated, paths static
  const layoutImages = [
    {
      img: "/rig/layout-1.png",
      title: t("rig.layout.items.overview.title"),
      subtitle: t("rig.layout.items.overview.subtitle"),
    },
    {
      img: "/rig/layout-2.png",
      title: t("rig.layout.items.detailed.title"),
      subtitle: t("rig.layout.items.detailed.subtitle"),
    },
  ];

  // Machinery — labels translated, paths static
  const machinery = [
    { img: "/rig/drawworks.png", title: t("rig.machinery.items.drawworks"), subtitle: "" },
    { img: "/rig/cabin.png", title: t("rig.machinery.items.cabin"), subtitle: "" },
    { img: "/rig/pumps.png", title: t("rig.machinery.items.pumps"), subtitle: "" },
    { img: "/rig/staff.png", title: t("rig.machinery.items.staff"), subtitle: "" },
    { img: "/rig/super.png", title: t("rig.machinery.items.super"), subtitle: "" },
    { img: "/rig/gen.png", title: t("rig.machinery.items.gen"), subtitle: "" },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/rig/rig-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-blue/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
            {t("rig.hero.pre")}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-brand-yellow">IDECO E 2100</span> — {t("rig.hero.rigName")}
          </h1>
          <p className="mt-6 text-gray-200 text-lg">
            {t("rig.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-brand-yellow text-brand-blue py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {messages.rig.highlights.map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold">{s.num}</p>
              <p className="mt-2 text-sm uppercase tracking-wider font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RIG SHOWCASE IMAGE ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("rig.showcase.pre")}
            </p>
            <h2 className="text-4xl font-bold text-brand-blue leading-tight">
              {t("rig.showcase.title")}
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              {t("rig.showcase.desc")}
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/rig/rig-hero.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* ===== RIG LAYOUT ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("rig.layout.pre")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              {t("rig.layout.title")}
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              {t("rig.layout.desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {layoutImages.map((l) => (
              <button
                key={l.title}
                onClick={() => setActive(l)}
                className="text-left bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border-b-4 border-brand-yellow group cursor-pointer"
              >
                <div className="relative h-80 bg-gray-100 overflow-hidden">
                  <div
                    className="w-full h-full bg-contain bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${l.img}')` }}
                  />
                  <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-brand-yellow text-brand-blue font-semibold px-4 py-2 rounded-md transition">
                      🔍 {t("rig.common.view")}
                    </span>
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="font-bold text-brand-blue">{l.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{l.subtitle}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SPEC SECTIONS ===== */}
      <SpecBlock
        title={t("rig.specs.generalData.title")}
        sectionLabel={t("rig.specs.sectionLabel")}
        data={messages.rig.specs.generalData.rows}
      />
      <SpecBlock
        title={t("rig.specs.power.title")}
        sectionLabel={t("rig.specs.sectionLabel")}
        data={messages.rig.specs.power.rows}
        alt
      />
      <SpecBlock
        title={t("rig.specs.mast.title")}
        sectionLabel={t("rig.specs.sectionLabel")}
        data={messages.rig.specs.mast.rows}
      />
      <SpecBlock
        title={t("rig.specs.mud.title")}
        sectionLabel={t("rig.specs.sectionLabel")}
        data={messages.rig.specs.mud.rows}
        alt
      />
      <SpecBlock
        title={t("rig.specs.bop.title")}
        sectionLabel={t("rig.specs.sectionLabel")}
        data={messages.rig.specs.bop.rows}
      />

      {/* ===== TUBULARS ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("rig.tubulars.pre")}
            </p>
            <h2 className="text-4xl font-bold text-brand-blue">
              {t("rig.tubulars.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-yellow">
              <h3 className="font-bold text-brand-blue text-lg mb-3">
                {t("rig.tubulars.drillPipes.title")}
              </h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                {messages.rig.tubulars.drillPipes.items.map((i: string) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-yellow">
              <h3 className="font-bold text-brand-blue text-lg mb-3">
                {t("rig.tubulars.collars.title")}
              </h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                {messages.rig.tubulars.collars.items.map((i: string) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MACHINERY GALLERY ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("rig.machinery.pre")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              {t("rig.machinery.title")}
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              {t("rig.machinery.desc")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {machinery.map((m) => (
              <button
                key={m.title}
                onClick={() => setActive(m)}
                className="text-left bg-brand-light rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border-b-4 border-brand-yellow group cursor-pointer"
              >
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url('${m.img}')` }}
                  />
                  <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/30 transition flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-brand-yellow text-brand-blue font-semibold px-3 py-1.5 rounded-md text-sm transition">
                      🔍 {t("rig.common.view")}
                    </span>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-brand-blue text-sm">
                    {m.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-10 italic">
            {t("rig.machinery.hint")}
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-brand-light text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            {t("rig.cta.title")}
          </h2>
          <p className="mt-4 mb-8 text-gray-600 text-lg">
            {t("rig.cta.desc")}
          </p>
          <Link
            href={createLocalizedHref("/contact")}
            className="inline-block bg-brand-blue text-white font-semibold px-8 py-4 rounded-md hover:bg-brand-dark transition shadow-lg"
          >
            {t("rig.cta.contact")}
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

/* ===== Reusable Spec Block ===== */
function SpecBlock({
  title,
  sectionLabel,
  data,
  alt = false,
}: {
  title: string;
  sectionLabel: string;
  data: { label: string; value: string }[];
  alt?: boolean;
}) {
  return (
    <section className={`py-20 ${alt ? "bg-brand-light" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-3">
            {sectionLabel}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            {title}
          </h2>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md border border-gray-100">
          <table className="w-full text-left">
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={row.label}
                  className={i % 2 === 0 ? "bg-white" : "bg-brand-light"}
                >
                  <td className="px-6 py-4 font-semibold text-brand-blue w-1/2">
                    {row.label}
                  </td>
                  <td className="px-6 py-4 text-gray-700">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}