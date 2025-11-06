import { ExternalLink, Play } from "lucide-react";
import content from "@/data/content.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

export const InteractiveDemos = () => {
  const { links, projects } = content;
  const shouldReduceMotion = useReducedMotion();

  const demos = projects.map((project) => ({
    name: project.name.split("—")[0].trim(),
    description: project.summary,
    url: project.links.demo,
    tech: project.tech,
  }));

  return (
    <motion.section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-surface"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Interactive <span className="gradient-text">Demos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try out live applications deployed on Streamlit Cloud
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {demos.map((demo, idx) => (
            <Card
              key={idx}
              className="p-6 bg-surface-elevated border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="aspect-video bg-surface rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-mesh opacity-50"></div>
                  <div className="relative">
                    <Play className="h-12 w-12 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {demo.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {demo.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {demo.tech.slice(0, 3).map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-xs px-2 py-1 rounded-full bg-surface border border-border font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary-end hover:opacity-90"
                  asChild
                >
                  <a href={demo.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Launch Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA for More Demos */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-surface-elevated border-border">
            <p className="text-muted-foreground mb-4">
              Want to see more demos or collaborate on a project?
            </p>
                <Button
                  variant="outline"
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get in Touch
                </Button>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};
