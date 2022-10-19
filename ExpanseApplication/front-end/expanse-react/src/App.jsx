import './index.css'
import React from 'react';
import Sidebar from './components/Sidebar';
import HomeDashboard from './Pages/home';
import SavingsPage from './Pages/Savings';
import LeaderboardPage from './Pages/Leaderboard';
import Portfolio from './Pages/Portfolio';
import Login from './Security/Login';
import Register from './Security/Register';

import { AppStateProvider } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';



function App() {

  return (
    <>
      <AppStateProvider>
        <Router>
          <div className='content'>
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </AppStateProvider>
    </>
  );
}

export default App;
