import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/content";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Certifications" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <AnimateOnScroll key={cert.title} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-300 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                  <Award size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">
                    {cert.title}
                  </h3>
                  <p className="text-muted text-xs mt-1 font-mono">
                    {cert.issuer}
                    {cert.year && ` · ${cert.year}`}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
