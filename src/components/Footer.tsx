import { Github, Linkedin, Download, ArrowUp } from "lucide-react";
import content from "@/data/content.json";
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";

export const Footer = () => {
  const { site, links } = content;
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      className="py-12 px-4 sm:px-6 lg:px-8 bg-surface border-t border-border"
      initial={shouldReduceMotion ? undefined : { opacity: 0 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-end flex items-center justify-center font-bold text-primary-foreground text-lg">
                AV
              </div>
              <span className="font-semibold gradient-text">Akarsh Vante</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Building reliable ML systems and scalable data platforms
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(
                          `#${item.toLowerCase()}`
                        );
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={links.resume_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </li>
              <li>
                <a
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Akarsh Vante. All rights reserved.
          </p>
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="rounded-full"
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </motion.footer>
  );
};
