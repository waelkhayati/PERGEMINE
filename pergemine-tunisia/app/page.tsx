import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582486225644-088c0f7e6f7d?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/90 via-brand-blue/80 to-brand-blue/60" />

        <div className="relative z-10 text-center max-w-4xl px-6 fade-in">
          <p className="uppercase tracking-[0.3em] text-brand-yellow text-sm mb-4">
            Drilling Contractor • Since 2005
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Powering Tunisia's <br />
            <span className="text-brand-yellow">Energy Future</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Onshore drilling excellence in Tunisia and North Africa.
            Subsidiary of Pergemine S.P.A (Italy).
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/services"
              className="bg-brand-yellow text-brand-blue font-semibold px-8 py-4 rounded-md hover:bg-yellow-400 transition shadow-lg"
            >
              Our Services
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white hover:text-brand-blue transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-brand-yellow text-brand-blue py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {[
            { num: "35+", label: "Wells Drilled" },
            { num: "2005", label: "Founded" },
            { num: "6000m", label: "Drilling Capacity" },
            { num: "100%", label: "HSE Commitment" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-4xl md:text-5xl font-bold">{s.num}</p>
              <p className="mt-2 text-sm uppercase tracking-wider font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Who we are
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
              Two decades of drilling expertise in North Africa
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Founded in 2005 and headquartered in Tunis, Pergemine Tunisia is
              a trusted onshore drilling contractor. As a subsidiary of
              Pergemine S.P.A, we bring decades of Italian engineering heritage
              to Tunisian soil — from El Borma to Kebili.
            </p>
            <Link
              href="/about"
              className="inline-block mt-8 text-brand-blue font-semibold border-b-2 border-brand-yellow pb-1 hover:text-brand-yellow transition"
            >
              Learn more about us →
            </Link>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              What we do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue">
              Comprehensive drilling services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Onshore Drilling",
                desc: "Full-scale onshore drilling operations across Tunisia and North Africa.",
              },
              {
                title: "Rig Operations",
                desc: "State-of-the-art IDECO E2100 rig with 6000m drilling capacity.",
              },
              {
                title: "HSE & Logistics",
                desc: "Certified HSE policies, residential camps, and full logistical support.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition border-t-4 border-brand-yellow"
              >
                <h3 className="text-xl font-bold text-brand-blue mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HSE BANNER ===== */}
      <section className="relative py-24 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-brand-blue/85" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
            Health • Safety • Environment
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Safety is our foundation
          </h2>
          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            Recognized by ENI HSE Trophy (2011) and HSE Satisfaction
            Certificate (2015). Our HSE policy protects our people, the
            environment, and the communities we operate in.
          </p>
          <Link
            href="/hse"
            className="inline-block mt-8 bg-brand-yellow text-brand-blue font-semibold px-8 py-4 rounded-md hover:bg-yellow-400 transition"
          >
            Our HSE Policy
          </Link>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Your drilling partner in Tunisia
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Let's discuss how we can support your next project.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-8 bg-brand-blue text-white font-semibold px-8 py-4 rounded-md hover:bg-brand-dark transition shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}