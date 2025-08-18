import { Brain, Target, BarChart3, Zap } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Targeting',
      description: 'Advanced machine learning algorithms identify and target your ideal customers with precision.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Multi-Channel Campaigns',
      description: 'Run synchronized campaigns across Google, Facebook, LinkedIn, and more from one dashboard.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Analytics',
      description: 'Get instant insights and performance metrics to optimize your campaigns in real-time.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Automated Optimization',
      description: 'Let AI automatically adjust bids, budgets, and targeting for maximum ROI while you sleep.',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Supercharge Your{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Ad Performance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with intuitive design to deliver results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="group relative p-8 bg-card border border-border rounded-xl shadow-card hover:shadow-soft transition-smooth animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="font-heading text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};