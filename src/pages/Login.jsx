// import React from 'react'
// import "../styling/login.css"
// import ellipse1 from "../assets/Ellipse 1upper.png"
// import ellipse2 from "../assets/Ellipse 2lower.png"
// import logo from "../assets/logo.svg";

import Header from '../components/Header';
import InputField from '../components/InputField';
import Button from '../components/Button';

function Login({ onClick }) {

  function handleClick(){
    onClick(true)
  }

  return (
    <div style={{ padding: "1em", display: "flex", flexDirection: "column" }}>
      <Header text={'Login'} />
      <InputField title={"Email"} placeholder={"enter your email"} />
      <InputField title={"Password"} placeholder={"something secret"} type={"password"} />
      <Button text={"Login"} type={"light"} size={"big"} path={"/home"} onClick={handleClick} />
    </div>
  )
}

export default Login
