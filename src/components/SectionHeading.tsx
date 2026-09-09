import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <AnimateOnScroll className="mb-12 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="accent-underline">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-6 text-muted text-sm md:text-base max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </AnimateOnScroll>
  );
}
