import { Building2, House, ShieldCheck, Wrench } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/layout/container";

const values = ["Domestic & Commercial", "Multiple Property Services", "Professional Service", "Quote Available"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-16 text-white sm:py-22 lg:py-28">
      <div aria-hidden="true" className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_75%_45%,rgba(56,189,248,.22),transparent_48%)] lg:block" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.24),transparent_30%)]" />

      <Container className="relative grid min-w-0 items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,.95fr)]">
        <div className="min-w-0 max-w-2xl">
          <p className="eyebrow text-accent">Professional property services</p>
          <h1 className="mt-5 text-4xl font-bold tracking-[-.05em] sm:text-5xl lg:text-6xl">
            Reliable solutions for homes and businesses.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Practical support across glazing, access, plumbing, heating, electrical and pest-control requirements.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/request-a-quote" size="large" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Get a Quote
            </ButtonLink>
            <ButtonLink href="/services" variant="outline" size="large" className="border-slate-600 text-white hover:border-slate-300 hover:bg-white/10 hover:text-white">
              Explore Our Services
            </ButtonLink>
          </div>
        </div>

        <HeroVisual />
      </Container>

      <Container className="relative mt-12">
        <ul className="grid gap-3 border-t border-slate-700 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <li key={value} className="flex items-center gap-2 text-sm font-semibold text-slate-200">
              <ShieldCheck aria-hidden="true" className="size-4 text-sky-300" />
              {value}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual relative mx-auto min-w-0 w-full max-w-md lg:max-w-none" aria-label="Property service visual placeholder">
      <div className="grid-pattern absolute inset-8 rounded-[2rem] opacity-40" aria-hidden="true" />

      <div className="service-panel relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-900/90 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.55)] backdrop-blur-sm">
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-sky-400/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-8 left-8 size-28 rounded-full bg-cyan-500/10 blur-3xl" aria-hidden="true" />

        <div className="relative grid h-full gap-4 sm:grid-cols-2">
          <VisualTile icon={<House aria-hidden="true" className="size-8" />} label="Home" className="bg-sky-400 text-slate-950" />
          <VisualTile icon={<Building2 aria-hidden="true" className="size-8" />} label="Business" className="bg-slate-800 text-sky-100" />
          <VisualTile icon={<Wrench aria-hidden="true" className="size-8" />} label="Services" className="col-span-full bg-slate-800 text-white" />
        </div>
      </div>

      <div className="floating-card-slow absolute -right-3 top-8 rounded-2xl border border-slate-600 bg-slate-900/80 p-3 shadow-xl backdrop-blur-sm">
        <div className="grid size-14 place-items-center rounded-xl bg-sky-400/15 text-sky-300">
          <Building2 aria-hidden="true" className="size-6" />
        </div>
      </div>
    </div>
  );
}

function VisualTile({ icon, label, className }: { icon: React.ReactNode; label: string; className: string }) {
  return (
    <div className={`glow-pulse flex min-h-28 flex-col justify-between rounded-2xl p-5 ${className}`}>
      <span>{icon}</span>
      <span className="text-sm font-bold uppercase tracking-[.16em]">{label}</span>
    </div>
  );
}
