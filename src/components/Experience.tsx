import { Briefcase, Users } from "lucide-react";
import content from "@/data/content.json";
import { Card } from "@/components/ui/card";

export const Experience = () => {
  const { experience } = content;

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Leadership and technical contributions
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <Card
              key={idx}
              className="p-6 bg-surface-elevated border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-end h-fit">
                  {exp.title.includes("Co-ordinator") ? (
                    <Users className="h-6 w-6 text-primary-foreground" />
                  ) : (
                    <Briefcase className="h-6 w-6 text-primary-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    {exp.dates && (
                      <span className="text-sm text-muted-foreground">
                        {exp.dates}
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, highlightIdx) => (
                      <li
                        key={highlightIdx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-primary to-primary-end flex-shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
