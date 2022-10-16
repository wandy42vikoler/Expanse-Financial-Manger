import './index.css'
import React from 'react';
import Sidebar from './components/Sidebar';
import HomeDashboard from './Pages/home';
import SavingsPage from './Pages/Savings';
import LeaderboardPage from './Pages/Leaderboard';
import Portfolio from './Pages/Portfolio';
import Login from './Security/Login';
import Register from './Security/Register';
import Layout from './Security/Components/Layout';
import Missing from './Security/Components/Missing';
import Unauthorized from './Security/Components/Unauthorized';
import RequireAuth from './Security/Components/requireAuth';
import { Routes, Route } from 'react-router-dom';

import { AppStateProvider } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

const ROLES = {
  'User': 2001,
  'Admin': 5150
}



function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/home" element={<HomeDashboard />} />
        </Route>
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
