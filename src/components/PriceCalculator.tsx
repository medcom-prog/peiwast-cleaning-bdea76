import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

type ServiceType = 'kontorrenhold' | 'dybderenhold' | 'flytrenhold' | 'overtakelse';
type Frequency   = 'ukentlig' | 'toukentlig' | 'maanedlig' | 'engang';

const serviceLabels: Record<ServiceType, string> = {
  kontorrenhold: 'Kontorrenhold',
  dybderenhold:  'Dybderenhold',
  flytrenhold:   'Flytrenhold',
  overtakelse:   'Overtakelsesrenhold',
};

const freqLabels: Record<Frequency, string> = {
  ukentlig:   'Ukentlig',
  toukentlig: '2 × i mnd',
  maanedlig:  'Månedlig',
  engang:     'Engangs',
};

// Base rates (NOK/m²) — clearly labelled as estimates
const BASE_RATES: Record<ServiceType, number> = {
  kontorrenhold: 18,
  dybderenhold:  42,
  flytrenhold:   28,
  overtakelse:   55,
};

const FREQ_MULTIPLIER: Record<Frequency, number> = {
  ukentlig:   1.0,
  toukentlig: 1.0,
  maanedlig:  1.1,
  engang:     1.25,
};

export function PriceCalculator() {
  const [service,   setService]   = useState<ServiceType>('kontorrenhold');
  const [sqm,       setSqm]       = useState(200);
  const [frequency, setFrequency] = useState<Frequency>('toukentlig');

  const estimate = useMemo(() => {
    const base  = BASE_RATES[service] * sqm * FREQ_MULTIPLIER[frequency];
    const lower = Math.round(base * 0.85 / 10) * 10;
    const upper = Math.round(base * 1.15 / 10) * 10;
    return { lower, upper };
  }, [service, sqm, frequency]);

  const isRecurring = frequency !== 'engang';

  return (
    <section id="pris" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#0F1B2D', color: 'white' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:sticky lg:top-24"
          >
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#D4F063' }}
            >
              (02) Pris
            </p>
            <h2
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.07', letterSpacing: '-0.025em' }}
            >
              Beregn pris på{' '}
              <span style={{ color: '#D4F063' }}>30 sekunder.</span>
            </h2>
            <p className="font-sans leading-relaxed mb-8" style={{ color: '#96A3B5' }}>
              Velg tjeneste, skriv inn kvadratmeter og frekvens.
              Estimatet under gir deg et realistisk utgangspunkt — eksakt pris
              avtales etter befaring.
            </p>
            <p
              className="font-mono uppercase"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#4A5468' }}
            >
              Alle tall ekskl. MVA · Priser er anslag
            </p>
          </motion.div>

          {/* Right — calculator card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="flex flex-col gap-8"
            style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.75rem', padding: '2.5rem' }}
          >
            {/* Service type */}
            <div>
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#96A3B5' }}
              >
                Type renhold
              </p>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(serviceLabels) as ServiceType[]).map(s => (
                  <button
                    key={s}
                    onClick={() => setService(s)}
                    className="px-4 py-2 rounded-full font-sans text-sm font-medium border transition-all"
                    style={
                      service === s
                        ? { backgroundColor: '#D4F063', color: '#0F1B2D', borderColor: '#D4F063' }
                        : { color: 'white', borderColor: 'rgba(255,255,255,0.2)' }
                    }
                  >
                    {serviceLabels[s]}
                  </button>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label
                  htmlFor="sqm-slider"
                  className="font-mono uppercase"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#96A3B5' }}
                >
                  Areal
                </label>
                <span
                  className="font-display font-bold text-2xl"
                  style={{ color: '#D4F063' }}
                >
                  {sqm} m²
                </span>
              </div>
              <input
                id="sqm-slider"
                type="range"
                min={50}
                max={2000}
                step={25}
                value={sqm}
                onChange={e => setSqm(Number(e.target.value))}
                className="w-full cursor-pointer"
                style={{ accentColor: '#D4F063' }}
                aria-label={`Areal: ${sqm} kvadratmeter`}
              />
              <div
                className="flex justify-between font-mono mt-1"
                style={{ fontSize: '0.6875rem', color: '#4A5468' }}
              >
                <span>50 m²</span>
                <span>2 000 m²</span>
              </div>
            </div>

            {/* Frequency */}
            <div>
              <p
                className="font-mono uppercase mb-3"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#96A3B5' }}
              >
                Frekvens
              </p>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(freqLabels) as Frequency[]).map(f => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className="px-4 py-3 rounded-xl font-sans text-sm font-medium border transition-all text-left"
                    style={
                      frequency === f
                        ? { backgroundColor: '#D4F063', color: '#0F1B2D', borderColor: '#D4F063' }
                        : { color: 'white', borderColor: 'rgba(255,255,255,0.2)' }
                    }
                  >
                    {freqLabels[f]}
                  </button>
                ))}
              </div>
            </div>

            {/* Estimate */}
            <motion.div
              key={`${service}-${sqm}-${frequency}`}
              initial={{ opacity: 0.5, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-2 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p
                className="font-mono uppercase"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#4A5468' }}
              >
                Estimert {isRecurring ? 'månedspris' : 'pris'} (anslag ekskl. MVA)
              </p>
              <p
                className="font-display font-bold"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.07', letterSpacing: '-0.025em', color: '#D4F063' }}
              >
                {estimate.lower.toLocaleString('nb')} – {estimate.upper.toLocaleString('nb')} kr
              </p>
              <p className="font-sans text-sm" style={{ color: '#4A5468' }}>
                Eksakt pris avtales etter befaring og renholdsbehov.
              </p>
            </motion.div>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 font-display font-bold text-base px-7 py-3.5 rounded-full transition-all"
              style={{ backgroundColor: '#D4F063', color: '#0F1B2D' }}
            >
              Få nøyaktig pristilbud
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
