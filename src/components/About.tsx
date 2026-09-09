import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="About Me" />

        <AnimateOnScroll>
          <div className="relative p-8 rounded-2xl bg-card-bg border border-card-border">
            {/* Decorative accent */}
            <div className="absolute top-0 left-8 w-16 h-1 bg-accent rounded-b-full" />

            <p className="text-muted leading-relaxed text-base md:text-lg">
              I&apos;m a <span className="text-foreground font-medium">3rd-year BE student</span> in{" "}
              <span className="text-foreground font-medium">
                Computer Science - IoT &amp; Cybersecurity
              </span>{" "}
              (including Blockchain Technology) at{" "}
              <span className="text-foreground font-medium">
                Dayananda Sagar College of Engineering, Bangalore
              </span>{" "}
              (2024-2028, currently 5th semester).
            </p>
            <p className="mt-4 text-muted leading-relaxed text-base md:text-lg">
              I&apos;m passionate about{" "}
              <span className="text-accent font-medium">full-stack development</span>,{" "}
              <span className="text-accent font-medium">AI/ML</span>, and applying
              technology to real-world{" "}
              <span className="text-accent font-medium">
                defense, legal, and security
              </span>{" "}
              problems. I love building end-to-end systems - from training ML
              models and crafting APIs to shipping polished, responsive frontends.
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
