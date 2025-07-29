import React, { useState } from 'react';
import { Calendar, Download, Check, Clock, Filter } from 'lucide-react';

const Timesheet = () => {
  const [selectedWeek, setSelectedWeek] = useState('2024-12-16');
  const [filterDepartment, setFilterDepartment] = useState('all');

  const employees = [
    {
      id: 1,
      name: 'John Smith',
      department: 'Engineering',
      avatar: '/api/placeholder/32/32',
      days: [
        { date: 'Mon 16', timeIn: '09:00', timeOut: '17:30', total: '8:30', status: 'present' },
        { date: 'Tue 17', timeIn: '08:45', timeOut: '17:15', total: '8:30', status: 'present' },
        { date: 'Wed 18', timeIn: '09:15', timeOut: '17:45', total: '8:30', status: 'late' },
        { date: 'Thu 19', timeIn: '09:00', timeOut: '17:30', total: '8:30', status: 'present' },
        { date: 'Fri 20', timeIn: '--', timeOut: '--', total: '0:00', status: 'absent' },
      ],
      weekTotal: '34:00',
      status: 'pending'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      department: 'HR',
      avatar: '/api/placeholder/32/32',
      days: [
        { date: 'Mon 16', timeIn: '08:30', timeOut: '17:00', total: '8:30', status: 'present' },
        { date: 'Tue 17', timeIn: '08:30', timeOut: '17:00', total: '8:30', status: 'present' },
        { date: 'Wed 18', timeIn: '08:30', timeOut: '17:00', total: '8:30', status: 'present' },
        { date: 'Thu 19', timeIn: '08:30', timeOut: '17:00', total: '8:30', status: 'present' },
        { date: 'Fri 20', timeIn: '08:30', timeOut: '17:00', total: '8:30', status: 'present' },
      ],
      weekTotal: '42:30',
      status: 'approved'
    },
    {
      id: 3,
      name: 'Mike Chen',
      department: 'Marketing',
      avatar: '/api/placeholder/32/32',
      days: [
        { date: 'Mon 16', timeIn: '09:30', timeOut: '18:00', total: '8:30', status: 'late' },
        { date: 'Tue 17', timeIn: '09:00', timeOut: '17:30', total: '8:30', status: 'present' },
        { date: 'Wed 18', timeIn: '09:00', timeOut: '17:30', total: '8:30', status: 'present' },
        { date: 'Thu 19', timeIn: '09:15', timeOut: '17:45', total: '8:30', status: 'late' },
        { date: 'Fri 20', timeIn: '09:00', timeOut: '17:30', total: '8:30', status: 'present' },
      ],
      weekTotal: '42:30',
      status: 'pending'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'late': return 'bg-yellow-100 text-yellow-800';
      case 'absent': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getApprovalStatus = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Timesheet Management</h1>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Check className="w-4 h-4 mr-2" />
            Approve Selected
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Download className="w-4 h-4 mr-2" />
            Export to Excel
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-gray-400" />
              <label className="text-sm font-medium text-gray-700">Week:</label>
              <input
                type="week"
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <label className="text-sm font-medium text-gray-700">Department:</label>
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Departments</option>
                <option value="engineering">Engineering</option>
                <option value="hr">HR</option>
                <option value="marketing">Marketing</option>
                <option value="sales">Sales</option>
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            Showing {employees.length} employees for week of Dec 16-20, 2024
          </div>
        </div>
      </div>

      {/* Timesheet Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Mon 16</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tue 17</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Wed 18</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Thu 19</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Fri 20</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Total Hours</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input type="checkbox" className="rounded border-gray-300" />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-medium text-gray-600">
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{employee.name}</div>
                        <div className="text-sm text-gray-500">{employee.department}</div>
                      </div>
                    </div>
                  </td>
                  {employee.days.map((day, index) => (
                    <td key={index} className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="space-y-1">
                        <div className="text-xs text-gray-600">{day.timeIn} - {day.timeOut}</div>
                        <div className="text-sm font-medium">{day.total}</div>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(day.status)}`}>
                          {day.status}
                        </span>
                      </div>
                    </td>
                  ))}
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <div className="text-sm font-medium text-gray-900">{employee.weekTotal}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getApprovalStatus(employee.status)}`}>
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Hours This Week</p>
              <p className="text-2xl font-bold text-gray-900">119:00</p>
            </div>
            <Clock className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Daily Hours</p>
              <p className="text-2xl font-bold text-gray-900">7.9</p>
            </div>
            <Calendar className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
              <p className="text-2xl font-bold text-gray-900">94%</p>
            </div>
            <Check className="w-8 h-8 text-green-500" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Late Arrivals</p>
              <p className="text-2xl font-bold text-gray-900">3</p>
            </div>
            <Clock className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timesheet;