"use client";

import Link from "next/link";
import { useTranslations } from "@/lib/useTranslations";

function OrgBox({
  title,
  highlight = false,
  small = false,
}: {
  title: string;
  highlight?: boolean;
  small?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border text-center font-semibold transition
        ${highlight
          ? "bg-brand-yellow text-brand-blue border-brand-yellow shadow-lg"
          : "bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20"}
        ${small ? "px-4 py-3 text-sm" : "px-6 py-4"}`}
    >
      {title}
    </div>
  );
}

export default function AboutPage() {
  const { t, messages, createLocalizedHref } = useTranslations();

  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-blue/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
            {t("about.hero.pre")}
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            {t("about.hero.title")}
          </h1>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
            {t("about.story.pre")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
            {t("about.story.title")}
          </h2>
          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            {t("about.story.desc")}
          </p>
        </div>
      </section>

      {/* ===== TIMELINE / MILESTONES ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("about.milestones.pre")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue">
              {t("about.milestones.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {messages.about.milestones.items.map((m) => (
              <div
                key={m.year}
                className="bg-white p-8 rounded-lg shadow-md border-t-4 border-brand-yellow text-center"
              >
                <p className="text-4xl font-bold text-brand-blue">{m.year}</p>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRESENCE ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/camp/camp-hero.jpg')" }}
            />
          </div>
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("about.presence.pre")}
            </p>
            <h2 className="text-4xl font-bold text-brand-blue leading-tight">
              {t("about.presence.title")}
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              {t("about.presence.desc")}
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside text-sm">
              {messages.about.presence.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== ORG CHART ===== */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              {t("about.organization.pre")}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {t("about.organization.title")}
            </h2>
            <p className="mt-6 text-gray-200 max-w-2xl mx-auto text-lg">
              {t("about.organization.desc")}
            </p>
          </div>

          {/* Chart */}
          <div className="flex flex-col items-center gap-6">
            {/* Top: Boards */}
            <div className="flex flex-wrap justify-center gap-6">
              <OrgBox title={t("about.organization.chart.shareholders")} />
              <OrgBox title={t("about.organization.chart.directors")} />
            </div>

            <div className="w-px h-8 bg-brand-yellow" />

            {/* General Manager */}
            <OrgBox title={t("about.organization.chart.generalManager")} highlight />

            <div className="w-px h-8 bg-brand-yellow" />

            {/* Mid management */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              <OrgBox title={t("about.organization.chart.operationsManager")} />
              <OrgBox title={t("about.organization.chart.financeManager")} />
              <OrgBox title={t("about.organization.chart.hseManager")} />
            </div>

            <div className="w-px h-8 bg-brand-yellow" />

            {/* Coordinators / supervisors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
              <OrgBox small title={t("about.organization.chart.hseSupervisor")} />
              <OrgBox small title={t("about.organization.chart.adminCoordinator")} />
              <OrgBox small title={t("about.organization.chart.supplyCoordinator")} />
              <OrgBox small title={t("about.organization.chart.legalExperts")} />
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            {messages.about.organization.stats.map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <p className="text-3xl font-bold text-brand-yellow">{stat.value}</p>
                <p className="text-sm text-gray-200 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            {t("about.cta.title")}
          </h2>
          <p className="mt-4 mb-8 text-gray-600 text-lg">
            {t("about.cta.desc")}
          </p>
          <Link
            href={createLocalizedHref("/contact")}
            className="inline-block bg-brand-yellow text-brand-dark font-semibold px-8 py-4 rounded-md hover:bg-brand-dark transition shadow-lg"
          >
            {t("about.cta.contact")}
          </Link>
        </div>
      </section>
    </>
  );
}