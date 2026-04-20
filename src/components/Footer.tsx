import { Wordmark } from './Wordmark';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-14" style={{ backgroundColor: '#08111E', color: 'white' }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          <div className="md:col-span-2">
            <Wordmark variant="dark" className="mb-4" />
            <p className="font-sans text-sm leading-relaxed max-w-xs" style={{ color: '#4A5468' }}>
              Profesjonelt bedriftsrenhold i Oslo.<br />
              Sertifisert for alle overflatetyper.
            </p>
          </div>

          <div>
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#2E3645' }}
            >
              Navigasjon
            </p>
            <ul className="flex flex-col gap-2">
              {[
                ['Tjenester', '#tjenester'],
                ['Pris',      '#pris'],
                ['Om oss',    '#om-oss'],
                ['Kontakt',   '#kontakt'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-sans text-sm transition-colors"
                    style={{ color: '#4A5468' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="font-mono uppercase mb-4"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#2E3645' }}
            >
              Kontakt
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="tel:91389872" className="font-sans text-sm transition-colors" style={{ color: '#4A5468' }}>
                  913 89 872
                </a>
              </li>
              <li>
                <a href="mailto:peiwast@clean.no" className="font-sans text-sm transition-colors" style={{ color: '#4A5468' }}>
                  peiwast@clean.no
                </a>
              </li>
              <li className="font-sans text-sm" style={{ color: '#2E3645' }}>Oslo og omegn</li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-6"
          style={{ borderTop: '1px solid #1B2333' }}
        >
          <p className="font-mono" style={{ fontSize: '0.6875rem', color: '#2E3645' }}>
            © {year} Peiwast Cleaning. Alle rettigheter forbeholdt.
          </p>
          <p className="font-mono" style={{ fontSize: '0.6875rem', color: '#1B2333' }}>
            Nettsted av{' '}
            <a href="https://medcom.no" style={{ color: '#2E3645' }}>
              Medcom
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
