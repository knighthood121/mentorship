// import React from 'react'
// import "../styling/header.css";
import home from "../assets/home-icon.svg";
import chats from "../assets/chat-icon.svg";
import profile from "../assets/profile-icon.svg";
import { Link } from "react-router-dom";

function Navbar() {

  const styles = {
    div: {
      display: "flex",
      padding: "0.5em",
      justifyContent: "space-evenly",
      borderRadius: "15px",
      background: "#E0E0E0",
      boxShadow: "5px 5px 10px 0px #BEBEBE, -5px -5px 10px 0px #FFF",

      position: "fixed",
      bottom: "1em",
      left: "1em",
      right: "1em"

    }
  }
  return (
    <div style={styles.div}>

      <Link to="/home">
          <img src={home} alt="" />
      </Link>

      <Link to="/chat">
          <img src={chats} alt="" />
      </Link>

      <Link to="/profile">
          <img src={profile} alt="" />
      </Link>
    </div>
  )
}

export default Navbar;