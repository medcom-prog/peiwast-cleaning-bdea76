import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wordmark } from './Wordmark';

const links = [
  { label: 'Tjenester', href: '#tjenester' },
  { label: 'Pris',      href: '#pris' },
  { label: 'Om oss',    href: '#om-oss' },
  { label: 'Kontakt',   href: '#kontakt' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-100 shadow-soft' : ''
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(250,250,247,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : undefined }}
    >
      <nav className="container flex items-center justify-between h-16">
        <Wordmark variant="light" />

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-sans text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 font-display font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          style={{ backgroundColor: '#0F1B2D', color: '#D4F063' }}
        >
          Få pristilbud
        </a>

        <button
          className="md:hidden p-2 text-ink-800"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Lukk meny' : 'Åpne meny'}
          aria-expanded={open}
        >
          <span className="block w-5 h-px bg-current mb-1.5 transition-transform" style={{ transform: open ? 'rotate(45deg) translate(0, 6px)' : undefined }} />
          <span className="block w-5 h-px bg-current mb-1.5 transition-opacity" style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-px bg-current transition-transform" style={{ transform: open ? 'rotate(-45deg) translate(0, -6px)' : undefined }} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-ink-100 px-6 py-6 flex flex-col gap-4"
            style={{ backgroundColor: 'var(--bg)' }}
          >
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-base font-medium text-ink-800"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center items-center font-display font-bold text-sm px-5 py-3 rounded-full"
              style={{ backgroundColor: '#0F1B2D', color: '#D4F063' }}
            >
              Få pristilbud
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
