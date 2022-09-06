import React, {useState} from 'react';
import axios from 'axios';
import './App.css'





function App() {

  axios.defaults.baseURL = 'localhost:8080';

  const [message, setMessage] = useState(null);

  
  axios.get('http://localhost:8080/message').then(response => {
    console.log('resp', response);
    console.log(response.data);
    setMessage(response.data)
  })
      

  return (
    <div className="App">
      <h1>Message</h1>
      <h1 class="backend">{message}</h1>
    </div>
  );
}

export default App;
