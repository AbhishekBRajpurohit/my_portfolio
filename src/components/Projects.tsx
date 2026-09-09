"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/content";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-card-bg/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="A selection of things I've built"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 0.08}>
              <div className="group flex flex-col h-full rounded-2xl bg-card-bg border border-card-border hover:border-accent/40 transition-all duration-300 overflow-hidden">
                {/* Image / placeholder */}
                <div className="relative h-44 bg-[#080808] overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center dot-grid">
                      <span className="font-mono text-accent/40 text-3xl font-bold">
                        {project.title
                          .split(" ")
                          .map((w) => w[0])
                          .join("")}
                      </span>
                    </div>
                  )}
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card-bg/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-muted text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-muted border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-5 pt-4 border-t border-card-border flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors"
                    >
                      <GithubIcon size={16} />
                      Source Code
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto text-muted hover:text-accent transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
