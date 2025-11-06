import content from "@/data/content.json";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Database, Brain, Code2, Wrench, BookOpen, Cloud } from "lucide-react";

export const Skills = () => {
  const { skills } = content;

  const skillCategories = [
    {
      title: "Data Science & ML",
      icon: Brain,
      items: skills.data_science,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Libraries & Frameworks",
      icon: Code2,
      items: skills.libraries,
      color: "from-primary to-primary-end",
    },
    {
      title: "Languages",
      icon: Code2,
      items: skills.languages,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Databases",
      icon: Database,
      items: skills.databases,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Core CS",
      icon: BookOpen,
      items: skills.core_cs,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Tools & Cloud",
      icon: Cloud,
      items: skills.tools,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building scalable, production-ready systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={idx}
                className="p-6 bg-surface-elevated border-border hover:border-primary transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color} group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIdx) => (
                    <Badge
                      key={skillIdx}
                      variant="secondary"
                      className="skill-chip"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Skill Bars - Visual representation */}
        <div className="mt-12">
          <Card className="p-8 bg-surface-elevated border-border">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Core <span className="gradient-text">Competencies</span>
            </h3>
            <div className="space-y-6">
              {[
                { name: "Python & SQL", level: 90 },
                { name: "Machine Learning", level: 85 },
                { name: "Data Engineering", level: 80 },
                { name: "Cloud & DevOps", level: 75 },
                { name: "System Design", level: 70 },
              ].map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-surface rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-end rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
