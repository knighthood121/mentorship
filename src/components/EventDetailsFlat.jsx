// import Button from "../components/Button";
// import Header from "../components/Header";

export default function EventDetailsFlat({ time, day, date, title }) {

    const styles = {
        big_text: {
            margin: "0",
            color: "#37352F",
            fontFamily: "Poppins",
            fontSize: "32px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "114%",
            letterSpacing: "-0.333px"
        },

        medium_text: {
            margin: "0",
            color: "#37352F",
            fontFamily: "Poppins",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
            letterSpacing: "-0.333px"
        },
    }
    return (
        <div>
            {/* <Header text={"Event Details"} /> */}
            <p style={styles.big_text}>{title}</p>

            <div style={{ margin: "1.5em 0" }}>
                <p style={styles.medium_text}>{time}</p>

                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <p style={styles.medium_text}>{day}</p>
                    <p style={styles.medium_text}>{date}</p>
                </div>
            </div>
        </div>
    )
}