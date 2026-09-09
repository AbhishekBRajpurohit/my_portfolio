import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import { hackathons } from "@/data/content";
import { Trophy, MapPin, Calendar } from "lucide-react";

export default function Hackathons() {
  return (
    <section id="hackathons" className="section-padding bg-card-bg/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Hackathons" />

        <div className="grid gap-6 md:grid-cols-2">
          {hackathons.map((hack, i) => (
            <AnimateOnScroll key={hack.name} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-300 h-full">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <Trophy size={18} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{hack.name}</h3>
                    <p className="text-accent font-mono text-sm">
                      {hack.project}
                    </p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-xs text-muted mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} />
                    {hack.venue}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={12} />
                    {hack.date}
                  </span>
                </div>

                <p className="text-muted text-sm leading-relaxed">
                  {hack.description}
                </p>

                {/* Tech pills */}
                {hack.tech.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {hack.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-muted border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
