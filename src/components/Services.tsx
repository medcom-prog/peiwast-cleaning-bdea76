/**
 * Services — numbered cards, no icons.
 * Typography + number ("01", "02") approach.
 * Horizontal scroll on mobile, 2×2 on desktop.
 */
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    num: '01',
    title: 'Kontorrenhold',
    body: 'Fast ukentlig eller toukentlig renhold av kontorlokaler. Støvtørk, gulvvask, kjøkken og toalett. Vi bruker verktøy og produkter godkjent for alle overflatetyper.',
    tag: 'Regelmessig',
  },
  {
    num: '02',
    title: 'Dybderenhold',
    body: 'Grundig sesong- eller overtakelsesrenhold. Vi tar tak i alt som det daglige renholdsprogrammet ikke rekker: ventiler, skuffer, vinduer, felles arealer.',
    tag: 'Grundig',
  },
  {
    num: '03',
    title: 'Flytrenhold',
    body: 'Spesialisert renhold av alle typer gulv — parkett, fliser, linoleum og belegg. Polering og overflatebehandling inkludert der det er aktuelt.',
    tag: 'Alle flater',
  },
  {
    num: '04',
    title: 'Overtakelsesrenhold',
    body: 'Klar for innflytting eller utflytting? Vi gjør kontoret klart for neste leietaker eller nye eiere. Godkjent uttak av depositum er målet.',
    tag: 'Etterlat uten anmerkninger',
  },
];

export function Services() {
  return (
    <section id="tjenester" className="py-20 md:py-32 bg-bg">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 max-w-xl"
        >
          <p className="font-mono text-label uppercase tracking-widest text-muted mb-3">
            (01) Tjenester
          </p>
          <h2 className="font-display text-display-lg text-ink-800">
            Fire ting vi gjør bra.
          </h2>
          <p className="mt-4 font-sans text-ink-500 text-lg leading-relaxed">
            Sertifiserte for alle flater. Utstyrt for dybderenhold.
            Ingen avtale uten befaring først.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative bg-white border border-ink-100 rounded-2xl p-7 md:p-9 flex flex-col gap-5 shadow-soft hover:shadow-lifted transition-all"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-label text-muted uppercase tracking-widest">{s.num}</span>
                <span className="font-mono text-label text-brand-600 uppercase tracking-wider bg-brand-50 px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>
              <div>
                <h3 className="font-display text-display-md text-ink-800 mb-3">{s.title}</h3>
                <p className="font-sans text-ink-500 leading-relaxed">{s.body}</p>
              </div>
              <div className="mt-auto pt-4 border-t border-ink-100">
                <a
                  href="#kontakt"
                  className="font-sans text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors group-hover:underline underline-offset-4"
                >
                  Be om tilbud →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
