import React from 'react';
import { BookOpen, Award, TrendingUp, Target, Star, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Technical Skills',
      skills: [
        { name: 'JavaScript', level: 85, employees: 23, trend: 'up' },
        { name: 'React', level: 78, employees: 18, trend: 'up' },
        { name: 'Python', level: 72, employees: 15, trend: 'stable' },
        { name: 'Node.js', level: 68, employees: 12, trend: 'up' },
        { name: 'SQL', level: 81, employees: 28, trend: 'stable' },
      ]
    },
    {
      name: 'Soft Skills',
      skills: [
        { name: 'Communication', level: 92, employees: 45, trend: 'up' },
        { name: 'Leadership', level: 76, employees: 22, trend: 'up' },
        { name: 'Problem Solving', level: 88, employees: 38, trend: 'stable' },
        { name: 'Teamwork', level: 94, employees: 52, trend: 'up' },
        { name: 'Time Management', level: 79, employees: 35, trend: 'stable' },
      ]
    }
  ];

  const topPerformers = [
    { name: 'Sarah Johnson', department: 'HR', skillsCount: 8, avgScore: 94 },
    { name: 'John Smith', department: 'Engineering', skillsCount: 12, avgScore: 91 },
    { name: 'Mike Chen', department: 'Marketing', skillsCount: 7, avgScore: 89 },
    { name: 'Emma Wilson', department: 'Sales', skillsCount: 9, avgScore: 87 },
  ];

  const skillGaps = [
    { skill: 'Cloud Computing', currentLevel: 45, targetLevel: 80, priority: 'high' },
    { skill: 'Data Analytics', currentLevel: 52, targetLevel: 75, priority: 'medium' },
    { skill: 'Project Management', currentLevel: 63, targetLevel: 85, priority: 'high' },
    { skill: 'Machine Learning', currentLevel: 28, targetLevel: 70, priority: 'low' },
  ];

  const getLevelColor = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-500 rotate-180" />;
      default: return <div className="w-4 h-4 bg-gray-300 rounded-full" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Skills & Competencies</h1>
          <p className="text-gray-600 mt-1">Track and develop employee skills across the organization</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <BookOpen className="w-4 h-4 mr-2" />
          Add Skill Assessment
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Skills Tracked</p>
              <p className="text-2xl font-bold text-gray-900">47</p>
            </div>
            <BookOpen className="w-8 h-8 text-blue-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Skill Level</p>
              <p className="text-2xl font-bold text-gray-900">78%</p>
            </div>
            <Target className="w-8 h-8 text-green-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Skill Gaps</p>
              <p className="text-2xl font-bold text-gray-900">12</p>
            </div>
            <Award className="w-8 h-8 text-orange-500" />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Certifications</p>
              <p className="text-2xl font-bold text-gray-900">89</p>
            </div>
            <Star className="w-8 h-8 text-purple-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Skills by Category */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Skills by Category</h2>
          <div className="space-y-8">
            {skillCategories.map((category) => (
              <div key={category.name}>
                <h3 className="text-md font-medium text-gray-700 mb-4">{category.name}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                          <div className="flex items-center space-x-2">
                            {getTrendIcon(skill.trend)}
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{skill.employees} employees</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Top Skill Performers</h2>
          <div className="space-y-4">
            {topPerformers.map((performer, index) => (
              <div key={performer.name} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-center w-8 h-8 bg-yellow-100 text-yellow-800 rounded-full font-bold text-sm">
                  {index + 1}
                </div>
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600">
                    {performer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{performer.name}</h3>
                  <p className="text-sm text-gray-500">{performer.department}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">{performer.avgScore}%</p>
                  <p className="text-xs text-gray-500">{performer.skillsCount} skills</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skill Gaps Analysis */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Skill Gap Analysis</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skill</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Current Level</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Target Level</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Gap</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {skillGaps.map((gap, index) => {
                const gapPercentage = gap.targetLevel - gap.currentLevel;
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{gap.skill}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">{gap.currentLevel}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-900">{gap.targetLevel}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium text-red-600">-{gapPercentage}%</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(gap.priority)}`}>
                        {gap.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(gap.currentLevel / gap.targetLevel) * 100}%` }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Skills;