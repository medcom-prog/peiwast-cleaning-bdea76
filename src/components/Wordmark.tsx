type Variant = 'light' | 'dark';

export function Wordmark({ variant = 'light', className = '' }: { variant?: Variant; className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-end gap-2 group ${className}`} aria-label="Peiwast Cleaning — tilbake til toppen">
      <img
        src={variant === 'light' ? '/wordmark.svg' : '/wordmark-dark.svg'}
        alt="Peiwast Cleaning"
        className="h-7 md:h-8 w-auto"
        width={617}
        height={60}
      />
    </a>
  );
}
