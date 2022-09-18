import './index.css'
import React from 'react';
import Sidebar from './components/Sidebar';
import HomeDashboard from './Pages/home';

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  return (
    <>
      <Sidebar/>
      <HomeDashboard/>
    </>
  );
}

export default App;
