import { useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

const IMG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop';

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const setFromPointer = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromPointer(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setFromPointer(e.clientX);
  };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#F0F0EC' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <p className="font-mono uppercase mb-3" style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: '#2E3645' }}>
            Dra for å se forskjellen
          </p>
          <h2
            className="font-display text-ink-800"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: '1.07', letterSpacing: '-0.025em' }}
          >
            Før og etter.{' '}
            <span style={{ color: '#4A5468' }}>Alltid etter.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          <div
            ref={containerRef}
            className="relative w-full overflow-hidden select-none cursor-ew-resize"
            style={{ aspectRatio: '16/7', borderRadius: '1.75rem' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            role="img"
            aria-label="Sammenligning av kontor før og etter renhold — dra slideren"
          >
            {/* After — full vivid */}
            <img
              src={IMG}
              alt="Kontor etter renhold av Peiwast Cleaning"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
              loading="lazy"
              width={1200}
              height={525}
            />

            {/* Before — grayscale, clipped left of slider */}
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
              <img
                src={IMG}
                alt="Kontor før renhold"
                className="absolute inset-0 h-full object-cover"
                style={{
                  width: `${100 / (position / 100)}%`,
                  filter: 'grayscale(1) brightness(0.65)',
                }}
                draggable={false}
                loading="lazy"
                width={1200}
                height={525}
              />
            </div>

            {/* Divider */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white z-10 pointer-events-none"
              style={{ left: `${position}%`, transform: 'translateX(-50%)', boxShadow: '0 0 20px rgba(0,0,0,0.3)' }}
            >
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white flex items-center justify-center pointer-events-auto"
                style={{ boxShadow: '0 4px 20px rgba(15,27,45,0.2)' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M5 4L1 8l4 4M11 4l4 4-4 4" stroke="#0F1B2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            <span
              className="absolute bottom-4 left-4 font-mono uppercase"
              aria-hidden="true"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', color: 'white', backgroundColor: 'rgba(15,27,45,0.65)', padding: '0.25rem 0.625rem', borderRadius: '9999px', backdropFilter: 'blur(4px)' }}
            >
              Før
            </span>
            <span
              className="absolute bottom-4 right-4 font-mono uppercase text-ink-800"
              aria-hidden="true"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', backgroundColor: 'rgba(212,240,99,0.92)', padding: '0.25rem 0.625rem', borderRadius: '9999px', backdropFilter: 'blur(4px)' }}
            >
              Etter
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 font-sans text-sm text-center"
          style={{ color: '#4A5468' }}
        >
          Dra slideren for å sammenligne
        </motion.p>
      </div>
    </section>
  );
}
