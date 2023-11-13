import Button from "../components/Button";
import Header from "../components/Header";
import EventDetailsFlat from "../components/EventDetailsFlat";

export default function EventDetails() {

    const styles = {
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
            <EventDetailsFlat time="12:00 to 1:00" day="Friday" date="23 oct 2023" title="Blockchain and AI in Digital Marketing"/>

            <p style={styles.small_text}>Wolfram language is a advanced mathematical programming language which is used in academic and research fields for complex calculations and analysis</p>

            <div style={{display: "flex", gap: "1em"}}>
                <Button text={"Join"} type={"light"} size={"big"} />
                <Button text={"Cancel"} type={"dark"} size={"big"} />
            </div>

        </div>
    )
}