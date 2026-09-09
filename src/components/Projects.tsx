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
    <section id="projects" className="section-padding bg-card-bg/20 relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Full-stack applications, machine learning pipelines, and decentralized systems"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 0.08}>
              <div className="group flex flex-col h-full rounded-xl bg-card-bg border border-card-border hover:border-accent/40 transition-all duration-200 overflow-hidden">
                {/* Visual Area: Real Screenshot or Developer Terminal */}
                {project.image ? (
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative h-48 bg-[#090909] overflow-hidden cursor-pointer border-b border-card-border"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent text-black font-semibold text-xs">
                        <Eye size={13} /> View Screenshot
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-48 bg-[#090909] flex items-center justify-center border-b border-card-border">
                    <span className="font-mono text-accent/50 text-2xl font-bold">
                      {project.title.slice(0, 3)}
                    </span>
                  </div>
                )}

                {/* Card Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-muted text-xs leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-muted border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-3.5 border-t border-card-border flex items-center justify-between text-xs">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted hover:text-accent transition-colors font-mono"
                    >
                      <GithubIcon size={14} />
                      <span>GitHub</span>
                    </a>

                    <div className="flex items-center gap-2">
                      {project.image && (
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="inline-flex items-center gap-1 text-muted hover:text-accent transition-colors"
                        >
                          <Eye size={13} />
                          <span>Preview</span>
                        </button>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-accent transition-colors p-1"
                        aria-label={`Open ${project.title} repository`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      {/* Screenshot Lightbox Modal (for real project images) */}
      {selectedProject && selectedProject.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-card-bg rounded-xl border border-card-border overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-card-border bg-[#0a0a0a]">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-foreground">
                  {selectedProject.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {selectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-white/5 text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Image Preview */}
            <div className="relative flex-1 overflow-auto p-4 bg-[#050505] flex items-center justify-center min-h-[300px]">
              <div className="relative w-full aspect-[16/9] max-h-[65vh] rounded-lg overflow-hidden border border-white/10">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-3 border-t border-card-border bg-[#0a0a0a]">
              <p className="text-xs text-muted max-w-md line-clamp-1">
                {selectedProject.description}
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-accent text-black font-semibold text-xs hover:bg-accent/90 transition-colors"
                >
                  <GithubIcon size={13} /> View on GitHub
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1.5 rounded-md bg-white/5 hover:bg-white/10 text-xs text-foreground font-medium transition-colors"
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
