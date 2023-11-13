import React from 'react'
import "../styling/profile.css"

function Profile({logo, person}) {
  return (
      <div className='profile'>
         <div className="p">
          <p>Profile</p>
          <img src={logo} alt="" />
         </div>
         <div className="pcontainer">
         <img src={person} alt="" />
         <p className='pro'>Chirag</p>
         <p>Blockchain | AI expert</p>
         <p>Wipro.inc</p>
         </div>
         <div className="list">
          <div className="list1"><a href="/downloads">Downloads</a></div>
          <div className="list1"><a href="/edit-profile">Edit Profile</a></div>
          <div className="list1"><a href="/schedule-meet">Schedule Meet</a></div>
          <div className="list1"><a href="/log-out">Log Out</a></div>
         </div>
      </div>
  )
}

export default Profile