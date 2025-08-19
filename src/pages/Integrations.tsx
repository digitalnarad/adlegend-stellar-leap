import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { 
  Check, 
  Plus, 
  Settings, 
  ExternalLink,
  Zap,
  Database,
  MessageSquare,
  BarChart3,
  Globe,
  Shield
} from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  description: string;
  category: 'advertising' | 'crm' | 'analytics' | 'communication' | 'productivity';
  icon: React.ReactNode;
  connected: boolean;
  popular?: boolean;
  features: string[];
}

const integrations: Integration[] = [
  {
    id: 'meta-ads',
    name: 'Meta Ads Manager',
    description: 'Connect your Facebook and Instagram advertising accounts for automated campaign management.',
    category: 'advertising',
    icon: <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">M</div>,
    connected: true,
    popular: true,
    features: ['Campaign Creation', 'Automated Bidding', 'Lead Sync', 'Performance Analytics']
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    description: 'Integrate Google Ads for search and display campaign automation.',
    category: 'advertising',
    icon: <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">G</div>,
    connected: true,
    popular: true,
    features: ['Search Campaigns', 'Display Network', 'Shopping Ads', 'YouTube Ads']
  },
  {
    id: 'linkedin-ads',
    name: 'LinkedIn Ads',
    description: 'Reach professionals and B2B audiences through LinkedIn advertising platform.',
    category: 'advertising',
    icon: <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">Li</div>,
    connected: false,
    features: ['Sponsored Content', 'Message Ads', 'Lead Gen Forms', 'Account Targeting']
  },
  {
    id: 'hubspot',
    name: 'HubSpot CRM',
    description: 'Sync leads and customer data with HubSpot for comprehensive CRM management.',
    category: 'crm',
    icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">H</div>,
    connected: false,
    popular: true,
    features: ['Contact Sync', 'Deal Pipeline', 'Email Automation', 'Lead Scoring']
  },
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'Enterprise CRM integration for large-scale lead and customer management.',
    category: 'crm',
    icon: <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">Sf</div>,
    connected: false,
    features: ['Lead Management', 'Opportunity Tracking', 'Custom Objects', 'Workflow Automation']
  },
  {
    id: 'google-analytics',
    name: 'Google Analytics',
    description: 'Track website performance and user behavior with Google Analytics integration.',
    category: 'analytics',
    icon: <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white font-bold">GA</div>,
    connected: true,
    features: ['Traffic Analysis', 'Conversion Tracking', 'Audience Insights', 'Goal Monitoring']
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Business',
    description: 'Automate customer communication through WhatsApp Business API.',
    category: 'communication',
    icon: <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">W</div>,
    connected: false,
    popular: true,
    features: ['Automated Messages', 'Broadcast Lists', 'Customer Support', 'Media Sharing']
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Connect ProDox with 3000+ apps through Zapier automation workflows.',
    category: 'productivity',
    icon: <Zap className="w-5 h-5 text-orange-500" />,
    connected: false,
    features: ['Workflow Automation', '3000+ App Connections', 'Multi-step Zaps', 'Custom Triggers']
  }
];

const categories = [
  { id: 'all', name: 'All Integrations', icon: <Globe className="w-4 h-4" /> },
  { id: 'advertising', name: 'Advertising', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'crm', name: 'CRM', icon: <Database className="w-4 h-4" /> },
  { id: 'analytics', name: 'Analytics', icon: <BarChart3 className="w-4 h-4" /> },
  { id: 'communication', name: 'Communication', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'productivity', name: 'Productivity', icon: <Settings className="w-4 h-4" /> },
];

const Integrations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showConnectedOnly, setShowConnectedOnly] = useState(false);

  const filteredIntegrations = integrations.filter(integration => {
    const categoryMatch = selectedCategory === 'all' || integration.category === selectedCategory;
    const connectionMatch = !showConnectedOnly || integration.connected;
    return categoryMatch && connectionMatch;
  });

  const connectedCount = integrations.filter(i => i.connected).length;

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Integrations</h1>
            <p className="text-muted-foreground">
              Connect ProDox with your favorite tools and platforms. {connectedCount} of {integrations.length} integrations connected.
            </p>
          </div>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2">
              <Switch
                id="connected-only"
                checked={showConnectedOnly}
                onCheckedChange={setShowConnectedOnly}
              />
              <label htmlFor="connected-only" className="text-sm">
                Show connected only
              </label>
            </div>
            <Button variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Browse Marketplace
            </Button>
          </div>
        </div>

        {/* Security Notice */}
        <Card className="mb-8 border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  Enterprise-Grade Security for CA Firms
                </h3>
                <p className="text-blue-700 dark:text-blue-200 text-sm">
                  All integrations use encrypted connections and comply with Indian IT Act regulations. 
                  Your client data remains secure and can be exported or deleted at any time for GDPR compliance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center gap-2"
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration) => (
            <Card key={integration.id} className="relative overflow-hidden">
              {integration.popular && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-primary text-white">Popular</Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {integration.icon}
                    <div>
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {integration.category}
                      </Badge>
                    </div>
                  </div>
                  {integration.connected && (
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  {integration.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {integration.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {integration.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{integration.features.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="flex gap-2">
                  {integration.connected ? (
                    <>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Settings className="w-4 h-4 mr-2" />
                        Configure
                      </Button>
                      <Button variant="ghost" size="sm">
                        Disconnect
                      </Button>
                    </>
                  ) : (
                    <Button variant="gradient" size="sm" className="flex-1">
                      <Plus className="w-4 h-4 mr-2" />
                      Connect
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium mb-2">No integrations found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or browse the marketplace for more integrations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Integrations;