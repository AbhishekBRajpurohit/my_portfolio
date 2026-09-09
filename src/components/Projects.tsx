"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/content";
import { ExternalLink, Eye, X } from "lucide-react";
import { GithubIcon } from "./Icons";

type ProjectItem = (typeof projects)[number];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding bg-card-bg/30 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world defense systems, legal tech assistants, network monitoring, and blockchain applications"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 0.08}>
              <div className="group flex flex-col h-full rounded-2xl bg-card-bg border border-card-border hover:border-accent/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(245,197,24,0.12)]">
                {/* Image / visual screenshot */}
                <div
                  onClick={() => project.image && setSelectedProject(project)}
                  className="relative h-48 sm:h-52 bg-[#080808] overflow-hidden cursor-pointer border-b border-card-border"
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent text-black font-semibold text-xs shadow-lg">
                          <Eye size={14} /> Preview UI
                        </span>
                      </div>
                    </>
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
                    {project.image && (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="ml-auto inline-flex items-center gap-1 text-xs text-muted hover:text-accent transition-colors"
                        aria-label={`Preview ${project.title} screenshot`}
                      >
                        <Eye size={14} />
                        Preview
                      </button>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${
                        project.image ? "" : "ml-auto"
                      } text-muted hover:text-accent transition-colors p-1`}
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

      {/* Fullscreen Screenshot Modal */}
      {selectedProject && selectedProject.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] bg-card-bg rounded-2xl border border-card-border overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-card-border bg-[#0d0d0d]">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
                aria-label="Close screenshot preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-6 bg-[#050505] flex items-center justify-center min-h-[350px]">
              <div className="relative w-full aspect-[16/9] max-h-[68vh] shadow-2xl rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1280px) 100vw, 1024px"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-card-border bg-[#0d0d0d]">
              <p className="text-xs text-muted max-w-xl line-clamp-2">
                {selectedProject.description}
              </p>
              <div className="flex items-center gap-3 ml-auto">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-black font-semibold text-xs hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_rgba(245,197,24,0.3)]"
                >
                  <GithubIcon size={14} /> View on GitHub
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-foreground font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
