import React from 'react';
import axios from 'axios';
import './App.css'
import TotalBalanceComponent from './components/totalBalance';
import TotalExpenseComponent from './components/TotalExpense';
import TotalIncomeComponent from './components/TotalIncome';
import TotalSavingComponent from './components/TotalSavings';
import TransactionsTable from './components/Transactions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chart from './Chart'
import DoughnutChart from './DoughnutChart'



function App() {

  axios.defaults.baseURL = 'localhost:8080';

  //const [message, setMessage] = useState("Hoooi");

  
  //axios.put('http://localhost:8080/message').then(response => {
  //  console.log('resp', response);
   // console.log(response.data);
   // setMessage(response.data)
  //})
      

  return (
    <div>
      <div className='logo'>
        e.
      </div>
      <div className='greeting'>
        <p>Hello Name, <br></br>
        Welcome back!
        </p>
      </div>
      <div className='data_box'>
      <TotalBalanceComponent />
      <TotalExpenseComponent />
      <TotalIncomeComponent />
      <TotalSavingComponent />
      <TransactionsTable />
      <div>
      <Chart />
      </div>
      <div>
      <DoughnutChart />
      </div>
      </div>
    </div>
  );
}

export default App;
