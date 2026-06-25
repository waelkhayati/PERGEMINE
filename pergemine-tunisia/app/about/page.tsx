import Link from "next/link";
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
  return (
    <>
      {/* ===== PAGE HERO ===== */}
      <section className="relative h-[60vh] flex items-center justify-center text-white overflow-hidden">
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
            About Us
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Two decades of <span className="text-brand-yellow">drilling expertise</span>
          </h1>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
            Our story
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue leading-tight">
            From Italy to North Africa
          </h2>
          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            Founded in <strong>2005</strong>, Pergemine Tunisia SARL is a drilling
            contractor headquartered in Tunis with an operational base in Gabès.
            As a subsidiary of <strong>Pergemine S.P.A (Italy)</strong>, we
            combine Italian engineering heritage with deep local expertise to
            deliver onshore drilling projects across Tunisia and North Africa.
          </p>
        </div>
      </section>

      {/* ===== TIMELINE / MILESTONES ===== */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Milestones
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue">
              Our journey
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: "2005", text: "Pergemine Tunisia founded in Tunis." },
              { year: "2006", text: "First well drilled in Southern Tunisia." },
              { year: "2011", text: "Awarded ENI HSE Trophy." },
              { year: "2015", text: "HSE Satisfaction Certificate awarded." },
            ].map((m) => (
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
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
          </div>
          <div>
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Our presence
            </p>
            <h2 className="text-4xl font-bold text-brand-blue leading-tight">
              Operating across Tunisia and North Africa
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              From the deserts of Southern Tunisia — including El Borma,
              Kebili, Oued Zar, and Debbech — Pergemine Tunisia has delivered
              over <strong>35 wells</strong> since 2006. We continue to expand
              across North Africa, with operations in Algeria and Libya.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc list-inside text-sm">
              <li>Headquarters in Tunis</li>
              <li>Operational base in Gabès</li>
              <li>18 permanent staff + 50 service partners</li>
              <li>Active across North Africa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== ORG CHART ===== */}
      <section className="py-24 bg-brand-blue text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.25em] text-brand-yellow text-sm font-semibold mb-4">
              Organization
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Our organizational structure
            </h2>
            <p className="mt-6 text-gray-200 max-w-2xl mx-auto text-lg">
              A clear hierarchy designed for accountability, safety, and operational excellence.
            </p>
          </div>

          {/* Chart */}
          <div className="flex flex-col items-center gap-6">
            {/* Top: Boards */}
            <div className="flex flex-wrap justify-center gap-6">
              <OrgBox title="Board of Shareholders" />
              <OrgBox title="Board of Directors" />
            </div>

            {/* Connector */}
            <div className="w-px h-8 bg-brand-yellow" />

            {/* General Manager */}
            <OrgBox title="General Manager" highlight />

            <div className="w-px h-8 bg-brand-yellow" />

            {/* Mid management */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              <OrgBox title="Operations Manager" />
              <OrgBox title="Administration & Finance Manager" />
              <OrgBox title="HSE Manager" />
            </div>

            <div className="w-px h-8 bg-brand-yellow" />

            {/* Coordinators / supervisors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl">
              <OrgBox small title="HSE Supervisor" />
              <OrgBox small title="Administration Coordinator" />
              <OrgBox small title="Supply & Logistics Coordinator" />
              <OrgBox small title="Legal & Accounting Experts" />
            </div>
          </div>

          {/* Footnote */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <p className="text-3xl font-bold text-brand-yellow">18</p>
              <p className="text-sm text-gray-200 mt-1">Permanent staff</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <p className="text-3xl font-bold text-brand-yellow">8 + 10</p>
              <p className="text-sm text-gray-200 mt-1">Tunis HQ + Operational sites</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <p className="text-3xl font-bold text-brand-yellow">~50</p>
              <p className="text-sm text-gray-200 mt-1">Service partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue">
            Want to work with us?
          </h2>
          <p className="mt-4 mb-8 text-gray-600 text-lg">
            Let's discuss your next drilling project.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-yellow text-brand-dark font-semibold px-8 py-4 rounded-md hover:bg-brand-dark transition shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}