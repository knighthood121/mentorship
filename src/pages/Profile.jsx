// import React from 'react'
// import "../styling/profile.css"
import Header from '../components/Header'
import Button from '../components/Button'
import profile_image from "../assets/person.jpeg"
// import perso from "../assets/chat-icon.svg"

function Profile({ logo, person }) {
  const styles = {
    profile_div: {
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      padding: "2em",
      marginBottom: "2em",

      borderRadius: "18px",
      background: "#E0E0E0",
      boxShadow: "-8px -8px 16px 0px #FFF, 8px 8px 16px 0px #BEBEBE"
    },
    profile_image: {
      height: "180px",
      borderRadius: "10px",
    },

    name: {
      margin: "0",
      color: "#37352F",
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "28px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    },

    text: {
      margin: "0",
      color: "#5B574E",
      textAlign: "center",
      fontFamily: "Poppins",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
    }
  }
  return (
    <div style={{padding: "1em"}}>
      <Header text={'Profile'} />

      <div style={styles.profile_div}>
        <img style={styles.profile_image} src={profile_image} />
        <p style={styles.name}>Chirag</p>
        <p style={styles.text}>Blockchain | AI expert</p>
        <p style={styles.text}>Wipro.inc</p>
      </div>

      <div style={{display: "flex", flexDirection: "column", gap: "1em"}}>
        <Button text={"Downloads"} type="light" size="large" path="/downloads"/>
        <Button text={"Edit Profile"} type="light" size="large" path="/editprofile"/>
        <Button text={"Schedule Meet"} type="light" size="large" path="/schedulemeet"/>
        <Button text={"Log Out"} type="light" size="large" path="/"/>
      </div>
    </div>
  )
}

export default Profile