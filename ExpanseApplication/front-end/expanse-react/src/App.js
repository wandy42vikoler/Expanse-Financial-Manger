import React, {useState} from 'react';
import axios from 'axios';
import './App.css'
import TotalBalanceComponent from './components/totalBalance';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {

  axios.defaults.baseURL = 'localhost:8080';

  const [message, setMessage] = useState("Hoooi");

  
  axios.put('http://localhost:8080/message').then(response => {
    console.log('resp', response);
    console.log(response.data);
    setMessage(response.data)
    console.log("test", response.data);
  })



  console.log(message, "hhoho");
      

  return (
    <div className="App">
      <h1>Message</h1>
      <h1 className="backend">{message}</h1>
      <div className='data_box'>
      <TotalBalanceComponent />
      </div>
    </div>
  );
}

export default App;
