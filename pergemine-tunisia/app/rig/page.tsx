"use client";

import { useState } from "react";
import Link from "next/link";
import CertificateLightbox from "@/components/CertificateLightbox";

const generalData = [
  { label: "Rig Name", value: "IDECO E 2100" },
  { label: "Type", value: "Diesel Electric with SCR System" },
  { label: "Year of Construction", value: "1981" },
  { label: "Drilling Capability (5\" OD)", value: "6,000 m" },
  { label: "Estimated Rig-up Time", value: "20 days" },
  { label: "Drawworks Power", value: "2,000 HP" },
];

const power = [
  { label: "Diesel Generator Sets", value: "4 × 1,200 HP" },
  { label: "Total Continuous Power", value: "4,800 HP" },
  { label: "SCR System", value: "Hill Graham 1800" },
  { label: "Emergency AC Generator", value: "250 KVA / 460V" },
];

const mast = [
  { label: "Mast & Substructure", value: "Massarenti-Branham Lo.Lift" },
  { label: "Standard", value: "API Spec 4E" },
  { label: "Clear Height", value: "153 ft" },
  { label: "Hook Load Capacity", value: "454 mton" },
  { label: "Racking Platform", value: "6,000 m of 5\" drill pipes" },
];

const mud = [
  { label: "Mud Pumps", value: "2 × Ideco T1600 + 1 × Gardner-Denver PZ11" },
  { label: "Max Input Power", value: "1,600 HP" },
  { label: "Mud Tanks", value: "5 tanks – 450 m³ total" },
  { label: "Stand Pipe", value: "4\" ID / 5,000 psi" },
];

const bop = [
  { label: "20\" BOP Stack", value: "Annular + Single + Double Ram (2,000–3,000 psi)" },
  { label: "13⅝\" BOP Stack", value: "Annular + 2 Single + Double Ram (5,000–10,000 psi)" },
  { label: "Choke Manifold", value: "3 1/16\" – 10,000 psi" },
  { label: "Accumulator", value: "Valvcon 240 – 3,000 psi" },
];

const layoutImages = [
  {
    img: "/rig/layout-1.png",
    title: "Rig Layout — Overview",
    subtitle: "IDECO E 2100 – Rig #11",
  },
  {
    img: "/rig/layout-2.png",
    title: "Rig Layout — Detailed View",
    subtitle: "IDECO E 2100 – Rig #11",
  },
];

const machinery = [
  { img: "/rig/drawworks.png", title: "Drawworks", subtitle: ""},
  { img: "/rig/cabin.png", title: "Drilling Cabin", subtitle: ""},
  { img: "/rig/pumps.png", title: "Mud Pumps", subtitle: ""},
  { img: "/rig/staff.png", title: "Drilling Staff", subtitle: ""},
  { img: "/rig/super.png", title: "Super Charging", subtitle: ""},
  { img: "/rig/gen.png", title: "Gen-Set CAT D 399", subtitle: ""},
];

export default function RigPage() {
  const [active, setActive] = useState<null | {
    img: string;
    title: string;
    subtitle: string;
  }>(null);

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
            Our Rig
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            <span className="text-brand-yellow">IDECO E 2100</span> — Rig #11
          </h1>
          <p className="mt-6 text-gray-200 text-lg">
            Diesel-electric drilling rig with 2,000 HP drawworks and 6,000 m
            drilling capacity.
          </p>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="bg-brand-yellow text-brand-blue py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {[
            { num: "6,000m", label: "Drilling Capacity" },
            { num: "2,000 HP", label: "Drawworks" },
            { num: "4,800 HP", label: "Total Power" },
            { num: "454t", label: "Hook Load" },
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

      {/* ===== RIG SHOWCASE IMAGE ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              The Rig
            </p>
            <h2 className="text-4xl font-bold text-brand-blue leading-tight">
              A proven workhorse of Tunisian drilling
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              The IDECO E 2100 is Pergemine Tunisia&apos;s flagship rig — a
              robust diesel-electric system built to handle the toughest
              onshore drilling conditions across Tunisia and North Africa.
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
              Rig Layout
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              How the rig is organized
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              A detailed view of the rig&apos;s ground layout and operational
              setup.
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
                      🔍 View
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
      <SpecBlock title="General Data" data={generalData} />
      <SpecBlock title="Power Plant" data={power} alt />
      <SpecBlock title="Mast & Substructure" data={mast} />
      <SpecBlock title="Mud System" data={mud} alt />
      <SpecBlock title="Well Control & BOP System" data={bop} />

      {/* ===== TUBULARS ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Equipment
            </p>
            <h2 className="text-4xl font-bold text-brand-blue">Tubulars</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-yellow">
              <h3 className="font-bold text-brand-blue text-lg mb-3">
                Drill Pipes
              </h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>5″ OD — 8,000 ft S135 + 8,000 ft E75</li>
                <li>3½″ OD — 7,000 ft S135 + 9,000 ft E75</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-yellow">
              <h3 className="font-bold text-brand-blue text-lg mb-3">
                HWDP & Drill Collars
              </h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>5″ OD HWDP — 30 joints</li>
                <li>3½″ OD HWDP — 30 joints</li>
                <li>Drill Collars: 9½″, 8″, 6½″, 4¾″ (spiral grooved)</li>
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
              Gallery
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              Rig machinery in detail
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              A closer look at the equipment and crew behind every operation.
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
                      🔍 View
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
            Click any image to view it full-size.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-brand-light text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Need detailed technical specifications?
          </h2>
          <p className="mt-4 mb-8 text-gray-600 text-lg">
            Our team is ready to provide complete rig documentation.
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

/* ===== Reusable Spec Block ===== */
function SpecBlock({
  title,
  data,
  alt = false,
}: {
  title: string;
  data: { label: string; value: string }[];
  alt?: boolean;
}) {
  return (
    <section className={`py-20 ${alt ? "bg-brand-light" : "bg-white"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-3">
            Specifications
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