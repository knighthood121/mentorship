import React from 'react'
import "../styling/home.css"
import Header from '../components/Header'
import EventCard from '../components/EventCard'
import ProfileCard from '../components/ProfileCard'

function Home() {

  const styles = {
    text: {
      margin: "0",
      padding: "0 0.5em",
      color: "var(--text-color-dark)",
      fontFamily: "Poppins",
      fontSize: "1.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "normal",
      letterSpacing: "-0.333px",
    },
  }

  return (
    <div style={{ padding: "1em" }}>
      <Header text={"Home"} />
      <EventCard time="12:00 to 1:00" day="Friday" date="23 oct 2023" title="Blockchain & AI in Digital Marketing" type="pending"/>
      <ProfileCard name="Chirag" expertise={['Blockchain', 'AI']} company="Wipro.inc" />
      <p style={styles.text}>Attendees</p>
      <ProfileCard name="Kapil" company="BTech CSE" />
      <ProfileCard name="Govinda" company="BTech CSE" />
      <ProfileCard name="Mansi" company="BBA DM" />
    </div>
  )
}

export default Home