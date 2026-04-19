/**
 * WEIRD THING: Draggable before/after image comparison slider.
 * Uses pointer capture for smooth drag on both mouse and touch.
 * "Before" side = grayscale + low brightness. "After" = vivid clean office.
 */
import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

// Curated Unsplash — Scandinavian office interior (bright, lived-in, not staged)
const AFTER_IMG  = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop';
const BEFORE_IMG = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop';

export function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percent
  const dragging = useRef(false);

  const setFromPointer = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setFromPointer(e.clientX);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromPointer(e.clientX);
  };
  const onPointerUp = () => { dragging.current = false; };

  return (
    <section className="bg-bg-soft py-20 md:py-28 overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <p className="font-mono text-label uppercase tracking-widest text-muted mb-3">Dra for å se forskjellen</p>
          <h2 className="font-display text-display-lg text-ink-800">
            Før og etter. <br className="hidden md:block" />
            <span className="text-muted">Alltid etter.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
        >
          {/* Slider container */}
          <div
            ref={containerRef}
            className="relative w-full rounded-3xl overflow-hidden select-none cursor-ew-resize"
            style={{ aspectRatio: '16/7' }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            role="img"
            aria-label="Sammenligning av kontor før og etter renhold"
          >
            {/* AFTER layer — full width vivid */}
            <img
              src={AFTER_IMG}
              alt="Kontor etter renhold"
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />

            {/* BEFORE layer — grayscale, clipped left of slider */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <img
                src={BEFORE_IMG}
                alt="Kontor før renhold"
                className="absolute inset-0 h-full object-cover"
                style={{ width: `${100 / (position / 100)}%`, filter: 'grayscale(1) brightness(0.72)' }}
                draggable={false}
              />
            </div>

            {/* Divider line */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lifted z-10"
              style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lifted flex items-center justify-center gap-0.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M5 4L1 8l4 4M11 4l4 4-4 4" stroke="#0F1B2D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Labels */}
            <span className="absolute bottom-4 left-4 font-mono text-label text-white uppercase tracking-widest bg-ink-800/60 px-2.5 py-1 rounded-full backdrop-blur-sm">
              Før
            </span>
            <span className="absolute bottom-4 right-4 font-mono text-label text-ink-800 uppercase tracking-widest bg-brand-300/90 px-2.5 py-1 rounded-full backdrop-blur-sm">
              Etter
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-5 font-sans text-sm text-muted text-center"
        >
          Dra slideren for å sammenligne
        </motion.p>
      </div>
    </section>
  );
}
