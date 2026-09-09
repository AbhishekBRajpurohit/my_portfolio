import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/content";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Professional work experience"
        />

        <div className="space-y-6">
          {experience.map((exp, i) => (
            <AnimateOnScroll key={i}>
              <div className="relative p-8 rounded-2xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-300">
                {/* Icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Briefcase size={16} className="text-black" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mt-2">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-accent font-mono text-sm mt-1">
                      {exp.company}
                    </p>
                    <p className="text-muted text-sm">{exp.location}</p>
                  </div>
                  <span className="font-mono text-xs text-muted bg-white/5 px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-muted text-sm leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
