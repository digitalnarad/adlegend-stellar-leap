import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="AI Automation Background" 
          className="w-full h-full object-cover opacity-20 dark:opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/80 to-secondary/20" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-primary opacity-5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Trusted by 1,000+ CA Firms & SMBs</span>
            </div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
              AI-Powered CRM &
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Marketing Automation
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
              ProDox helps CA firms and SMBs capture leads, automate conversations, and scale client relationships with secure, compliant AI technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Link to="/signup">
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="outline" size="xl" className="group">
                  <Play className="w-5 h-5" />
                  View Demo
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                14-day free trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                Setup in under 5 minutes
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-3xl"></div>
          <div className="relative bg-card/50 backdrop-blur-lg border border-border rounded-2xl p-6 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-background/80 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-primary mb-1">$124K</div>
                <div className="text-sm text-muted-foreground">Ad Spend</div>
              </div>
              <div className="bg-background/80 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-success mb-1">2.4x</div>
                <div className="text-sm text-muted-foreground">ROAS</div>
              </div>
              <div className="bg-background/80 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-warning mb-1">$14.25</div>
                <div className="text-sm text-muted-foreground">CPA</div>
              </div>
              <div className="bg-background/80 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-accent mb-1">870</div>
                <div className="text-sm text-muted-foreground">Conversions</div>
              </div>
            </div>
            <div className="h-48 bg-background/60 rounded-lg flex items-center justify-center">
              <div className="text-muted-foreground">Live Dashboard Preview</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};