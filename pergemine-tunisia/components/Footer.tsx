import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-3">
            <img
              src="/pergemine_tunisie_logo.png"
              alt="Pergemine Tunisia logo"
              className="h-30 object-contain"
            />
          </h3>
          <p className="text-sm leading-relaxed max-w-md">
            Drilling contractor based in Tunis, subsidiary of Pergemine S.P.A
            (Italy). Operating in Tunisia and North Africa since 2005.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-brand-yellow">About</Link></li>
            <li><Link href="/services" className="hover:text-brand-yellow">Services</Link></li>
            <li><Link href="/rig" className="hover:text-brand-yellow">Rig</Link></li>
            <li><Link href="/hse" className="hover:text-brand-yellow">HSE</Link></li>
            <li><Link href="/contact" className="hover:text-brand-yellow">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 uppercase text-sm tracking-wider">
            Contact
          </h4>
          <p className="text-sm leading-relaxed">
            Rue du Lac Houran,<br />
            Rahma Building A5<br />
            1053 Les Berges du Lac 1<br />
            Tunis, Tunisia
          </p>
          <a
            href="https://www.pergemine.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-brand-yellow hover:underline text-sm"
          >
            Parent: Pergemine S.P.A →
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center text-xs py-5 text-gray-400">
        © {new Date().getFullYear()} Pergemine Tunisia. All rights reserved.
      </div>
    </footer>
  );
}