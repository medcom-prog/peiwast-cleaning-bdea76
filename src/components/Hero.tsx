import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 'ISO-sertifisert', label: 'for alle flater' },
  { value: 'B2B only',        label: 'kun bedrifter' },
  { value: '48t',             label: 'responstid' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-24 pb-16"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Background accent — geometric, not blob */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[780px] max-h-[780px] rounded-full opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none"
        style={{ backgroundColor: '#F0FCC5' }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full opacity-40 -translate-x-1/2 translate-y-1/4 pointer-events-none"
        style={{ backgroundColor: '#E3F899' }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-mono text-xs uppercase tracking-widest text-ink-500 mb-6"
            style={{ letterSpacing: '0.12em', fontSize: '0.6875rem' }}
          >
            Bedriftsrenhold — Oslo
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="font-display text-ink-800 mb-6"
            style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.75rem)', lineHeight: '1.02', letterSpacing: '-0.03em' }}
          >
            Kontoret ditt{' '}
            <span className="relative inline-block">
              <span className="relative z-10">fortjener bedre.</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 h-3 rounded-sm opacity-70 -z-10"
                style={{ backgroundColor: '#D4F063' }}
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
            className="font-sans text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed mb-10"
          >
            Vi renholder kontorer for SMB-bedrifter som er klare for å bytte leverandør.
            Sertifisert for alle overflatetyper og dybderenhold — uten at du trenger å løfte en finger.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 font-display font-bold text-base px-7 py-3.5 rounded-full transition-all"
              style={{ backgroundColor: '#0F1B2D', color: '#D4F063' }}
            >
              Få pristilbud
            </a>
            <a
              href="tel:91389872"
              className="inline-flex items-center gap-2 text-ink-600 hover:text-ink-900 font-sans text-sm font-medium transition-colors"
            >
              eller ring 913 89 872
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.42 }}
          className="mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-ink-100 pt-8"
        >
          {stats.map(s => (
            <div key={s.value} className="flex flex-col gap-0.5">
              <span
                className="font-display text-ink-800 font-bold"
                style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.375rem)', lineHeight: '1.15', letterSpacing: '-0.015em' }}
              >
                {s.value}
              </span>
              <span
                className="font-mono text-ink-500 uppercase"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
