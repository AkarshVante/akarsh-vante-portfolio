import { Award, ExternalLink } from "lucide-react";
import content from "@/data/content.json";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Certificates = () => {
  const { certificates } = content;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certificates & <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through courses and certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, idx) => (
            <Card
              key={idx}
              className="p-6 bg-surface-elevated border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-end flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  {cert.link ? (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      Certificate earned
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
