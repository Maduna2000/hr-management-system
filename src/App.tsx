import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ClockIn from './pages/ClockIn';
import Timesheet from './pages/Timesheet';
import Payroll from './pages/Payroll';
import EmployeeProfile from './pages/EmployeeProfile';
import Forms from './pages/Forms';
import Contracts from './pages/Contracts';
import Skills from './pages/Skills';
import Tasks from './pages/Tasks';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clock-in" element={<ClockIn />} />
          <Route path="/timesheet" element={<Timesheet />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/profile" element={<EmployeeProfile />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;