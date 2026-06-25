"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mqeveyvn", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[55vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-blue/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
            Get in touch
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Let&apos;s <span className="text-brand-yellow">talk</span>
          </h1>
          <p className="mt-4 text-gray-200 text-lg">
            We&apos;d love to hear about your next project.
          </p>
        </div>
      </section>

      {/* ===== CONTACT GRID ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          {/* ===== INFO ===== */}
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Our office
            </p>
            <h2 className="text-4xl font-bold text-brand-blue leading-tight">
              Pergemine Tunisia SARL
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Headquartered in Tunis with an operational base in Gabès, our team
              is ready to discuss your drilling needs.
            </p>

            <div className="mt-10 space-y-6">
              <InfoBlock
                icon="📍"
                title="Headquarters"
                lines={[
                  "Rue du Lac Houran",
                  "Rahma Building, Apt A5",
                  "1053 Les Berges du Lac 1",
                  "Tunis, Tunisia",
                ]}
              />
              <InfoBlock
                icon="🏭"
                title="Operational Base"
                lines={["Gabès, Tunisia", "Storage & maintenance"]}
              />
              <InfoBlock
                icon="🌍"
                title="Parent Company"
                lines={["Pergemine S.P.A — Italy"]}
                link={{ href: "https://www.pergemine.it/", label: "pergemine.it →" }}
              />
            </div>
          </div>

          {/* ===== FORM ===== */}
          <div className="bg-brand-light p-8 md:p-10 rounded-lg shadow-md border-t-4 border-brand-yellow">
            <h3 className="text-2xl font-bold text-brand-blue mb-2">
              Send us a message
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Fill out the form and we&apos;ll get back to you shortly.
            </p>

            {status === "sent" ? (
              <div className="bg-white border border-brand-yellow rounded-md p-6 text-center">
                <p className="text-2xl mb-2">✅</p>
                <p className="text-brand-blue font-semibold">
                  Thank you! Your message has been sent.
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Our team will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field label="Full Name" name="name" type="text" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" type="text" />
                <Field label="Phone" name="phone" type="tel" />

                <div>
                  <label className="block text-sm font-semibold text-brand-blue mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    name="message"
                    rows={5}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-brand-blue bg-white"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">
                    ❌ Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-brand-blue text-white font-semibold py-3 rounded-md hover:bg-brand-dark transition shadow-md disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="bg-brand-light pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              title="Pergemine Tunisia Office"
              src="https://www.google.com/maps?q=Les+Berges+du+Lac+1,+Tunis&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ===== Helpers ===== */

function InfoBlock({
  icon,
  title,
  lines,
  link,
}: {
  icon: string;
  title: string;
  lines: string[];
  link?: { href: string; label: string };
}) {
  return (
    <div className="flex gap-4">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="font-bold text-brand-blue">{title}</h4>
        {lines.map((l) => (
          <p key={l} className="text-gray-600 text-sm">
            {l}
          </p>
        ))}
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-yellow text-sm font-semibold hover:underline mt-1 inline-block"
          >
            {link.label}
          </a>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-brand-blue mb-2">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:border-brand-blue bg-white"
      />
    </div>
  );
}