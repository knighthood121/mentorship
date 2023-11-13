import Button from "./Button"

export default function EventCard({time, day, date, title, type}) {

    const styles = {
        card: {
            margin: "2em 0",
            display: "flex",
            padding: "1em",
            borderRadius: "18px",
            background: "var(--main-bg-color)",
            boxShadow: "-11px -11px 22px 0px var(--light-shadow), 11px 11px 22px 0px var(--dark-shadow)",
        },

        partition: {
            flexGrow: 1,
            flexBasis: 0,
            flexShrink: 0,

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },

        time: {
            margin: "0 0 1em 0",
            color: "var(--text-color-dark)",
            fontFamily: "Poppins",
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "-0.333px",
        },

        day: {
            margin: "0",
            color: "var(--text-color-dark)",
            fontFamily: "Poppins",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "-0.333px",
        },
        title: {
            margin: "0",
            color: "var(--text-color-dark)",
            fontFamily: "Poppins",
            textAlign: "right",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "-0.333px",
        },

        date: {
            margin: "0",
            color: "var(--text-color-light)",
            fontFamily: "Poppins",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
            letterSpacing: "-0.333px",
        },

        // button: {
        //     margin: "0",
        //     padding: "0.25rem 1.5rem",
        //     borderRadius: "9px",
        //     background: "#37352F",
        //     boxShadow: "5px 5px 5px 0px #161513 inset, -5px -5px 5px 0px #58554B inset",
        //     width: "fit-content",

        //     border: "none",
        //     color: "#E0E0E0",
        //     fontFamily: "Poppins",
        //     fontSize: "18px",
        //     fontStyle: "normal",
        //     fontWeight: 400,
        //     lineHeight: "normal",
        //     letterSpacing: "-0.333px",
        // },

        line: {
            width: "10px",
            margin: "0em 1em",
            borderRadius: "100px",
            boxShadow: "2px 2px 4px 0px #BEBEBE inset, -2px -2px 4px 0px #FFF inset",
        }
    }
    return (
        <div style={styles.card}>
            <div style={styles.partition}>
                <p style={styles.time}>{time}</p>

                <div>
                    <p style={styles.day}>{day}</p>
                    <p style={styles.date}>{date}</p>

                    {
                        type == "pending" 
                        ? <Button text={"View"} type={"dark"} size={"small"} path={"/eventdetails"} />
                        : <></>
                    }
                </div>
            </div>

            <div style={styles.line}></div>

            <div style={{ ...styles.partition, alignItems: "flex-end" }}>
                <p style={styles.title}>{title}</p>

                {
                    type == "pending"
                        ? <Button text={"History"} type={"dark"} size={"small"} path={"/history"} />
                        : <Button text={"Documents"} type={"dark"} size={"small"} path={"/docs"} />
                }
                
            </div>

        </div>
    )
}