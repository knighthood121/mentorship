import React from 'react'
import "../styling/header.css";
import home from "../assets/home1.svg";
import chats from "../assets/chats1.svg";
import profile from "../assets/profile1.svg";

function Header() {
  return (
    <div className='header'>
        <div className="paddel">
        <div className="h">
            <a href='/home'><img src={home} alt="" /></a>
            </div>
            <div className="m">
             <a href='/chats'><img src={chats} alt="" /></a>
            </div>
            <div className="p">
            <a href='/profile'><img src={profile} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Header