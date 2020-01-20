import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="main">         
          <div class="warrap">
            <p className="login">Login</p>
            <p className="sign-in">Sign In to your account</p>
            <div className="input-group">
              <img src="./user.png"></img>
              <input placeholder="Username" autocomplete="username" type="text" class="form-control" />
            </div>
            <div className="input-group">
              <img src="./password.png"></img>
              <input placeholder="password" autocomplete="username" type="text" class="form-control" />
            </div>
            <div className="row-end">
              <button>Login</button>
              <a href="#">Forgot password?</a>
            </div>
          </div>
        </div>    
      </header>
    </div>
  );
}

export default App;
