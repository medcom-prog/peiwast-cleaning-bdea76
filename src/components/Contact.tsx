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
    const formData = new FormData(e.currentTarget);
    formData.set('service', service);
    try {
      await fetch('https://formspree.io/f/xpwzqdjq', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      setSent(true);
    } catch {
      const name    = formData.get('name') as string;
      const email   = formData.get('email') as string;
      const message = formData.get('message') as string;
      window.location.href = `mailto:peiwast@clean.no?subject=${encodeURIComponent(`Pristilbud fra ${name}`)}&body=${encodeURIComponent(`Navn: ${name}\nE-post: ${email}\nTjeneste: ${service}\n\n${message}`)}`;
    }
    setSubmitting(false);
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.15)',
    borderRadius: '0.75rem',
    padding: '0.75rem 1rem',
    color: 'white',
    fontFamily: 'inherit',
    width: '100%',
    outline: 'none',
    fontSize: '0.9375rem',
  };

  return (
    <section id="kontakt" className="py-20 md:py-32" style={{ backgroundColor: '#0F1B2D', color: 'white' }}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-2 flex flex-col justify-center"
          >
            <p
              className="font-mono uppercase mb-3"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#D4F063' }}
            >
              (05) Kontakt
            </p>
            <h2
              className="font-display mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.07', letterSpacing: '-0.025em' }}
            >
              Skriv til oss.<br />
              <span style={{ color: '#96A3B5' }}>Vi svarer i dag.</span>
            </h2>
            <p className="font-sans leading-relaxed mb-10" style={{ color: '#96A3B5' }}>
              Alle henvendelser besvares innen 24 timer på hverdager.
              Trenger du befaring? Nevn det i meldingen, så foreslår vi
              et tidspunkt som passer deg.
            </p>

            <div className="flex flex-col gap-5">
              <div>
                <p
                  className="font-mono uppercase mb-1"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#4A5468' }}
                >
                  Telefon
                </p>
                <a
                  href="tel:91389872"
                  className="font-display text-xl font-bold transition-colors"
                  style={{ color: 'white' }}
                >
                  913 89 872
                </a>
              </div>
              <div>
                <p
                  className="font-mono uppercase mb-1"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#4A5468' }}
                >
                  E-post
                </p>
                <a
                  href="mailto:peiwast@clean.no"
                  className="font-display text-xl font-bold transition-colors"
                  style={{ color: 'white' }}
                >
                  peiwast@clean.no
                </a>
              </div>
              <div>
                <p
                  className="font-mono uppercase mb-1"
                  style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#4A5468' }}
                >
                  Område
                </p>
                <p className="font-sans" style={{ color: 'white' }}>Oslo og omegn</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
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
                className="flex flex-col items-center justify-center text-center min-h-[400px]"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.75rem', padding: '3rem' }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: '#D4F063' }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="#0F1B2D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3
                  className="font-display mb-3"
                  style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.375rem)', color: 'white' }}
                >
                  Takk for henvendelsen!
                </h3>
                <p className="font-sans" style={{ color: '#96A3B5' }}>Vi svarer deg innen 24 timer på hverdager.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1.75rem', padding: '2.5rem' }}
                noValidate
              >
                {/* Service pills */}
                <div>
                  <p
                    className="font-mono uppercase mb-3"
                    style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#96A3B5' }}
                  >
                    Hva gjelder det?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map(o => (
                      <button
                        key={o.id}
                        type="button"
                        onClick={() => setService(o.id)}
                        className="px-4 py-1.5 rounded-full font-sans text-sm font-medium border transition-all"
                        style={
                          service === o.id
                            ? { backgroundColor: '#D4F063', color: '#0F1B2D', borderColor: '#D4F063' }
                            : { color: 'white', borderColor: 'rgba(255,255,255,0.2)' }
                        }
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="font-mono uppercase"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#96A3B5' }}
                    >
                      Navn
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Kari Nordmann"
                      style={{ ...inputStyle }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="font-mono uppercase"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#96A3B5' }}
                    >
                      E-post
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="kari@bedrift.no"
                      style={{ ...inputStyle }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-company"
                      className="font-mono uppercase"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#96A3B5' }}
                    >
                      Selskap
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Bedriften AS"
                      style={{ ...inputStyle }}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-sqm"
                      className="font-mono uppercase"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#96A3B5' }}
                    >
                      Areal (ca. m²)
                    </label>
                    <input
                      id="contact-sqm"
                      name="sqm"
                      type="number"
                      min={1}
                      placeholder="250"
                      style={{ ...inputStyle }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    className="font-mono uppercase"
                    style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#96A3B5' }}
                  >
                    Melding
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Fortell litt om hva dere trenger — frekvens, spesielle krav, eller bare at dere vil ha et møte."
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center gap-2 font-display font-bold text-base px-7 py-3.5 rounded-full transition-all disabled:opacity-60"
                  style={{ backgroundColor: '#D4F063', color: '#0F1B2D' }}
                >
                  {submitting ? 'Sender...' : 'Send forespørsel'}
                </button>

                <p
                  className="font-mono text-center"
                  style={{ fontSize: '0.6875rem', color: '#4A5468' }}
                >
                  Eller ring direkte:{' '}
                  <a href="tel:91389872" style={{ color: 'white' }}>
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
