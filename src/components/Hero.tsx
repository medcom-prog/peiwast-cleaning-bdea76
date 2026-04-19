/**
 * Hero — Typography-forward hero with inline stats.
 * No stock photo. Bold display type with lime accent on a key word.
 * Framer-motion staggered entrance: h1 → p → CTAs.
 */
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 'ISO-sertifisert', label: 'for alle flater' },
  { value: 'B2B',             label: 'kun bedrifter' },
  { value: '48t',             label: 'responstid' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[92vh] flex flex-col justify-center bg-bg overflow-hidden pt-24 pb-16"
    >
      {/* Background accent blobs — subtle, geometric, not "gradient blob cliché" */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[780px] max-h-[780px] rounded-full bg-brand-50 opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] rounded-full bg-brand-100 opacity-40 -translate-x-1/2 translate-y-1/4 pointer-events-none"
      />

      <div className="container relative z-10">
        <div className="max-w-4xl">
          {/* Category tag */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-mono text-label uppercase tracking-widest text-muted mb-6"
          >
            Bedriftsrenhold — Oslo
          </motion.p>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
            className="font-display text-display-xl text-ink-800 mb-6"
          >
            Kontoret ditt{' '}
            <span className="relative inline-block">
              <span className="relative z-10">fortjener bedre.</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 h-3 bg-brand-300 -z-0 rounded-sm opacity-70"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
            className="font-sans text-lg md:text-xl text-ink-500 max-w-xl leading-relaxed mb-10"
          >
            Vi renholder kontorer for SMB-bedrifter som er klare for å bytte leverandør.
            Sertifisert for alle overflatetyper og dybderenhold — uten at du trenger å løfte en finger.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-ink-800 hover:bg-ink-900 text-brand-300 font-display font-bold text-base px-7 py-3.5 rounded-full transition-all hover:shadow-glow"
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

        {/* Inline stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.42 }}
          className="mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-ink-100 pt-8"
        >
          {stats.map(s => (
            <div key={s.value} className="flex flex-col gap-0.5">
              <span className="font-display text-display-md text-ink-800 font-bold">{s.value}</span>
              <span className="font-mono text-label text-muted uppercase tracking-widest">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
