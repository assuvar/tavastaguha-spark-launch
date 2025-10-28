import { CheckCircle2 } from "lucide-react";

const features = [
  "Real Industry Trainers",
  "Hands-on Practical Learning",
  "College Partnership Programs",
  "Certification Support",
  "Career Mentorship",
  "Project Portfolio Building",
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 border-2 border-primary rounded-full"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4">
            Why{" "}
            <span className="text-gradient neon-glow">TG Technology</span>
            ?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 hover:bg-white/20 transition-all duration-300 animate-slide-up group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight">
                  {feature}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
