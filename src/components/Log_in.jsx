import React from 'react'
import "../styling/login.css"
// import ellipse1 from "../assets/Ellipse 1upper.png"
// import ellipse2 from "../assets/Ellipse 2lower.png"
import logo from "../assets/logo.svg";
function Log_in() {
  return (
    <div className='log'>
         <div className="panel">
          <img src={logo} />
          <h1>Login</h1>
        <input placeholder="Email" />
        <input placeholder="Password" type='password' />
         <button>Login</button>
         </div>
    </div>
  )
}

export default Log_in
