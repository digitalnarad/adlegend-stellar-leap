import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  TrendingDown, 
  Download, 
  Calendar,
  Users,
  DollarSign,
  Target,
  BarChart3
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const monthlyData = [
  { month: 'Jan', leads: 120, conversions: 24, revenue: 480000 },
  { month: 'Feb', leads: 150, conversions: 32, revenue: 640000 },
  { month: 'Mar', leads: 180, conversions: 38, revenue: 760000 },
  { month: 'Apr', leads: 220, conversions: 45, revenue: 900000 },
  { month: 'May', leads: 190, conversions: 41, revenue: 820000 },
  { month: 'Jun', leads: 250, conversions: 55, revenue: 1100000 },
];

const channelData = [
  { name: 'Meta Ads', value: 35, color: '#3B82F6' },
  { name: 'Google Ads', value: 30, color: '#8B5CF6' },
  { name: 'LinkedIn', value: 20, color: '#10B981' },
  { name: 'Website', value: 15, color: '#F59E0B' },
];

const campaignPerformance = [
  { name: 'CA Service Campaign', impressions: 45000, clicks: 1350, conversions: 67, spent: 125000 },
  { name: 'SMB Growth Package', impressions: 38000, clicks: 1140, conversions: 52, spent: 98000 },
  { name: 'Tax Season Special', impressions: 52000, clicks: 1820, conversions: 91, spent: 156000 },
  { name: 'Startup Consulting', impressions: 28000, clicks: 840, conversions: 34, spent: 67000 },
];

const Reports = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-heading font-bold mb-2">Analytics & Reports</h1>
            <p className="text-muted-foreground">Track performance and measure ROI across all channels</p>
          </div>
          <div className="flex gap-2 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 Days
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">1,247</div>
                  <div className="text-sm text-muted-foreground">Total Leads</div>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+12.5% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">267</div>
                  <div className="text-sm text-muted-foreground">Conversions</div>
                </div>
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+8.3% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">₹53.4L</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-yellow-500" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-sm text-green-500">+15.7% vs last month</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">21.4%</div>
                  <div className="text-sm text-muted-foreground">Conversion Rate</div>
                </div>
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              <div className="flex items-center mt-4">
                <TrendingDown className="w-4 h-4 text-red-500 mr-1" />
                <span className="text-sm text-red-500">-2.1% vs last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Lead Trends */}
          <Card>
            <CardHeader>
              <CardTitle>Lead Generation Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="leads" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="conversions" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={2}
                    dot={{ fill: 'hsl(var(--secondary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Channel Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Lead Sources Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {channelData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Monthly Revenue Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [`₹${(value / 100000).toFixed(1)}L`, 'Revenue']}
                />
                <Bar 
                  dataKey="revenue" 
                  fill="url(#gradient)" 
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Campaign Performance Table */}
        <Card>
          <CardHeader>
            <CardTitle>Campaign Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Campaign</th>
                    <th className="text-left py-3 px-4">Impressions</th>
                    <th className="text-left py-3 px-4">Clicks</th>
                    <th className="text-left py-3 px-4">CTR</th>
                    <th className="text-left py-3 px-4">Conversions</th>
                    <th className="text-left py-3 px-4">CVR</th>
                    <th className="text-left py-3 px-4">Spent</th>
                    <th className="text-left py-3 px-4">CPC</th>
                  </tr>
                </thead>
                <tbody>
                  {campaignPerformance.map((campaign, index) => {
                    const ctr = ((campaign.clicks / campaign.impressions) * 100).toFixed(2);
                    const cvr = ((campaign.conversions / campaign.clicks) * 100).toFixed(2);
                    const cpc = (campaign.spent / campaign.clicks).toFixed(0);
                    
                    return (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="py-4 px-4">
                          <div className="font-medium">{campaign.name}</div>
                        </td>
                        <td className="py-4 px-4">{campaign.impressions.toLocaleString()}</td>
                        <td className="py-4 px-4">{campaign.clicks.toLocaleString()}</td>
                        <td className="py-4 px-4">
                          <Badge variant={parseFloat(ctr) > 3 ? 'default' : 'secondary'}>
                            {ctr}%
                          </Badge>
                        </td>
                        <td className="py-4 px-4">{campaign.conversions}</td>
                        <td className="py-4 px-4">
                          <Badge variant={parseFloat(cvr) > 5 ? 'default' : 'secondary'}>
                            {cvr}%
                          </Badge>
                        </td>
                        <td className="py-4 px-4">₹{campaign.spent.toLocaleString()}</td>
                        <td className="py-4 px-4">₹{cpc}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;