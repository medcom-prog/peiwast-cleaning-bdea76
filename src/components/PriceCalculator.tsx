/**
 * Price Calculator — B2B edition.
 * Service type (pills) + size (range slider m²) + frequency (grid) → live estimate.
 * No invented prices — shows a range and "Beregn nøyaktig pris" CTA.
 * Labeled "anslag" everywhere. No SKV-fradrag (this is B2B).
 */
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
  ukentlig:     'Ukentlig',
  toukentlig:   '2 × i mnd',
  maanedlig:    'Månedlig',
  engang:       'Engangs',
};

// Base rates (NOK/m²) — clearly labelled as estimates. Not legal price quotes.
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
    <section id="pris" className="py-20 md:py-32 bg-ink-800 text-white overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — intro */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:sticky lg:top-24"
          >
            <p className="font-mono text-label uppercase tracking-widest text-brand-300 mb-3">(02) Pris</p>
            <h2 className="font-display text-display-lg mb-6">
              Beregn pris på{' '}
              <span className="text-brand-300">30 sekunder.</span>
            </h2>
            <p className="font-sans text-ink-200 leading-relaxed mb-8">
              Velg tjeneste, skriv inn kvadratmeter og frekvens.
              Estimatet under gir deg et realistisk utgangspunkt — eksakt pris
              avtales etter befaring.
            </p>
            <p className="font-mono text-label text-ink-400 uppercase tracking-widest">
              Alle tall ekskl. MVA · Priser er anslag
            </p>
          </motion.div>

          {/* Right — calculator card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-10 flex flex-col gap-8"
          >
            {/* Service type */}
            <div>
              <label className="font-mono text-label uppercase tracking-widest text-ink-300 block mb-3">
                Type renhold
              </label>
              <div className="flex flex-wrap gap-2">
                {(Object.keys(serviceLabels) as ServiceType[]).map(s => (
                  <button
                    key={s}
                    onClick={() => setService(s)}
                    className={`px-4 py-2 rounded-full font-sans text-sm font-medium border transition-all ${
                      service === s
                        ? 'bg-brand-300 text-ink-800 border-brand-300'
                        : 'text-white border-white/20 hover:border-brand-300 hover:text-brand-300'
                    }`}
                  >
                    {serviceLabels[s]}
                  </button>
                ))}
              </div>
            </div>

            {/* Size slider */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label htmlFor="sqm-slider" className="font-mono text-label uppercase tracking-widest text-ink-300">
                  Areal
                </label>
                <span className="font-display text-2xl font-bold text-brand-300">{sqm} m²</span>
              </div>
              <input
                id="sqm-slider"
                type="range"
                min={50}
                max={2000}
                step={25}
                value={sqm}
                onChange={e => setSqm(Number(e.target.value))}
                className="w-full accent-brand-300 cursor-pointer"
                aria-label={`Areal: ${sqm} kvadratmeter`}
              />
              <div className="flex justify-between font-mono text-label text-ink-500 mt-1">
                <span>50 m²</span>
                <span>2 000 m²</span>
              </div>
            </div>

            {/* Frequency */}
            <div>
              <label className="font-mono text-label uppercase tracking-widest text-ink-300 block mb-3">
                Frekvens
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(freqLabels) as Frequency[]).map(f => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`px-4 py-3 rounded-xl font-sans text-sm font-medium border transition-all text-left ${
                      frequency === f
                        ? 'bg-brand-300 text-ink-800 border-brand-300'
                        : 'text-white border-white/20 hover:border-brand-300'
                    }`}
                  >
                    {freqLabels[f]}
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            <motion.div
              key={`${service}-${sqm}-${frequency}`}
              initial={{ opacity: 0.5, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="border-t border-white/10 pt-6 flex flex-col gap-2"
            >
              <p className="font-mono text-label text-ink-400 uppercase tracking-widest">
                Estimert {isRecurring ? 'månedspris' : 'pris'} (anslag ekskl. MVA)
              </p>
              <p className="font-display text-display-lg font-bold text-brand-300">
                {estimate.lower.toLocaleString('nb')} – {estimate.upper.toLocaleString('nb')} kr
              </p>
              <p className="font-sans text-sm text-ink-400">
                Eksakt pris avtales etter befaring og renholdsbehov.
              </p>
            </motion.div>

            <a
              href="#kontakt"
              className="inline-flex items-center justify-center gap-2 bg-brand-300 hover:bg-brand-400 text-ink-800 font-display font-bold text-base px-7 py-3.5 rounded-full transition-all hover:shadow-glow"
            >
              Få nøyaktig pristilbud
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
