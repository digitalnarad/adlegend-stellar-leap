import { useState } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Settings, 
  PlusCircle,
  Calendar,
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,592',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Active Campaigns',
      value: '23',
      change: '+3',
      icon: BarChart3,
      color: 'text-blue-600'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+0.8%',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Total Leads',
      value: '1,847',
      change: '+156',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  const campaigns = [
    {
      name: 'Summer Sale Campaign',
      status: 'Active',
      budget: '$5,000',
      spent: '$3,240',
      conversions: '124',
      roi: '245%'
    },
    {
      name: 'Brand Awareness Q4',
      status: 'Active',
      budget: '$8,500',
      spent: '$6,120',
      conversions: '89',
      roi: '198%'
    },
    {
      name: 'Holiday Promotion',
      status: 'Paused',
      budget: '$12,000',
      spent: '$9,850',
      conversions: '267',
      roi: '312%'
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-heading text-2xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back! Here's what's happening with your campaigns.</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 days
            </Button>
            <Button variant="gradient" size="sm">
              <PlusCircle className="w-4 h-4 mr-2" />
              New Campaign
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-background border-r border-border h-screen sticky top-0">
          <div className="p-6">
            <nav className="space-y-2">
              {[
                { id: 'overview', label: 'Overview', icon: BarChart3 },
                { id: 'campaigns', label: 'Campaigns', icon: TrendingUp },
                { id: 'analytics', label: 'Analytics', icon: BarChart3 },
                { id: 'integrations', label: 'Integrations', icon: Settings },
                { id: 'settings', label: 'Settings', icon: Settings }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg text-left transition-colors ${
                      activeTab === item.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.title} className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm font-medium">{stat.title}</p>
                      <p className="text-2xl font-bold mt-1">{stat.value}</p>
                      <p className={`text-sm font-medium mt-1 ${stat.color}`}>
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Charts and Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Performance Chart */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-lg">Performance Overview</h3>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
              <div className="h-64 bg-muted/50 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Chart visualization would go here</p>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  'Campaign "Summer Sale" reached 80% budget',
                  'New conversion from Facebook Ads',
                  'Google Ads optimization completed',
                  'Weekly report generated'
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <p className="text-sm text-muted-foreground">{activity}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Campaigns Table */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-lg">Active Campaigns</h3>
              <Button variant="outline" size="sm">View All</Button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 text-sm font-medium text-muted-foreground">Campaign</th>
                    <th className="text-left py-3 text-sm font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 text-sm font-medium text-muted-foreground">Budget</th>
                    <th className="text-left py-3 text-sm font-medium text-muted-foreground">Spent</th>
                    <th className="text-left py-3 text-sm font-medium text-muted-foreground">Conversions</th>
                    <th className="text-left py-3 text-sm font-medium text-muted-foreground">ROI</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.map((campaign, index) => (
                    <tr key={index} className="border-b border-border">
                      <td className="py-4 font-medium">{campaign.name}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          campaign.status === 'Active' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                        }`}>
                          {campaign.status}
                        </span>
                      </td>
                      <td className="py-4 text-muted-foreground">{campaign.budget}</td>
                      <td className="py-4 text-muted-foreground">{campaign.spent}</td>
                      <td className="py-4 text-muted-foreground">{campaign.conversions}</td>
                      <td className="py-4 font-medium text-green-600">{campaign.roi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;