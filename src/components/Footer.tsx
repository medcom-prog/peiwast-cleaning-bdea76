import { Wordmark } from './Wordmark';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-900 text-white py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Wordmark variant="dark" className="mb-4" />
            <p className="font-sans text-ink-400 text-sm leading-relaxed max-w-xs">
              Profesjonelt bedriftsrenhold i Oslo.<br />
              Sertifisert for alle overflatetyper.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-mono text-label text-ink-600 uppercase tracking-widest mb-4">Navigasjon</p>
            <ul className="flex flex-col gap-2">
              {[
                ['Tjenester', '#tjenester'],
                ['Pris',      '#pris'],
                ['Om oss',   '#om-oss'],
                ['Kontakt',  '#kontakt'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="font-sans text-sm text-ink-400 hover:text-white transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-label text-ink-600 uppercase tracking-widest mb-4">Kontakt</p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="tel:91389872" className="font-sans text-sm text-ink-400 hover:text-white transition-colors">
                  913 89 872
                </a>
              </li>
              <li>
                <a href="mailto:peiwast@clean.no" className="font-sans text-sm text-ink-400 hover:text-white transition-colors">
                  peiwast@clean.no
                </a>
              </li>
              <li className="font-sans text-sm text-ink-500">Oslo og omegn</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-800 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-label text-ink-600">
            © {year} Peiwast Cleaning. Alle rettigheter forbeholdt.
          </p>
          <p className="font-mono text-label text-ink-700">
            Nettsted av{' '}
            <a href="https://medcom.no" className="hover:text-ink-500 transition-colors">
              Medcom
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
