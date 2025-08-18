import { Link2, Settings, TrendingUp } from 'lucide-react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: Link2,
      title: 'Connect',
      description: 'Link your advertising accounts and set your campaign goals in minutes.',
      step: '01'
    },
    {
      icon: Settings,
      title: 'Automate',
      description: 'Our AI takes over, creating and optimizing campaigns based on your objectives.',
      step: '02'
    },
    {
      icon: TrendingUp,
      title: 'Scale',
      description: 'Watch your ROI grow as the system continuously improves performance.',
      step: '03'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            How It{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get started in three simple steps and let our AI handle the complexity of modern advertising.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.title}
                className="relative text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-glow">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 bg-card border border-border rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-soft transition-smooth group-hover:scale-105">
                  <Icon className="w-10 h-10 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl font-semibold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Connector line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30 transform translate-x-1/2" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};