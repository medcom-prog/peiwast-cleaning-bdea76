/**
 * Process — numbered 01/02/03/04 steps.
 * Answers the B2B buyer's question: "What happens after I contact you?"
 */
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    num: '01',
    title: 'Du tar kontakt',
    body: 'Send oss en melding eller ring. Vi svarer innen 24 timer på hverdager med et tidspunkt for befaring.',
  },
  {
    num: '02',
    title: 'Vi ser på lokalene',
    body: 'En av oss kommer på befaring, kartlegger flater, volum og spesielle behov. Helt uforpliktende.',
  },
  {
    num: '03',
    title: 'Du får en konkret avtale',
    body: 'Fast pris, fast frekvens, fast team. Ingen overraskelser på fakturaen — det vi avtaler, er det du betaler.',
  },
  {
    num: '04',
    title: 'Vi begynner å levere',
    body: 'Teamet ditt møter opp til avtalt tid, bruker godkjente produkter for dine overflater og rapporterer om noe er uvanlig.',
  },
];

export function Process() {
  return (
    <section className="py-20 md:py-28 bg-bg-soft">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 max-w-lg"
        >
          <p className="font-mono text-label uppercase tracking-widest text-muted mb-3">(03) Slik fungerer det</p>
          <h2 className="font-display text-display-lg text-ink-800">
            Fire steg fra første kontakt til rent kontor.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.09 }}
              className="relative flex flex-col gap-4"
            >
              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute top-6 left-[calc(100%+0px)] w-full h-px bg-ink-100 z-0"
                  style={{ width: 'calc(100% - 2.5rem)', left: 'calc(1.5rem + 100%)' }}
                />
              )}

              <span className="font-mono text-5xl font-bold text-brand-300 leading-none">{step.num}</span>
              <h3 className="font-display text-xl font-bold text-ink-800">{step.title}</h3>
              <p className="font-sans text-ink-500 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
