import Button from "../components/Button";
import Header from "../components/Header";

export default function EventDetails() {

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

        small_text: {
            margin: "1em 0",
            color: "#5B574E",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "87%",
        }
    }
    return (
        <div style={{ padding: "1em" }}>
            <Header text={"Event Details"} />
            <p style={styles.big_text}>Blockchain and AI in Digital Marketing</p>

            <div style={{margin: "1.5em 0"}}>
            <p style={styles.medium_text}>12:00 to 1:00</p>

            <div style={{display: "flex", justifyContent: "space-between"}}>
                <p style={styles.medium_text}>Friday</p>
                <p style={styles.medium_text}>23 oct 2023</p>
            </div>

            </div>

            <p style={styles.small_text}>Wolfram language is a advanced mathematical programming language which is used in academic and research fields for complex calculations and analysis</p>

            <div style={{display: "flex", gap: "1em"}}>
                <Button text={"Join"} type={"light"} size={"big"} />
                <Button text={"Cancel"} type={"dark"} size={"big"} />
            </div>

        </div>
    )
}