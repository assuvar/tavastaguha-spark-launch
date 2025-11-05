import { Card, CardContent } from "@/components/ui/card";
import { FileSpreadsheet, Megaphone, BarChart3, PieChart, TrendingUp, LineChart, Code2, Database, Users } from "lucide-react";

const programs = [
  {
    icon: FileSpreadsheet,
    title: "Excel Analytics",
    description: "Master Excel for data analysis, automation, and business intelligence. Learn advanced formulas, pivot tables, and data visualization techniques that employers value.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Build comprehensive digital marketing skills including SEO, social media strategy, content marketing, and analytics to drive business growth in the digital age.",
  },
  {
    icon: BarChart3,
    title: "Power BI",
    description: "Transform raw data into stunning interactive dashboards and reports. Learn to create compelling visualizations that drive data-driven business decisions.",
  },
  {
    icon: PieChart,
    title: "Tableau",
    description: "Create powerful data visualizations and interactive dashboards. Master Tableau's intuitive interface to tell compelling stories with your data.",
  },
  {
    icon: TrendingUp,
    title: "Business Analytics",
    description: "Develop strategic thinking and analytical skills to solve complex business problems. Learn to leverage data for forecasting, optimization, and informed decision-making.",
  },
  {
    icon: LineChart,
    title: "Predictive Data Analytics",
    description: "Unlock the power of predictive modeling and forecasting. Use statistical techniques and machine learning to anticipate trends and make proactive business decisions.",
  },
  {
    icon: Code2,
    title: "R Programming",
    description: "Master R for statistical computing and data analysis. Learn to manipulate data, create visualizations, and perform advanced statistical modeling for research and business.",
  },
  {
    icon: Database,
    title: "SQL",
    description: "Become proficient in database management and querying. Learn to extract, manipulate, and analyze data efficiently using SQL for real-world business applications.",
  },
  {
    icon: Users,
    title: "Soft Skills & Placement Training",
    description: "Develop essential communication, teamwork, and professional skills. Get placement-ready with resume building, interview preparation, and career guidance tailored to your success.",
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
