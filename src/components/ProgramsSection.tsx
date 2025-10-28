import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Database, Shield, Cloud, Palette } from "lucide-react";

const programs = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Master MERN stack, DevOps tools, and modern web development practices for building scalable applications.",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Learn Python, TensorFlow, and deep learning algorithms to build intelligent systems and AI solutions.",
  },
  {
    icon: Database,
    title: "Data Science & Analytics",
    description: "Transform data into insights using Python, R, SQL, and advanced statistical analysis techniques.",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Ethical Hacking",
    description: "Protect systems and networks with penetration testing, security auditing, and ethical hacking skills.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "Deploy and manage applications on AWS and Azure cloud platforms with industry best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX & Product Design",
    description: "Create user-centered designs using Figma, Adobe XD, and modern design thinking methodologies.",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-pattern opacity-10"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gradient mb-4">
            Future-Focused Learning Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed with industry experts to unlock real career opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-elevated transition-all duration-500 border-border hover:border-accent bg-card animate-slide-up hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4 relative">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:animate-glow">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground group-hover:text-gradient transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
