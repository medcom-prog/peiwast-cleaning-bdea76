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
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--bg-soft)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-14 max-w-lg"
        >
          <p
            className="font-mono uppercase text-ink-500 mb-3"
            style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}
          >
            (03) Slik fungerer det
          </p>
          <h2
            className="font-display text-ink-800"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.07', letterSpacing: '-0.025em' }}
          >
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
              className="flex flex-col gap-4"
            >
              <span
                className="font-display font-bold leading-none"
                style={{ fontSize: '3rem', color: '#D4F063' }}
              >
                {step.num}
              </span>
              <h3 className="font-display text-xl font-bold text-ink-800">{step.title}</h3>
              <p className="font-sans text-ink-500 text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
