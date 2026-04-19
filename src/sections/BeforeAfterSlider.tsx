import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Draggable before/after slider — the signature "weird thing" shipped
 * with the site-shell. Used by renhold, handverker, maler, portrett-fotograf.
 *
 * The "before" side is a grayscale + brightness-reduced clip of the same
 * image by default, but both sides can be independent images (e.g. real
 * before + after photos from the customer).
 */
export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Før',
  afterLabel = 'Etter',
  aspectClass = 'aspect-[5/4] md:aspect-[4/3]',
  caption,
}: {
  beforeSrc: string;
  afterSrc?: string;          // defaults to beforeSrc with a filter
  beforeLabel?: string;
  afterLabel?: string;
  aspectClass?: string;
  caption?: string;
}) {
  const [split, setSplit] = useState(52);
  const trackRef = useRef<HTMLDivElement>(null);
  const afterImage = afterSrc || beforeSrc;

  const onDrag = (clientX: number) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSplit(Math.max(8, Math.min(92, pct)));
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className={`relative ${aspectClass} rounded-3xl overflow-hidden bg-ink-100 ring-1 ring-ink-200 shadow-[0_40px_80px_-30px_rgba(15,27,45,0.18)] select-none cursor-ew-resize`}
        onPointerDown={(e) => {
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          onDrag(e.clientX);
        }}
        onPointerMove={(e) => { if (e.buttons === 1) onDrag(e.clientX); }}
        onTouchMove={(e) => onDrag(e.touches[0].clientX)}
      >
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{ backgroundImage: `url('${afterImage}')` }}
          aria-label={afterLabel}
        />
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            clipPath: `inset(0 ${100 - split}% 0 0)`,
            backgroundImage: `url('${beforeSrc}')`,
            filter: afterSrc
              ? undefined
              : 'grayscale(0.6) brightness(0.72) contrast(0.95) sepia(0.08)',
          }}
          aria-label={beforeLabel}
        />
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ink-900/70 backdrop-blur-sm text-cream-50 text-[10px] font-mono uppercase tracking-[0.18em]">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-cream-50/80 backdrop-blur-sm text-ink-900 text-[10px] font-mono uppercase tracking-[0.18em]">
          {afterLabel}
        </div>
        <div
          className="absolute top-0 bottom-0 w-px bg-cream-50"
          style={{ left: `${split}%` }}
          aria-hidden
        />
        <motion.div
          animate={{ left: `${split}%` }}
          transition={{ type: 'spring', stiffness: 400, damping: 40 }}
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center h-12 w-12 rounded-full bg-cream-50 shadow-lg ring-1 ring-ink-200 pointer-events-none"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 6L3 10l4 4M13 6l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
      {caption && (
        <div className="mt-4 flex items-center justify-between text-xs text-ink-400 font-mono uppercase tracking-wider">
          <span>Dra for å se forskjellen</span>
          <span>{caption}</span>
        </div>
      )}
    </div>
  );
}
