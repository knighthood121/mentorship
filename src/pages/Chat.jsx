// import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import profile_image from "../assets/person.jpeg";
import arrow from "../assets/arrow.svg";

function ChatBox({ text, profile_image, type }) {
  const styles = {
    profile_image: {
      height: "45px",
      borderRadius: "10px",
    },

    text: {
      padding: '1em',
      margin: "0",
      borderRadius: type == "sent" ? "18px 18px 0px 18px" : "18px 18px 18px 0px",
      background: "#E0E0E0",
      boxShadow: "-5px -5px 10px 0px #FFF inset, 5px 5px 10px 0px #BEBEBE inset",
    },

    div: {
      display: "flex",
      justifyContent: type == "sent" ? "end" : "start",
      alignItems: "end",
      gap: '0.75em',
      margin: "0.75em 1em 0.75em 0em"
    }
  }

  return (
    <div style={styles.div}>
      {
        type == "sent"
          ? <>
            <p style={styles.text}>{text}</p>
            <img style={styles.profile_image} src={profile_image} />
          </>

          : <>
            <img style={styles.profile_image} src={profile_image} />
            <p style={styles.text}>{text}</p>
          </>
      }
    </div>
  )
}

export default function Chat() {
  const styles = {
    chat: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
      borderRadius: "18px",
      padding: "1em",
      background: "#E0E0E0",
      boxShadow: "-8px -8px 16px 0px #FFF, 8px 8px 16px 0px #BEBEBE",
    },

    input: {
      color: "#5B574E",
      verticalAlign: "middle",
      background: "var(--main-bg-color)",
      fontFamily: "Poppins",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "normal",
      border: "none",
      outline: "none",
    }
  }

  var dummyChat = [
    "I just gave swt 16 DBMS they are so many  mistakes in questions even solution are not explained properly",
    "Totally Agreee this has been going on since DBMS. Evryone needs to understand the effort sit puts in and appreciate it! Studetns as well as sir’s time is very precious stop wasting it god dawn it",
    "Totally Agreee this has been going on since DBMS. Evryone needs to understand the effort sit puts in and appreciate it!",
    "Totally Agreee this has been going on since DBMS. Evryone needs to understand the effort sit puts in and appreciate it!",
    "Totally Agreee this has been going on since DBMS. Evryone needs to understand the effort sit puts in and appreciate it!",
    "Totally Agreee this has been going on since DBMS. Evryone needs to understand the effort sit puts in and appreciate it!",
    "Tomorrow sir class is cancelled we all pray for sir and her family "
  ]
  const [history, setHistory] = useState(dummyChat)
  const [chatInput, setChatInput] = useState("")

  function addChat(text) {
    setHistory((prev) => {
      return [
        ...prev,
        text
      ]
    })

    setChatInput("")
  }

  return (

    <div style={{ padding: '1em', height: "70vh" }}>
      <Header text={"Chat"} />
      <div style={styles.chat}>
        <div style={{ height: "92%", overflowY: 'scroll' }}>
          {/* <ChatBox text={"chat"} profile_image={profile_image} type={'sent'} /> */}
          {
            history.map((chat, index) => {
              return <ChatBox key={index} text={chat} profile_image={profile_image} type={"recieved"} />
            })
          }
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <input style={styles.input} placeholder="Type a message" value={chatInput} onChange={(event) => { setChatInput(event.target.value) }} />
          <div onClick={() => { addChat(chatInput) }}>
            <img src={arrow} alt="" />
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

// export default Chat;
// homepage, history, login, eventdetails