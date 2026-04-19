/**
 * App — composes sections in the order the agent sets in site.config.
 * The agent-runner will overwrite this file during Phase 3 to import
 * only the sections it composed, in the chosen order.
 *
 * This default renders a "site is being built" placeholder so a
 * freshly-created repo never looks broken while the agent works.
 */
import { site } from './site.config';

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-400 mb-4">
          Medcom Site Shell
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-ink-900 mb-4">
          Siden bygges nå.
        </h1>
        <p className="text-ink-500 leading-relaxed">
          {site.company.name} er i ferd med å få en ny nettside. Agenten kommer
          til å bytte ut denne siden med det ferdige resultatet innen kort tid.
        </p>
        <p className="mt-8 font-mono text-xs text-ink-400">
          Industri: {site.company.industry}
        </p>
      </div>
    </main>
  );
}
