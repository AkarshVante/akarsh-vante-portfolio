import { ExternalLink, Github, TrendingUp, Zap } from "lucide-react";
import content from "@/data/content.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const { projects } = content;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Production-ready systems delivering measurable business impact
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <Card
              key={project.id}
              className="overflow-hidden bg-surface-elevated border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-3 gap-6 p-6 lg:p-8">
                {/* Left: Project Info */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {project.name.split("—")[0].trim()}
                        </h3>
                        <Badge variant="secondary" className="text-xs">
                          {project.year}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground font-medium">
                        {project.name.split("—")[1]?.trim()}
                      </p>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <Badge
                        key={techIdx}
                        variant="outline"
                        className="border-primary/30 text-xs font-mono"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Problem & Approach */}
                  <div className="grid md:grid-cols-2 gap-4 pt-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Problem
                      </h4>
                      <p className="text-sm">{project.details.problem}</p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Approach
                      </h4>
                      <p className="text-sm">{project.details.approach}</p>
                    </div>
                  </div>

                  {/* Role */}
                  <div className="space-y-2 pt-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      My Role
                    </h4>
                    <p className="text-sm">{project.details.role}</p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-primary-end hover:opacity-90"
                      asChild
                    >
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border hover:border-primary"
                      asChild
                    >
                      <a
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Right: Metrics & Impact */}
                <div className="space-y-4">
                  <div className="bg-surface border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      <h4 className="font-semibold">Impact</h4>
                    </div>
                    <div className="space-y-3">
                      {project.metrics.map((metric, metricIdx) => {
                        const match = metric.match(/(\d+)%/);
                        const percentage = match ? match[1] : "N/A";
                        return (
                          <div key={metricIdx}>
                            <div className="text-3xl font-bold gradient-text mb-1">
                              {percentage}%
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {metric.replace(/\d+%/, "").replace(/\(.*?\)/, "").trim()}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-surface border border-border rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Zap className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold">Key Learnings</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {project.details.lessons}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <Badge
                        key={tagIdx}
                        className="bg-surface-elevated border-border"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
