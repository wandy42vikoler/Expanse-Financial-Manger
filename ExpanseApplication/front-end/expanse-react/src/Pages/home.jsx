import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TotalBalanceComponent from '../components/totalBalance';
import TotalExpenseComponent from '../components/TotalExpense';
import TotalIncomeComponent from '../components/TotalIncome';
import TotalSavingComponent from '../components/TotalSavings';
import TransactionsTable from '../components/Transactions';
import ActivityComponent from '../components/categoryExpensePie';
import LeaderboardComponent from '../components/leaderboard';
import ChartsComponent from '../components/charts';


function HomeDashboard() {

    axios.defaults.baseURL = 'http://localhost:8080';
  
    const [message, setMessage] = useState("Nie Wok");
    
    useEffect(() =>{
        axios.get('/user')
            .then(response => {
                setMessage(response.data)
            })
            .catch(error =>{
                console.log(error)
            })
    })
  
    document.body.classList.add('body')
  
        
  
    return (
      <>
      <div className='greeting'>
        <p>Welcome back,<br></br>
        {message} !
        </p>
      </div>
        <TotalBalanceComponent />
        <TotalBalanceComponent />
        <TotalExpenseComponent />
        <TotalIncomeComponent />
        <TotalSavingComponent />
        <TransactionsTable />
        <ActivityComponent />
        <LeaderboardComponent/>
        <ChartsComponent/>
      </>
    );
  }
  
  export default HomeDashboard;