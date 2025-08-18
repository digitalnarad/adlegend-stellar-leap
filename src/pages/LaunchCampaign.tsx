import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Zap, 
  Target, 
  Brain, 
  TrendingUp, 
  Facebook, 
  Youtube, 
  Instagram, 
  Linkedin,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Rocket,
  BarChart3,
  Users,
  DollarSign,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const LaunchCampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [campaignType, setCampaignType] = useState('');
  const [budget, setBudget] = useState('');
  const [objective, setObjective] = useState('');

  const platforms = [
    { name: 'Meta Ads', icon: Facebook, color: 'text-blue-500', users: '3.8B+' },
    { name: 'Google Ads', icon: Target, color: 'text-green-500', users: '4.3B+' },
    { name: 'YouTube Ads', icon: Youtube, color: 'text-red-500', users: '2.7B+' },
    { name: 'LinkedIn Ads', icon: Linkedin, color: 'text-blue-600', users: '930M+' },
    { name: 'Instagram', icon: Instagram, color: 'text-pink-500', users: '2.4B+' },
    { name: 'TikTok Ads', icon: Zap, color: 'text-purple-500', users: '1.7B+' }
  ];

  const campaignTypes = [
    {
      type: 'Brand Awareness',
      description: 'Increase visibility and reach new audiences',
      icon: Users,
      color: 'text-blue-500',
      recommended: false
    },
    {
      type: 'Lead Generation',
      description: 'Capture qualified leads and build your pipeline',
      icon: Target,
      color: 'text-green-500',
      recommended: true
    },
    {
      type: 'Sales & Conversions',
      description: 'Drive direct sales and revenue growth',
      icon: DollarSign,
      color: 'text-purple-500',
      recommended: false
    },
    {
      type: 'App Installs',
      description: 'Increase app downloads and user acquisition',
      icon: Rocket,
      color: 'text-orange-500',
      recommended: false
    }
  ];

  const budgetOptions = [
    { value: '500-1000', label: '$500 - $1,000/month', recommended: false },
    { value: '1000-5000', label: '$1,000 - $5,000/month', recommended: true },
    { value: '5000-10000', label: '$5,000 - $10,000/month', recommended: false },
    { value: '10000+', label: '$10,000+/month', recommended: false }
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI Creative Generation',
      description: 'Generate high-converting ad creatives and copy instantly'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'AI-powered audience targeting for maximum ROI'
    },
    {
      icon: BarChart3,
      title: 'Real-time Optimization',
      description: 'Continuous bid and budget optimization based on performance'
    },
    {
      icon: Clock,
      title: 'Time-saving Automation',
      description: 'Save 10+ hours per week on campaign management'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-primary opacity-10 rounded-full blur-3xl" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Launch in 5 Minutes</span>
              </div>
              
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
                Launch Your First
                <br />
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI-Powered Campaign
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Set up professional ad campaigns across multiple platforms in minutes. 
                Our AI handles targeting, creative generation, and optimization automatically.
              </p>
            </div>

            {/* Progress Steps */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step 
                        ? 'bg-primary text-white' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {currentStep > step ? <CheckCircle className="w-4 h-4" /> : step}
                    </div>
                    {step < 3 && (
                      <div className={`w-12 h-0.5 ${
                        currentStep > step ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Tabs value={`step-${currentStep}`} className="max-w-4xl mx-auto">
              <TabsContent value="step-1" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Choose Your Campaign Type</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {campaignTypes.map((type) => (
                      <div
                        key={type.type}
                        className={`p-6 border rounded-lg cursor-pointer transition-all hover:border-primary ${
                          campaignType === type.type ? 'border-primary bg-primary/5' : 'border-border'
                        }`}
                        onClick={() => setCampaignType(type.type)}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <type.icon className={`w-6 h-6 ${type.color}`} />
                          {type.recommended && (
                            <Badge variant="secondary">Recommended</Badge>
                          )}
                        </div>
                        <h3 className="font-semibold mb-2">{type.type}</h3>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end mt-6">
                    <Button 
                      onClick={() => setCurrentStep(2)}
                      disabled={!campaignType}
                      className="group"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="step-2" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Select Platforms & Budget</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Choose Advertising Platforms</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {platforms.map((platform) => (
                          <div
                            key={platform.name}
                            className="p-4 border rounded-lg cursor-pointer transition-all hover:border-primary"
                          >
                            <div className="flex items-center space-x-3 mb-2">
                              <platform.icon className={`w-5 h-5 ${platform.color}`} />
                              <span className="font-medium">{platform.name}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{platform.users} users</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">Monthly Budget</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {budgetOptions.map((option) => (
                          <div
                            key={option.value}
                            className={`p-4 border rounded-lg cursor-pointer transition-all hover:border-primary ${
                              budget === option.value ? 'border-primary bg-primary/5' : 'border-border'
                            }`}
                            onClick={() => setBudget(option.value)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{option.label}</span>
                              {option.recommended && (
                                <Badge variant="secondary">Recommended</Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between mt-6">
                    <Button variant="outline" onClick={() => setCurrentStep(1)}>
                      Back
                    </Button>
                    <Button 
                      onClick={() => setCurrentStep(3)}
                      disabled={!budget}
                      className="group"
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="step-3" className="space-y-8">
                <Card className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Campaign Details</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Campaign Name</label>
                      <Input placeholder="e.g., Q4 Lead Generation Campaign" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Target Audience</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Who do you want to reach?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small-business">Small Business Owners</SelectItem>
                          <SelectItem value="marketing-managers">Marketing Managers</SelectItem>
                          <SelectItem value="entrepreneurs">Entrepreneurs</SelectItem>
                          <SelectItem value="ecommerce">E-commerce Businesses</SelectItem>
                          <SelectItem value="custom">Custom Audience</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Campaign Goal</label>
                      <Textarea 
                        placeholder="Describe what you want to achieve with this campaign..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Website URL</label>
                      <Input placeholder="https://yourwebsite.com" />
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button variant="outline" onClick={() => setCurrentStep(2)}>
                      Back
                    </Button>
                    <Link to="/dashboard">
                      <Button variant="hero" className="group">
                        Launch Campaign
                        <Rocket className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Why Choose AdLegend?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get the power of enterprise-level advertising automation at a fraction of the cost.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Free Trial Available</span>
            </div>
            
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Launch Your Campaign?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already scaling their advertising with AI automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="hero" size="xl" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="xl">
                  Talk to Sales
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LaunchCampaign;