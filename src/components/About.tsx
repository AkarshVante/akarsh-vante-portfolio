import { GraduationCap, Award, Code } from "lucide-react";
import content from "@/data/content.json";
import { Card } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";

export const About = () => {
  const { personal, education, achievements } = content;
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8"
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 18 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {personal.summary}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <Card className="p-6 bg-surface-elevated border-border hover:border-primary transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-end">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <div key={idx} className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-lg">{edu.degree}</h4>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-muted-foreground">{edu.dates}</span>
                    {edu.gpa && (
                      <span className="text-sm font-medium gradient-text">
                        CGPA: {edu.gpa}
                      </span>
                    )}
                    {edu.score && (
                      <span className="text-sm font-medium gradient-text">
                        {edu.score}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6 bg-surface-elevated border-border hover:border-primary transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-primary to-primary-end">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Achievements</h3>
            </div>
            <ul className="space-y-3">
              {achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-br from-primary to-primary-end flex-shrink-0"></div>
                  <span className="text-muted-foreground">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Passion Statement */}
        <Card className="p-8 bg-gradient-to-br from-surface-elevated to-surface border-border text-center">
          <div className="flex justify-center mb-4">
            <div className="p-4 rounded-full bg-gradient-to-br from-primary to-primary-end">
              <Code className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Building the Future with <span className="gradient-text">AI & Data</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm passionate about transforming complex data into actionable insights and building ML systems
            that solve real-world problems. From optimizing query performance to deploying production-ready
            AI applications, I focus on delivering measurable impact through clean code and robust architecture.
          </p>
        </Card>
      </div>
    </motion.section>
  );
};
