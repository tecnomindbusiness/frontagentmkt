import React from 'react';
import { MessageCircle, Users, Clock, Zap } from 'lucide-react';
import StatsCard from '../components/Dashboard/StatsCard';

const stats = [
  {
    title: 'Total Messages',
    value: '2,847',
    icon: MessageCircle,
    trend: { value: 12, isPositive: true },
  },
  {
    title: 'Active Users',
    value: '156',
    icon: Users,
    trend: { value: 8, isPositive: true },
  },
  {
    title: 'Avg. Response Time',
    value: '1.2s',
    icon: Clock,
    trend: { value: 5, isPositive: true },
  },
  {
    title: 'Response Rate',
    value: '98%',
    icon: Zap,
    trend: { value: 2, isPositive: true },
  },
];

export default function Dashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-gray-400 mt-2">Monitor your AI agent's performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatsCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Activity Chart */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Message Activity</h3>
          <div className="h-64 flex items-center justify-center text-gray-500">
            Chart will be implemented here
          </div>
        </div>

        {/* Recent Interactions */}
        <div className="bg-gray-800 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Recent Interactions</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-gray-700">
                <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
                  <Users size={20} className="text-gray-400" />
                </div>
                <div>
                  <p className="font-medium">User #{i}</p>
                  <p className="text-sm text-gray-400">Last message 2m ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
