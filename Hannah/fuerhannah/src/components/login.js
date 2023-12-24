import React, { useState } from 'react';
import Hannah from "../images/Hannah.jpg"
import  "./login.css"


function Login({setScene}) {
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false)
    const [error, setError] = useState("")
    const [show, setShow] = useState(false);


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if(password == "223"){
        setScene("intro")
    } else {
        setError("Falsche passwort")
    }
  };
  return (
    
    <div className='login-container'>
        <div className='profile'>
            <h3>Bist du Hannah?</h3>
            <img
            src={Hannah}
            width="150px"
            height="150px"/>
        </div>
        <div className='form'>
            <h4>Passwort:</h4>
            <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <div className='login-button'>
            <button onClick={handleLogin}>Login</button>
            {error && <h4>{error}</h4>}
        </div>
        
    </div>
  )
}

export default Login