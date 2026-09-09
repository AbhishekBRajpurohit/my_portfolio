"use client";

import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";
import SectionHeading from "./SectionHeading";
import { siteConfig } from "@/data/content";
import { Mail, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: <Phone size={18} />,
      label: "Phone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
    {
      icon: <GithubIcon size={18} />,
      label: "GitHub",
      value: "AbhishekBRajpurohit",
      href: siteConfig.github,
    },
    {
      icon: <LinkedinIcon size={18} />,
      label: "LinkedIn",
      value: "Abhishek Rajpurohit",
      href: siteConfig.linkedin,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a question or want to work together? Drop me a message."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact info */}
          <AnimateOnScroll>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 p-4 rounded-xl bg-card-bg border border-card-border hover:border-accent/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-foreground text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Contact form */}
          <AnimateOnScroll delay={0.15}>
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-2xl bg-card-bg border border-card-border space-y-4"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs text-muted font-mono uppercase tracking-wider mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-card-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs text-muted font-mono uppercase tracking-wider mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-card-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs text-muted font-mono uppercase tracking-wider mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-lg bg-[#080808] border border-card-border text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-muted/50"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(245,197,24,0.3)] text-sm"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
