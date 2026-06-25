"use client";

import { useState } from "react";
import Link from "next/link";
import CertificateLightbox from "@/components/CertificateLightbox";

const facilities = [
  { icon: "🏠", title: "Housing", desc: "~100 beds in huts of 2, 4, and 8 — across 24 barracks." },
  { icon: "🍽️", title: "Kitchen & Restaurant", desc: "Full catering services managed by Petroconfort." },
  { icon: "💧", title: "Water Storage", desc: "100 m³ drinking water + 25 m³ industrial water." },
  { icon: "⛽", title: "Fuel Tanks", desc: "2 fuel tanks of 17 m³ each." },
  { icon: "🥖", title: "Bakery & Patisserie", desc: "On-site bakery for daily fresh production." },
  { icon: "🏥", title: "Medical Clinic", desc: "Infirmary with site doctor (Help Group)." },
  { icon: "🧺", title: "Laundry", desc: "Dedicated laundry facility for all residents." },
  { icon: "❄️", title: "Cold Storage", desc: "Refrigerated shed + 2 food storage units." },
];

const layout = {
  img: "/camp/camp-layout.png",
  title: "Camp Layout",
  subtitle: "10,000 m² residential camp (100 × 100 m)",
};

export default function CampPage() {
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
            backgroundImage: "url('/camp/camp-hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-blue/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
            Camp & Infrastructure
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            A safe <span className="text-brand-yellow">home</span> on every site
          </h1>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-brand-yellow text-brand-blue py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {[
            { num: "10,000 m²", label: "Total area" },
            { num: "100", label: "Beds" },
            { num: "24", label: "Barracks" },
            { num: "100 m³", label: "Drinking water" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl md:text-4xl font-bold">{s.num}</p>
              <p className="mt-2 text-sm uppercase tracking-wider font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== INTRO + PHOTO ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Residential Camp
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              Built for safety, comfort, and operational efficiency
            </h2>
            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              Our residential camp spans 10,000 m² (100 × 100 m), with guarded
              gate access, dedicated parking, emergency exits, and full
              facilities for crews — supporting up to 100 residents in safe,
              comfortable conditions.
            </p>
          </div>

          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/camp/camp-hero.jpg')" }}
            />
          </div>
        </div>
      </section>

      {/* ===== CAMP LAYOUT ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Camp Layout
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              How the camp is organized
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              A clear, structured plan designed for safety, accessibility, and
              comfort.
            </p>
          </div>

          <button
            onClick={() => setActive(layout)}
            className="block w-full text-left bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden border-b-4 border-brand-yellow group cursor-pointer"
          >
            <div className="relative h-[28rem] bg-gray-100 overflow-hidden">
              <div
                className="w-full h-full bg-contain bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${layout.img}')` }}
              />
              <div className="absolute inset-0 bg-brand-blue/0 group-hover:bg-brand-blue/20 transition flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 bg-brand-yellow text-brand-blue font-semibold px-4 py-2 rounded-md transition">
                  🔍 View
                </span>
              </div>
            </div>
            <div className="p-5 text-center">
              <h3 className="font-bold text-brand-blue">{layout.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{layout.subtitle}</p>
            </div>
          </button>

          <p className="text-center text-gray-500 text-sm mt-6 italic">
            Click the layout to view it full-size.
          </p>
        </div>
      </section>

      {/* ===== FACILITIES GRID ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Facilities
            </p>
            <h2 className="text-4xl font-bold text-brand-blue">
              What&apos;s on site
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <div
                key={f.title}
                className="bg-brand-light p-6 rounded-lg shadow-md hover:shadow-xl transition border-l-4 border-brand-yellow"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-lg font-bold text-brand-blue mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECURITY ===== */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Security & access
            </p>
            <h2 className="text-4xl font-bold leading-tight">
              A controlled, secure environment
            </h2>
            <p className="mt-6 text-gray-200 text-lg leading-relaxed">
              Every Pergemine camp is designed with safety at its core — with
              strict access control, emergency procedures, and continuous
              on-site monitoring.
            </p>
          </div>

          <ul className="space-y-3 text-gray-100">
            <li className="flex items-start gap-3">
              <span className="text-brand-yellow">✓</span> Guarded gate access
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-yellow">✓</span> Dedicated car parking area
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-yellow">✓</span> Marked emergency exits
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-yellow">✓</span> On-site medical clinic
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-yellow">✓</span> 24/7 power supply
            </li>
            <li className="flex items-start gap-3">
              <span className="text-brand-yellow">✓</span> Continuous water supply
            </li>
          </ul>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Want to know more about our infrastructure?
          </h2>
          <p className="mt-4 mb-8 text-gray-600 text-lg">
            Reach out to our team for a complete site overview.
          </p>
          <Link
            href="/contact"
            className="bg-brand-blue text-white font-semibold px-8 py-4 rounded-md hover:bg-brand-dark transition shadow-lg"
          >
            Contact Us
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