import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Building, Edit3, FileText, Clock, DollarSign } from 'lucide-react';

const EmployeeProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const employee = {
    name: 'John Smith',
    employeeId: 'EMP001',
    department: 'Engineering',
    position: 'Senior Software Developer',
    email: 'john.smith@company.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, San Francisco, CA 94105',
    startDate: '2022-01-15',
    manager: 'Sarah Johnson',
    status: 'Active'
  };

  const clockHistory = [
    { date: '2024-12-19', clockIn: '08:55 AM', clockOut: '05:30 PM', total: '8:35', status: 'Complete' },
    { date: '2024-12-18', clockIn: '09:15 AM', clockOut: '05:45 PM', total: '8:30', status: 'Complete' },
    { date: '2024-12-17', clockIn: '08:45 AM', clockOut: '05:15 PM', total: '8:30', status: 'Complete' },
    { date: '2024-12-16', clockIn: '09:00 AM', clockOut: '05:30 PM', total: '8:30', status: 'Complete' },
  ];

  const payrollHistory = [
    { period: 'December 2024', gross: '$5,880.00', deductions: '$1,176.00', net: '$4,704.00' },
    { period: 'November 2024', gross: '$5,880.00', deductions: '$1,176.00', net: '$4,704.00' },
    { period: 'October 2024', gross: '$5,880.00', deductions: '$1,176.00', net: '$4,704.00' },
  ];

  const documents = [
    { name: 'Employment Contract', type: 'PDF', date: '2022-01-15', size: '245 KB' },
    { name: 'Tax Forms (W-2)', type: 'PDF', date: '2024-01-31', size: '123 KB' },
    { name: 'Performance Review', type: 'PDF', date: '2024-06-15', size: '187 KB' },
    { name: 'Benefits Enrollment', type: 'PDF', date: '2024-01-01', size: '298 KB' },
  ];

  const tabs = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'clock', name: 'Clock-In History', icon: Clock },
    { id: 'payroll', name: 'Payroll', icon: DollarSign },
    { id: 'documents', name: 'Documents', icon: FileText },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Profile</h1>
          <p className="text-gray-600 mt-1">Manage employee information and records</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Edit3 className="w-4 h-4 mr-2" />
          Edit Profile
        </button>
      </div>

      {/* Employee Header */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
            <User className="w-12 h-12 text-gray-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{employee.name}</h2>
                <p className="text-lg text-gray-600">{employee.position}</p>
                <p className="text-sm text-gray-500">ID: {employee.employeeId} • {employee.department}</p>
              </div>
              <span className="inline-flex px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
                {employee.status}
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{employee.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">{employee.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600">Started {employee.startDate}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'personal' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Email</p>
                      <p className="text-sm text-gray-600">{employee.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Phone</p>
                      <p className="text-sm text-gray-600">{employee.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Address</p>
                      <p className="text-sm text-gray-600">{employee.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Employment Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Department</p>
                      <p className="text-sm text-gray-600">{employee.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <User className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Manager</p>
                      <p className="text-sm text-gray-600">{employee.manager}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Start Date</p>
                      <p className="text-sm text-gray-600">{employee.startDate}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'clock' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Clock-In History</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Clock In</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Clock Out</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Total Hours</th>
                      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {clockHistory.map((record, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">{record.clockIn}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">{record.clockOut}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">{record.total}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'payroll' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Payroll History</h3>
              <div className="space-y-4">
                {payrollHistory.map((record, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-gray-900">{record.period}</h4>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">View Details</button>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-3">
                      <div>
                        <p className="text-sm text-gray-500">Gross Pay</p>
                        <p className="font-medium text-gray-900">{record.gross}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Deductions</p>
                        <p className="font-medium text-gray-900">{record.deductions}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Net Pay</p>
                        <p className="font-bold text-green-600">{record.net}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Documents</h3>
              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-5 h-5 text-gray-400" />
                      <div>
                        <p className="font-medium text-gray-900">{doc.name}</p>
                        <p className="text-sm text-gray-500">{doc.type} • {doc.size} • {doc.date}</p>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 text-sm">Download</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;