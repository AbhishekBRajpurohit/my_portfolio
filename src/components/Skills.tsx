import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import { skills } from "@/data/content";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-card-bg/30">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools I work with"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <AnimateOnScroll key={group.category} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-300 h-full">
                <h3 className="font-mono text-accent text-sm font-semibold mb-4 tracking-wider uppercase">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
