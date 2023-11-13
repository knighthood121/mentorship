import React from 'react'
import "../styling/home.css"

function Home({person,logo,arow}) {

  return (
    <div className='home'>
    <div className="n">
      <p>Home</p>
      <div className="img">
      <img src={logo} alt="" />
      </div>
    </div>
    <div className="container">
      <div className="one">
        <p className='one1'>12:00-1:00</p>
        <p className='one2'>Friday</p>
        <p className='one3'>23 oct 2023</p>
        <button className='button1'>Join</button>
      </div>
      <div className="two"></div>
      <div className="three">
        <p className='three1'>Blockchian &</p>
        <p className='three2 '>AI in Digital</p>
        <p className='three3'>Marketing</p>
        <button className='button2'>History</button>
      </div>
      
    </div>
    <div className="container1">
      <div className='nam'>
      <img src={person} alt="" />
       <p> Kapil Arya</p>
        </div>
      <p className='in'>Blockchain | AI expert <br/> Wipro.inc
      </p>
      <div className="erow">
      {/* <img  src={arow} alt="" />
      <img  src={arow} alt="" /> */}
      </div>
    </div>
    <div className="container2">
      <div className='nam'>
      <img src={person} alt="" />
       <p> chirag</p>
        </div>
      <p className='in'>B.Tech CSE</p>
    </div>
    <div className="container3">
      <div className='nam'>
      <img src={person} alt="" />
       <p> Govinda</p>
        </div>
      <p className='in'>B.Tech CSE</p>
    </div>
    </div>
  )
}

export default Home