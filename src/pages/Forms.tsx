import React, { useState } from 'react';
import { Upload, FileText, Download, Eye, Plus, Search } from 'lucide-react';

const Forms = () => {
  const [activeTab, setActiveTab] = useState('templates');

  const formTemplates = [
    { id: 1, name: 'Employee Onboarding Form', category: 'HR', downloads: 45, lastUpdated: '2024-12-01' },
    { id: 2, name: 'Time Off Request', category: 'Leave', downloads: 128, lastUpdated: '2024-11-28' },
    { id: 3, name: 'Performance Review Form', category: 'Performance', downloads: 67, lastUpdated: '2024-11-25' },
    { id: 4, name: 'Expense Reimbursement', category: 'Finance', downloads: 89, lastUpdated: '2024-11-20' },
    { id: 5, name: 'Training Request Form', category: 'Development', downloads: 34, lastUpdated: '2024-11-15' },
  ];

  const submittedForms = [
    { id: 1, employee: 'John Smith', form: 'Time Off Request', submitted: '2024-12-18', status: 'pending' },
    { id: 2, employee: 'Sarah Johnson', form: 'Expense Reimbursement', submitted: '2024-12-17', status: 'approved' },
    { id: 3, employee: 'Mike Chen', form: 'Training Request', submitted: '2024-12-16', status: 'pending' },
    { id: 4, employee: 'Emma Wilson', form: 'Performance Review', submitted: '2024-12-15', status: 'completed' },
  ];

  const documents = [
    { id: 1, name: 'Employee Handbook 2024', type: 'Policy', size: '2.4 MB', uploaded: '2024-01-15' },
    { id: 2, name: 'Safety Guidelines', type: 'Policy', size: '1.2 MB', uploaded: '2024-01-10' },
    { id: 3, name: 'Benefits Overview', type: 'Benefits', size: '890 KB', uploaded: '2024-01-05' },
    { id: 4, name: 'Code of Conduct', type: 'Policy', size: '756 KB', uploaded: '2024-01-01' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const tabs = [
    { id: 'templates', name: 'Form Templates' },
    { id: 'submitted', name: 'Submitted Forms' },
    { id: 'documents', name: 'Documents' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Forms & Documents</h1>
          <p className="text-gray-600 mt-1">Manage employee forms, documents, and policies</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-4 h-4 mr-2" />
            New Form
          </button>
          <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search forms and documents..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">All Categories</option>
            <option value="hr">HR</option>
            <option value="leave">Leave</option>
            <option value="performance">Performance</option>
            <option value="finance">Finance</option>
            <option value="development">Development</option>
          </select>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'templates' && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Available Form Templates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {formTemplates.map((template) => (
                  <div key={template.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900 mb-2">{template.name}</h4>
                        <p className="text-sm text-gray-500 mb-3">{template.category}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{template.downloads} downloads</span>
                          <span>Updated {template.lastUpdated}</span>
                        </div>
                      </div>
                      <FileText className="w-8 h-8 text-blue-500 ml-3" />
                    </div>
                    <div className="flex space-x-2 mt-4">
                      <button className="flex-1 flex items-center justify-center px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                      <button className="flex items-center justify-center px-3 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'submitted' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recently Submitted Forms</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Form Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {submittedForms.map((form) => (
                      <tr key={form.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{form.employee}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{form.form}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{form.submitted}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(form.status)}`}>
                            {form.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <Download className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Documents</h3>
              <div className="space-y-3">
                {documents.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-blue-500" />
                      <div>
                        <h4 className="font-medium text-gray-900">{doc.name}</h4>
                        <p className="text-sm text-gray-500">{doc.type} • {doc.size} • Uploaded {doc.uploaded}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
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

export default Forms;