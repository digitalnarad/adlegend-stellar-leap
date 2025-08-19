import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  DollarSign,
  Clock,
  Building2,
  FileText,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    leadIncrease: string;
    conversionRate: string;
    revenueGrowth: string;
    timeframe: string;
  };
  image: string;
  featured?: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'ca-firm-mumbai',
    title: 'Mumbai CA Firm Scales Client Acquisition by 300%',
    client: 'Sharma & Associates',
    industry: 'Chartered Accountancy',
    challenge: 'Traditional networking wasn\'t generating enough qualified leads for their expanding tax and audit services.',
    solution: 'Implemented ProDox\'s AI-powered lead generation with targeted LinkedIn and Google Ads campaigns, automated follow-ups, and secure client data management.',
    results: {
      leadIncrease: '300%',
      conversionRate: '45%',
      revenueGrowth: '₹2.5Cr',
      timeframe: '6 months'
    },
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 'tech-startup-bangalore',
    title: 'Bangalore Startup Achieves Product-Market Fit with AI-Driven CRM',
    client: 'TechFlow Solutions',
    industry: 'Software Development',
    challenge: 'Early-stage startup needed efficient lead management and customer relationship system without breaking budget.',
    solution: 'Used ProDox\'s affordable SMB package with integrated CRM, automated email sequences, and performance analytics.',
    results: {
      leadIncrease: '250%',
      conversionRate: '38%',
      revenueGrowth: '₹1.8Cr',
      timeframe: '4 months'
    },
    image: '/api/placeholder/600/400'
  },
  {
    id: 'manufacturing-sme',
    title: 'Manufacturing SME Digitizes Sales Process',
    client: 'Precision Industries',
    industry: 'Manufacturing',
    challenge: 'Family business struggled with manual lead tracking and inconsistent follow-ups affecting conversion rates.',
    solution: 'Deployed ProDox\'s complete automation suite with WhatsApp integration, lead scoring, and family-friendly dashboard.',
    results: {
      leadIncrease: '180%',
      conversionRate: '52%',
      revenueGrowth: '₹3.2Cr',
      timeframe: '8 months'
    },
    image: '/api/placeholder/600/400'
  }
];

const metrics = [
  {
    label: 'Average Lead Increase',
    value: '240%',
    icon: <TrendingUp className="w-5 h-5 text-green-500" />
  },
  {
    label: 'Average Conversion Rate',
    value: '45%',
    icon: <Users className="w-5 h-5 text-blue-500" />
  },
  {
    label: 'Total Revenue Generated',
    value: '₹12+ Cr',
    icon: <DollarSign className="w-5 h-5 text-yellow-500" />
  },
  {
    label: 'Average Time to ROI',
    value: '3 months',
    icon: <Clock className="w-5 h-5 text-purple-500" />
  }
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Success Stories from
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Real Businesses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how CA firms, SMBs, and startups across India are scaling their business with ProDox's AI-powered CRM and marketing automation.
          </p>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Case Study */}
        {caseStudies
          .filter(study => study.featured)
          .map((study) => (
            <Card key={study.id} className="mb-12 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge className="bg-gradient-primary text-white">Featured Case Study</Badge>
                    <Badge variant="outline">{study.industry}</Badge>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
                    {study.title}
                  </h2>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <Building2 className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{study.client}</span>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h3 className="font-semibold mb-2">Challenge:</h3>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Solution:</h3>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="text-center p-4 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{study.results.leadIncrease}</div>
                      <div className="text-xs text-muted-foreground">Lead Increase</div>
                    </div>
                    <div className="text-center p-4 bg-green-500/5 rounded-lg">
                      <div className="text-2xl font-bold text-green-500">{study.results.conversionRate}</div>
                      <div className="text-xs text-muted-foreground">Conversion Rate</div>
                    </div>
                    <div className="text-center p-4 bg-yellow-500/5 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-500">{study.results.revenueGrowth}</div>
                      <div className="text-xs text-muted-foreground">Revenue Growth</div>
                    </div>
                    <div className="text-center p-4 bg-purple-500/5 rounded-lg">
                      <div className="text-2xl font-bold text-purple-500">{study.results.timeframe}</div>
                      <div className="text-xs text-muted-foreground">Timeframe</div>
                    </div>
                  </div>

                  <Button variant="gradient" className="group">
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="bg-gradient-subtle flex items-center justify-center p-8">
                  <div className="w-full h-64 lg:h-full bg-background/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          ))}

        {/* Other Case Studies */}
        <div className="mb-12">
          <h2 className="text-2xl font-heading font-bold mb-8">More Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies
              .filter(study => !study.featured)
              .map((study) => (
                <Card key={study.id} className="overflow-hidden">
                  <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                    <FileText className="w-12 h-12 text-primary" />
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline">{study.industry}</Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3">{study.title}</h3>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{study.client}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                      {study.challenge}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{study.results.leadIncrease}</div>
                        <div className="text-xs text-muted-foreground">Leads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-500">{study.results.conversionRate}</div>
                        <div className="text-xs text-muted-foreground">CVR</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-yellow-500">{study.results.revenueGrowth}</div>
                        <div className="text-xs text-muted-foreground">Revenue</div>
                      </div>
                    </div>

                    <Button variant="outline" className="w-full group">
                      Read Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-primary text-white overflow-hidden">
          <CardContent className="p-8 lg:p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of CA firms and SMBs who are scaling their business with ProDox's AI-powered platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="secondary" size="lg" className="group">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Download className="w-5 h-5 mr-2" />
                Download All Case Studies
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaseStudies;
