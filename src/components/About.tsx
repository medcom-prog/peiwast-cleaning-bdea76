import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="om-oss" className="py-20 md:py-32" style={{ backgroundColor: '#FAFAF7' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#2E3645' }}>
              (04) Om oss
            </p>
            <h2
              className="font-display text-ink-800 mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.07', letterSpacing: '-0.025em' }}
            >
              Vi renholder kontorer.<br />
              <span style={{ color: '#4A5468' }}>Det er alt vi gjør.</span>
            </h2>
            <div className="font-sans leading-relaxed space-y-4" style={{ color: '#2E3645' }}>
              <p>
                Peiwast Cleaning er et renholdsselskap som utelukkende fokuserer på SMB-bedrifter
                i Osloregionen. Vi er ikke et generalistbyrå — vi renholder kontorer, og vi er
                sertifisert for alle typer overflater og dybderenhold.
              </p>
              <p>
                Kundene våre er selskaper som er klare for å bytte leverandør fordi de vil ha
                noe som faktisk fungerer. Vi tilbyr fast team, forutsigbar pris og ingen
                overraskelser — verken på fakturaen eller i lokalet.
              </p>
              <p>
                Kontakt oss for en uforpliktende befaring. Vi ser på lokalene, kartlegger behov
                og gir deg et konkret tilbud innen 48 timer.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { val: 'B2B-only', lbl: 'Kun bedriftskunder' },
                { val: '48t',      lbl: 'Svar på tilbud' },
                { val: '100%',     lbl: 'Sertifiserte produkter' },
              ].map(s => (
                <div key={s.val} className="flex flex-col gap-0.5">
                  <span
                    className="font-display font-bold text-ink-800"
                    style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.375rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}
                  >
                    {s.val}
                  </span>
                  <span className="font-sans" style={{ fontSize: '0.8125rem', color: '#2E3645' }}>
                    {s.lbl}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="relative"
          >
            <div className="overflow-hidden" style={{ borderRadius: '1.75rem', aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80&auto=format&fit=crop"
                alt="Lyst og ryddig kontorlokale — profesjonelt bedriftsrenhold i Oslo"
                className="w-full h-full object-cover"
                loading="lazy"
                width={900}
                height={675}
              />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                backgroundColor: '#D4F063',
                borderRadius: '1.25rem',
                padding: '1rem 1.5rem',
                boxShadow: '0 2px 4px rgba(15,27,45,0.08), 0 12px 32px rgba(15,27,45,0.14)',
              }}
            >
              <p className="font-display font-bold text-ink-800 leading-tight" style={{ fontSize: '1.0625rem' }}>
                Kontorer i Oslo
              </p>
              <p className="font-sans" style={{ fontSize: '0.8125rem', color: '#1B2333' }}>
                Befaring alltid inkludert
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
