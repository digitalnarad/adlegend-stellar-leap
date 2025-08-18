import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses just getting started',
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        'Up to 3 ad accounts',
        'Basic AI optimization',
        '10,000 monthly ad impressions',
        'Email support',
        'Standard analytics'
      ],
      buttonText: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Pro',
      description: 'Ideal for growing businesses and agencies',
      monthlyPrice: 149,
      yearlyPrice: 119,
      features: [
        'Up to 15 ad accounts',
        'Advanced AI optimization',
        '100,000 monthly ad impressions',
        'Priority support',
        'Advanced analytics',
        'Custom audiences',
        'A/B testing suite'
      ],
      buttonText: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with custom needs',
      monthlyPrice: 499,
      yearlyPrice: 399,
      features: [
        'Unlimited ad accounts',
        'Custom AI models',
        'Unlimited impressions',
        'Dedicated success manager',
        'White-label solution',
        'API access',
        'Custom integrations',
        'SLA guarantee'
      ],
      buttonText: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Simple,{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm ${!isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-14 h-7 rounded-full transition-colors ${
                isYearly ? 'bg-primary' : 'bg-muted'
              }`}
            >
              <div className={`absolute w-5 h-5 bg-white rounded-full top-1 transition-transform ${
                isYearly ? 'translate-x-8' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-sm ${isYearly ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
              Yearly
            </span>
            {isYearly && (
              <span className="text-sm text-green-600 font-medium bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                Save 20%
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative p-8 bg-card border rounded-2xl shadow-card hover:shadow-soft transition-smooth animate-fade-in ${
                plan.popular 
                  ? 'border-primary shadow-glow scale-105' 
                  : 'border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-foreground">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                  {isYearly && (
                    <div className="text-sm text-muted-foreground">
                      Billed annually
                    </div>
                  )}
                </div>

                <Link to={plan.name === 'Enterprise' ? '/contact' : '/signup'}>
                  <Button 
                    variant={plan.popular ? 'gradient' : 'outline'} 
                    className="w-full"
                    size="lg"
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include SSL, 99.9% uptime, and 24/7 monitoring. 
            <a href="#" className="text-primary hover:underline ml-1">
              Compare all features →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};