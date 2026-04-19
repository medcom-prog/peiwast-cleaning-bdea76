/**
 * Peiwast Cleaning — Medcom Build
 * Section composition: typography-led (pack: "typography-led")
 * nav → hero-typography-only → before-after-showcase (weird thing) →
 * services (numbered, no icons) → price-calculator → process-numbered-steps →
 * about → reviews-coming-soon → contact → footer
 */
import { Nav }              from './components/Nav';
import { Hero }             from './components/Hero';
import { BeforeAfterSlider }from './components/BeforeAfterSlider';
import { Services }         from './components/Services';
import { PriceCalculator }  from './components/PriceCalculator';
import { Process }          from './components/Process';
import { About }            from './components/About';
import { Reviews }          from './components/Reviews';
import { Contact }          from './components/Contact';
import { Footer }           from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg antialiased">
      <Nav />
      <main>
        <Hero />
        <BeforeAfterSlider />
        <Services />
        <PriceCalculator />
        <Process />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
