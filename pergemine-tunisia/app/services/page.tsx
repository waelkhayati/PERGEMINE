import Link from "next/link";

const services = [
  {
    title: "Onshore Drilling",
    desc: "Full-scale onshore drilling operations across Tunisia and North Africa, with proven expertise in challenging desert environments.",
    icon: "🛢️",
  },
  {
    title: "Rig Operations",
    desc: "Operation of our IDECO E2100 diesel-electric rig with 6000m drilling capacity, supported by a 2000HP drawworks system.",
    icon: "⚙️",
  },
  {
    title: "HSE Management",
    desc: "Certified Health, Safety and Environment policies — recognized by ENI HSE Trophy and HSE Satisfaction Certificate.",
    icon: "🛡️",
  },
  {
    title: "Camp & Logistics",
    desc: "Fully equipped residential camp with housing, catering, medical clinic, and full logistical support for crews.",
    icon: "🏕️",
  },
  {
    title: "Subcontractor Management",
    desc: "Carefully selected and audited subcontractors for catering, transport, hoisting, and medical assistance.",
    icon: "🤝",
  },
  {
    title: "Maintenance & Storage",
    desc: "Operational base in Gabès dedicated to material storage, rig component management, and ongoing maintenance.",
    icon: "🔧",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 to-brand-blue/70" />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
            Our Services
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            End-to-end <span className="text-brand-yellow">drilling solutions</span>
          </h1>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-lg leading-relaxed">
            From rig operations to safety management and logistics, Pergemine
            Tunisia delivers a complete range of services to support the energy
            sector across North Africa.
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
              How we work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue">
              Our process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Assessment", desc: "We study the site, requirements, and risks." },
              { step: "02", title: "Mobilization", desc: "Rig and crew deployment to the operational site." },
              { step: "03", title: "Drilling", desc: "Execution with strict HSE compliance and quality control." },
              { step: "04", title: "Handover", desc: "Final reporting and site demobilization." },
            ].map((p) => (
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
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-brand-blue/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to start your project?
          </h2>
          <p className="mt-6 text-gray-200 text-lg">
            Contact us to discuss your drilling needs.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-brand-yellow text-brand-blue font-semibold px-8 py-4 rounded-md hover:bg-yellow-400 transition shadow-lg"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}