import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: 'ISO-sertifisert', label: 'Alle overflater' },
  { value: 'B2B',             label: 'Kun bedrifter' },
  { value: '48t',             label: 'Svar på tilbud' },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-20"
      style={{ backgroundColor: '#FAFAF7' }}
    >
      {/* Geometric lime corner — top right */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: '480px',
          height: '480px',
          borderRadius: '0 0 0 120%',
          background: 'linear-gradient(145deg, #E3F899 0%, #D4F063 100%)',
          opacity: 0.5,
        }}
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — copy */}
          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="font-mono uppercase mb-5"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.15em', color: '#2E3645' }}
            >
              Bedriftsrenhold — Oslo
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
              className="font-display text-ink-800 mb-6"
              style={{ fontSize: 'clamp(2.75rem, 5.5vw, 4.75rem)', lineHeight: '1.02', letterSpacing: '-0.035em' }}
            >
              Kontoret ditt<br />
              <span
                style={{
                  position: 'relative',
                  display: 'inline-block',
                  isolation: 'isolate',
                }}
              >
                <span style={{ position: 'relative', zIndex: 1 }}>fortjener</span>
                <span
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '-4px',
                    right: '-4px',
                    bottom: '4px',
                    height: '18px',
                    backgroundColor: '#D4F063',
                    borderRadius: '3px',
                    zIndex: 0,
                  }}
                />
              </span>{' '}
              bedre.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.18 }}
              className="font-sans leading-relaxed mb-10 max-w-md"
              style={{ fontSize: '1.0625rem', color: '#2E3645' }}
            >
              Vi renholder kontorer for SMB-bedrifter som er klare for å bytte leverandør.
              Sertifisert for alle overflatetyper — uten at du trenger å løfte en finger.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.28 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 font-display font-bold text-base px-7 py-3.5 rounded-full transition-all hover:opacity-90"
                style={{ backgroundColor: '#0F1B2D', color: '#D4F063', letterSpacing: '-0.01em' }}
              >
                Få pristilbud
              </a>
              <a
                href="tel:91389872"
                className="inline-flex items-center gap-2 font-sans text-sm font-medium transition-colors"
                style={{ color: '#2E3645' }}
              >
                eller ring 913 89 872
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.42 }}
              className="flex flex-wrap gap-x-10 gap-y-4 border-t border-ink-100 pt-7"
            >
              {stats.map(s => (
                <div key={s.value} className="flex flex-col gap-1">
                  <span
                    className="font-display font-bold text-ink-800"
                    style={{ fontSize: '1.625rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="font-sans"
                    style={{ fontSize: '0.8125rem', color: '#2E3645' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            className="hidden lg:block relative"
            style={{ paddingBottom: '1.5rem' }}
          >
            <div
              className="overflow-hidden w-full"
              style={{ borderRadius: '1.75rem', aspectRatio: '4/5' }}
            >
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop"
                alt="Rent og lyst kontorlokale — resultat av profesjonelt bedriftsrenhold"
                className="w-full h-full object-cover"
                width={900}
                height={1125}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '-28px',
                backgroundColor: '#D4F063',
                borderRadius: '1.25rem',
                padding: '1rem 1.5rem',
                boxShadow: '0 2px 4px rgba(15,27,45,0.08), 0 12px 32px rgba(15,27,45,0.14)',
                zIndex: 10,
              }}
            >
              <p
                className="font-display font-bold text-ink-800 leading-tight"
                style={{ fontSize: '1.0625rem', letterSpacing: '-0.015em' }}
              >
                Befaring inkludert
              </p>
              <p className="font-sans" style={{ fontSize: '0.8125rem', color: '#1B2333' }}>
                Alltid uforpliktende
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
