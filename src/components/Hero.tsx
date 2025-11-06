import { useState } from "react";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import content from "@/data/content.json";
import { motion, useReducedMotion } from "framer-motion";

type HeroVariant = "minimal" | "narrative" | "metrics-first";

export const Hero = () => {
  const [variant] = useState<HeroVariant>("narrative");
  const { personal, site } = content;
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0 },
  };

  const renderMinimal = () => (
    <motion.div
      className="text-center max-w-4xl mx-auto"
      initial={shouldReduceMotion ? undefined : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6"
        variants={itemVariants}
      >
        <span className="gradient-text">{personal.name}</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-muted-foreground mb-8"
        variants={itemVariants}
      >
        {personal.role}
      </motion.p>
      <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
        {renderCTAs()}
      </motion.div>
    </motion.div>
  );

  const renderNarrative = () => (
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          className="space-y-6"
          initial={shouldReduceMotion ? false : "hidden"}
          animate={shouldReduceMotion ? false : "visible"}
          variants={containerVariants}
        >
          <motion.div
            className="inline-block px-4 py-2 rounded-full bg-surface-elevated border border-border text-sm font-medium"
            variants={itemVariants}
          >
            👋 Available for opportunities
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            variants={itemVariants}
          >
            Hi, I'm <span className="gradient-text">{personal.name.split(" ")[0]}</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground font-medium"
            variants={itemVariants}
          >
            {site.tagline}
          </motion.p>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            variants={itemVariants}
          >
            {personal.summary}
          </motion.p>
          <motion.div className="flex flex-wrap gap-4 pt-4" variants={itemVariants}>
            {renderCTAs()}
          </motion.div>
        </motion.div>
        <div className="relative animate-slide-in-right">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50 blur-3xl"></div>
          <div className="relative bg-surface-elevated border border-border rounded-2xl p-8 shadow-elevated">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-end flex items-center justify-center font-bold text-primary-foreground text-3xl animate-glow-pulse">
                  {personal.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{personal.name}</h3>
                  <p className="text-muted-foreground">{personal.role}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">200+</div>
                  <div className="text-sm text-muted-foreground">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">3+</div>
                  <div className="text-sm text-muted-foreground">Live Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">4+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMetricsFirst = () => (
    <motion.div
      className="max-w-5xl mx-auto text-center"
      initial={shouldReduceMotion ? undefined : "hidden"}
      animate={shouldReduceMotion ? undefined : "visible"}
      variants={containerVariants}
    >
      <motion.h1
        className="text-5xl md:text-7xl font-bold mb-6"
        variants={itemVariants}
      >
        <span className="gradient-text">Building Production-Ready AI Systems</span>
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
        variants={itemVariants}
      >
        {personal.summary}
      </motion.p>
      <motion.div className="grid md:grid-cols-3 gap-6 mb-12" variants={itemVariants}>
        <div className="bg-surface-elevated border border-border rounded-xl p-6 hover:border-primary transition-colors">
          <div className="text-4xl font-bold gradient-text mb-2">85%</div>
          <div className="text-muted-foreground">Processing Speed Improved</div>
        </div>
        <div className="bg-surface-elevated border border-border rounded-xl p-6 hover:border-primary transition-colors">
          <div className="text-4xl font-bold gradient-text mb-2">60%</div>
          <div className="text-muted-foreground">Query Time Reduced</div>
        </div>
        <div className="bg-surface-elevated border border-border rounded-xl p-6 hover:border-primary transition-colors">
          <div className="text-4xl font-bold gradient-text mb-2">70%</div>
          <div className="text-muted-foreground">Reporting Time Cut</div>
        </div>
      </motion.div>
      <motion.div className="flex flex-wrap justify-center gap-4" variants={itemVariants}>
        {renderCTAs()}
      </motion.div>
    </motion.div>
  );

  const renderCTAs = () => (
    <>
      <motion.div whileHover={{ scale: shouldReduceMotion ? 1 : 1.03 }} whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}>
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary to-primary-end hover:opacity-90 transition-opacity"
          onClick={() => {
            const element = document.querySelector("#contact");
            element?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Mail className="mr-2 h-5 w-5" />
          Get in Touch
        </Button>
      </motion.div>
      <motion.div whileHover={{ scale: shouldReduceMotion ? 1 : 1.03 }} whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}>
        <Button
          size="lg"
          variant="outline"
          className="border-border hover:border-primary transition-colors"
          asChild
        >
          <a href={content.links.resume_pdf} target="_blank" rel="noopener noreferrer">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </Button>
      </motion.div>
      <div className="flex gap-2">
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full hover:bg-surface-elevated"
          asChild
        >
          <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-5 w-5" />
          </a>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full hover:bg-surface-elevated"
          asChild
        >
          <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </>
  );

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-radial opacity-50"></div>
      <div className="relative w-full">
        {variant === "minimal" && renderMinimal()}
        {variant === "narrative" && renderNarrative()}
        {variant === "metrics-first" && renderMetricsFirst()}
      </div>
    </section>
  );
};
