import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {

  axios.defaults.baseURL = 'http://localhost:8080';

  function sendLoginRequest() {
    console.log("WORK")
  }

  return (
    <div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password" />
      </div>
      <div>
        <button id="submit" type="button" onClick={() => sendLoginRequest()}>
          Login
        </button>
      </div>
    </div>
  );
}


export default Login;