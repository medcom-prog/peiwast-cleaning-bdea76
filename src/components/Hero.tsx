import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 'ISO-sert.', label: 'for alle flater' },
  { value: 'B2B only', label: 'kun bedrifter' },
  { value: '48t',      label: 'responstid' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-20"
      style={{ backgroundColor: '#FAFAF7' }}
    >
      {/* Large geometric lime accent — top right, clipped */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[560px] h-[560px] pointer-events-none"
        style={{
          borderRadius: '0 0 0 100%',
          background: 'linear-gradient(135deg, #F0FCC5 0%, #D4F063 100%)',
          opacity: 0.45,
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[75vh]">
          {/* Left — copy */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-mono uppercase text-ink-400 mb-6"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.14em' }}
            >
              Bedriftsrenhold — Oslo
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
              className="font-display text-ink-800 mb-6"
              style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', lineHeight: '1.0', letterSpacing: '-0.035em' }}
            >
              Kontoret ditt{' '}
              <br className="hidden sm:block" />
              <span className="relative inline-block">
                <span className="relative z-10">fortjener</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 rounded-sm"
                  style={{ bottom: '2px', height: '14px', backgroundColor: '#D4F063', zIndex: 0, opacity: 0.8 }}
                />
              </span>
              {' '}bedre.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
              className="font-sans text-ink-500 leading-relaxed mb-10 max-w-md"
              style={{ fontSize: '1.125rem' }}
            >
              Vi renholder kontorer for SMB-bedrifter som er klare for å bytte leverandør.
              Sertifisert for alle overflatetyper og dybderenhold.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 font-display font-bold text-base px-7 py-3.5 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: '#0F1B2D', color: '#D4F063' }}
              >
                Få pristilbud
              </a>
              <a
                href="tel:91389872"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink-500 hover:text-ink-800 transition-colors"
              >
                eller ring 913 89 872
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.42 }}
              className="flex flex-wrap gap-x-10 gap-y-4 border-t border-ink-100 pt-8"
            >
              {stats.map(s => (
                <div key={s.value} className="flex flex-col gap-0.5">
                  <span
                    className="font-display font-bold text-ink-800"
                    style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: '1.1', letterSpacing: '-0.02em' }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="font-mono uppercase text-ink-400"
                    style={{ fontSize: '0.6875rem', letterSpacing: '0.12em' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="overflow-hidden" style={{ borderRadius: '1.75rem', aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop"
                alt="Rent og lyst kontorlokale i Oslo"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small floating card */}
            <div
              className="absolute -bottom-4 -left-6 rounded-2xl px-5 py-4"
              style={{ backgroundColor: '#D4F063', boxShadow: '0 2px 4px rgba(15,27,45,0.05), 0 16px 40px rgba(15,27,45,0.10)' }}
            >
              <p className="font-display font-bold text-ink-800 text-base leading-tight">
                Befaring inkludert<br />
                <span className="font-sans font-normal text-ink-700 text-sm">Alltid uforpliktende</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
