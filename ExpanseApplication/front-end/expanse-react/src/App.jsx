import React, {useState} from 'react';
import axios from 'axios';
import './App.css'
import TotalBalanceComponent from './components/totalBalance';
import TotalExpenseComponent from './components/TotalExpense';
import TotalIncomeComponent from './components/TotalIncome';
import TotalSavingComponent from './components/TotalSavings';
import TransactionsTable from './components/Transactions';
import ActivityComponent from './components/categoryExpensePie';
import LeaderboardComponent from './components/leaderboard';
import ChartsComponent from './components/charts';

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  axios.defaults.baseURL = 'localhost:8080';

  const [message, setMessage] = useState("Nie Wok");

  axios.put('http://localhost:8080/message').then(response => {   //include useEffect for fetching to not ending in a loop
    console.log('resp', response);
    console.log(response.data);
    setMessage(response.data)
    console.log("test", response.data);
  })


      

  return (
    <div>
      <div className='logo'>
        e.
      </div>
      <div className='greeting'>
        <p>Hello {message}, <br></br>
        Welcome back!
        </p>
      </div>
      <div className='data_box'>
        <TotalBalanceComponent />
        <TotalExpenseComponent />
        <TotalIncomeComponent />
        <TotalSavingComponent />
        <TransactionsTable />
        <ActivityComponent />
        <LeaderboardComponent/>
        <ChartsComponent/>
      </div>
    </div>
  );
}

export default App;
