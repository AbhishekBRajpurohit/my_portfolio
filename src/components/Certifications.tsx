"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import { certifications } from "@/data/content";
import {
  Award,
  ExternalLink,
  Download,
  Eye,
  X,
  CheckCircle2,
  Calendar,
  ShieldCheck,
} from "lucide-react";

type CertificateItem = (typeof certifications)[number];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(
    null
  );

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedCert]);

  const featuredCerts = certifications.filter((c) => c.featured);
  const otherCerts = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Certifications & Credentials"
          subtitle="Verified academic and professional credentials in full-stack engineering, defense systems, and computer science"
        />

        {/* Featured certificates with attached documents */}
        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          {featuredCerts.map((cert, i) => (
            <AnimateOnScroll key={cert.title} delay={i * 0.1}>
              <div className="group flex flex-col h-full rounded-2xl bg-card-bg border border-card-border hover:border-accent/50 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(245,197,24,0.12)]">
                {/* Certificate visual preview container */}
                <div
                  onClick={() => cert.image && setSelectedCert(cert)}
                  className="relative h-64 sm:h-72 w-full bg-[#050505] overflow-hidden cursor-pointer border-b border-card-border"
                >
                  {cert.image ? (
                    <>
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Hover action overlay */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-black font-semibold text-xs shadow-lg">
                          <Eye size={16} /> Click to View Fullscreen
                        </span>
                      </div>
                    </>
                  ) : null}

                  {/* Top badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-black/80 text-accent border border-accent/30 backdrop-blur-md">
                      <ShieldCheck size={13} /> Verified Credential
                    </span>
                  </div>

                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/10 text-muted border border-white/10 backdrop-blur-md">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>

                {/* Certificate content */}
                <div className="flex flex-col flex-1 p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-xs text-accent font-mono uppercase tracking-wider block mb-1">
                        {cert.subIssuer}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-foreground/80 font-medium mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-muted text-sm leading-relaxed flex-1">
                    {cert.description}
                  </p>

                  {/* Period & Year */}
                  {cert.period && (
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-muted">
                      <Calendar size={14} className="text-accent/80" />
                      <span>{cert.period}</span>
                    </div>
                  )}

                  {/* Skill tags */}
                  {cert.tags && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-muted border border-white/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="mt-6 pt-5 border-t border-card-border flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/40 text-foreground hover:text-accent text-xs font-medium transition-all"
                    >
                      <Eye size={14} />
                      Preview Certificate
                    </button>

                    {cert.pdf && (
                      <a
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-black hover:bg-accent/90 text-xs font-semibold transition-all hover:shadow-[0_0_20px_rgba(245,197,24,0.3)] ml-auto"
                      >
                        <Download size={14} />
                        View / Download PDF
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Other recognized certifications */}
        <div className="mt-6">
          <h4 className="text-xs uppercase font-mono tracking-wider text-muted mb-4 flex items-center gap-2">
            <Award size={14} className="text-accent" /> Additional Verified Coursework &amp; Certifications
          </h4>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherCerts.map((cert, i) => (
              <AnimateOnScroll key={cert.title} delay={0.2 + i * 0.1}>
                <div className="p-5 rounded-xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-300 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-foreground text-sm">
                        {cert.title}
                      </h5>
                      <span className="text-[11px] font-mono text-muted px-2 py-0.5 rounded bg-white/5 border border-white/5">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-accent/90 text-xs font-mono mt-0.5">
                      {cert.issuer}
                    </p>
                    <p className="text-muted text-xs mt-2 leading-relaxed">
                      {cert.description}
                    </p>
                    {cert.tags && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {cert.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[11px] font-mono rounded bg-white/5 text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] bg-card-bg rounded-2xl border border-card-border overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-card-border bg-[#0d0d0d]">
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider block">
                  Credential ID: {selectedCert.credentialId}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-foreground">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-muted mt-0.5">
                  Issued by {selectedCert.issuer} {selectedCert.period ? `(${selectedCert.period})` : ""}
                </p>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-white/5 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Certificate Image Display */}
            <div className="relative flex-1 overflow-auto p-4 sm:p-6 bg-[#050505] flex items-center justify-center min-h-[300px]">
              {selectedCert.image && (
                <div className="relative w-full max-w-3xl aspect-[1.414/1] max-h-[65vh] shadow-2xl rounded-lg overflow-hidden border border-white/10">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 1024px) 100vw, 896px"
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 border-t border-card-border bg-[#0d0d0d]">
              <div className="flex items-center gap-2 text-xs text-muted font-mono">
                <ShieldCheck size={14} className="text-accent" />
                <span>Officially issued and verified document</span>
              </div>
              <div className="flex items-center gap-3">
                {selectedCert.pdf && (
                  <a
                    href={selectedCert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-black font-semibold text-xs hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_rgba(245,197,24,0.3)]"
                  >
                    <Download size={14} /> Open Full PDF
                  </a>
                )}
                <button
                  onClick={() => setSelectedCert(null)}
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
