import React from 'react';
import { Users, Clock, UserX, FileText, Calendar, TrendingUp, Award, AlertTriangle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { name: 'Total Employees', value: '247', icon: Users, color: 'bg-blue-500', change: '+12 this month' },
    { name: 'Clocked In Today', value: '189', icon: Clock, color: 'bg-green-500', change: '76% attendance' },
    { name: 'Absent', value: '8', icon: UserX, color: 'bg-red-500', change: '3.2% absence rate' },
    { name: 'Pending Requests', value: '24', icon: FileText, color: 'bg-yellow-500', change: '6 urgent' },
  ];

  const quickActions = [
    { name: 'Process Payroll', description: 'Generate this month\'s payroll', icon: TrendingUp, href: '/payroll' },
    { name: 'Review Timesheets', description: 'Approve pending timesheets', icon: Calendar, href: '/timesheet' },
    { name: 'Employee Forms', description: 'Manage employee documents', icon: FileText, href: '/forms' },
  ];

  const upcomingEvents = [
    { type: 'birthday', name: 'John Smith', date: 'Today', icon: '🎂' },
    { type: 'birthday', name: 'Emma Wilson', date: 'Tomorrow', icon: '🎂' },
    { type: 'holiday', name: 'Labor Day', date: 'Sep 2', icon: '🏖️' },
    { type: 'meeting', name: 'All Hands Meeting', date: 'Sep 5', icon: '📅' },
  ];

  const alerts = [
    { type: 'warning', message: 'Timesheet deadline is in 2 days', time: '1 hour ago' },
    { type: 'info', message: 'New employee onboarding scheduled', time: '3 hours ago' },
    { type: 'success', message: 'Payroll processed successfully', time: '1 day ago' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`${stat.color} rounded-lg p-3`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <a
                  key={action.name}
                  href={action.href}
                  className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="bg-blue-100 rounded-lg p-2 mr-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{action.name}</p>
                    <p className="text-sm text-gray-500">{action.description}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <span className="text-lg mr-3">{event.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900">{event.name}</p>
                    <p className="text-sm text-gray-500 capitalize">{event.type}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{event.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications/Alerts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Notifications</h2>
        <div className="space-y-3">
          {alerts.map((alert, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg">
              <div className={`p-1 rounded-full ${
                alert.type === 'warning' ? 'bg-yellow-100' :
                alert.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
              }`}>
                <AlertTriangle className={`w-4 h-4 ${
                  alert.type === 'warning' ? 'text-yellow-600' :
                  alert.type === 'success' ? 'text-green-600' : 'text-blue-600'
                }`} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">{alert.message}</p>
                <p className="text-xs text-gray-500">{alert.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;