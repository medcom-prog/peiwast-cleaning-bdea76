/**
 * Contact — dark bg, info left, form right.
 * Booking integration: native form that posts to a serverless endpoint (or mailto fallback).
 * Service-type pill selector at top of form.
 */
import { useState } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

type ServiceOption = 'kontorrenhold' | 'dybderenhold' | 'flytrenhold' | 'overtakelse' | 'annet';

const serviceOptions: { id: ServiceOption; label: string }[] = [
  { id: 'kontorrenhold', label: 'Kontorrenhold' },
  { id: 'dybderenhold',  label: 'Dybderenhold'  },
  { id: 'flytrenhold',   label: 'Flytrenhold'   },
  { id: 'overtakelse',   label: 'Overtakelse'   },
  { id: 'annet',         label: 'Annet'          },
];

export function Contact() {
  const [service, setService] = useState<ServiceOption>('kontorrenhold');
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    data.set('service', service);
    // Post to Formspree / your backend here. Fallback: mailto.
    try {
      await fetch('https://formspree.io/f/xpwzqdjq', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      setSent(true);
    } catch {
      // Fallback: open mailto
      const name    = data.get('name') as string;
      const email   = data.get('email') as string;
      const message = data.get('message') as string;
      window.location.href = `mailto:peiwast@clean.no?subject=Pristilbud fra ${encodeURIComponent(name)}&body=${encodeURIComponent(`Navn: ${name}\nE-post: ${email}\nTjeneste: ${service}\n\n${message}`)}`;
    }
    setSubmitting(false);
  }

  return (
    <section id="kontakt" className="py-20 md:py-32 bg-ink-800 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <p className="font-mono text-label uppercase tracking-widest text-brand-300 mb-3">(05) Kontakt</p>
            <h2 className="font-display text-display-lg mb-6">
              Skriv til oss.<br />
              <span className="text-ink-300">Vi svarer i dag.</span>
            </h2>
            <p className="font-sans text-ink-300 leading-relaxed mb-10">
              Alle henvendelser besvares innen 24 timer på hverdager.
              Trenger du befaring? Nevn det i meldingen, så foreslår vi
              et tidspunkt som passer deg.
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <p className="font-mono text-label text-ink-500 uppercase tracking-widest mb-1">Telefon</p>
                <a href="tel:91389872" className="font-display text-xl font-bold text-white hover:text-brand-300 transition-colors">
                  913 89 872
                </a>
              </div>
              <div>
                <p className="font-mono text-label text-ink-500 uppercase tracking-widest mb-1">E-post</p>
                <a href="mailto:peiwast@clean.no" className="font-display text-xl font-bold text-white hover:text-brand-300 transition-colors">
                  peiwast@clean.no
                </a>
              </div>
              <div>
                <p className="font-mono text-label text-ink-500 uppercase tracking-widest mb-1">Område</p>
                <p className="font-sans text-white">Oslo og omegn</p>
              </div>
            </div>
          </motion.div>

          {/* Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full min-h-[400px] bg-white/5 border border-white/10 rounded-3xl p-12"
              >
                <div className="w-16 h-16 rounded-full bg-brand-300 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="#0F1B2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-display text-display-md text-white mb-3">Takk for henvendelsen!</h3>
                <p className="font-sans text-ink-300">Vi svarer deg innen 24 timer på hverdager.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-3xl p-7 md:p-10 flex flex-col gap-6"
                noValidate
              >
                {/* Service pills */}
                <div>
                  <p className="font-mono text-label text-ink-400 uppercase tracking-widest mb-3">Hva gjelder det?</p>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map(o => (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => setService(o.id)}
                        className={`px-4 py-1.5 rounded-full font-sans text-sm font-medium border transition-all ${
                          service === o.id
                            ? 'bg-brand-300 text-ink-800 border-brand-300'
                            : 'text-white border-white/20 hover:border-brand-300'
                        }`}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name + email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="font-mono text-label text-ink-400 uppercase tracking-widest">
                      Navn
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Kari Nordmann"
                      className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-300 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="font-mono text-label text-ink-400 uppercase tracking-widest">
                      E-post
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="kari@bedrift.no"
                      className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-300 transition-colors"
                    />
                  </div>
                </div>

                {/* Company + sqm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-company" className="font-mono text-label text-ink-400 uppercase tracking-widest">
                      Selskap
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Bedriften AS"
                      className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-300 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-sqm" className="font-mono text-label text-ink-400 uppercase tracking-widest">
                      Areal (ca. m²)
                    </label>
                    <input
                      id="contact-sqm"
                      name="sqm"
                      type="number"
                      min={1}
                      placeholder="250"
                      className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-300 transition-colors"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="font-mono text-label text-ink-400 uppercase tracking-widest">
                    Melding
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Fortell litt om hva dere trenger — frekvens, spesielle krav, eller bare at dere vil ha et møte."
                    className="bg-white/5 border border-white/15 rounded-xl px-4 py-3 font-sans text-white placeholder:text-ink-500 focus:outline-none focus:border-brand-300 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 bg-brand-300 hover:bg-brand-400 disabled:opacity-60 text-ink-800 font-display font-bold text-base px-7 py-3.5 rounded-full transition-all hover:shadow-glow"
                >
                  {submitting ? 'Sender...' : 'Send forespørsel'}
                </button>

                <p className="font-mono text-label text-ink-500 text-center">
                  Eller ring direkte:{' '}
                  <a href="tel:91389872" className="text-white hover:text-brand-300 transition-colors">
                    913 89 872
                  </a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
