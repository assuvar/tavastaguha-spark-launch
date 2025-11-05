const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 tech-pattern opacity-10"></div>
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-heading font-bold text-gradient mb-6">
              About TavastaGuha
            </h2>
          </div>

          <div className="glass-effect rounded-2xl p-8 lg:p-12 animate-slide-up shadow-elevated" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              TG Technology (TavastaGuha) empowers colleges with industry-aligned
              learning solutions. Our mission is to bridge the gap between
              classroom education and real-world technology skills through expert
              trainers, curated curriculum, and hands-on projects.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Based in Bangalore, we partner with educational institutions across
              India to deliver cutting-edge training programs that prepare
              students for the demands of the modern tech industry. Our approach
              combines theoretical knowledge with practical application, ensuring
              graduates are truly job-ready.
            </p>
          </div>

          {/* Our Focus */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Expert-Led Training", description: "Industry professionals with real-world experience" },
              { title: "Career-Focused Programs", description: "Practical skills that employers actually need" },
              { title: "Flexible Learning", description: "Designed to fit college schedules and requirements" },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 hover:border-accent/40 transition-all animate-slide-up"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <h3 className="text-xl font-heading font-bold text-gradient mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
