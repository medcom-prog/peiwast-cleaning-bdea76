/**
 * About / Om oss — split layout, text left, large image right.
 * Uses a real Unsplash Nordic interior shot.
 */
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section id="om-oss" className="py-20 md:py-32 bg-bg">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="font-mono text-label uppercase tracking-widest text-muted mb-3">(04) Om oss</p>
            <h2 className="font-display text-display-lg text-ink-800 mb-6">
              Vi renholder kontorer.<br />
              <span className="text-muted">Det er alt vi gjør.</span>
            </h2>
            <div className="font-sans text-ink-500 leading-relaxed space-y-4">
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
                  <span className="font-display text-display-md font-bold text-ink-800">{s.val}</span>
                  <span className="font-mono text-label text-muted uppercase tracking-widest">{s.lbl}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80&auto=format&fit=crop"
                alt="Lyst og ryddig kontorlokale — resultat av profesjonelt bedriftsrenhold"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent card */}
            <div className="absolute -bottom-5 -left-5 bg-brand-300 rounded-2xl px-6 py-4 shadow-lifted">
              <p className="font-display font-bold text-ink-800 text-lg leading-tight">
                Kontorer i Oslo<br />
                <span className="font-sans font-normal text-ink-700 text-sm">Befaring alltid inkludert</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
