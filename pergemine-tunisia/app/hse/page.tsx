"use client";

import { useState } from "react";
import Link from "next/link";
import CertificateLightbox from "@/components/CertificateLightbox";

const pillars = [
  {
    title: "Health",
    desc: "Promoting the health and well-being of every worker on every site.",
    icon: "❤️",
  },
  {
    title: "Safety",
    desc: "Strict procedures, risk analysis, and Stop-Card system (DuPont).",
    icon: "🛡️",
  },
  {
    title: "Environment",
    desc: "Protecting the environment in all our operational areas.",
    icon: "🌿",
  },
];

const isoCerts = [
  {
    code: "ISO 9001",
    title: "Quality Management",
    desc: "Commitment to consistent quality and continuous improvement.",
  },
  {
    code: "ISO 14001",
    title: "Environmental Management",
    desc: "Responsible environmental practices across all operations.",
  },
  {
    code: "ISO 45001",
    title: "Occupational Health & Safety",
    desc: "Protecting the health and safety of every worker on site.",
  },
];

const certificates = [
  {
    img: "/certificates/eni-hse-2011.png",
    title: "ENI HSE Trophy",
    subtitle: "Awarded 2011",
  },
  {
    img: "/certificates/hse-satisfaction-2015.png",
    title: "HSE Satisfaction Certificate",
    subtitle: "Awarded 2015",
  },
];

export default function HSEPage() {
  const [active, setActive] = useState<null | {
    img: string;
    title: string;
    subtitle: string;
  }>(null);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-blue/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
            Health • Safety • Environment
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Safety is our <span className="text-brand-yellow">foundation</span>
          </h1>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
            Our commitment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
            People, environment, and excellence
          </h2>
          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            At Pergemine Tunisia, HSE is not a department — it&apos;s a
            principle that guides every decision. Our policy ensures customer
            satisfaction, environmental protection, and the safety of every
            worker across all our operations.
          </p>
        </div>
      </section>

      {/* ===== PILLARS ===== */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {pillars.map((p) => (
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
              ISO Certified
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              International standards, local excellence
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our operations are certified to the highest international
              standards in quality, environment, and occupational safety.
            </p>
          </div>

          <div className="bg-brand-blue/5 border border-brand-blue/20 rounded-lg p-6 mb-12 max-w-2xl mx-auto">
            <p className="text-sm text-gray-700 leading-relaxed text-center">
              <span className="font-semibold text-brand-blue">Note:</span> These ISO certifications are issued to our parent company,{" "}
              <span className="font-semibold">Pergemine SPA</span>, based in Parma, Italy. Our operations in Tunisia operate under these group certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {isoCerts.map((c) => (
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
              Certificates & Awards
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              Recognized excellence
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
                      🔍 View
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
            Click any certificate to view it full-size.
          </p>
        </div>
      </section>

      {/* ===== POLICY ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              HSE Policy
            </p>
            <h2 className="text-4xl font-bold text-brand-blue leading-tight">
              A document for protection — not just compliance
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Our HSE manual goes beyond legal requirements. It is the primary
              tool to provide safety to all our workers, supported by continuous
              risk analysis and improvement processes.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>Continuous performance improvement</li>
              <li>Risk evaluation on every operation</li>
              <li>Internal & external audit programs</li>
              <li>DuPont Stop-Card system</li>
              <li>Accident & incident investigation procedures</li>
            </ul>
          </div>

          <div className="bg-brand-blue text-white p-10 rounded-lg shadow-xl">
            <p className="text-brand-yellow uppercase text-xs tracking-widest font-semibold">
              Recognition
            </p>
            <h3 className="text-2xl font-bold mt-2">Key Milestones</h3>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <p className="text-3xl font-bold text-brand-yellow">2011</p>
                <p className="text-gray-200">ENI HSE Trophy</p>
              </div>
              <div className="flex items-start gap-4">
                <p className="text-3xl font-bold text-brand-yellow">2015</p>
                <p className="text-gray-200">HSE Satisfaction Certificate</p>
              </div>
              <div className="flex items-start gap-4">
                <p className="text-3xl font-bold text-brand-yellow">ISO</p>
                <p className="text-gray-200">9001 • 14001 • 45001 Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SAFETY GAME TEASER ===== */}
      <section className="relative py-24 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-brand-blue/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
            Coming soon
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Test your knowledge with our Safety Quiz
          </h2>
          <p className="mt-6 text-gray-200 text-lg">
            An interactive game to learn and practice HSE protocols.
          </p>
          <Link
            href="/hse/safety-game"
            className="inline-block mt-8 bg-brand-yellow text-brand-blue font-semibold px-8 py-4 rounded-md hover:bg-yellow-400 transition shadow-lg"
          >
            Try the Safety Game
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